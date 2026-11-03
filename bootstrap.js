/* NEON MAP v0.9.11 — reliable in-chat launcher and independent loader.
 * No generation/prompt injection. No paid service calls. */
const NM_BOOT_ID = 'neon-map-startup-bubble';
const NM_CHAT_ID = 'neon-map-chat-toggle';
const NM_CHAT_KEY = 'neon-map-chat-launcher-v0100';
let nmBoot = null, nmChatButton = null, nmLastError = null;
let nmStarted = false, nmMonitor = null, nmReadyMonitor = null;

function nmMainReady(){
 return globalThis.__NEON_MAP_READY === true && typeof globalThis.__NEON_MAP_TOGGLE === 'function';
}
function nmMainOpen(){
 const panel = document.getElementById('nm-panel');
 return panel ? !panel.hidden : false;
}
function nmRepairPanel(open){
 const panel=document.getElementById('nm-panel');
 const root=document.getElementById('neon-map-v3');
 if(!panel||!root)return false;
 if(root.parentElement!==document.body)document.body.append(root);
 root.style.setProperty('position','fixed','important');
 root.style.setProperty('inset','0','important');
 root.style.setProperty('width','100vw','important');
 root.style.setProperty('height','100dvh','important');
 root.style.setProperty('display','block','important');
 root.style.setProperty('visibility','visible','important');
 root.style.setProperty('opacity','1','important');
 root.style.setProperty('z-index','2147482000','important');
 root.style.setProperty('pointer-events','none','important');
 if(open){
  panel.hidden=false;
  panel.style.setProperty('display','flex','important');
  panel.style.setProperty('visibility','visible','important');
  panel.style.setProperty('opacity','1','important');
  panel.style.setProperty('pointer-events','auto','important');
  panel.style.setProperty('position','fixed','important');
  panel.style.setProperty('z-index','2147483001','important');
  panel.style.setProperty('left','auto','important');
  panel.style.setProperty('top','auto','important');
  panel.style.setProperty('right',innerWidth<=800?'5px':'12px','important');
  panel.style.setProperty('bottom',innerWidth<=800?'5px':'12px','important');
  panel.style.setProperty('width',Math.min(innerWidth-10,innerWidth<=800?innerWidth-10:920)+'px','important');
  panel.style.setProperty('height',Math.max(230,Math.min(innerHeight-14,Math.round(innerHeight*.68)))+'px','important');
 }else{
  panel.hidden=true;
  panel.style.removeProperty('display');
 }
 return true;
}
function nmToggleMap(event){
 event?.preventDefault?.();event?.stopPropagation?.();
 if(nmMainReady()){
  try{
   globalThis.__NEON_MAP_TOGGLE();
   const open=nmMainOpen();
   nmRepairPanel(open);
   nmSyncState();
   if(open)requestAnimationFrame(()=>{
    nmRepairPanel(true);
    const rect=document.getElementById('nm-panel')?.getBoundingClientRect();
    if(!rect||rect.width<100||rect.height<100){
     nmRepairPanel(false);nmSyncState();
     alert('NEON MAP: แผนที่เปิดไม่สำเร็จ โปรดส่งภาพหน้าจอและข้อความใน Console');
    }
   });
  }catch(error){
   nmRepairPanel(false);nmSyncState();nmShowError(error);
   alert('NEON MAP: '+String(error?.message||error).slice(0,250));
  }
  return;
 }
 const error = nmLastError || globalThis.__NEON_MAP_ERROR || 'ส่วนขยายยังโหลดแผนที่ไม่สำเร็จ โปรดตรวจ Manage Extensions ว่าเป็น v0.9.11 และลองรีโหลด SillyTavern';
 alert('NEON MAP — MAP ไม่พร้อมใช้งาน\n\n'+String(error).slice(0,350));
}
function nmChatHostVisible(){
 const b=nmChatButton,host=b?.parentElement;
 if(!b?.isConnected||!host)return false;
 if(nmMainOpen())return true;
 const h=getComputedStyle(host),r=host.getBoundingClientRect();
 if(h.display==='none'||h.visibility==='hidden'||r.width<=80||r.height<=80)return false;
 const br=b.getBoundingClientRect(),bs=getComputedStyle(b);
 if(bs.display==='none'||bs.visibility==='hidden'||br.width<30||br.height<30)return false;
 const x=Math.min(innerWidth-2,Math.max(1,br.left+br.width/2));
 const y=Math.min(innerHeight-2,Math.max(1,br.top+br.height/2));
 const top=document.elementFromPoint(x,y);
 return !!(top&&(top===b||b.contains(top)));
}
function nmSyncState(){
 const open=nmMainOpen();
 const chatMounted=nmChatHostVisible();
 document.getElementById('neon-map-v3')?.classList.toggle('nm-chat-button-ready',chatMounted);
 if(nmBoot?.isConnected)nmBoot.style.setProperty('display',chatMounted?'none':'grid','important');
 for(const b of [nmChatButton,nmBoot]){
  if(!b||!b.isConnected)continue;
  b.setAttribute('aria-expanded',String(open));
  if(b===nmChatButton){
   // The X on the panel folds it back to this circular button.
   b.style.setProperty('display',open?'none':'flex','important');
   b.title=open?'พับแผนที่':'เปิดแผนที่ NEON MAP · ลากปุ่มเพื่อย้ายตำแหน่ง';
  }
 }
}
function nmMakeBoot(){
 if(document.getElementById(NM_BOOT_ID))return;
 if(!document.body)return;
 const b=document.createElement('button');
 b.type='button';b.id=NM_BOOT_ID;b.textContent='MAP';
 b.title='NEON MAP · loading';
 b.setAttribute('aria-label','NEON MAP');
 b.style.cssText='position:fixed!important;right:16px!important;bottom:92px!important;'+
  'left:auto!important;top:auto!important;z-index:2147483100!important;'+
  'width:60px!important;height:60px!important;border-radius:50%!important;'+
  'border:2px solid #83f4d4!important;box-shadow:0 5px 26px #04141acc!important;'+
  'background:#174b5f!important;color:#fff!important;'+
  'font:900 12px system-ui,sans-serif!important;touch-action:none!important;cursor:pointer!important;'+
  'display:grid!important;place-items:center!important;pointer-events:auto!important;';
 let moving=null,swallow=false;
 b.addEventListener('pointerdown',e=>{
  if(e.button!==undefined&&e.button!==0)return;
  const r=b.getBoundingClientRect();moving={id:e.pointerId,x:e.clientX,y:e.clientY,left:r.left,top:r.top,moved:false};
  try{b.setPointerCapture(e.pointerId);}catch{}
 });
 b.addEventListener('pointermove',e=>{
  if(!moving||e.pointerId!==moving.id)return;
  const dx=e.clientX-moving.x,dy=e.clientY-moving.y;
  if(Math.hypot(dx,dy)>7)moving.moved=true;
  if(!moving.moved)return;
  const x=Math.max(6,Math.min(window.innerWidth-b.offsetWidth-6,moving.left+dx));
  const y=Math.max(6,Math.min(window.innerHeight-b.offsetHeight-6,moving.top+dy));
  for(const [prop,v] of [['left',Math.round(x)+'px'],['top',Math.round(y)+'px'],['right','auto'],['bottom','auto']])b.style.setProperty(prop,v,'important');
 });
 b.addEventListener('pointerup',e=>{if(moving?.id===e.pointerId){swallow=moving.moved;moving=null;}});
 b.addEventListener('pointercancel',()=>{moving=null;});
 b.addEventListener('click',e=>{
  if(swallow){swallow=false;e.preventDefault();return;}
  nmToggleMap(e);
 });
 document.body.append(b);nmBoot=b;
}
function nmShowError(error){
 nmLastError=error?.message||String(error);
 nmMakeBoot();
 for(const b of [nmBoot,nmChatButton]){
  if(!b)continue;
  b.textContent='MAP !';
  b.style.setProperty('border-color','#ffb08d','important');
  b.style.setProperty('background','#823d39','important');
  b.title='NEON MAP error: '+nmLastError;
 }
 console.error('[NEON MAP] Load error:',error);
}
function nmGetPosition(host){
 let raw={};try{raw=JSON.parse(localStorage.getItem(NM_CHAT_KEY)||'{}');}catch{}
 const w=Math.max(60,host.clientWidth||window.innerWidth);
 const h=Math.max(100,host.clientHeight||window.innerHeight);
 const size=52,margin=8;
 const x=Math.max(margin,Math.min(w-size-margin,Number.isFinite(raw.x)?raw.x:w-size-12));
 const y=Math.max(margin,Math.min(h-size-margin,Number.isFinite(raw.y)?raw.y:h-size-135));
 return {x,y};
}
function nmMountChatButton(){
 // This launcher belongs directly to the visible chat container, NOT the body overlay.
 const host=document.getElementById('sheld') || document.getElementById('form_sheld');
 if(!host)return;
 const existing=document.getElementById(NM_CHAT_ID);
 if(existing && existing.parentElement===host){nmChatButton=existing;nmSyncState();return;}
 if(existing)existing.remove();
 const b=document.createElement('button');
 b.type='button';b.id=NM_CHAT_ID;b.textContent=nmLastError?'MAP !':'MAP';
 b.title='เปิดแผนที่ NEON MAP · ลากปุ่มเพื่อย้ายตำแหน่ง';
 b.setAttribute('aria-label','เปิดหรือพับแผนที่ NEON MAP');
 b.setAttribute('aria-controls','nm-panel');
 b.setAttribute('aria-expanded','false');
 // Important rules override chat themes and keep this clickable above the message pane.
 b.style.cssText='position:absolute!important;'+
  'width:52px!important;height:52px!important;min-width:52px!important;min-height:52px!important;'+
  'box-sizing:border-box!important;padding:0!important;margin:0!important;'+
  'display:flex!important;align-items:center!important;justify-content:center!important;'+
  'z-index:2147483100!important;border-radius:50%!important;'+
  'border:2px solid #70f5d4!important;box-shadow:0 4px 18px #001924b0!important;'+
  'background:#075d6a!important;color:white!important;'+
  'font:900 11px system-ui,sans-serif!important;letter-spacing:.4px!important;'+
  'touch-action:none!important;user-select:none!important;cursor:grab!important;'+
  'pointer-events:auto!important;opacity:1!important;visibility:visible!important;';
 const pos=nmGetPosition(host);
 b.style.setProperty('left',Math.round(pos.x)+'px','important');
 b.style.setProperty('top',Math.round(pos.y)+'px','important');
 b.style.setProperty('right','auto','important');b.style.setProperty('bottom','auto','important');
 let dragging=null,swallow=false;
 b.addEventListener('pointerdown',e=>{
  e.stopPropagation();
  if(e.button!==undefined&&e.button!==0)return;
  const parent=b.parentElement,pr=parent.getBoundingClientRect(),r=b.getBoundingClientRect();
  dragging={id:e.pointerId,x:e.clientX,y:e.clientY,left:r.left-pr.left,top:r.top-pr.top,moved:false};
  try{b.setPointerCapture(e.pointerId);}catch{}
 });
 b.addEventListener('pointermove',e=>{
  if(!dragging||e.pointerId!==dragging.id)return;
  e.stopPropagation();
  const dx=e.clientX-dragging.x,dy=e.clientY-dragging.y;
  if(!dragging.moved&&Math.hypot(dx,dy)<7)return;
  dragging.moved=true;
  const x=Math.max(8,Math.min(host.clientWidth-60,dragging.left+dx));
  const y=Math.max(8,Math.min(host.clientHeight-60,dragging.top+dy));
  b.style.setProperty('left',Math.round(x)+'px','important');
  b.style.setProperty('top',Math.round(y)+'px','important');
 });
 b.addEventListener('pointerup',e=>{
  e.stopPropagation();
  if(dragging?.id!==e.pointerId)return;
  swallow=dragging.moved;dragging=null;
  if(swallow){try{localStorage.setItem(NM_CHAT_KEY,JSON.stringify({x:parseFloat(b.style.left),y:parseFloat(b.style.top)}));}catch{}}
 });
 b.addEventListener('pointercancel',()=>{dragging=null;});
 b.addEventListener('click',e=>{if(swallow){swallow=false;e.preventDefault();e.stopPropagation();return;}nmToggleMap(e);});
 host.append(b);nmChatButton=b;
 nmSyncState();
}
function nmLaunchVisible(){
 const b=document.getElementById('nm-launch');if(!b||b.hidden)return false;
 const r=b.getBoundingClientRect(),style=getComputedStyle(b);
 if(style.display==='none'||style.visibility==='hidden'||r.width<25||r.height<25)return false;
 if(r.bottom<5||r.right<5||r.top>innerHeight-5||r.left>innerWidth-5)return false;
 const x=Math.max(1,Math.min(innerWidth-2,r.left+r.width/2)),y=Math.max(1,Math.min(innerHeight-2,r.top+r.height/2));
 const top=document.elementFromPoint(x,y);
 return !!(top&&(top===b||b.contains(top)));
}
function nmCheckReady(){
 nmMountChatButton();
 if(!nmMainReady())return false;
 nmSyncState();
 // Keep an independent fallback if the global launcher is *not actually clickable*.
 if(nmChatHostVisible() || nmLaunchVisible()){
  nmBoot?.remove();nmBoot=null;
 }
 return true;
}
async function nmStart(){
 if(nmStarted)return;nmStarted=true;
 nmMakeBoot();nmMountChatButton();
 document.addEventListener('neon-map:visibility',nmSyncState);
 window.addEventListener('resize',()=>{const b=nmChatButton;if(!b?.isConnected)return;const host=b.parentElement;const x=Math.min(parseFloat(b.style.left)||0,host.clientWidth-60),y=Math.min(parseFloat(b.style.top)||0,host.clientHeight-60);b.style.setProperty('left',Math.max(8,x)+'px','important');b.style.setProperty('top',Math.max(8,y)+'px','important');});
 globalThis.__NEON_MAP_BOOTSTRAPPED=true;
 // The chat pane may be rebuilt on character/chat change: keep only a cheap DOM check.
 nmMonitor=setInterval(()=>{nmMountChatButton();nmCheckReady();},1700);
 try{await import('./index.js');}
 catch(error){nmShowError(error);return;}
 if(!nmCheckReady()){
  let attempts=0;
  nmReadyMonitor=setInterval(()=>{
   attempts+=1;
   if(nmCheckReady()){clearInterval(nmReadyMonitor);nmReadyMonitor=null;return;}
   if(attempts>=20){clearInterval(nmReadyMonitor);nmReadyMonitor=null;nmShowError(new Error(globalThis.__NEON_MAP_ERROR||'Map engine initialization not completed'));}
  },300);
 }
}
if(document.body)void nmStart();
else document.addEventListener('DOMContentLoaded',()=>void nmStart(),{once:true});