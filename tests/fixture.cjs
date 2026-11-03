/* Local browser regression tests. Runs the real extension and CSS in a minimal
 * SillyTavern host fixture; never contacts a model or image provider. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const repo=path.resolve(__dirname,'..');
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
   window.makeChat=(id,name='Arun')=>({chatId:id,characterId:0,groupId:null,name1:'User',characters:[{name,description:'A contemporary school campus',data:{extensions:{world:'School'}}}],chatMetadata:{},chat:[{is_user:false,mes:'User and '+name+' arrived.\\n<neon_state>\\nCLOCK|LOC=Building A, Floor 1, Room 101|TIME=10:00\\nNOW|POV=User|POS=User@Building A, Floor 1, Room 101;'+name+'@Building A, Floor 1, Room 101\\n</neon_state>'}],setExtensionPrompt:(key,value)=>{window.activePrompt=value;},eventSource:eventBus,eventTypes,saveMetadata:async function(){saved.push({id:this.chatId,data:JSON.parse(JSON.stringify(this.chatMetadata))});},loadWorldInfo:async name=>{const delay=window.bookDelay;await new Promise(r=>setTimeout(r,delay));return {entries:{one:{comment:'School campus',content:'A modern school.'}}};},getWorldInfoNames:()=>['School']});
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

module.exports=server;
