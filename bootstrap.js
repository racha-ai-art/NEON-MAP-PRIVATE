/* NEON MAP v0.9.9: load-first diagnostic entry point for SillyTavern.
 * No image API requests, no prompt injection, no dependencies. */
const BOOT_ID='neon-map-startup-bubble';
let bootBubble=null, launchError=null, started=false, startFinished=false, readyCheck=null;

function createBootBubble(){
  if (document.getElementById('nm-launch')) return;
  if (!document.body) return;
  bootBubble=document.getElementById(BOOT_ID);
  if(bootBubble) return;
  const b=document.createElement('button');
  b.type='button';b.id=BOOT_ID;
  b.setAttribute('aria-label','NEON MAP loading status');
  b.title='NEON MAP · เริ่มโหลดส่วนขยาย';
  b.textContent='MAP';
  // Inline fallback styling is deliberate: the loading indicator survives a missing CSS file.
  const css='position:fixed!important;right:16px!important;bottom:92px!important;'+
   'left:auto!important;top:auto!important;z-index:2147483000!important;'+
   'width:60px!important;height:60px!important;border-radius:999px!important;'+
   'border:2px solid #83f4d4!important;box-shadow:0 5px 26px #04141acc!important;'+
   'background:#174b5f!important;color:white!important;'+
   'font:900 12px system-ui,sans-serif!important;letter-spacing:.5px!important;'+
   'touch-action:none!important;cursor:pointer!important;display:grid!important;place-items:center!important;';
  b.style.cssText=css;
  let dragging=null,swallow=false;
  b.addEventListener('pointerdown',e=>{
    if(e.button!=null&&e.button!==0)return;
    const r=b.getBoundingClientRect();dragging={id:e.pointerId,x:e.clientX,y:e.clientY,left:r.left,top:r.top,moved:false};
    try{b.setPointerCapture(e.pointerId);}catch{}
  });
  b.addEventListener('pointermove',e=>{
    if(!dragging||e.pointerId!==dragging.id)return;
    const diffX=e.clientX-dragging.x,diffY=e.clientY-dragging.y;
    if(!dragging.moved&&Math.hypot(diffX,diffY)<7)return;
    dragging.moved=true;
    const x=Math.max(6,Math.min(window.innerWidth-66,dragging.left+diffX));
    const y=Math.max(6,Math.min(window.innerHeight-66,dragging.top+diffY));
    b.style.setProperty('left',Math.round(x)+'px','important');
    b.style.setProperty('top',Math.round(y)+'px','important');
    b.style.setProperty('right','auto','important');
    b.style.setProperty('bottom','auto','important');
  });
  b.addEventListener('pointerup',e=>{if(dragging?.id===e.pointerId){swallow=dragging.moved;dragging=null;}});
  b.addEventListener('pointercancel',()=>dragging=null);
  b.addEventListener('click',e=>{
    if(swallow){swallow=false;e.preventDefault();return;}
    const launch=document.getElementById('nm-launch');
    if(globalThis.__NEON_MAP_READY===true&&launch){launch.click();return;}
    const reason=launchError||globalThis.__NEON_MAP_ERROR||'ระบบแผนที่ยังเริ่มทำงานไม่เสร็จ ตรวจสอบ Console ของเบราว์เซอร์';
    alert('NEON MAP v0.9.9 · ไม่สามารถเปิดแผนที่ได้\n\n'+String(reason).slice(0,350));
  });
  document.body.appendChild(b);bootBubble=b;
}
function checkReady(){
  const launch=document.getElementById('nm-launch');
  if(launch && globalThis.__NEON_MAP_READY===true){
    // Repair accidentally off-viewport positions, and out-rank host overlays.
    launch.style.setProperty('z-index','2147483000','important');
    const r=launch.getBoundingClientRect();
    if(!launch.hidden&&(r.right<4||r.bottom<4||r.left>innerWidth-4||r.top>innerHeight-4)){
      launch.style.setProperty('left','auto','important');
      launch.style.setProperty('top','auto','important');
      launch.style.setProperty('right','16px','important');
      launch.style.setProperty('bottom','92px','important');
    }
    bootBubble?.remove();bootBubble=null;
    if(readyCheck){clearInterval(readyCheck);readyCheck=null;}
    console.info('[NEON MAP v0.9.9] Floating MAP bubble is ready');
    return true;
  }
  return false;
}
function markError(error){
  launchError=error?.message||String(error);
  if(!bootBubble)createBootBubble();
  if(bootBubble){
    bootBubble.textContent='MAP !';
    bootBubble.style.setProperty('border-color','#ffae84','important');
    bootBubble.style.setProperty('background','#824139','important');
    bootBubble.title='NEON MAP load error: '+launchError;
  }
  console.error('[NEON MAP v0.9.9] Main extension failed:',error);
}
async function start(){
  if(started)return;started=true;
  createBootBubble();
  globalThis.__NEON_MAP_BOOTSTRAPPED=true;
  try{
    await import('./index.js');
  }catch(error){markError(error);return;}
  startFinished=true;
  checkReady();
  if(!readyCheck){
    let n=0;
    readyCheck=setInterval(()=>{
      n+=1;
      if(checkReady())return;
      if(n>=45){clearInterval(readyCheck);readyCheck=null;markError(new Error(globalThis.__NEON_MAP_ERROR||'Main extension did not finish initializing'));}
    },240);
  }
}
if(document.body)void start();
else document.addEventListener('DOMContentLoaded',()=>void start(),{once:true});
