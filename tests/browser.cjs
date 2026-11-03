/* Local browser regression tests. Runs the real extension and CSS in a minimal
 * SillyTavern host fixture; never contacts a model or image provider. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const {chromium}=require('playwright');
const repo=path.resolve(__dirname,'..');
const results=[];
const errors=[];
const server=http.createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost');
 if(url.pathname==='/'){
  res.setHeader('Content-Type','text/html; charset=utf-8');
  res.end(`<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>
   body{margin:0;background:#28323b;color:white;font:16px sans-serif}#sheld{position:fixed;inset:0;z-index:200000;transform:translateZ(0);background:#28323b}#extensions_settings{display:none}#host-input{position:fixed;bottom:5px;left:10px}
   button{font:inherit}#sheld button{min-width:50px;min-height:40px}
   </style></head><body><div id="sheld"><button id="host-button">CHAT</button><input id="host-input" aria-label="Chat input"></div><div id="extensions_settings"></div><script>
   window.eventBus={listeners:new Map(),on(type,fn){const list=this.listeners.get(type)||[];list.push(fn);this.listeners.set(type,list);},emit(type,payload){for(const fn of this.listeners.get(type)||[])fn(payload);}};
   window.eventTypes=Object.fromEntries(['CHAT_CHANGED','MESSAGE_RECEIVED','MESSAGE_EDITED','MESSAGE_SWIPED','MESSAGE_DELETED','MESSAGE_UPDATED','WORLDINFO_UPDATED','WORLDINFO_SETTINGS_UPDATED','GENERATION_ENDED'].map(x=>[x,x]));
   window.saved=[];window.bookDelay=0;
   window.makeChat=(id,name='Arun')=>({chatId:id,characterId:0,groupId:null,name1:'User',characters:[{name,description:'A contemporary school campus',data:{extensions:{world:'School'}}}],chatMetadata:{},chat:[{is_user:false,mes:'User and '+name+' arrived.\\n<neon_state>\\nCLOCK|LOC=Building A, Floor 1, Room 101|TIME=10:00\\nNOW|POV=User|POS=User@Building A, Floor 1, Room 101;'+name+'@Building A, Floor 1, Room 101\\n</neon_state>'}],eventSource:eventBus,eventTypes,saveMetadata:async function(){saved.push({id:this.chatId,data:JSON.parse(JSON.stringify(this.chatMetadata))});},loadWorldInfo:async name=>{const delay=window.bookDelay;await new Promise(r=>setTimeout(r,delay));return {entries:{one:{comment:'School campus',content:'A modern school.'}}};},getWorldInfoNames:()=>['School']});
   window.context=makeChat('first');
   window.SillyTavern={getContext:()=>window.context};
   window.switchChat=next=>{context=next;eventBus.emit('CHAT_CHANGED');};
   window.hostClicks=0;document.getElementById('host-button').onclick=()=>window.hostClicks++;
   </script><script type="module" src="/bootstrap.js"></script></body></html>`);
  return;
 }
 if(url.pathname==='/scripts/world-info.js'){
  res.setHeader('Content-Type','text/javascript');res.end('export const world_names=["School"];export const selected_world_info=[];export function getWorldInfoSettings(){return {world_info:{}};}');return;
 }
 const full=path.resolve(repo,'.'+url.pathname);
 if(!full.startsWith(repo+path.sep)||!fs.existsSync(full)){res.writeHead(404);res.end();return;}
 res.setHeader('Content-Type',full.endsWith('.css')?'text/css':full.endsWith('.js')?'text/javascript':'text/plain');
 res.end(fs.readFileSync(full));
});

async function check(name,fn){
 const start=Date.now();
 try{await fn();results.push({name,passed:true,ms:Date.now()-start});console.log('PASS '+name);}
 catch(error){results.push({name,passed:false,error:error.message});throw error;}
}
async function tick(page){await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}
async function loaded(page){await page.waitForFunction(()=>context?.chatMetadata?.neon_map_v3?.turns===1);}
async function open(page){await page.locator('#nm-launch').click();await page.locator('#nm-panel').waitFor({state:'visible'});await tick(page);}
async function folded(page){await page.locator('#nm-close').click();await page.locator('#nm-launch').waitFor({state:'visible'});await tick(page);}
async function inViewport(page,selector){
 const rect=await page.locator(selector).boundingBox();const size=page.viewportSize();
 assert.ok(rect&&rect.width>0&&rect.height>0,selector+' has size');
 assert.ok(rect.x>=0&&rect.y>=0&&rect.x+rect.width<=size.width+1&&rect.y+rect.height<=size.height+1,selector+' fits screen: '+JSON.stringify(rect));
}

(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const origin='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,executablePath:process.env.TEST_CHROMIUM_EXECUTABLE||undefined,args:['--no-sandbox','--disable-dev-shm-usage','--use-gl=angle','--use-angle=swiftshader','--no-zygote']});
 try{
  for(const device of [{name:'desktop',width:1440,height:900,touch:false},{name:'mobile',width:390,height:844,touch:true}]){
   const session=await browser.newContext({viewport:{width:device.width,height:device.height},hasTouch:device.touch,isMobile:device.touch});
   const page=await session.newPage();page.on('pageerror',error=>errors.push(error.message));
   page.on('dialog',dialog=>dialog.accept());
   const remote=[];
   await page.route('**/*',route=>{if(!route.request().url().startsWith(origin)&&!route.request().url().startsWith('data:')){remote.push(route.request().url());return route.abort();}return route.continue();});
   await page.goto(origin);await loaded(page);
   await check(device.name+': one circular launcher, host chat stays clickable',async()=>{
    assert.equal(await page.locator('#nm-launch').count(),1);
    assert.equal(await page.locator('#neon-map-startup-bubble,#neon-map-chat-toggle').count(),0);
    await inViewport(page,'#nm-launch');
    assert.equal(await page.locator('#nm-panel').isVisible(),false);
    assert.equal(await page.evaluate(()=>context.chatMetadata.neon_map_v3.current.roomId),'Room 101');
    const box=await page.locator('#nm-launch').boundingBox();assert.equal(box.width,box.height);
    await page.locator('#host-button').click();assert.equal(await page.evaluate(()=>hostClicks),1);
   });
   await check(device.name+': open and X fold repeat ten times',async()=>{
    for(let n=0;n<10;n++){
     if(device.touch)await page.locator('#nm-launch').tap();else await page.locator('#nm-launch').click();
     await page.locator('#nm-panel').waitFor({state:'visible'});await tick(page);
     assert.equal(await page.locator('#nm-launch').isVisible(),false);await inViewport(page,'#nm-panel');
     if(device.touch)await page.locator('#nm-close').tap();else await folded(page);
     await page.locator('#nm-launch').waitFor({state:'visible'});
     assert.equal(await page.locator('#nm-panel').isVisible(),false);
    }
   });
   await check(device.name+': drag and release does not open MAP; position survives reload',async()=>{
    const box=await page.locator('#nm-launch').boundingBox();
    if(device.touch){
     const cdp=await session.newCDPSession(page);
     await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:box.x+box.width/2,y:box.y+box.height/2}]});
     for(let n=1;n<=12;n++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:box.x+box.width/2+(90-box.x-box.width/2)*n/12,y:box.y+box.height/2+(170-box.y-box.height/2)*n/12}]});
     await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await cdp.detach();
    }else{
     await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.down();
     await page.mouse.move(90,170,{steps:12});await page.mouse.up();
    }await tick(page);
    assert.equal(await page.locator('#nm-panel').isVisible(),false);
    const moved=await page.locator('#nm-launch').boundingBox();assert.ok(moved.x<150&&moved.y<220);
    await page.reload();await loaded(page);
    const restored=await page.locator('#nm-launch').boundingBox();assert.ok(Math.abs(restored.x-moved.x)<=1&&Math.abs(restored.y-moved.y)<=1);
   });
   await check(device.name+': resize window, inspect a place, save pin and expand details',async()=>{
    await open(page);
    const initial=await page.locator('#nm-panel').boundingBox();
    await page.locator('#nm-window-shrink').click();await tick(page);
    const small=await page.locator('#nm-panel').boundingBox();assert.ok(small.height<initial.height);
    await page.locator('#nm-window-expand').click();await tick(page);
    const large=await page.locator('#nm-panel').boundingBox();assert.ok(large.height>small.height);
    if(process.env.TEST_SCREENSHOT_DIR){fs.mkdirSync(process.env.TEST_SCREENSHOT_DIR,{recursive:true});await page.screenshot({path:path.join(process.env.TEST_SCREENSHOT_DIR,device.name+'.png')});}
    await page.locator('#nm-levels [data-level="0"]').click();await tick(page);
    await page.locator('#nm-points button').first().click();
    await page.locator('#nm-place-card').waitFor({state:'visible'});
    await page.locator('#nm-place-pin').click();await tick(page);
    assert.equal(await page.evaluate(()=>context.chatMetadata.neon_map_v3.placePins.length),1);
    await page.locator('#nm-place-expand').click();await page.locator('#nm-place-sheet').waitFor({state:'visible'});
    await page.locator('#nm-inspect-close').click();assert.equal(await page.locator('#nm-place-sheet').isVisible(),false);
    await page.locator('#nm-place-close').click();assert.equal(await page.locator('#nm-place-card').isVisible(),false);
    if(device.touch){await page.locator('#nm-details-toggle').tap();assert.equal(await page.locator('#nm-aside').isVisible(),true);await page.locator('#nm-details-toggle').tap();}
    await folded(page);
   });
   await check(device.name+': startup reload is idempotent and old hiding CSS loses',async()=>{
    await page.evaluate(async()=>{
     const old=document.createElement('style');old.textContent='#neon-map-startup-bubble,#neon-map-chat-toggle,#neon-map-v3 #nm-launch{display:none!important;}';document.head.append(old);
     await import('/bootstrap.js?test-duplicate');await import('/index.js?test-duplicate');
    });
    assert.equal(await page.locator('#nm-launch').count(),1);assert.equal(await page.locator('#nm-panel').count(),1);assert.equal(await page.locator('#nm-launch').isVisible(),true);
    await open(page);await folded(page);
   });
   await check(device.name+': duplicate chat events and fast switches cannot restore old data',async()=>{
    await open(page);
    await page.evaluate(()=>{bookDelay=130;switchChat(makeChat('slow','Old'));eventBus.emit('CHAT_CHANGED');switchChat(makeChat('fast','New'));eventBus.emit('CHAT_CHANGED');});
    await loaded(page);await tick(page);
    assert.equal(await page.evaluate(()=>context.chatMetadata.neon_map_v3.characterName),'New');
    assert.ok(!(await page.locator('#nm-cast').innerText()).includes('Old'));
    await page.evaluate(()=>{bookDelay=0;switchChat({...makeChat('none'),chatId:null,characterId:null});});
    assert.equal(await page.locator('#nm-points button').count(),0);assert.equal(await page.locator('#nm-cast').innerText(),'');
    assert.equal(await page.locator('#nm-panel').isVisible(),true);await folded(page);
    await open(page);assert.ok(await page.locator('#nm-empty').isVisible());await folded(page);
    await page.evaluate(()=>switchChat(makeChat('restored')));await loaded(page);
   });
   await check(device.name+': default map opens with zero remote provider requests',async()=>assert.deepEqual(remote,[]));
   await session.close();
  }

  const session=await browser.newContext({viewport:{width:320,height:568},hasTouch:true,isMobile:true});
  const page=await session.newPage();page.on('pageerror',error=>errors.push(error.message));page.on('dialog',dialog=>dialog.accept());
  await page.goto(origin);await loaded(page);
  await check('small mobile: portrait and landscape keep X and bubble inside screen',async()=>{
   await open(page);await inViewport(page,'#nm-panel');await inViewport(page,'#nm-close');
   await page.setViewportSize({width:568,height:320});await tick(page);await inViewport(page,'#nm-panel');await inViewport(page,'#nm-close');
   await folded(page);await inViewport(page,'#nm-launch');await page.setViewportSize({width:320,height:568});await tick(page);await open(page);
  });
  await check('local pixel mode renders and cached results cannot reopen a folded panel',async()=>{
   await page.locator('#nm-details-toggle').tap();
   await page.locator('#nm-img-provider').selectOption('localpixel');await page.locator('#nm-img-enabled').check();
   assert.equal(await page.locator('#nm-ai-image').evaluate(el=>el.hidden),true);
   await page.locator('#nm-img-generate').click();
   await page.locator('#nm-details-toggle').tap();
   await page.locator('#nm-ai-image').waitFor({state:'visible'});
   assert.ok((await page.locator('#nm-ai-image').getAttribute('src')).startsWith('blob:'));
   await folded(page);assert.equal(await page.locator('#nm-ai-image').isVisible(),false);
   await open(page);await page.locator('#nm-ai-image').waitFor({state:'visible'});await folded(page);
  });
  await check('cached image finishing after X stays hidden',async()=>{
   await page.evaluate(()=>{
    const real=IDBObjectStore.prototype.get;
    IDBObjectStore.prototype.get=function(...args){
     const req=real.apply(this,args);let success;
     Object.defineProperty(req,'onsuccess',{get:()=>success,set:fn=>{success=fn;req.addEventListener('success',event=>setTimeout(()=>fn(event),180),{once:true});}});
     return req;
    };
   });
   await page.locator('#nm-launch').tap();await page.locator('#nm-close').tap();
   await page.waitForTimeout(250);
   assert.equal(await page.locator('#nm-ai-image').evaluate(el=>el.hidden),true);
   assert.equal(await page.locator('#nm-panel').isVisible(),false);assert.equal(await page.locator('#nm-launch').isVisible(),true);
  });

  const early=await session.newPage();early.on('pageerror',error=>errors.push(error.message));
  await early.route('**/index.js?*',async route=>{await new Promise(r=>setTimeout(r,220));await route.continue();});
  await early.goto(origin,{waitUntil:'domcontentloaded'});
  await check('tap during engine loading opens once ready',async()=>{
   await early.locator('#nm-launch').tap();await early.locator('#nm-panel').waitFor({state:'visible'});await loaded(early);
   assert.equal(await early.locator('#nm-launch').isVisible(),false);await folded(early);
  });await early.close();

  const failure=await session.newPage();
  await failure.route('**/index.js?*',route=>route.fulfill({status:500,body:'unavailable'}));
  await failure.goto(origin);
  await check('engine load failure keeps exactly one accessible error bubble',async()=>{
   await failure.waitForFunction(()=>document.querySelector('#nm-launch')?.textContent.includes('MAP !'));
   assert.equal(await failure.locator('#nm-launch').count(),1);assert.equal(await failure.locator('#nm-launch').isVisible(),true);
  });await failure.close();

  const keyboard=await session.newPage();keyboard.on('pageerror',error=>errors.push(error.message));
  await keyboard.addInitScript(()=>{
   const v=new EventTarget();Object.assign(v,{width:320,height:568,offsetTop:0,offsetLeft:0});Object.defineProperty(window,'visualViewport',{value:v});
  });await keyboard.goto(origin);await loaded(keyboard);
  await check('mobile keyboard viewport clamps panel without overwriting saved size',async()=>{
   await open(keyboard);
   const prefs=await keyboard.evaluate(()=>localStorage.getItem('neon-map-floating-ui-v098'));
   await keyboard.evaluate(()=>{visualViewport.height=280;visualViewport.offsetTop=55;visualViewport.dispatchEvent(new Event('resize'));});await tick(keyboard);
   const box=await keyboard.locator('#nm-panel').boundingBox();assert.ok(box.y>=55&&box.y+box.height<=335);
   assert.equal(await keyboard.evaluate(()=>localStorage.getItem('neon-map-floating-ui-v098')),prefs);
   await folded(keyboard);
  });await keyboard.close();

  const fallback=await session.newPage();fallback.on('pageerror',error=>errors.push(error.message));
  await fallback.addInitScript(()=>Object.defineProperty(window,'indexedDB',{get(){throw new Error('Test: persistent cache unavailable');}}));
  await fallback.goto(origin);await loaded(fallback);
  await check('local pixel still displays and reopens when IndexedDB is unavailable',async()=>{
   await open(fallback);await fallback.locator('#nm-details-toggle').tap();
   await fallback.locator('#nm-img-provider').selectOption('localpixel');await fallback.locator('#nm-img-enabled').check();
   await fallback.locator('#nm-img-generate').click();await fallback.locator('#nm-details-toggle').tap();
   await fallback.locator('#nm-ai-image').waitFor({state:'visible'});await folded(fallback);
   await open(fallback);await fallback.locator('#nm-ai-image').waitFor({state:'visible'});await folded(fallback);
  });await fallback.close();

  const imports=await session.newPage();imports.on('pageerror',error=>errors.push(error.message));
  await imports.goto(origin);await loaded(imports);await open(imports);
  await check('an import cannot overwrite the chat selected while its file was loading',async()=>{
   const data=await imports.evaluate(()=>JSON.stringify({...context.chatMetadata.neon_map_v3,characterName:'Wrong import'}));
   await imports.evaluate(()=>{const real=File.prototype.text;File.prototype.text=async function(){await new Promise(r=>setTimeout(r,220));return real.call(this);};});
   await imports.locator('#nm-import-file').setInputFiles({name:'map.json',mimeType:'application/json',buffer:Buffer.from(data)});
   await imports.evaluate(()=>switchChat(makeChat('import-destination','Correct character')));await loaded(imports);
   await imports.waitForTimeout(260);
   assert.equal(await imports.evaluate(()=>context.chatMetadata.neon_map_v3.characterName),'Correct character');
  });
  await check('keyboard activation folds with Escape and leaves the host input usable',async()=>{
   await folded(imports);await imports.locator('#nm-launch').focus();await imports.keyboard.press('Enter');
   await imports.locator('#nm-panel').waitFor({state:'visible'});await imports.keyboard.press('Escape');
   await imports.locator('#nm-launch').waitFor({state:'visible'});await imports.locator('#host-input').fill('Still chatting');
   assert.equal(await imports.locator('#host-input').inputValue(),'Still chatting');
  });await imports.close();
  await check('no uncaught browser exceptions',async()=>assert.deepEqual(errors,[]));
  await session.close();
  console.log(JSON.stringify({browser:browser.version(),passed:results.length,results},null,2));
 }finally{await browser.close();server.close();}
})().catch(error=>{console.error(error);server.close();process.exitCode=1;});
