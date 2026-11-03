import {modules} from './index.js?v=0.10.0';
import {gmState,view,actors,rooms,floors,scopeKey,enter,addPlace,addNote,placeActor,syncAutomaticPositions,actorPoint,locateActor,roomSettings,awarenessText,PROMPT_KEY,imageAtlas,text,clone} from './gm-model.js?v=0.10.0';
import {planSvg,labelLayout} from './gm-render.js?v=0.10.0';

const A=modules['atlas.js'],I=modules['image-renderer.js'],R=modules['room-interaction.js'];
const VERSION='0.10.0',KEY='neon_map_v3',PREFS='neon-map-gm-ui-v1';
const $=id=>document.getElementById(id);
const ctx=()=>{try{return globalThis.SillyTavern?.getContext?.()||null;}catch{return null;}};
const chatKey=c=>c?.chatId!=null&&c.chatId!==''?JSON.stringify([c.groupId!=null&&c.groupId!==''?'group':'char',String(c.groupId??c.characterId??''),String(c.chatId)]):'';
const activeChat=c=>!!chatKey(c)&&(c.characterId!=null&&c.characterId!==''||c.groupId!=null&&c.groupId!=='');
let atlas=null,key='',epoch=0,loadJob=null,open=false,tab='map',selection=null,mode=null,search='',busy=false;
let zoom=1,panX=0,panY=0,fitPending=true,renderFrame=0,turnTimer=null,loreTimer=null;
let imgController=null,imgRevision=0,imageUrl='',imageKey='',path=[],imageToolsOpen=false;
const credentials=new Map();
let draftPrefix='neon-map-draft:legacy:',draftVersion=0,clientId='';
let identityApi=null;
const identityReady=import('/scripts/user.js').then(mod=>{identityApi=mod;}).catch(()=>{});
try{clientId=sessionStorage.getItem('neon-map-tab-id')||crypto.randomUUID();sessionStorage.setItem('neon-map-tab-id',clientId);}catch{clientId=String(Date.now());}
let pref={x:null,y:null,width:null,height:null};
try{pref={...pref,...JSON.parse(localStorage.getItem(PREFS)||'{}')};}catch{}
const saver=modules['persistence.js'].createMetadataSaver({getContext:ctx,getChatKey:chatKey,metadataKey:KEY});
function el(tag,props={},...children){const n=document.createElement(tag);for(const [k,v] of Object.entries(props)){
 if(k==='text')n.textContent=v;else if(k==='class')n.className=v;else if(k.startsWith('on'))n.addEventListener(k.slice(2),v);else if(k==='checked'||k==='disabled')n[k]=!!v;else n.setAttribute(k,String(v));
 }for(const c of children.flat())if(c!=null)n.append(typeof c==='string'?document.createTextNode(c):c);return n;}
