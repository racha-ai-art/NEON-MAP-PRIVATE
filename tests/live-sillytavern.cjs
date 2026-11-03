/* Runs against an actual local SillyTavern checkout. No fake getContext or event bus. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),{spawn}=require('node:child_process');
const {chromium}=require('playwright');
const st=process.env.SILLYTAVERN_PATH;if(!st)throw new Error('Set SILLYTAVERN_PATH to an installed SillyTavern checkout.');
const files=['manifest.json','bootstrap.js','index.js','gm-model.js','gm-render.js','gm-ui.js','style.css'];
const dest=path.join(st,'public/scripts/extensions/third-party/neon-map');fs.mkdirSync(dest,{recursive:true});for(const f of files)fs.copyFileSync(path.join(__dirname,'..',f),path.join(dest,f));
const out=process.env.TEST_SCREENSHOT_DIR||path.join(st,'neon-qa');fs.mkdirSync(out,{recursive:true});
const fd=fs.openSync(path.join(out,'server.log'),'w');
const server=spawn(process.execPath,['server.js','--port','8137','--browserLaunchEnabled','false'],{cwd:st,stdio:['ignore',fd,fd]});
const results=[],extensionErrors=[],hostErrors=[];
let browser;
const check=async(name,fn)=>{console.log('START '+name);await fn();results.push(name);console.log('PASS '+name);};
async function frame(p){await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}
async function startup(p,fresh=false){
 await p.goto('http://127.0.0.1:8137/');
 await p.waitForFunction(()=>window.__NEON_MAP_READY===true,{},{timeout:60000});
 await p.waitForFunction(()=>SillyTavern.getContext().characters.length>0||Array.from(document.querySelectorAll('.popup-input')).some(x=>x.getBoundingClientRect().height>0),{},{timeout:30000});
 if(await p.locator('.popup-input:visible').count()){await p.locator('.popup-input:visible').fill('GM Integration Tester');await p.locator('.popup-button-ok:visible').click();}
 await p.waitForFunction(()=>SillyTavern.getContext().characters.length>0,{},{timeout:30000});
 await p.evaluate(()=>SillyTavern.getContext().selectCharacterById(0));
 if(fresh)await p.evaluate(()=>SillyTavern.getContext().executeSlashCommandsWithOptions('/newchat'));
 await p.waitForFunction(()=>SillyTavern.getContext().chatMetadata?.neon_map_v3?.gm?.schema===1,{},{timeout:30000});
}
async function add(p,name){await p.locator('#nm-add-place').click();await p.locator('#nm-edit-name').fill(name);await p.locator('#nm-editor button[type=submit]').click();await frame(p);}
async function enter(p,name){await p.getByRole('button',{name:'สถานที่ '+name,exact:true}).click();await p.locator('#nm-side-content').getByRole('button',{name:/^(เข้าไปดู →|เปิดชั้นนี้)$/}).click();await frame(p);}
async function tab(p,name){await p.locator('#nm-tabs [data-tab='+name+']').click();await frame(p);}
(async()=>{
 try{
  let up=false;for(let i=0;i<150;i++){try{if((await fetch('http://127.0.0.1:8137/')).ok){up=true;break;}}catch{}await new Promise(r=>setTimeout(r,300));}assert.ok(up,'SillyTavern server starts');
  for(const device of [{name:'desktop',width:1440,height:1000,touch:false},{name:'mobile',width:390,height:844,touch:true}]){
  browser=await chromium.launch({headless:true,executablePath:process.env.TEST_CHROMIUM_EXECUTABLE||undefined,args:['--no-sandbox','--no-zygote','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader']});
   const context=await browser.newContext({viewport:{width:device.width,height:device.height},hasTouch:device.touch,isMobile:device.touch});
   const p=await context.newPage();p.on('dialog',d=>d.accept());p.on('pageerror',e=>{/neon-map|gm-ui|gm-model|gm-render/.test(e.stack||'')?extensionErrors.push(e.message):hostErrors.push(e.message);});
   await startup(p,true);await p.locator('#nm-launch').click();await p.locator('#nm-levels [data-level="1"]').click();await p.locator('.nm-place-pin').first().waitFor();
   await check(device.name+': live host loads extension, bound Lorebook and clickable map',async()=>{assert.ok(await p.locator('.nm-place-pin').count()>0);assert.equal(await p.evaluate(()=>SillyTavern.getContext().extensionPrompts.neon_map_gm_awareness?.value||''),'');assert.match(await p.locator('#nm-token-state').innerText(),/0 โทเคน/);});
   await p.locator('#nm-levels [data-level="1"]').click();const name='GM Lab '+device.name+' '+Date.now();
   await check(device.name+': create place, floor and room through actual ST UI',async()=>{await add(p,name);await enter(p,name);await add(p,'1');await enter(p,'ชั้น 1');await add(p,'ห้องทดสอบ GM');await enter(p,'ห้องทดสอบ GM');assert.equal(await p.locator('#nm-title').innerText(),'ห้องทดสอบ GM');});
   await check(device.name+': set both actors and show USER beacon',async()=>{await tab(p,'actors');for(let n=0;n<2;n++)await p.locator('#nm-side-content .nm-section').nth(n).getByRole('button',{name:'ตั้งไว้ที่มุมมองนี้',exact:true}).click();await tab(p,'map');await p.locator('.nm-user-pin').waitFor({state:'visible'});assert.ok(await p.locator('.nm-actor-pin').count()>=2);});
   await check(device.name+': optional room awareness reaches the real prompt API, private notes stay out',async()=>{await tab(p,'places');await p.locator('#nm-room-private').fill('GM_SECRET_DO_NOT_SEND');await p.locator('#nm-room-private').press('Tab');await p.locator('#nm-room-facts').fill('Visible desk and a locked north door.');await p.locator('#nm-room-facts').press('Tab');assert.equal(await p.evaluate(()=>SillyTavern.getContext().extensionPrompts.neon_map_gm_awareness.value),'');await p.locator('#nm-awareness-enabled').check();await p.locator('[data-character=char]').check();const prompt=await p.evaluate(()=>SillyTavern.getContext().extensionPrompts.neon_map_gm_awareness);assert.match(prompt.value,/Visible desk/);assert.ok(!prompt.value.includes('GM_SECRET'));assert.equal(prompt.scan,false);assert.equal(prompt.position,1);await p.locator('#nm-awareness-enabled').uncheck();assert.equal(await p.evaluate(()=>SillyTavern.getContext().extensionPrompts.neon_map_gm_awareness.value),'');});
   await check(device.name+': GM state actually survives server save and a page reload',async()=>{
    const diskInfo=await p.evaluate(()=>{const c=SillyTavern.getContext();return {avatar:c.characters[c.characterId].avatar,chat:c.chatId};});
    const file=path.join(st,'data/default-user/chats',diskInfo.avatar.replace(/\.png$/i,''),diskInfo.chat+'.jsonl');
    let stored=null;for(let n=0;n<100;n++){try{stored=JSON.parse(fs.readFileSync(file,'utf8').split('\n')[0]).chat_metadata.neon_map_v3;if(stored?.gm?.view?.roomId==='ห้องทดสอบ GM'&&Object.values(stored.gm.roomSettings).some(x=>x.privateNote==='GM_SECRET_DO_NOT_SEND'&&!x.enabled))break;}catch{}await new Promise(r=>setTimeout(r,100));}
    assert.equal(stored?.gm?.view?.roomId,'ห้องทดสอบ GM');assert.ok(Object.values(stored.gm.roomSettings).some(x=>x.privateNote==='GM_SECRET_DO_NOT_SEND'&&!x.enabled));
    await p.reload();await startup(p);await p.locator('#nm-launch').click();await p.waitForFunction(()=>document.querySelector('#nm-title')?.textContent==='ห้องทดสอบ GM');assert.ok(await p.locator('.nm-user-pin').isVisible());await tab(p,'places');assert.equal(await p.locator('#nm-room-private').inputValue(),'GM_SECRET_DO_NOT_SEND');assert.equal(await p.locator('#nm-awareness-enabled').isChecked(),false);});
   await tab(p,'map');await p.screenshot({path:path.join(out,'live-'+device.name+'.png')});
   await check(device.name+': X folds, chat input remains usable and MAP reopens',async()=>{await p.locator('#nm-close').click();assert.ok(await p.locator('#nm-launch').isVisible());assert.equal(await p.locator('#nm-panel').isVisible(),false);await p.locator('#send_textarea').fill('Local integration draft, not sent.');assert.match(await p.locator('#send_textarea').inputValue(),/not sent/);await p.locator('#send_textarea').fill('');if(device.touch)await p.locator('#nm-launch').tap();else await p.locator('#nm-launch').click();await p.locator('#nm-panel').waitFor({state:'visible'});});
   if(device.touch)await check('mobile: narrow portrait and landscape retain access to X and map tools',async()=>{for(const v of [{width:320,height:568},{width:568,height:320}]){await p.setViewportSize(v);await frame(p);const box=await p.locator('#nm-close').boundingBox();assert.ok(box.x>=0&&box.y>=0&&box.x+box.width<=v.width+1&&box.y+box.height<=v.height+1);await p.locator('#nm-close').tap();await p.locator('#nm-launch').tap();await p.locator('#nm-panel').waitFor({state:'visible'});}});
   await context.close();await browser.close();
  }
  await check('no unhandled errors originating in NEON MAP on the live host',async()=>assert.deepEqual(extensionErrors,[]));
  const report={sillytavern:JSON.parse(fs.readFileSync(path.join(st,'package.json'),'utf8')).version,browser:browser.version(),passed:results.length,results,unrelatedHostErrors:[...new Set(hostErrors)]};fs.writeFileSync(path.join(out,'live-results.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
 }finally{if(browser)await browser.close();server.kill();}
})().catch(e=>{console.error(e);server.kill();process.exitCode=1;});
