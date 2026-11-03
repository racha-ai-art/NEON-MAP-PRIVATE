import {modules} from './index.js?v=0.10.0';
const A=modules['atlas.js'];
export const text=(v,n=100)=>String(v??'').replace(/[\r\n\t]+/g,' ').trim().slice(0,n);
export const clone=v=>JSON.parse(JSON.stringify(v));
const obj=v=>v&&typeof v==='object'&&!Array.isArray(v);
const validated=new WeakSet();
export const scopeKey=p=>JSON.stringify([p?.areaId||'area_root',p?.buildingId??null,p?.floorId??null,p?.roomId??null]);
export const sameRoom=(a,b)=>!!a?.roomId&&!!b?.roomId&&scopeKey(a)===scopeKey(b);
const uid=()=>globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+Math.random().toString(36).slice(2);
export function gmState(a){
 const old=obj(a.gm)?a.gm:{};
 if(old.schema===1&&validated.has(old))return old;
 const arrays=(v,max)=>Array.isArray(v)?v.filter(obj).slice(0,max):[];
 const legacyRef=r=>r?.level<2?r.id:r?.level===2?(r.floorPicker?'floor:'+scopeKey({...r,floorId:String(r.id).replace(/^floor_/,''),roomId:null}):scopeKey({...r,roomId:r.name})):'';
 const gm={schema:1,positions:Object.fromEntries(Object.entries(obj(old.positions)?old.positions:{}).filter(([k,v])=>!['__proto__','constructor','prototype'].includes(k)&&obj(v)&&typeof v.areaId==='string')),
  floors:arrays(old.floors,300).filter(x=>typeof x.areaId==='string'&&typeof x.buildingId==='string'&&x.floorId!=null),rooms:arrays(old.rooms,600).filter(x=>typeof x.areaId==='string'&&typeof x.buildingId==='string'&&typeof x.name==='string'&&x.floorId!=null),notes:arrays(old.notes,200).filter(x=>typeof x.name==='string'&&typeof x.scope==='string'&&typeof x.id==='string'),favorites:Array.isArray(old.favorites)?old.favorites.filter(x=>typeof x==='string').slice(0,100):(a.placePins||[]).map(legacyRef).filter(Boolean).slice(0,100),target:typeof old.target==='string'?old.target:legacyRef(a.placeTarget)||'',
  roomSettings:obj(old.roomSettings)?old.roomSettings:{},extras:(Array.isArray(old.extras)?old.extras:Array.isArray(a.extraBooks)?a.extraBooks:[]).filter(x=>typeof x==='string').slice(0,64),view:obj(old.view)?old.view:{level:1,areaId:'area_root',buildingId:null,floorId:null,roomId:null}};
 validated.add(gm);a.gm=gm;return gm;
}
export function actors(a,ctx){
 const found=new Map();
 const add=(id,name,role,position)=>{if(!name)return;found.set(id,{id,name:text(name,60),role,position:gmState(a).positions[id]||position||null,manual:!!gmState(a).positions[id]});};
 add('user',ctx?.name1||'USER','user',A.currentFor(a)?.raw?A.currentFor(a):null);
 const group=ctx?.groups?.find(x=>String(x.id)===String(ctx.groupId));
 const chars=group?(group.members||[]).map(avatar=>ctx.characters?.find(c=>c.avatar===avatar)).filter(Boolean):[ctx?.characters?.[ctx.characterId]].filter(Boolean);
 for(const [i,c] of chars.entries())add(i===0?'char':'group-'+c.avatar,c.name,'char',a.actors?.find(x=>x.name===c.name)?.position);
 for(const p of a.actors||[])if(p.role!=='user'&&p.id!=='char'&&!Array.from(found.values()).some(x=>x.name===p.name))add(p.id,p.name,p.role,p.position);
 if(!chars.length&&!found.has('char'))add('char',ctx?.name2||'CHAR','char',a.actors?.find(x=>x.id==='char')?.position);
 return [...found.values()];
}
export function rooms(a,focus){
 const map=new Map();
 for(const r of [...Object.values(a.rooms||{}),...gmState(a).rooms]){
  if(!r?.name||r.areaId!==focus.areaId||r.buildingId!==focus.buildingId)continue;
  const key=scopeKey({...r,roomId:r.name});map.set(key,{...r,roomId:r.name,key});
 }
 return [...map.values()];
}
export function floors(a,focus){
 const all=new Map();
 for(const f of [...gmState(a).floors,...rooms(a,focus)])if(f.areaId===focus.areaId&&f.buildingId===focus.buildingId&&f.floorId!=null)all.set(String(f.floorId),{...f,floorId:String(f.floorId),name:'ชั้น '+f.floorId});
 return [...all.values()].sort((x,y)=>Number(x.floorId)-Number(y.floorId));
}
export function view(a){
 const gm=gmState(a),f=gm.view,level=Math.max(0,Math.min(3,Math.trunc(f.level||0)));
 const area=a.areas.find(x=>x.id===f.areaId)||a.areas[0];
 const focus={...f,level,areaId:area?.id||'area_root'};
 const site=focus.areaId==='area_root'?a.root:a.sites?.[focus.areaId];
 const building=site?.markers?.find(p=>p.id===focus.buildingId);
 let points=[],title='',picker=false;
 if(level===0){points=a.areas.map(p=>({...p,location:{areaId:p.id,buildingId:null,floorId:null,roomId:null,raw:p.name}}));title=a.title||'โลก';}
 if(level===1){points=(site?.markers||[]).map(p=>({...p,location:{...focus,buildingId:p.id,buildingName:p.name,floorId:null,roomId:null,raw:p.name}}));title=area?.name||'สถานที่';}
 if(level===2){
  picker=focus.floorId==null;
  points=(picker?floors(a,focus):rooms(a,focus).filter(r=>String(r.floorId)===String(focus.floorId))).map((p,i)=>({...p,id:picker?'floor:'+scopeKey({...focus,floorId:String(p.floorId),roomId:null}):p.key,name:picker?'ชั้น '+p.floorId:p.name,origin:p.origin||'scene',location:{...focus,floorId:String(p.floorId),roomId:picker?null:p.name,raw:picker?'ชั้น '+p.floorId:p.name}}));
  title=picker?(building?.name||'สถานที่')+' · เลือกชั้น':(building?.name||'สถานที่')+' · ชั้น '+focus.floorId;
 }
 if(level===3){title=focus.roomId||'เลือกห้อง';}
 // Deliberately use an orderly schematic grid. Exact lore coordinates remain exact.
 const count=points.length,cols=level===0?Math.min(4,Math.max(1,Math.ceil(Math.sqrt(count)))):Math.min(4,Math.max(2,Math.ceil(Math.sqrt(count))));
 points=points.map((p,i)=>({...p,x:p.estimated===false&&Number.isFinite(p.x)?p.x:150+(i%cols)*(724/Math.max(1,cols-1)),y:p.estimated===false&&Number.isFinite(p.y)?p.y:140+Math.floor(i/cols)*175}));
 const height=Math.max(720,220+Math.ceil(count/cols)*175);
 const notes=gm.notes.filter(n=>n.scope===scopeKey(focus)&&(!Number.isInteger(n.level)||n.level===level)).map(n=>({...n,id:n.id,x:Number(n.x)||512,y:Number(n.y)||360,note:true,origin:'manual',location:focus}));
 return {level,focus,points:[...points,...notes],title,picker,width:1024,height,area,building};
}
export function enter(a,point){
 const f=view(a),next={...point.location};
 if(point.note)return;
 next.level=f.level===0?1:f.level===1?2:f.level===2?(f.picker?2:3):3;
 gmState(a).view=next;
}
export function addPlace(a,name){
 const f=view(a),gm=gmState(a),n=text(name,80);if(n.length<1)throw new Error('กรุณาใส่ชื่อ');
 if(f.level===0||f.level===1){a.browse=f.focus;return A.addManualPlace(a,n,f.level);}
 if(!f.focus.buildingId)throw new Error('เลือกสถานที่ก่อนเพิ่มชั้นหรือห้อง');
 if(f.level===2&&f.picker){const floor=String(Number(n));if(!/^-?\d{1,2}$/.test(n)||Number(n)<-9)throw new Error('ใส่หมายเลขชั้น เช่น 1, 2 หรือ -1');
  if(!floors(a,f.focus).some(x=>x.floorId===floor))gm.floors.push({...f.focus,floorId:floor,origin:'manual'});return;
 }
 if(f.focus.floorId==null)throw new Error('เลือกชั้นก่อนเพิ่มห้อง');
 if(!rooms(a,f.focus).some(r=>r.name===n&&String(r.floorId)===String(f.focus.floorId)))gm.rooms.push({...f.focus,name:n,roomId:n,origin:'manual',discovered:true});
}
export function addNote(a,name,kind='note',x=512,y=360){
 const note={id:'note-'+uid(),name:text(name,80)||'หมุด GM',kind:['note','danger','quest','secret'].includes(kind)?kind:'note',level:view(a).level,scope:scopeKey(view(a).focus),x:Math.max(20,Math.min(1000,Number(x)||512)),y:Math.max(20,Math.min(view(a).height-20,Number(y)||360)),description:'',origin:'manual'};
 gmState(a).notes.push(note);return note;
}
export function placeActor(a,id,loc,xy){
 gmState(a).positions[id]={...loc,setAtTurn:a.turns||0,x:Math.max(20,Math.min(1000,Number(xy?.x)||512)),y:Math.max(20,Math.min(10000,Number(xy?.y)||360)),raw:text(loc.raw||loc.roomId||loc.buildingName||'ตำแหน่ง GM',100)};
}
export function syncAutomaticPositions(a){
 let changed=false;const positions=gmState(a).positions;
 for(const [id,manual] of Object.entries(positions)){
  const latest=a.actors?.find(p=>p.id===id)?.position;
  if(latest?.raw&&Number.isInteger(manual.setAtTurn)&&Number(latest.turn)>manual.setAtTurn){delete positions[id];changed=true;}
 }
 return changed;
}
export function actorPoint(a,p,data=view(a)){
 const l=p.position;if(!l)return null;
 if(data.level===0)return data.points.find(x=>x.location.areaId===l.areaId&&!x.note)||null;
 if(l.areaId!==data.focus.areaId)return null;
 if(data.level===1)return data.points.find(x=>x.location.buildingId===l.buildingId&&!x.note)||(!l.buildingId?{x:512,y:360}:null);
 if(l.buildingId!==data.focus.buildingId)return null;
 if(data.level===2){
  if(data.picker)return data.points.find(x=>!x.note&&x.location.floorId===l.floorId)||(!l.floorId?{x:512,y:360}:null);
  if(l.floorId!==data.focus.floorId)return null;
  return data.points.find(x=>!x.note&&x.location.floorId===l.floorId&&x.location.roomId===l.roomId)||(!l.roomId?{x:512,y:data.height-70}:null);
 }
 if(!sameRoom(l,data.focus))return null;
 return {x:Number(l.x)||512,y:Number(l.y)||500};
}
export function locateActor(a,p){
 if(!p.position)return false;
 const l=p.position;gmState(a).view={...l,level:l.roomId&&l.buildingId&&l.floorId!=null?3:l.floorId!=null&&l.buildingId?2:l.buildingId?1:0};return true;
}
export function roomSettings(a,loc){
 const key=scopeKey(loc),gm=gmState(a);
 if(!Object.hasOwn(gm.roomSettings,key)||!obj(gm.roomSettings[key]))gm.roomSettings[key]={enabled:false,facts:'',characters:[],privateNote:''};
 return gm.roomSettings[key];
}
export const PROMPT_KEY='neon_map_gm_awareness';
export function awarenessText(a,cast){
 if(!a)return '';
 const shared=[];
 for(const [key,s] of Object.entries(gmState(a).roomSettings)){
  if(!s?.enabled||!Array.isArray(s.characters)||!text(s.facts,360))continue;
  let l;try{const [areaId,buildingId,floorId,roomId]=JSON.parse(key);l={areaId,buildingId,floorId,roomId};}catch{continue;}
  if(!l.roomId)continue;
  const allowed=cast.filter(p=>p.role!=='user'&&s.characters.includes(p.id)&&sameRoom(p.position,l)).slice(0,4);
  if(allowed.length)shared.push('Room '+text(l.roomId,50)+'; only '+allowed.map(x=>text(x.name,35)).join(', ')+': '+text(s.facts,360));
 }
 if(!shared.length)return '';
 return ('[Room perception supplied by GM. Only the named characters currently in each room perceive its listed facts. Do not grant them other GM map knowledge.]\n'+shared.slice(0,2).join('\n')).slice(0,1100);
}
export function imageAtlas(a,data=view(a)){
 // User explicitly chooses the current GM view for the external image request.
 const copy=clone(a);copy.view=data.level;copy.browse=data.focus;copy.rooms={...copy.rooms};
 for(const r of gmState(a).rooms)copy.rooms[scopeKey({...r,roomId:r.name})]={...r,discovered:true};
 copy.areas.forEach(p=>{p.discovered=true;if(p.origin==='manual')p.origin='scene';});
 for(const site of [copy.root,...Object.values(copy.sites||{})])site.markers.forEach(p=>{p.discovered=true;if(p.origin==='manual'||p.origin==='template')p.origin='scene';});
 copy.imageSettings={...copy.imageSettings,enabled:true,autoGenerate:false,style:'strict orthographic top-down 2D RPG floor plan, restrained colors, no perspective, no isometric view, no tilted camera'};
 return copy;
}