const button=(label,fn,props={})=>el('button',{type:'button',text:label,onclick:()=>run(fn),...props});
function status(message,error=false){$('nm-status').textContent=message;$('nm-status').classList.toggle('nm-error',error);}
async function run(fn){try{await fn();}catch(error){console.error('[NEON MAP]',error);status(String(error?.message||error),true);}}
function prefs(){try{localStorage.setItem(PREFS,JSON.stringify(pref));}catch{}}
function bounds(){const v=window.visualViewport;return {x:v?.offsetLeft||0,y:v?.offsetTop||0,w:v?.width||innerWidth,h:v?.height||innerHeight};}
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
function resize(){
 const b=bounds(),p=$('nm-panel'),launch=$('nm-launch'),mobile=b.w<=760;
 const w=clamp(Number(pref.width)||Math.min(1100,b.w*.87),Math.min(340,b.w-12),b.w-12),h=clamp(Number(pref.height)||b.h*.83,Math.min(300,b.h-16),b.h-16);
 Object.assign(p.style,{width:Math.round(mobile?b.w-12:w)+'px',height:Math.round(h)+'px',left:Math.round(b.x+b.w-(mobile?b.w-12:w)-6)+'px',top:Math.round(b.y+b.h-h-8)+'px'});
 const x=clamp(Number.isFinite(pref.x)?pref.x:b.x+b.w-78,b.x+8,Math.max(b.x+8,b.x+b.w-68));
 const y=clamp(Number.isFinite(pref.y)?pref.y:b.y+b.h-150,b.y+8,Math.max(b.y+8,b.y+b.h-68));
 Object.assign(launch.style,{left:x+'px',top:y+'px',right:'auto',bottom:'auto'});
 fitPending=true;schedulePaint();
}
function share(){
 const c=ctx(),value=atlas&&key===chatKey(c)?awarenessText(atlas,actors(atlas,c)):'';
 if(c?.setExtensionPrompt){c.setExtensionPrompt(PROMPT_KEY,value,1,0,false,0);}
 const badge=$('nm-token-state');if(badge){badge.textContent=value?'แชร์ห้องกับ AI · '+value.length+' อักขระ':'GM เท่านั้น · 0 โทเคนเพิ่ม';badge.classList.toggle('nm-sharing',!!value);}
 return value;
}
function clearShare(){ctx()?.setExtensionPrompt?.(PROMPT_KEY,'',1,0,false,0);}
async function save(){
 if(!atlas||key!==chatKey(ctx()))return;
 const work=atlas,workKey=key,version=++draftVersion;work.gmSave={client:clientId,version,time:Date.now()};
 try{
  sessionStorage.setItem(draftPrefix+key,JSON.stringify(work));
  const keys=Object.keys(sessionStorage).filter(k=>k.startsWith(draftPrefix));
  if(keys.length>6){const sorted=keys.filter(k=>k!==draftPrefix+key).map(k=>({key:k,time:JSON.parse(sessionStorage.getItem(k))?.gmSave?.time||0})).sort((a,b)=>a.time-b.time);for(const entry of sorted.slice(0,keys.length-6))sessionStorage.removeItem(entry.key);}
 }catch(error){console.warn('[NEON MAP] Tab recovery storage unavailable',error);}
 $('nm-save-state').textContent='กำลังบันทึก…';
 share();let ok=await saver.mark(atlas);
 for(let i=0;i<4&&work===atlas&&workKey===key&&saver.stats().pending&&!saver.stats().error;i++)ok=await saver.flush(workKey);
 if(work===atlas){$('nm-save-state').textContent=saver.stats().pending?'รอบันทึก…':ok?'บันทึกแล้ว':'เก็บในแท็บ';}
 if(!ok&&saver.stats().error)status('บันทึกบนเซิร์ฟเวอร์ไม่สำเร็จ ใช้ส่งออก JSON เพื่อสำรอง',true);
}
function restoreDraft(server,chat){
 try{const draft=A.normalizeAtlas(JSON.parse(sessionStorage.getItem(draftPrefix+chat)||'null'));
  if(draft?.gmSave?.client===clientId){draftVersion=Math.max(draftVersion,Number(draft.gmSave.version)||0);if(!server?.gmSave||Number(draft.gmSave.time)>Number(server.gmSave.time)||draft.gmSave.client===server.gmSave.client&&Number(draft.gmSave.version)>Number(server.gmSave.version))return draft;}
 }catch{}return server;
}
function cast(){return atlas?actors(atlas,ctx()):[];}
function cancelImage(){imgRevision++;imgController?.abort();imgController=null;}
function hideImage(){imageKey='';imageUrl='';const img=$('nm-ai-image');img.hidden=true;img.removeAttribute('src');}
function show(value){
 open=!!value;$('nm-panel').hidden=!open;$('nm-launch').hidden=open;$('nm-launch').setAttribute('aria-expanded',String(open));
 globalThis.__NEON_MAP_OPEN=open;
 if(open){resize();if(key!==chatKey(ctx())||!atlas)void run(()=>load());draw();$('nm-close').focus({preventScroll:true});}
 else{cancelImage();mode=null;resize();$('nm-launch').focus({preventScroll:true});}
 document.dispatchEvent(new CustomEvent('neon-map:visibility',{detail:{open}}));
}
async function sourceData(c,token,extra=[]){
 let wi=null;try{wi=await import('/scripts/world-info.js');}catch{}
 if(token!==epoch)return null;
 const card=c.characters?.[c.characterId],group=c.groups?.find(x=>String(x.id)===String(c.groupId));
 const chars=group?(group.members||[]).map(v=>c.characters?.find(x=>x.avatar===v)).filter(Boolean):[card].filter(Boolean);
 const primary=chars.map(x=>x.data?.extensions?.world).filter(Boolean);
 const linked=modules['lore-sources.js'].linkedWorldNames({ctx:c,card:{name:card?.name,avatar:card?.avatar,primary:primary},worldSettings:wi?.getWorldInfoSettings?.()?.world_info||{},selectedWorlds:wi?.selected_world_info,extraBooks:extra});
 const entries=[],found=[],failed=[];const loadBook=c.loadWorldInfo?.bind(c)||wi?.loadWorldInfo;
 for(const name of linked){
  if(token!==epoch||chatKey(c)!==chatKey(ctx()))return null;
  try{const data=await loadBook?.(name);if(!data?.entries){failed.push(name);continue;}found.push(name);
   for(const row of Object.values(data.entries)){if(row&&!row.disable&&!row.disabled)entries.push({...row,world:name});if(entries.length>=1300)break;}
  }catch{failed.push(name);}if(entries.length>=1300)break;
 }
 const characterText=chars.map(x=>[x.description,x.personality,x.scenario,x.data?.description,x.data?.scenario].filter(Boolean).join('\n')).join('\n').slice(0,40000);
 return {characterName:chars.map(x=>x.name).join(' / ')||c.name2||'GM Map',characterText,entries,extraSourceNames:found,revealLore:true,failed};
}
function retainGm(fresh,old){if(!old)return;fresh.gm=clone(gmState(old));fresh.manual=clone(old.manual||[]);fresh.imageSettings=I.ensureImageSettings(clone(old));fresh.placePins=clone(old.placePins||[]);}
async function load(refresh=false){
 await identityReady;draftPrefix='neon-map-draft:'+(identityApi?.getCurrentUserHandle?.()||'legacy')+':';
 const c=ctx(),next=chatKey(c);
 if(!refresh&&next===key){if(loadJob)return loadJob;if(atlas)return;}
 const token=++epoch,old=next===key?(atlas||A.normalizeAtlas(c?.chatMetadata?.[KEY])):null;
 cancelImage();hideImage();clearShare();key=next;busy=true;selection=null;mode=null;atlas=null;draw();
 if(!activeChat(c)){busy=false;status('เปิดแชทตัวละครก่อน แล้วเพิ่มสถานที่หรืออ่าน Lorebook ได้ทันที');draw();return;}
 const job=(async()=>{
  const cached=!refresh?restoreDraft(A.normalizeAtlas(c.chatMetadata?.[KEY]),next):null;
  let loaded=cached;
  if(!loaded||!loaded.gm?.schema||refresh){
   const data=await sourceData(c,token,old?gmState(old).extras:(cached?gmState(cached).extras:[]));if(!data||token!==epoch)return;
   loaded=A.createAtlas(data);retainGm(loaded,old||cached);loaded.showFog=false;
   // The GM can see linked hidden place names. This data is never included in roleplay prompts by default.
   const secret=modules['engine.js'].extractPlaces(data.entries.filter(e=>/\[(?:secret|hidden|undiscovered)\]/i.test(e.content||'')));
   for(const p of secret)if(!loaded.root.markers.some(x=>x.name===p.name)){let h=2166136261;for(const v of p.source+'|'+p.name){h^=v.charCodeAt(0);h=Math.imul(h,16777619);}loaded.root.markers.push({...p,id:'secret_'+(h>>>0).toString(36),gmSecret:true,estimated:true});}
   loaded.baseRoot=clone(loaded.root);loaded.gmSources={failed:data.failed,books:data.extraSourceNames,entries:data.entries.length};
  }
  if(token!==epoch||next!==chatKey(ctx()))return;
  atlas=loaded;gmState(atlas);I.ensureImageSettings(atlas);A.processHistory(atlas,ctx()?.chat||[],{userName:c.name1||'USER',charName:c.name2||atlas.characterName});syncAutomaticPositions(atlas);
  busy=false;saver.changeChat(key);fitPending=true;await save();draw();
  status('พร้อมใช้ · อ่านข้อมูลในเครื่อง · '+(atlas.gmSources?.books?.length||atlas.sources?.length||0)+' Lorebook');
 })();loadJob=job;
 try{await job;}catch(error){if(token===epoch){atlas=old;busy=false;draw();status('อ่านข้อมูลไม่สำเร็จ: '+String(error?.message||error),true);}console.error('[NEON MAP] Load',error);}
 finally{if(loadJob===job)loadJob=null;}
}
function setTab(next){tab=next;$('nm-panel').dataset.tab=tab;for(const b of document.querySelectorAll('#nm-tabs button')){b.classList.toggle('active',b.dataset.tab===tab);b.setAttribute('aria-pressed',String(b.dataset.tab===tab));}drawSide();if(open)$(tab==='map'?'nm-viewport':'nm-side-close').focus({preventScroll:true});fitPending=true;schedulePaint();}
function navigate(level){if(!atlas)return;const g=gmState(atlas),f={...g.view,level};
 if(level===0)Object.assign(f,{areaId:'area_root',buildingId:null,floorId:null,roomId:null});
 if(level===1)Object.assign(f,{buildingId:null,floorId:null,roomId:null});
 if(level===2)f.roomId=null;
 if(level>=2&&!f.buildingId){status('เลือกสถานที่แล้วกด “เข้าไปดู” ก่อน หรือเพิ่มสถานที่ใหม่');setTab('places');return;}
 if(level===3&&!f.roomId){status('เลือกชั้นและห้องก่อน หรือเพิ่มห้องได้ในแถบสถานที่');setTab('places');return;}
 g.view=f;selection=null;mode=null;cancelImage();hideImage();path=[];fitPending=true;draw();void save();}
