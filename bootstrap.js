/* NEON MAP v0.9.14: SillyTavern lower-left hamburger/options menu integration.
 * No floating launcher. Menu action opens/closes the existing map panel. */
const NM_MENU_ID='neon-map-options-entry';
let nmError='',nmStarted=false;
function nmPanel(){return document.getElementById('nm-panel');}
function nmReady(){return typeof globalThis.__NEON_MAP_TOGGLE==='function'&&globalThis.__NEON_MAP_READY===true;}
function nmRepair(open){
 const root=document.getElementById('neon-map-v3'),panel=nmPanel();
 if(!root||!panel)return false;
 if(root.parentElement!==document.body)document.body.append(root);
 root.style.setProperty('position','fixed','important');
 root.style.setProperty('inset','0','important');
 root.style.setProperty('width','100vw','important');
 root.style.setProperty('height','100dvh','important');
 root.style.setProperty('z-index','2147482000','important');
 root.style.setProperty('pointer-events','none','important');
 root.style.setProperty('visibility','visible','important');
 root.style.setProperty('display','block','important');
 panel.hidden=!open;
 if(open){
  panel.style.setProperty('display','flex','important');
  panel.style.setProperty('flex-direction','column','important');
  panel.style.setProperty('position','fixed','important');
  panel.style.setProperty('visibility','visible','important');
  panel.style.setProperty('opacity','1','important');
  panel.style.setProperty('pointer-events','auto','important');
  panel.style.setProperty('z-index','2147483001','important');
  panel.style.setProperty('top','auto','important');
  panel.style.setProperty('left','auto','important');
  panel.style.setProperty('right',innerWidth<=800?'5px':'12px','important');
  panel.style.setProperty('bottom',innerWidth<=800?'5px':'12px','important');
  panel.style.setProperty('width',Math.max(240,Math.min(innerWidth-10,innerWidth<=800?innerWidth-10:920))+'px','important');
  panel.style.setProperty('height',Math.max(220,Math.min(innerHeight-14,Math.round(innerHeight*.68)))+'px','important');
 }else{
  panel.style.removeProperty('display');
 }
 return true;
}
function nmHideLaunchers(){
 for(const id of ['neon-map-startup-bubble','neon-map-chat-toggle','nm-launch']){
  const b=document.getElementById(id);if(b){b.hidden=true;b.style.setProperty('display','none','important');}
 }
}
function nmOpenFromMenu(e){
 e?.preventDefault();e?.stopPropagation();
 if(!nmReady()){
  alert('NEON MAP ยังไม่พร้อมใช้งาน: '+(nmError||globalThis.__NEON_MAP_ERROR||'ตรวจสอบ Console และรีโหลด SillyTavern'));
  return;
 }
 try{
  const next=!!nmPanel()?.hidden;
  globalThis.__NEON_MAP_TOGGLE();
  nmRepair(next);nmHideLaunchers();
  requestAnimationFrame(()=>{nmRepair(next);nmHideLaunchers();});
  // Close SillyTavern's options dropdown without leaving the chat.
  if(next){
   const options=document.getElementById('options');
   if(options)options.style.display='none';
  }
 }catch(err){nmError=String(err?.message||err);console.error('[NEON MAP] Menu open failed',err);alert('NEON MAP: '+nmError);}
}
function nmFindMenu(){
 // #options is the native dropdown opened by #options_button at lower left.
 for(const sel of ['#options > .options-content','#options .options-content']){
  const el=document.querySelector(sel);
  if(el&&el.id!=='options_button')return el;
 }
 return null;
}
function nmMountMenu(){
 nmHideLaunchers();
 const host=nmFindMenu();
 if(!host)return;
 let item=document.getElementById(NM_MENU_ID);
 if(item?.parentElement!==host){item?.remove();item=null;}
 if(!item){
  item=document.createElement('a');
  item.id=NM_MENU_ID;
  item.className='neon-map-native-option';
  item.setAttribute('role','button');
  item.setAttribute('tabindex','0');
  item.setAttribute('title','เปิดแผนที่ NEON MAP โดยไม่ออกจากแชท');
  const icon=document.createElement('i');icon.className='fa-lg fa-solid fa-map-location-dot';
  icon.setAttribute('aria-hidden','true');
  const label=document.createElement('span');label.textContent='NEON MAP';
  item.append(icon,label);
  item.addEventListener('click',nmOpenFromMenu);
  item.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();nmOpenFromMenu(e);}});
  host.prepend(item);
 }
 // Always keep NEON MAP above the native items, including on mobile.
 if(host.firstElementChild!==item)host.prepend(item);
}
function nmStart(){
 if(nmStarted)return;nmStarted=true;
 globalThis.__NEON_MAP_BOOTSTRAPPED=true;
 nmMountMenu();
 document.addEventListener('neon-map:visibility',()=>{nmHideLaunchers();});
 const observer=new MutationObserver(()=>{nmMountMenu();});
 observer.observe(document.body,{childList:true,subtree:true});
 // Import asynchronously, so the menu appears even if map engine fails.
 import('./index.js').then(()=>{nmMountMenu();}).catch(err=>{nmError=String(err?.message||err);console.error('[NEON MAP] Load failed',err);});
}
if(document.body)nmStart();
else document.addEventListener('DOMContentLoaded',nmStart,{once:true});
