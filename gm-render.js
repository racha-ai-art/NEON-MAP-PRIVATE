import {modules} from './index.js?v=0.10.0';
const {ROOM_GRID,obstaclesForRoom}=modules['room-interaction.js'];
const rect=(x,y,w,h,fill,stroke='none',r=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" rx="${r}"/>`;
export function planSvg(data,{grid=true}={}){
 let out=rect(0,0,data.width,data.height,'#e9efe9');
 if(data.level===3){
  out+=rect(80,60,864,610,'#647b78')+rect(94,74,836,582,'#f5f2e9');
  if(grid){
   for(let x=0;x<=ROOM_GRID.columns;x++){const px=ROOM_GRID.x+x*ROOM_GRID.width/ROOM_GRID.columns;out+=`<path d="M${px} ${ROOM_GRID.y} V${ROOM_GRID.y+ROOM_GRID.height}" stroke="#cdd6cf" stroke-width="1"/>`;}
   for(let y=0;y<=ROOM_GRID.rows;y++){const py=ROOM_GRID.y+y*ROOM_GRID.height/ROOM_GRID.rows;out+=`<path d="M${ROOM_GRID.x} ${py} H${ROOM_GRID.x+ROOM_GRID.width}" stroke="#cdd6cf" stroke-width="1"/>`;}
  }
  const blocks=[],occupied=obstaclesForRoom(data.focus.roomId),seen=new Set(),cw=ROOM_GRID.width/ROOM_GRID.columns,ch=ROOM_GRID.height/ROOM_GRID.rows;
  for(let y=0;y<ROOM_GRID.rows;y++)for(let x=0;x<ROOM_GRID.columns;x++){
   if(!occupied.has(x+','+y)||seen.has(x+','+y))continue;
   let w=1;while(occupied.has((x+w)+','+y)&&!seen.has((x+w)+','+y))w++;
   let h=1;while(y+h<ROOM_GRID.rows&&Array.from({length:w},(_,i)=>occupied.has((x+i)+','+(y+h))&&!seen.has((x+i)+','+(y+h))).every(Boolean))h++;
   for(let iy=0;iy<h;iy++)for(let ix=0;ix<w;ix++)seen.add((x+ix)+','+(y+iy));
   blocks.push({x:ROOM_GRID.x+x*cw+3,y:ROOM_GRID.y+y*ch+3,w:w*cw-6,h:h*ch-6});
  }
  const name=String(data.focus.roomId||'').toLowerCase();
  for(const [i,b] of blocks.entries()){
   out+=rect(b.x,b.y,b.w,b.h,'#c0c6b2','#859581',7);
   if(/bed|นอน|dorm|clinic|พยาบาล/.test(name)&&i===0){out+=rect(b.x+8,b.y+8,b.w-16,b.h-16,'#d7ddd1','#a7b59e',5)+rect(b.x+14,b.y+14,b.w-28,Math.min(42,b.h*.22),'#f4f1e6','none',5);}
   else if(/lib|สมุด|archive/.test(name)){for(let yy=b.y+20;yy<b.y+b.h;yy+=32)out+=`<path d="M${b.x+9} ${yy} H${b.x+b.w-9}" stroke="#879580" stroke-width="3"/>`;}
   else out+=rect(b.x+8,b.y+8,b.w-16,b.h-16,'#d3d5c2','#b5bda7',5);
  }
  out+=rect(477,644,74,26,'#e9efe9')+'<path d="M477 645 V574 A71 71 0 0 1 548 645" fill="none" stroke="#738781" stroke-width="3"/>';
 }else if(data.level===2){
  out+=rect(60,60,904,data.height-120,'#91a29a')+rect(72,72,880,data.height-144,'#f5f3ec');
  out+=rect(72,330,880,60,'#d7dfd7','none',0);
  for(const p of data.points.filter(p=>!p.note))out+=rect(Math.max(82,p.x-85),p.y-55,170,110,'#e3e7dc','#a8b7a7',6);
 }else{
  out+='<path d="M60 360 H964" fill="none" stroke="#cdd8cb" stroke-width="50"/>';
  if(data.height>720)out+=`<path d="M512 80 V${data.height-70}" stroke="#cdd8cb" stroke-width="38"/>`;
  for(const p of data.points.filter(p=>!p.note)){
   const green=/park|nature|sport/.test(p.type||'');
   out+=rect(p.x-67,p.y-47,134,94,green?'#c0d5b8':'#d7dfcf','#a5b79f',data.level===0?28:9);
   if(!green)out+=rect(p.x-53,p.y-35,106,70,'#f3f1e8','#bac6b1',4);
  }
 }
 return out;
}
export function labelLayout(items,width,height){
 const used=[];
 return items.map(p=>{
  const w=Math.min(136,Math.max(90,width-24)),h=40;
  let left=Math.max(8,Math.min(width-w-8,p.sx-w/2)),top=Math.max(8,Math.min(height-h-8,p.sy-h/2));
  let best={left,top,score:Infinity};
  for(const shift of [0,44,-44,88,-88,132,-132]){
   const y=Math.max(8,Math.min(height-h-8,top+shift));
   const overlaps=used.filter(r=>left<r.left+w+4&&left+w+4>r.left&&y<r.top+h+4&&y+h+4>r.top).length;
   const score=overlaps*1000+Math.abs(shift);if(score<best.score)best={left,top:y,score};
  }
  used.push(best);return {...p,left:best.left,top:best.top,width:w,height:h};
 });
}