function selected(){if(!atlas||!selection)return null;return view(atlas).points.find(x=>x.id===selection)||null;}
function pick(point){selection=point.id;mode=null;setTab('places');draw();}
function openPoint(point){if(!atlas)return;enter(atlas,point);selection=null;mode=null;path=[];cancelImage();hideImage();fitPending=true;setTab('map');draw();void save();}
function form(title,fields,onSubmit){
 const host=$('nm-editor');host.replaceChildren();host.hidden=false;
 const f=el('form',{'aria-label':title});f.append(el('h3',{text:title}));const values={};
 for(const field of fields){const input=field.options?el('select',{id:'nm-edit-'+field.key}):el(field.multiline?'textarea':'input',{id:'nm-edit-'+field.key,type:field.type||'text',maxlength:field.max||360});
  if(field.options)for(const option of field.options)input.append(el('option',{value:option.value,text:option.label}));
  input.value=field.value||'';values[field.key]=input;
  f.append(el('label',{class:'nm-field',text:field.label},input));
 }
 const error=el('p',{class:'nm-error',role:'alert'});f.append(error,el('div',{class:'nm-actions'},el('button',{type:'submit',text:'บันทึก',class:'primary'}),button('ยกเลิก',()=>{host.hidden=true;host.replaceChildren();})));
 f.addEventListener('submit',async event=>{event.preventDefault();try{await onSubmit(Object.fromEntries(Object.entries(values).map(([k,v])=>[k,v.value])));host.hidden=true;host.replaceChildren();}catch(e){error.textContent=e.message;}});
 host.append(f);values[fields[0]?.key]?.focus();
}
function createPlace(){if(!atlas)return;const d=view(atlas),floor=d.level===2&&d.picker;
 form(floor?'เพิ่มชั้น':d.level>=2?'เพิ่มห้อง':d.level===0?'เพิ่มพื้นที่':'เพิ่มสถานที่',[{key:'name',label:floor?'หมายเลขชั้น เช่น 1 หรือ -1':'ชื่อ',type:floor?'number':'text',max:80}],async data=>{
  addPlace(atlas,data.name);selection=null;fitPending=true;await save();draw();status('เพิ่มแล้ว · เป็นข้อมูลผัง GM');
 });
}
function createNote(at){if(!atlas)return;form('เพิ่มหมุด GM',[{key:'name',label:'ชื่อหมุด',max:80},{key:'kind',label:'ประเภท',options:[{value:'note',label:'บันทึก'},{value:'danger',label:'อันตราย'},{value:'quest',label:'ภารกิจ'},{value:'secret',label:'ความลับ GM'}]}],async data=>{
 const p=addNote(atlas,data.name,data.kind,at?.x||512,at?.y||360);selection=p.id;await save();setTab('places');draw();});}
function draw(){
 $('nm-empty').hidden=!!atlas;$('nm-empty').textContent=busy?'กำลังอ่านแชทและ Lorebook…':'เปิดแชทตัวละครเพื่อเริ่มใช้แผนที่';
 $('nm-panel').classList.toggle('nm-loading',busy);
 for(const b of document.querySelectorAll('[data-needs-chat]'))b.disabled=!atlas||busy;
 if(!atlas){$('nm-title').textContent='NEON MAP';$('nm-breadcrumb').textContent='GM WORKSPACE';$('nm-location').textContent='ยังไม่มีแชท';$('nm-points').replaceChildren();$('nm-people').replaceChildren();$('nm-background').replaceChildren();$('nm-side-content').replaceChildren();share();return;}
 const d=view(atlas),user=cast().find(x=>x.id==='user');
 $('nm-title').textContent=d.title;$('nm-breadcrumb').textContent=[d.level>0?d.area?.name:null,d.level>1?d.building?.name:null,d.level>1&&d.focus.floorId!=null?'ชั้น '+d.focus.floorId:null,d.level===3?d.focus.roomId:null].filter(Boolean).join(' / ')||'โลก';
 $('nm-location').textContent=user?.position?'USER · '+user.position.raw+(user.manual?' · GM กำหนด':' · จากแชท'):'USER · ยังไม่ทราบตำแหน่ง';
 for(const b of document.querySelectorAll('#nm-levels button')){b.classList.toggle('active',Number(b.dataset.level)===d.level);b.setAttribute('aria-current',Number(b.dataset.level)===d.level?'page':'false');}
 $('nm-add-place').textContent=d.level===0?'+ พื้นที่':d.level===1?'+ สถานที่':d.level===2&&d.picker?'+ ชั้น':'+ ห้อง';$('nm-add-place').hidden=d.level===3;
 const draft=d.points.some(x=>x.origin==='template');$('nm-map-note').textContent=draft?'มีผังตั้งต้นสมมติ · GM เพิ่ม/แก้ได้ · มองจากด้านบน':'ผัง GM มองจากด้านบน · ตำแหน่งอาคารเป็นผังประมาณการ';
 share();drawSide();schedulePaint();
}
function schedulePaint(){if(!open||renderFrame)return;renderFrame=requestAnimationFrame(()=>{renderFrame=0;paint();});}
function fit(){if(!atlas)return;const v=$('nm-viewport'),d=view(atlas);if(!v.clientWidth||!v.clientHeight)return;
 zoom=Math.min((v.clientWidth-24)/d.width,(v.clientHeight-40)/d.height);panX=(v.clientWidth-d.width*zoom)/2;panY=(v.clientHeight-d.height*zoom)/2;fitPending=false;}
const screen=p=>({sx:panX+p.x*zoom,sy:panY+p.y*zoom});
function paint(){if(!atlas||!open)return;const vp=$('nm-viewport'),d=view(atlas);if(!vp.clientWidth||!vp.clientHeight)return;if(fitPending)fit();
 const bg=$('nm-background');bg.setAttribute('viewBox',`0 0 ${d.width} ${d.height}`);bg.innerHTML=planSvg(d);
 Object.assign(bg.style,{width:d.width+'px',height:d.height+'px',transform:`translate(${panX}px,${panY}px) scale(${zoom})`});
 const img=$('nm-ai-image');Object.assign(img.style,{width:d.width+'px',height:d.height+'px',transform:`translate(${panX}px,${panY}px) scale(${zoom})`});
 const layer=$('nm-points');layer.replaceChildren();const leaders=$('nm-leaders');leaders.replaceChildren();leaders.setAttribute('viewBox',`0 0 ${vp.clientWidth} ${vp.clientHeight}`);
 const points=d.points.filter(p=>!search||p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
 const visible=points.map(p=>({...p,...screen(p)})).filter(p=>p.sx>=-100&&p.sy>=-80&&p.sx<vp.clientWidth+100&&p.sy<vp.clientHeight+80).slice(0,60);
 for(const p of labelLayout(visible,vp.clientWidth,vp.clientHeight)){
  const pinned=gmState(atlas).favorites.includes(p.id),target=gmState(atlas).target===p.id;
  const label=button((p.note?({danger:'⚠',secret:'◆',quest:'⚑',note:'●'}[p.kind]||'●'):d.picker?'▤':'⌂')+' '+p.name,()=>pick(p),{class:'nm-place-pin '+(p.id===selection?'selected ':'')+(pinned?'saved ':'')+(target?'target ':'')+(p.note?'kind-'+p.kind:''),title:p.name+(p.origin==='template'?' · ผังตั้งต้นสมมติ':''),'aria-label':'สถานที่ '+p.name});
  Object.assign(label.style,{left:p.left+'px',top:p.top+'px',width:p.width+'px'});layer.append(label);
  if(Math.abs(p.left+p.width/2-p.sx)>5||Math.abs(p.top+20-p.sy)>8){const line=document.createElementNS('http://www.w3.org/2000/svg','line');for(const [k,v] of Object.entries({x1:p.sx,y1:p.sy,x2:p.left+p.width/2,y2:p.top+20,stroke:'#879b90','stroke-width':1}))line.setAttribute(k,v);leaders.append(line);}
 }
 const people=$('nm-people');people.replaceChildren();const used=new Map();
 for(const person of cast()){const p=actorPoint(atlas,person,d);if(!p)continue;const pos=screen(p),placeId=Math.round(pos.sx)+'/'+Math.round(pos.sy),i=used.get(placeId)||0;used.set(placeId,i+1);
  const b=button(person.role==='user'?'● USER':text(person.name,18),()=>{selection='actor:'+person.id;setTab('actors');drawSide();},{class:'nm-actor-pin '+(person.role==='user'?'nm-user-pin':''),title:person.name+' · '+person.position.raw,'aria-label':'ตัวละคร '+person.name});
  Object.assign(b.style,{left:clamp(pos.sx-45+i*14,4,vp.clientWidth-100)+'px',top:clamp(pos.sy+28+i*43,4,vp.clientHeight-48)+'px'});people.append(b);
 }
 const pathLayer=$('nm-path');pathLayer.setAttribute('viewBox',`0 0 ${vp.clientWidth} ${vp.clientHeight}`);pathLayer.replaceChildren();
 if(path.length>1){const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',path.map((v,i)=>{const q=screen(R.cellCenter(v));return (i?'L':'M')+q.sx+' '+q.sy;}).join(' '));p.setAttribute('fill','none');p.setAttribute('stroke','#257e66');p.setAttribute('stroke-width','3');pathLayer.append(p);}
 const modeBar=$('nm-mode');modeBar.hidden=!mode;modeBar.textContent=mode?.type==='actor'?'แตะช่องในห้องเพื่อย้าย '+mode.name+' · ยกเลิกได้ด้วย Escape':mode?'แตะแมปเพื่อวางหมุด GM · ยกเลิกได้ด้วย Escape':'';
 $('nm-points-count').textContent=points.length+' จุด'+(points.length>60?' · ใช้ค้นหาหรือเลื่อนแมป':'');
 if(imageKey!==imageViewKey())img.hidden=true;
}
function section(title,...children){return el('section',{class:'nm-section'},el('h3',{text:title}),...children);}
function drawSide(){
 const host=$('nm-side-content');host.replaceChildren();if(!atlas)return;
 const d=view(atlas),g=gmState(atlas),castList=cast();
 $('nm-side-title').textContent=tab==='actors'?'ตัวละคร':tab==='tools'?'เครื่องมือ GM':'สถานที่และหมุด';
 if(tab==='tools'){drawTools(host);return;}
 if(tab==='actors'){
  for(const p of castList){const box=section(p.role==='user'?'● USER · '+p.name:p.name,el('p',{text:p.position?.raw||'ยังไม่ตั้งตำแหน่ง',class:'nm-muted'}));
   box.append(el('div',{class:'nm-actions'},button('ดูตำแหน่ง',()=>{if(!locateActor(atlas,p)){status('ยังไม่มีตำแหน่ง · เลือกสถานที่แล้วกดตั้งตำแหน่ง');return;}setTab('map');fitPending=true;draw();}),button('ตั้งไว้ที่มุมมองนี้',async()=>{if(d.level<3&&!d.focus.buildingId){status('เลือกสถานที่จากรายการ แล้วกด “ตั้ง USER/ตัวละครที่นี่”');setTab('places');return;}placeActor(atlas,p.id,{...d.focus,raw:d.title});await save();draw();})),
    el('div',{class:'nm-actions'},button('ย้ายหมุดในห้อง',()=>{if(d.level!==3){status('เข้าห้องก่อนย้ายหมุดในห้อง');return;}mode={type:'actor',id:p.id,name:p.name};setTab('map');schedulePaint();}),button('กลับไปใช้ตำแหน่งจากแชท',async()=>{delete g.positions[p.id];await save();draw();})));
   host.append(box);
  }return;
 }
 const p=selected();
 if(p){
  const origin=p.note?'หมุด GM':p.gmSecret?'Lorebook · ความลับ GM':p.origin==='template'?'ผังตั้งต้นสมมติ':p.origin==='manual'?'GM กำหนด':p.origin==='scene'?'ข้อความแชท':p.source||'Lorebook / Character';
  const info=section(p.name,el('p',{text:origin,class:'nm-muted'}),el('p',{text:text(p.description,240)}));
  if(!p.note)info.append(button(d.picker?'เปิดชั้นนี้':'เข้าไปดู →',()=>openPoint(p),{class:'primary'}));
  info.append(el('div',{class:'nm-actions'},button(g.favorites.includes(p.id)?'★ เอาหมุดโปรดออก':'☆ บันทึกหมุด',async()=>{g.favorites=g.favorites.includes(p.id)?g.favorites.filter(x=>x!==p.id):[...g.favorites,p.id].slice(-100);await save();draw();}),button(g.target===p.id?'ยกเลิกเป้าหมาย':'⚑ ตั้งเป้าหมาย',async()=>{g.target=g.target===p.id?'':p.id;await save();draw();})));
  const target=el('select',{'aria-label':'เลือกตัวละครที่จะวาง',id:'nm-place-actor'});for(const c of castList)target.append(el('option',{value:c.id,text:c.role==='user'?'USER · '+c.name:c.name}));
  info.append(el('label',{class:'nm-field',text:'วางตัวละครในสถานที่นี้',title:'เปลี่ยนหมุดในผัง GM เท่านั้น ไม่เขียนบทสนทนา'},target),button('ตั้งตำแหน่งที่นี่',async()=>{placeActor(atlas,target.value,p.location);await save();draw();status('ตั้งหมุดในผัง GM แล้ว · ไม่ส่งคำสั่งเข้าเรื่อง');},{class:'primary'}));
  if(p.note)info.append(button('ย้ายหมุด',()=>{mode={type:'noteMove',id:p.id};setTab('map');schedulePaint();}),button('แก้หมุด',()=>form('แก้หมุด',[{key:'name',label:'ชื่อ',value:p.name,max:80},{key:'description',label:'บันทึกส่วนตัว GM',value:p.description,multiline:true}],async values=>{const n=g.notes.find(x=>x.id===p.id);Object.assign(n,{name:text(values.name,80),description:text(values.description,360)});await save();draw();})),button('ลบหมุด',async()=>{g.notes=g.notes.filter(x=>x.id!==p.id);selection=null;await save();draw();}));
  host.append(info);
 }
 if(d.level===3){drawRoomSettings(host,d);return;}
 const list=section(d.picker?'ชั้นในสถานที่นี้':'สถานที่ในมุมมองนี้');
 for(const point of d.points.filter(x=>!search||x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))){
  list.append(button((g.favorites.includes(point.id)?'★ ':'')+point.name,()=>pick(point),{class:'nm-list-place'+(point.id===selection?' active':'')}));
 }
 if(!d.points.length)list.append(el('p',{text:d.picker?'ยังไม่มีชั้น เพิ่มหมายเลขชั้นแล้วสร้างห้องได้เลย':'ยังไม่มีสถานที่ เพิ่มได้ด้วยปุ่มด้านล่าง',class:'nm-muted'}));
 list.append(button(d.picker?'+ เพิ่มชั้น':d.level>=2?'+ เพิ่มห้อง':'+ เพิ่มสถานที่',createPlace,{class:'primary'}));host.append(list);
}
function drawRoomSettings(host,d){
 const s=roomSettings(atlas,d.focus),box=section('การรับรู้ของตัวละครในห้องนี้');
 const toggle=el('input',{type:'checkbox',id:'nm-awareness-enabled',checked:s.enabled});
 toggle.addEventListener('change',()=>run(async()=>{s.enabled=toggle.checked;await save();drawSide();}));
 box.append(el('label',{class:'nm-switch'},toggle,' ส่งข้อมูลห้องนี้ให้ AI'),el('p',{class:'nm-muted',text:'ปิด = GM เห็นคนเดียว ไม่เพิ่มโทเคน เปิด = ส่งเฉพาะข้อความสั้นด้านล่างให้ตัวละครที่เลือกและอยู่ในห้องนี้'}));
 const facts=el('textarea',{id:'nm-room-facts',maxlength:360,rows:3,'aria-label':'ข้อมูลที่ตัวละครรับรู้ได้',placeholder:'เช่น ประตูล็อก มีโต๊ะและหน้าต่างทางเหนือ'});facts.value=s.facts||'';
 facts.addEventListener('change',()=>run(async()=>{s.facts=text(facts.value,360);await save();status('บันทึกข้อมูลการรับรู้แล้ว');}));
 box.append(el('label',{class:'nm-field',text:'ข้อมูลที่ตัวละครรับรู้ได้ (สูงสุด 360 อักขระ)'},facts));
 for(const p of cast().filter(x=>x.role!=='user')){
  const same=scopeKey(p.position)===scopeKey(d.focus)&&!!p.position?.roomId;
  const input=el('input',{type:'checkbox',checked:Array.isArray(s.characters)&&s.characters.includes(p.id),'data-character':p.id});
  input.addEventListener('change',()=>run(async()=>{s.characters=Array.isArray(s.characters)?s.characters:[];s.characters=input.checked?[...new Set([...s.characters,p.id])]:s.characters.filter(x=>x!==p.id);await save();drawSide();}));
  box.append(el('label',{class:'nm-switch'},input,p.name+(same?' · อยู่ห้องนี้':' · อยู่นอกห้อง/ยังไม่ตั้งตำแหน่ง (ไม่ส่งข้อมูลให้)')));
 }
 const note=el('textarea',{id:'nm-room-private',maxlength:1000,rows:3,'aria-label':'บันทึกส่วนตัว GM'});note.value=s.privateNote||'';note.addEventListener('change',()=>run(async()=>{s.privateNote=String(note.value).slice(0,1000);await save();}));
 host.append(box,section('บันทึกส่วนตัว GM',el('p',{class:'nm-muted',text:'ไม่ถูกส่งให้ AI แม้เปิดการรับรู้'}),note));
}
function drawTools(host){
 const source=atlas.gmSources||{},g=gmState(atlas);
 host.append(section('ข้อมูลและการบันทึก',el('p',{class:'nm-muted',text:(source.books||atlas.sources||[]).join(', ')||'Character Card / แชท / ผังตั้งต้น'}),source.failed?.length?el('p',{class:'nm-error',text:'อ่านไม่ได้: '+source.failed.join(', ')}):null,
  el('div',{class:'nm-actions'},button('อ่านแชทใหม่',async()=>{A.advanceHistory(atlas,ctx()?.chat||[],{userName:ctx()?.name1,charName:ctx()?.name2},true);await save();draw();status('อ่านแชทใหม่แล้ว · ข้อมูล GM ยังอยู่');}),button('รีเฟรช Lorebook',()=>load(true))),
  el('div',{class:'nm-actions'},button('ส่งออก JSON',exportMap),button('นำเข้า JSON',()=>$('nm-import-file').click()))));
 const books=el('select',{id:'nm-extra-book','aria-label':'เพิ่ม Lorebook'});books.append(el('option',{value:'',text:'เลือก Lorebook เพิ่ม…'}));
 for(const name of ctx()?.getWorldInfoNames?.()||[])books.append(el('option',{value:name,text:name}));
 host.append(section('เพิ่มแหล่งข้อมูล',books,button('เพิ่มและอ่าน',async()=>{if(!books.value)return;g.extras=[...new Set([...g.extras,books.value])];await save();await load(true);}))); 
 const advanced=el('details',{class:'nm-section'});advanced.open=imageToolsOpen;advanced.addEventListener('toggle',()=>{imageToolsOpen=advanced.open;});advanced.append(el('summary',{text:'ภาพพื้นหลัง / API ภายนอก (ทางเลือก)'}),el('p',{class:'nm-muted',text:'ผังและหมุดใช้งานได้ฟรีอยู่แล้ว ภาพภายนอกเป็นพื้นหลังเท่านั้น ส่งชื่อสถานที่ในมุมมองที่เลือกเมื่อกดสร้าง ไม่มีการเรียกอัตโนมัติ'}));
 const s=I.ensureImageSettings(atlas),provider=el('select',{id:'nm-img-provider','aria-label':'บริการภาพ'});
 for(const [value,label] of [['none','ผัง 2D ในเครื่อง · ฟรี'],['aihorde','AI Horde · บริการภายนอก'],['pollinations','Pollinations · ใช้เครดิตภายนอก']])provider.append(el('option',{value,text:label}));provider.value=s.provider==='localpixel'?'none':s.provider;
 provider.addEventListener('change',()=>run(async()=>{cancelImage();hideImage();s.provider=provider.value;s.enabled=s.provider!=='none';s.autoGenerate=false;atlas.imageSettings=s;await save();drawSide();schedulePaint();}));advanced.append(provider);
 if(provider.value==='pollinations'){
  const app=el('input',{id:'nm-app-key',type:'text',placeholder:'Public App Key pk_… (ถ้ามี)','aria-label':'Public App Key'});app.value=s.pollinationsAppKey||'';app.addEventListener('change',()=>run(async()=>{atlas.imageSettings.pollinationsAppKey=text(app.value,180);await save();}));
  advanced.append(app,button('เชื่อมกระเป๋า Pollinations',async()=>{
   if(!confirm('เชื่อมกระเป๋าสำหรับบริการสร้างภาพที่ใช้เครดิตภายนอกหรือไม่?'))return;
   cancelImage();const control=new AbortController();imgController=control;const work=key;status('กำลังเชื่อม Pollinations…');
   const auth=await modules['pollinations-auth.js'].connectPollinationsDevice({appKey:app.value,signal:control.signal,onChallenge:challenge=>{
    if(work!==key||control.signal.aborted)return;const link=el('a',{href:challenge.verificationUrl,target:'_blank',rel:'noopener noreferrer',text:'เปิดหน้าอนุญาต · รหัส '+challenge.userCode});$('nm-wallet-link')?.replaceChildren(link);
   }});if(work===key&&!control.signal.aborted){credentials.set(work+'|pollinations',auth);status('เชื่อมแล้ว · ยังไม่สร้างภาพจนกดและยืนยัน');}
  }),el('div',{id:'nm-wallet-link'}),button('ยกเลิก / ตัดการเชื่อม',()=>{cancelImage();credentials.delete(key+'|pollinations');status('ตัดการเชื่อมแล้ว');}));
 }else if(provider.value==='aihorde'){
  const field=el('input',{type:'password',id:'nm-horde-key',placeholder:'API key (เว้นว่างได้)',autocomplete:'off','aria-label':'AI Horde API key'});field.value=credentials.get(key+'|aihorde')||'';field.addEventListener('change',()=>credentials.set(key+'|aihorde',field.value.trim()));advanced.append(field);
 }
 advanced.append(el('div',{class:'nm-actions'},button('สร้างภาพมุมมองนี้',generateImage,{id:'nm-img-generate',disabled:provider.value==='none'}),button('ยกเลิก',()=>{cancelImage();status('ยกเลิกงานภาพ');})),button('ซ่อนภาพ กลับใช้ผัง 2D',()=>{cancelImage();hideImage();schedulePaint();}));
 host.append(advanced,section('สถานะ',el('p',{text:'NEON MAP '+VERSION+' · GM local-first'}),el('p',{class:'nm-muted',text:'ตำแหน่งที่ GM วางเป็นหมายเหตุแผนที่ ไม่เขียนบทสนทนา ไม่สั่งตัวละครให้เดินตาม ใช้ช่องการรับรู้ในแต่ละห้องเมื่อต้องการแชร์ข้อมูลกับ AI'})));
}
function imageViewKey(){return atlas?key+'|'+scopeKey(view(atlas).focus)+'|'+view(atlas).level:'';}
async function generateImage(){
 if(!atlas)return;const s=I.ensureImageSettings(atlas);if(!['aihorde','pollinations'].includes(s.provider))return;
 if(view(atlas).level===2&&view(atlas).picker)throw new Error('เลือกชั้นก่อนสร้างภาพพื้นหลังของชั้น');
 const workAtlas=atlas,workKey=key,d=view(atlas),vkey=imageViewKey();
 if(!confirm('ส่งชื่อสถานที่ในมุมมอง “'+d.title+'” ไป '+s.provider+' เพื่อสร้างภาพมุมมองด้านบนหรือไม่?'+(s.provider==='pollinations'?'\nบริการนี้ใช้เครดิตเงินจริง':'\nบริการภายนอกอาจมีคิวและเงื่อนไขของผู้ให้บริการ')))return;
 const auth=credentials.get(key+'|'+s.provider);if(s.provider==='pollinations'&&(!auth?.token||auth.expiresAt<Date.now()))throw new Error('เชื่อมกระเป๋า Pollinations ก่อน');
 cancelImage();const revision=imgRevision,control=new AbortController();imgController=control;
 const snapshot=imageAtlas(atlas,d);status('กำลังสร้างภาพภายนอก · ผังยังใช้ต่อได้');
 const stillCurrent=()=>atlas===workAtlas&&key===workKey&&chatKey(ctx())===workKey&&imageViewKey()===vkey&&open&&revision===imgRevision;
 try{const result=await I.generateAndCacheView(snapshot,d.level,{signal:control.signal,approvedPaid:s.provider==='pollinations',apiCredential:s.provider==='pollinations'?auth.token:auth||'',namespace:workKey,onStatus:message=>{if(stillCurrent())status(message);}});
  if(!stillCurrent())return;imageKey=vkey;imageUrl=result.url;$('nm-ai-image').src=imageUrl;$('nm-ai-image').hidden=false;schedulePaint();status('ภาพพร้อม · หมุดยังโต้ตอบได้บนเลเยอร์ด้านบน');
 }catch(error){if(error.name!=='AbortError'&&stillCurrent())throw error;}finally{if(imgController===control)imgController=null;}
}
async function exportMap(){if(!atlas)return;I.ensureImageSettings(atlas);const url=URL.createObjectURL(new Blob([JSON.stringify(atlas,null,2)],{type:'application/json'}));const a=el('a',{href:url,download:'NEON_MAP_GM_'+Date.now()+'.json'});document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function importMap(event){const file=event.target.files?.[0],work=key,token=epoch;if(!file)return;
 try{if(!atlas)throw new Error('เปิดแชทก่อน');if(file.size>12000000)throw new Error('ไฟล์ใหญ่เกิน 12 MB');const loaded=A.normalizeAtlas(JSON.parse(await file.text()));if(!loaded)throw new Error('รูปแบบแผนที่ไม่ถูกต้อง');if(work!==key||token!==epoch||work!==chatKey(ctx()))throw new Error('เปลี่ยนแชทระหว่างอ่านไฟล์ ยกเลิกนำเข้า');gmState(loaded);I.ensureImageSettings(loaded);atlas=loaded;++epoch;cancelImage();hideImage();fitPending=true;await save();draw();status('นำเข้าแผนที่แล้ว');}finally{event.target.value='';}}
function moveOnMap(at){if(!atlas||!mode)return;const d=view(atlas);
 if(mode.type==='note'){mode=null;createNote(at);return;}
 if(mode.type==='noteMove'){const n=gmState(atlas).notes.find(x=>x.id===mode.id);if(n){n.x=clamp(at.x,20,1000);n.y=clamp(at.y,20,d.height-20);}mode=null;void save();draw();return;}
 if(d.level!==3)return;
 const obstacles=R.obstaclesForRoom(d.focus.roomId),to=R.cellAtPixels(at.x,at.y);
 const p=cast().find(x=>x.id===mode.id),from=p?.position&&scopeKey(p.position)===scopeKey(d.focus)?R.cellAtPixels(p.position.x||512,p.position.y||500):R.safeStartingCell(0,obstacles);
 const start=R.isWalkable(from?.x,from?.y,obstacles)?from:R.safeStartingCell(0,obstacles);
 const route=R.findRoomPath(start,to,obstacles);if(!route.length){status('ช่องนี้ถูกผังสิ่งกีดขวางกั้น เลือกช่องว่างในห้อง',true);return;}
 placeActor(atlas,mode.id,{...d.focus,raw:d.title},R.cellCenter(to));path=route;void save();draw();status('ย้ายหมุดแล้ว · '+(route.length-1)+' ช่องในผัง GM');
}
function controls(){
 const launch=$('nm-launch');let drag=null,swallow=false;
 launch.addEventListener('pointerdown',e=>{if(!e.isPrimary||e.button!==0)return;const r=launch.getBoundingClientRect();drag={id:e.pointerId,x:e.clientX,y:e.clientY,left:r.left,top:r.top,moved:false};try{launch.setPointerCapture(e.pointerId);}catch{}});
 launch.addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(dx,dy)>7)drag.moved=true;if(!drag.moved)return;pref.x=drag.left+dx;pref.y=drag.top+dy;resize();});
 const end=e=>{if(!drag||e.pointerId!==drag.id)return;if(drag.moved){pref.x=parseFloat(launch.style.left);pref.y=parseFloat(launch.style.top);prefs();swallow=true;setTimeout(()=>{swallow=false;},0);}drag=null;};
 launch.addEventListener('pointerup',end);launch.addEventListener('pointercancel',end);launch.addEventListener('lostpointercapture',end);
 launch.addEventListener('click',e=>{if(swallow&&e.detail!==0){e.preventDefault();e.stopImmediatePropagation();swallow=false;}},true);
 const grip=$('nm-resizer');let size=null;grip.addEventListener('pointerdown',e=>{if(e.button!==0||!e.isPrimary)return;e.preventDefault();const r=$('nm-panel').getBoundingClientRect();size={id:e.pointerId,x:e.clientX,y:e.clientY,w:r.width,h:r.height};try{grip.setPointerCapture(e.pointerId);}catch{}});
 grip.addEventListener('pointermove',e=>{if(size?.id!==e.pointerId)return;pref.height=size.h+size.y-e.clientY;pref.width=size.w+size.x-e.clientX;resize();});
 const finish=e=>{if(size?.id===e.pointerId){size=null;prefs();}};grip.addEventListener('pointerup',finish);grip.addEventListener('pointercancel',finish);
 grip.addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();pref.height=$('nm-panel').getBoundingClientRect().height+(e.key==='ArrowUp'?40:-40);resize();prefs();}});
 const vp=$('nm-viewport');let down=null;
 vp.addEventListener('pointerdown',e=>{if(!e.isPrimary||e.button!==0||e.target.closest('button'))return;down={id:e.pointerId,x:e.clientX,y:e.clientY,px:panX,py:panY,moved:false};try{vp.setPointerCapture(e.pointerId);}catch{}});
 vp.addEventListener('pointermove',e=>{if(down?.id!==e.pointerId)return;const dx=e.clientX-down.x,dy=e.clientY-down.y;if(Math.hypot(dx,dy)>7)down.moved=true;if(down.moved&&!mode){panX=down.px+dx;panY=down.py+dy;fitPending=false;schedulePaint();}});
 vp.addEventListener('pointerup',e=>{if(down?.id!==e.pointerId)return;if(!down.moved&&mode){const b=vp.getBoundingClientRect();void run(()=>moveOnMap({x:(e.clientX-b.left-panX)/zoom,y:(e.clientY-b.top-panY)/zoom}));}down=null;});
 vp.addEventListener('pointercancel',()=>{down=null;});vp.addEventListener('lostpointercapture',()=>{down=null;});
 const zoomAt=(factor,x=vp.clientWidth/2,y=vp.clientHeight/2)=>{if(!atlas||!zoom)return;const z=clamp(zoom*factor,.03,4);panX=x-(x-panX)*z/zoom;panY=y-(y-panY)*z/zoom;zoom=z;fitPending=false;schedulePaint();};
 $('nm-plus').onclick=()=>zoomAt(1.25);$('nm-minus').onclick=()=>zoomAt(.8);$('nm-fit').onclick=()=>{fitPending=true;schedulePaint();};
 vp.addEventListener('wheel',e=>{e.preventDefault();const r=vp.getBoundingClientRect();zoomAt(e.deltaY<0?1.12:.9,e.clientX-r.left,e.clientY-r.top);},{passive:false});
 const ro=new ResizeObserver(()=>{fitPending=true;schedulePaint();});ro.observe(vp);
 window.addEventListener('resize',resize);window.visualViewport?.addEventListener('resize',resize);window.visualViewport?.addEventListener('scroll',resize);
 document.addEventListener('keydown',e=>{if(!open||e.key!=='Escape'||e.defaultPrevented||!$('neon-map-v3').contains(document.activeElement))return;e.preventDefault();if(!$('nm-editor').hidden){$('nm-editor').hidden=true;return;}if(mode){mode=null;schedulePaint();}else if(tab!=='map'){setTab('map');}else show(false);});
}
function shell(){
 const root=$('neon-map-v3');if(!root)throw new Error('NEON MAP bootstrap is missing');
 const panel=el('section',{id:'nm-panel',role:'region','aria-label':'NEON MAP GM workspace','data-tab':'map'});panel.hidden=true;
 panel.innerHTML=`<header class="nm-header"><button type="button" id="nm-resizer" aria-label="ลากหรือใช้ปุ่มลูกศรเพื่อปรับขนาด">↖</button><div class="nm-brand">NEON <b>MAP</b><small>GM · ${VERSION}</small></div><button type="button" id="nm-close" aria-label="พับแผนที่กลับเป็นวงกลม">✕</button></header>
 <div class="nm-info"><span id="nm-token-state">GM เท่านั้น · 0 โทเคนเพิ่ม</span><small id="nm-save-state"></small><button type="button" id="nm-sync" data-needs-chat>↻ อ่านข้อมูล</button></div>
 <nav id="nm-levels" aria-label="ระดับแผนที่"><button type="button" data-level="0" data-needs-chat>โลก</button><button type="button" data-level="1" data-needs-chat>สถานที่</button><button type="button" data-level="2" data-needs-chat>ชั้น</button><button type="button" data-level="3" data-needs-chat>ห้อง</button></nav>
 <div class="nm-heading"><div><h2 id="nm-title">NEON MAP</h2><div id="nm-breadcrumb">GM WORKSPACE</div></div><button type="button" id="nm-find-user" data-needs-chat>◎ หา USER</button></div>
 <div class="nm-toolbar"><input id="nm-search" type="search" placeholder="ค้นหาสถานที่หรือหมุด…" aria-label="ค้นหาสถานที่"><button type="button" id="nm-add-place" data-needs-chat>+ สถานที่</button><button type="button" id="nm-add-note" data-needs-chat>+ หมุด</button></div>
 <div class="nm-workspace"><div id="nm-viewport" tabindex="0" aria-label="ผังมองจากด้านบน ลากเพื่อเลื่อนแมป"><svg id="nm-background" aria-hidden="true"></svg><img id="nm-ai-image" hidden alt="ภาพพื้นหลังมุมมองด้านบน"><svg id="nm-path" aria-hidden="true"></svg><svg id="nm-leaders" aria-hidden="true"></svg><div id="nm-points"></div><div id="nm-people"></div><div id="nm-empty"></div><div class="nm-zoom"><button type="button" id="nm-plus" aria-label="ขยายแผนที่">+</button><button type="button" id="nm-minus" aria-label="ย่อแผนที่">−</button><button type="button" id="nm-fit" aria-label="พอดีหน้าต่าง">▣</button></div><div id="nm-mode" hidden></div><small id="nm-points-count"></small></div>
 <aside id="nm-side"><div class="nm-side-head"><b id="nm-side-title">สถานที่และหมุด</b><button type="button" id="nm-side-close">กลับแมป →</button></div><div id="nm-side-content"></div></aside></div>
 <div id="nm-editor" hidden></div><div class="nm-location-bar"><span id="nm-location"></span><small id="nm-map-note"></small></div>
 <nav id="nm-tabs" aria-label="เครื่องมือ GM"><button type="button" data-tab="map" class="active">แผนที่</button><button type="button" data-tab="places">สถานที่ / หมุด</button><button type="button" data-tab="actors">ตัวละคร</button><button type="button" data-tab="tools">เครื่องมือ</button></nav><div id="nm-status" role="status">กำลังเชื่อมกับ SillyTavern…</div><input type="file" id="nm-import-file" accept=".json,application/json" hidden>`;
 root.append(panel);controls();
 $('nm-close').onclick=()=>show(false);$('nm-side-close').onclick=()=>setTab('map');
 for(const b of document.querySelectorAll('#nm-tabs button'))b.onclick=()=>setTab(b.dataset.tab);
 for(const b of document.querySelectorAll('#nm-levels button'))b.onclick=()=>navigate(Number(b.dataset.level));
 $('nm-search').addEventListener('input',e=>{search=text(e.target.value,80);drawSide();schedulePaint();});
 $('nm-add-place').onclick=()=>run(createPlace);$('nm-add-note').onclick=()=>{if(!atlas)return;mode={type:'note'};setTab('map');schedulePaint();};$('nm-sync').onclick=()=>run(()=>load(true));
 $('nm-find-user').onclick=()=>{const u=cast().find(x=>x.id==='user');if(!u?.position){status('ยังไม่ทราบตำแหน่ง USER · เลือกสถานที่ แล้วกดตั้งตำแหน่งที่นี่');setTab('places');return;}locateActor(atlas,u);selection=null;setTab('map');fitPending=true;draw();};
 $('nm-import-file').onchange=e=>run(()=>importMap(e));resize();draw();
}
function queueTurn(replay=false){if(turnTimer)clearTimeout(turnTimer);turnTimer=setTimeout(()=>run(async()=>{
  if(!atlas||key!==chatKey(ctx()))return;const c=ctx(),result=A.advanceHistory(atlas,c.chat||[],{userName:c.name1,charName:c.name2},replay);
  if(result.changed){syncAutomaticPositions(atlas);await save();draw();}else share();
 }),120);}
async function init(){
 if(globalThis.__NEON_MAP_GM_STARTED)return;globalThis.__NEON_MAP_GM_STARTED=true;
 try{shell();globalThis.__NEON_MAP_SET_OPEN=show;globalThis.__NEON_MAP_TOGGLE=()=>show(!open);globalThis.__NEON_MAP_READY=true;globalThis.__NEON_MAP_ERROR='';document.dispatchEvent(new CustomEvent('neon-map:ready'));}
 catch(error){globalThis.__NEON_MAP_ERROR=String(error?.message||error);globalThis.__NEON_MAP_READY=false;throw error;}
 for(let attempt=0;!ctx()?.eventSource&&attempt<120;attempt++)await new Promise(resolve=>setTimeout(resolve,250));
 const c=ctx(),events=c?.eventTypes||c?.event_types;
 if(c?.eventSource&&events){
  const on=(name,fn)=>{if(events[name])c.eventSource.on(events[name],fn);};
  on('CHAT_CHANGED',()=>run(()=>load()));on('CHAT_LOADED',()=>run(()=>load()));on('APP_READY',()=>run(()=>load()));
  for(const name of ['MESSAGE_RECEIVED','GENERATION_ENDED','CHARACTER_MESSAGE_RENDERED'])on(name,()=>queueTurn());
  for(const name of ['MESSAGE_EDITED','MESSAGE_SWIPED','MESSAGE_DELETED','MORE_MESSAGES_LOADED'])on(name,()=>queueTurn(true));
  on('GENERATION_AFTER_COMMANDS',share);on('GENERATION_STARTED',share);
  for(const name of ['WORLDINFO_UPDATED','WORLDINFO_SETTINGS_UPDATED'])on(name,()=>{clearTimeout(loreTimer);loreTimer=setTimeout(()=>{if(atlas)void run(()=>load(true));},500);});
  on('PERSONA_CHANGED',()=>{share();draw();});
 }
 document.addEventListener('visibilitychange',()=>saver.onVisibilityHidden());window.addEventListener('pagehide',clearShare);
 await load();
}
await init();
