/* NEON MAP v0.9.13 — SillyTavern third-party extension (private build).
 * Do not re-inject the Standalone Demo fixture into production.
 * Local atlas / Local Pixel Art do not call paid APIs.
 */
const __nmModules=Object.create(null);
__nmModules['labels.js']=(()=>{
const t = {
  school: "\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
  city: "\u0e40\u0e21\u0e37\u0e2d\u0e07",
  fantasy: "\u0e41\u0e1f\u0e19\u0e15\u0e32\u0e0b\u0e35",
  schoolPlan: "\u0e1c\u0e31\u0e07\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e08\u0e33\u0e25\u0e2d\u0e07",
  cityPlan: "\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e08\u0e33\u0e25\u0e2d\u0e07",
  fantasyPlan: "\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e42\u0e25\u0e01\u0e41\u0e1f\u0e19\u0e15\u0e32\u0e0b\u0e35\u0e08\u0e33\u0e25\u0e2d\u0e07",
  gate: "\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e2b\u0e19\u0e49\u0e32",
  class1: "\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19 1",
  class2: "\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19 2",
  library: "\u0e2b\u0e49\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e14",
  canteen: "\u0e42\u0e23\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23",
  football: "\u0e2a\u0e19\u0e32\u0e21\u0e1f\u0e38\u0e15\u0e1a\u0e2d\u0e25",
  gym: "\u0e42\u0e23\u0e07\u0e22\u0e34\u0e21",
  infirmary: "\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25",
  garden: "\u0e2a\u0e27\u0e19\u0e2b\u0e22\u0e48\u0e2d\u0e21",
  cityhall: "\u0e28\u0e32\u0e25\u0e32\u0e01\u0e25\u0e32\u0e07",
  market: "\u0e15\u0e25\u0e32\u0e14",
  hospital: "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25",
  station: "\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e23\u0e16\u0e44\u0e1f",
  park: "\u0e2a\u0e27\u0e19\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e30",
  shop: "\u0e23\u0e49\u0e32\u0e19\u0e04\u0e49\u0e32",
  docks: "\u0e17\u0e48\u0e32\u0e40\u0e23\u0e37\u0e2d",
  inn: "\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
  village: "\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19",
  forest: "\u0e1b\u0e48\u0e32\u0e43\u0e2b\u0e0d\u0e48",
  castle: "\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17",
  tower: "\u0e2b\u0e2d\u0e04\u0e2d\u0e22",
  ruins: "\u0e0b\u0e32\u0e01\u0e42\u0e1a\u0e23\u0e32\u0e13",
  port: "\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e17\u0e48\u0e32",
  mountain: "\u0e20\u0e39\u0e40\u0e02\u0e32",
  cave: "\u0e16\u0e49\u0e33",
  bridge: "\u0e2a\u0e30\u0e1e\u0e32\u0e19",
  confirmed: "\u0e08\u0e32\u0e01 Lorebook",
  template: "\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e2a\u0e21\u0e21\u0e15\u0e34",
  char: "\u0e08\u0e32\u0e01 Character Card",
  assistant: "\u0e08\u0e32\u0e01\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 AI",
  app: "NEON MAP",
  make: "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e08\u0e32\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e31\u0e27\u0e25\u0e30\u0e04\u0e23",
  demo: "\u0e25\u0e2d\u0e07\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07",
  source: "\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",
  add: "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2b\u0e21\u0e38\u0e14",
  edit: "\u0e41\u0e01\u0e49\u0e2b\u0e21\u0e38\u0e14",
  remove: "\u0e25\u0e1a",
  save: "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",
  close: "\u0e1b\u0e34\u0e14",
  reset: "\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48",
  export: "\u0e2a\u0e48\u0e07\u0e2d\u0e2d\u0e01 JSON",
  import: "\u0e19\u0e33\u0e40\u0e02\u0e49\u0e32 JSON",
  fog: "\u0e2b\u0e21\u0e2d\u0e01\u0e2a\u0e33\u0e23\u0e27\u0e08",
  sync: "\u0e0b\u0e34\u0e07\u0e01\u0e4c\u0e08\u0e32\u0e01 AI",
  current: "\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19",
  markcurrent: "\u0e15\u0e31\u0e49\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e08\u0e38\u0e14\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19",
  discovered: "\u0e04\u0e49\u0e19\u0e1e\u0e1a\u0e41\u0e25\u0e49\u0e27",
  inferred: "\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e01\u0e32\u0e23",
  details: "\u0e23\u0e32\u0e22\u0e25\u0e30\u0e40\u0e2d\u0e35\u0e22\u0e14\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48",
  maps: "\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48",
  search: "\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48",
  name: "\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48",
  description: "\u0e04\u0e33\u0e2d\u0e18\u0e34\u0e1a\u0e32\u0e22",
  category: "\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17",
  location: "\u0e1e\u0e34\u0e01\u0e31\u0e14",
  sourcehelp: "\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e2d\u0e48\u0e32\u0e19 Lorebook \u0e17\u0e35\u0e48\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e01\u0e31\u0e1a\u0e15\u0e31\u0e27\u0e25\u0e30\u0e04\u0e23\u0e41\u0e25\u0e30\u0e41\u0e0a\u0e15 (\u0e23\u0e27\u0e21\u0e17\u0e31\u0e49\u0e07\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 Trigger) \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e04\u0e38\u0e13\u0e01\u0e14\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48 \u0e08\u0e36\u0e07\u0e2d\u0e32\u0e08\u0e40\u0e1b\u0e34\u0e14\u0e40\u0e1c\u0e22\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e27\u0e32\u0e21\u0e25\u0e31\u0e1a \u0e42\u0e1b\u0e23\u0e14\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a\u0e01\u0e48\u0e2d\u0e19\u0e43\u0e0a\u0e49",
  noLore: "\u0e44\u0e21\u0e48\u0e1e\u0e1a Lorebook \u0e17\u0e35\u0e48\u0e2d\u0e48\u0e32\u0e19\u0e44\u0e14\u0e49 \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1c\u0e31\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e31\u0e27\u0e25\u0e30\u0e04\u0e23\u0e41\u0e17\u0e19",
  needChat: "\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e1b\u0e34\u0e14\u0e41\u0e0a\u0e15\u0e15\u0e31\u0e27\u0e25\u0e30\u0e04\u0e23\u0e01\u0e48\u0e2d\u0e19",
  aiCost: "\u0e42\u0e2b\u0e21\u0e14\u0e0b\u0e34\u0e07\u0e01\u0e4c AI \u0e21\u0e35\u0e15\u0e49\u0e19\u0e17\u0e38\u0e19\u0e42\u0e17\u0e40\u0e04\u0e19\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e41\u0e25\u0e30\u0e2d\u0e32\u0e08\u0e02\u0e31\u0e14\u0e01\u0e31\u0e1a\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e40\u0e2d\u0e32\u0e15\u0e4c\u0e1e\u0e38\u0e15\u0e40\u0e14\u0e34\u0e21\u0e02\u0e2d\u0e07 NEON",
  sourceCount: "\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e32\u0e01",
  placeCount: "\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48",
  templateHint: "\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e41\u0e25\u0e30\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e17\u0e35\u0e48\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e15\u0e32\u0e21 Lorebook",
  load: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2d\u0e48\u0e32\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",
  manual: "\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e2d\u0e07",
  updated: "\u0e2d\u0e31\u0e1b\u0e40\u0e14\u0e15\u0e41\u0e25\u0e49\u0e27",
  select: "\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48"
};

return {t};
})();
__nmModules['backgrounds.js']=(()=>{
function rect(x,y,w,h,fill,rx=0,stroke='none',sw=0){return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`}
function path(d,fill='none',stroke='none',sw=0,other=''){return `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" ${other}/>`}
function line(x1,y1,x2,y2,stroke,width=1,more=''){return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" ${more}/>`}
function circle(x,y,r,fill,stroke='none',sw=0){return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`}
function text(x,y,str,color='#75919b',size=22,extra=''){return `<text x="${x}" y="${y}" font-family="Tahoma,Arial,sans-serif" fill="${color}" font-size="${size}" font-weight="800" opacity=".67" ${extra}>${str}</text>`}
function rand(seed){const x=Math.sin(seed*78.233+127.1)*43758.5453;return x-Math.floor(x)}
function trees(x,y,w,h,n,seed=1){let s='';for(let i=0;i<n;i++){let px=x+12+rand(seed+i*2.31)*(w-24),py=y+12+rand(seed+i*7.43)*(h-24),r=5+rand(seed+i*3.12)*5;s+=circle(px+2,py+3,r,'#729a73', '#56785b',1)+circle(px-2,py-2,r*.77,'#7eae7d')}return s}
function citySVG(){let s=`<defs><pattern id="streetdots" width="15" height="15" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".6" fill="#b1bbaf"/></pattern></defs>`+rect(0,0,1024,720,'#e9ede4');
 let colors=['#f4c9ae','#c7d5e2','#efddbd','#d7dfc9','#ebc8bf','#f0d3a9','#d3dfdd'];
 for(let r=0;r<6;r++)for(let c=0;c<9;c++){let x=14+c*117,y=11+r*117,bw=104,bh=104,seed=r*137+c*19,fill=colors[(c+r*2)%colors.length];s+=rect(x,y,bw,bh,fill,3);if((r===2&&c===6)||(r===4&&c===7)||(r===0&&c===0)||(r===1&&c===7)){s+=rect(x+4,y+4,bw-8,bh-8,'#b6d6ae',3)+trees(x+4,y+4,bw-8,bh-8,15,seed+70);continue}
 for(let j=0;j<16;j++){let cc=j%4,rr=Math.floor(j/4),bx=x+8+cc*23+rand(seed+j)*2,by=y+7+rr*23+rand(seed+j*3)*2,cls=['#ccada0','#b9b9ba','#d5c4ad','#e2b8a1','#b7b9aa'][(j+seed)%5];s+=rect(bx,by,13+rand(seed+j*4)*4,12+rand(seed+j*6)*4,cls,1,'#ffffff88',.8)} }
 for(let c=1;c<9;c++){let x=c*117-3;s+=line(x,0,x,720,'#fcfff9',13);if(c===3||c===6)s+=line(x,0,x,720,'#eac17c',7)}
 for(let r=1;r<6;r++){let y=r*117-3;s+=line(0,y,1024,y,'#fcfff9',13);if(r===2||r===5)s+=line(0,y,1024,y,'#e5c180',7)}
 s+=path('M 826 -20 C 794 132, 847 237, 794 333 S 822 493, 751 746','none','#96c6d5',47)+path('M 826 -20 C 794 132, 847 237, 794 333 S 822 493, 751 746','none','#b9e6ea',38)+path('M 826 -20 C 794 132, 847 237, 794 333 S 822 493, 751 746','none','#86b7ca',2);
 s+=path('M 0 604 C 270 596 570 611 1024 570','none','#bdad95',13)+path('M 0 604 C 270 596 570 611 1024 570','none','#fff3df',4)+path('M 0 604 C 270 596 570 611 1024 570','none','#7d7769',1,'stroke-dasharray="5 6"');
 s+=text(395,148,'เขตเมืองเหนือ','#9a9892',27)+text(413,665,'ย่านการค้า','#a1a0a0',25)+text(20,388,'ชุมชนตะวันตก','#9b9e99',22);return s}
function schoolSVG(){let s=rect(0,0,1024,720,'#d6dbc3')+rect(65,65,904,605,'#98bd8a',17,'#f4edcf',12)+rect(85,85,864,565,'#8fb881',8);for(let y=130;y<660;y+=78)s+=rect(89,y,854,4,'#b1c9a1');
 s+=rect(90,400,844,20,'#dfd7bd',0)+rect(90,620,844,20,'#eadcc4',0)+rect(470,95,22,525,'#e4ddc4');
 s+=rect(595,85,318,255,'#b3cda2',8)+rect(625,98,267,208,'#4c9a5f',9,'#e1e9ca',5)+rect(650,117,215,171,'none',3,'#e5ecca',3)+line(756,118,756,287,'#e1ecca',2)+circle(756,203,28,'none','#e1ecca',2)+rect(650,170,33,66,'none',2,'#e5ecca',2)+rect(832,170,33,66,'none',2,'#e5ecca',2);
 s+=rect(110,150,250,138,'#a6bdb7',8)+rect(126,164,218,111,'#d8b19c',3,'#fff3df',5)+line(160,167,160,274,'#fff2de',2)+line(230,167,230,274,'#fff2de',2)+line(301,167,301,274,'#fff2de',2);
 s+=rect(120,326,250,185,'#c2bbac',12)+rect(137,342,220,153,'#d9b29d',7)+rect(148,355,93,62,'#77a6c4',3,'#f3eddd',4)+rect(250,355,93,62,'#77a6c4',3,'#f3eddd',4);
 for(let i=0;i<2;i++){let x=385+i*245;s+=rect(x,417,206,119,'#677f82',6)+rect(x+10,427,186,101,'#aec2ba',4)+rect(x+14,431,178,93,'#d8c0a7',4)+rect(x+22,437,162,80,'#a47e6a',3)}
 s+=rect(381,310,203,77,'#728883',4)+rect(386,314,191,69,'#d3bba4',4)+rect(396,324,171,47,'#b09a8c',2);
 s+=rect(682,458,203,112,'#acbfaf',6)+rect(691,466,184,95,'#a7b0ae',4)+rect(701,480,160,63,'#d5aa95',2);
 s+=rect(190,590,680,36,'#d0c6ad',2)+rect(190,605,680,6,'#f3ebd5',1);
 s+=trees(92,91,310,55,32,91)+trees(600,355,325,70,33,19)+trees(116,540,230,70,22,33)+trees(895,125,42,450,18,58)+trees(362,105,98,175,19,81);
 s+=text(666,335,'สนามฟุตบอล','#4c9560',23)+text(260,578,'สวนหย่อม','#5d9062',19);return s}
function fantasySVG(){let s=`<defs><linearGradient id="sea" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#578fae"/><stop offset="1" stop-color="#1e496c"/></linearGradient></defs>`+rect(0,0,1024,720,'#91b687');
 s+=path('M0 0 H1024 V217 C900 170 776 205 658 199 C515 157 385 244 237 197 C116 163 75 181 0 169 Z','#e5efeb')+path('M0 167 C140 230 276 194 376 216 S565 175 663 221 S866 185 1024 236','none','#c7d7d1',17)+path('M0 183 C140 241 276 207 376 230 S565 188 663 235 S866 202 1024 250','none','#b7cbb8',15);
 s+=path('M0 559 C160 526 286 557 385 579 C525 617 662 544 760 567 C852 588 933 559 1024 536 L1024 720 H0 Z','url(#sea)')+path('M0 559 C160 526 286 557 385 579 C525 617 662 544 760 567 C852 588 933 559 1024 536','none','#dfd5b1',17)+path('M0 563 C160 530 286 561 385 583 C525 621 662 548 760 571 C852 592 933 563 1024 540','none','#f4e4c9',5);
 s+=path('M 680 202 C 649 286,755 310,734 394 S 829 517,866 554','none','#91c2cd',27)+path('M 680 202 C 649 286,755 310,734 394 S 829 517,866 554','none','#b7dae1',15);
 for(let i=0;i<45;i++){let x=rand(i*13+5)*1010,y=rand(i*19+7)*210-15,scale=7+rand(i*5+2)*18;s+=path(`M${x-scale} ${y+scale} L${x} ${y-scale} L${x+scale} ${y+scale} Z`,'#aabdbb','#8fa6a2',1)+path(`M${x-3} ${y-scale+6} L${x} ${y-scale} L${x+3} ${y-scale+6} Z`,'#eff6f1')}
 for(let k=0;k<7;k++){let xx=60+k*126+rand(k*7)*20,yy=236+rand(k*21)*65;s+=trees(xx,yy,135,115,35,k+200)}
 for(let k=0;k<5;k++){let xx=35+k*190+rand(k*4)*35,yy=410+rand(k*17)*35;s+=trees(xx,yy,150,95,20,k+410)}
 s+=path('M 233 575 C 300 523, 314 431, 401 378 S 483 253, 500 185','none','#9a7864',9,'stroke-dasharray="6 9"')+path('M 233 575 C 300 523, 314 431, 401 378 S 483 253, 500 185','none','#f3ddae',5,'stroke-dasharray="6 9"');
 s+=path('M 538 594 C 606 522, 667 497, 698 437 S 787 350, 844 285','none','#8d705e',9,'stroke-dasharray="6 9"')+path('M 538 594 C 606 522, 667 497, 698 437 S 787 350, 844 285','none','#f0dcb2',5,'stroke-dasharray="6 9"');
 s+=text(55,101,'เทือกเขาหิมะ','#a3b7b7',27)+text(70,352,'ป่าทางเหนือ','#679775',26)+text(92,668,'อ่าวแห่งเอริส','#c4d6dd',24);return s}

function backgroundSvg(kind) { return (kind === "school" ? schoolSVG : kind === "fantasy" ? fantasySVG : citySVG)(); }

return {backgroundSvg};
})();
__nmModules['engine.js']=(()=>{
const {t}=__nmModules['labels.js'];
const W = 1024;
const H = 720;
const CLAMP = (v, lo, hi) => Math.max(lo, Math.min(hi, Number(v) || 0));
const clean = v => String(v ?? '').replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim().slice(0, 100);
// Stable, scoped, deterministic IDs: a layout reroll must never orphan a saved bookmark.
// 32-bit FNV-1a; collision suffixes are assigned in deterministic input order.
function stableId(prefix,source,name,existing=[]){
 const key=String(source||'').normalize('NFC').trim().toLocaleLowerCase()+'\u001f'+String(name||'').normalize('NFC').trim().toLocaleLowerCase();
 let h=2166136261;
 for(const c of key){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}
 const base=prefix+'_'+(h>>>0).toString(36);
 let id=base,index=2;
 while(existing.some(p=>p.id===id))id=base+'_'+index++;
 return id;
}

const presets = {
  school: [
    ['gate', t.gate, 512, 652, 'entrance', 'G'],
    ['block1', t.class1, 398, 490, 'classroom', 'S'],
    ['block2', t.class2, 580, 359, 'classroom', 'S'],
    ['library', t.library, 239, 265, 'library', 'B'],
    ['canteen', t.canteen, 164, 441, 'food', 'F'],
    ['football', t.football, 751, 177, 'sport', 'P'],
    ['gym', t.gym, 793, 515, 'sport', 'P'],
    ['infirmary', t.infirmary, 477, 340, 'medical', '+'],
    ['garden', t.garden, 244, 562, 'park', 'T']
  ],
  city: [
    ['school', t.school, 451, 477, 'classroom', 'S'],
    ['cityhall', t.cityhall, 317, 289, 'office', 'C'],
    ['market', t.market, 566, 217, 'food', 'M'],
    ['hospital', t.hospital, 196, 166, 'medical', '+'],
    ['station', t.station, 187, 550, 'transport', 'R'],
    ['park', t.park, 744, 389, 'park', 'T'],
    ['shop', t.shop, 610, 503, 'shop', '$'],
    ['docks', t.docks, 805, 619, 'transport', 'H']
  ],
  fantasy: [
    ['village', t.village, 200, 543, 'town', 'V'],
    ['forest', t.forest, 326, 366, 'nature', 'T'],
    ['castle', t.castle, 693, 441, 'fortress', 'C'],
    ['tower', t.tower, 511, 199, 'fortress', 'C'],
    ['ruins', t.ruins, 278, 174, 'ruins', 'R'],
    ['port', t.port, 530, 585, 'town', 'P'],
    ['mountain', t.mountain, 818, 228, 'nature', 'M'],
    ['cave', t.cave, 844, 315, 'nature', 'O'],
    ['bridge', t.bridge, 756, 355, 'road', 'B']
  ]
};

function templatesFor(kind) {
  return (presets[kind] || presets.city).map(([id, name, x, y, type, icon]) => ({
    id, name, x, y, type, icon, description: t.templateHint,
    origin: 'template', estimated: true, discovered: true
  }));
}

const keywords = [
  { type: 'library', needles: [t.library, 'library', 'archive', 'archives'] },
  { type: 'food', needles: [t.canteen, t.market, 'canteen', 'cafeteria', 'market', 'caf\u00e9'] },
  { type: 'sport', needles: [t.football, t.gym, 'gymnasium', 'football field', 'basketball'] },
  { type: 'medical', needles: [t.infirmary, t.hospital, 'hospital', 'infirmary', 'clinic'] },
  { type: 'classroom', needles: [t.school, 'classroom', 'homeroom', 'academy', 'school', 'campus'] },
  { type: 'park', needles: [t.park, t.garden, 'park', 'garden'] },
  { type: 'transport', needles: [t.station, t.docks, 'station', 'port', 'dock'] },
  { type: 'fortress', needles: [t.castle, t.tower, 'castle', 'tower', 'fort'] },
  { type: 'nature', needles: [t.forest, t.mountain, t.cave, 'forest', 'mountain', 'cave'] },
  { type: 'town', needles: [t.village, t.port, 'village', 'town', 'city'] },
  { type: 'ruins', needles: [t.ruins, 'ruins', 'temple'] },
];
const allNeedles = keywords.flatMap(group => group.needles);
const explicitLineRE = /^\s*(?:MAP_POI|MAP_LOC|MAP)\s*\|\s*([^|\n]{2,90})\s*\|\s*([^|\n]{0,40})(?:\|\s*(\d{1,4})\s*\|\s*(\d{1,4}))?(?:\|([^\n]{0,240}))?\s*$/gim;

function kindFromTexts(texts) {
  const s = texts.join('\n').toLowerCase();
  const scores = {
    school: ['student', 'school', 'classroom', 'homeroom', 'high school', 'academy', 'campus', 'university', '\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19', '\u0e19\u0e31\u0e01\u0e28\u0e36\u0e01\u0e29\u0e32', '\u0e21\u0e31\u0e18\u0e22\u0e21', '\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22', t.school, t.class1, t.canteen, t.football].reduce((a, n) => a + (s.includes(n.toLowerCase()) ? 2 : 0), 0),
    fantasy: ['wizard', 'magic', 'kingdom', 'dragon', 'medieval', 'elf', 'dungeon', '\u0e2d\u0e32\u0e13\u0e32\u0e08\u0e31\u0e01\u0e23', t.castle, t.forest, t.village, t.tower].reduce((a, n) => a + (s.includes(n.toLowerCase()) ? 2 : 0), 0),
    city: ['police', 'hospital', 'office', 'market', 'station', 'modern', t.city, t.hospital, t.market].reduce((a, n) => a + (s.includes(n.toLowerCase()) ? 1 : 0), 0),
  };
  if (scores.school > 0 && scores.school >= scores.fantasy) return 'school';
  if (scores.fantasy > 0 && scores.fantasy > scores.city) return 'fantasy';
  return 'city';
}

function placeType(s) {
  const test = String(s || '').toLowerCase();
  const result = keywords.find(({ needles }) => needles.some(k => test.includes(k.toLowerCase())));
  return result?.type || 'other';
}
function looksLikePlace(s) {
  const str = clean(s);
  return str.length >= 3 && str.length <= 68 && allNeedles.some(n => str.toLowerCase().includes(n.toLowerCase()));
}
function likelyPlaceName(s) {
  let v = clean(s).replace(/^(?:location|place|area|building|room|site|\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48)\s*[:=\-]\s*/i, '');
  v = v.split(/[,:;.!?\u3002\uff0c]/)[0];
  if (v.length > 55) v = v.slice(0, 55);
  return v.trim();
}
function extractSchoolName(texts) {
  for (const paragraph of texts) {
    const lines = String(paragraph).split(/[\r\n.;]/);
    for (const line of lines) {
      const v = line.trim();
      if (v.startsWith(t.school) && v.length <= 46 && v.length > t.school.length + 1) return v;
      const m = v.match(/([A-Z][a-zA-Z-]+(?:\s+[A-Z][a-zA-Z-]+){0,4}\s+(?:High School|Academy|School))/);
      if (m) return m[1];
    }
  }
  return null;
}
function extractPlaces(entries = []) {
  const seen = new Set();
  const places = [];
  for (const entry of entries) {
    if (!entry || entry.disable === true || entry.disabled === true) continue;
    const content = String(entry.content || '');
    if (!content || content.startsWith('@@dont_activate')) continue;
    const source = clean(entry.world || entry.source || 'Lorebook');
    const candidates = [];
    let m;
    while ((m = explicitLineRE.exec(content))) {
      candidates.push({ name: m[1].trim(), type: m[2].trim() || 'other', x: m[3] ? Number(m[3]) : null, y: m[4] ? Number(m[4]) : null, description: (m[5] || '').trim(), exact: !!m[3] });
    }
    explicitLineRE.lastIndex = 0;
    if (!candidates.length) {
      for (const title of [entry.comment, ...(Array.isArray(entry.key) ? entry.key.slice(0, 3) : [])]) {
        if (looksLikePlace(title)) candidates.push({name: likelyPlaceName(title),type:placeType(title),x:null,y:null,description:'',exact:false});
      }
    }
    for (const x of candidates) {
      const name = clean(x.name);
      const key = name.toLowerCase();
      if (name.length < 2 || seen.has(key) || places.length >= 42) continue;
      seen.add(key);
      places.push({ name, type: x.type || placeType(name), x: x.x, y: x.y, exact: x.exact,
        description: clean(x.description || content.replace(/^MAP[^\n]*$/gim, '').slice(0, 135)) || t.confirmed,
        origin: source === 'Character Card' ? 'character' : 'lorebook', source, discovered: !/\[(?:secret|hidden|undiscovered)\]/i.test(content.slice(0,180)) });
    }
  }
  return places;
}
function createMap({characterName = 'Character', characterText = '', entries = [], forcedKind = null, extraSourceNames = []} = {}) {
  const available = entries.filter(e => e && e.disable !== true && e.disabled !== true && String(e.content || '').length > 0 && !/(?:\[(?:secret|hidden|undiscovered)\]|\bdo not reveal\b)/i.test(String(e.content||'')));
  const texts = [characterText, ...available.slice(0, 300).map(e => `${e.comment || ''}\n${String(e.content || '').slice(0, 1000)}`)];
  const kind = forcedKind && presets[forcedKind] ? forcedKind : kindFromTexts(texts);
  const detectedName = kind === 'school' ? extractSchoolName(texts) : null;
  const markers = templatesFor(kind);
  const publicCard=String(characterText||'')
    .replace(/\[(secret|hidden|undiscovered)\][\s\S]*?\[\/\1\]/gi,'')
    .replace(/^.*(?:\[(?:secret|hidden|undiscovered)\]|\bdo not reveal\b).*$/gim,'');
  const originalNames=new Set(markers.map(m=>m.name.toLocaleLowerCase()));
  const candidates = extractPlaces([...available, {content:publicCard,world:'Character Card'}])
    .sort((a,b)=>{
      const prior=Number(!originalNames.has(a.name.toLocaleLowerCase()))-Number(!originalNames.has(b.name.toLocaleLowerCase()));
      return prior||String(a.source||'').localeCompare(String(b.source||''),'en')||a.name.localeCompare(b.name,'th');
    });
  const unused = [...markers];
  for (const p of candidates) {
    const existing = markers.find(m => m.name.toLowerCase() === p.name.toLowerCase());
    if (existing) {
      const index=unused.indexOf(existing);
      if(index>=0)unused.splice(index,1); // A confirmed template cannot be claimed twice.
      Object.assign(existing, { description:p.description, origin:p.origin, source:p.source, discovered:p.discovered });
      if (p.exact) Object.assign(existing, {x:CLAMP(p.x, 20,1000), y:CLAMP(p.y,20,700), estimated:false});
      continue;
    }
    const compatible = unused.find(m => m.type === p.type);
    if (compatible && p.type !== 'other') {
      const idx = unused.indexOf(compatible);
      unused.splice(idx, 1);
      // The schematic placement is reusable, but the template ID is not.
      // This keeps saved refs stable if entries are added or reordered.
      Object.assign(compatible, {id:stableId('lore',p.source||'Lorebook',p.name,markers),name:p.name,
        description:p.description, origin:p.origin, source:p.source,
        discovered:p.discovered, estimated:!p.exact});
      if (p.exact) Object.assign(compatible,{ x:CLAMP(p.x,20,1000), y:CLAMP(p.y,20,700), estimated:false });
    } else {
      const i = markers.length;
      markers.push({id:stableId('lore',p.source||'Lorebook',p.name,markers),name:p.name, type:p.type,
        icon:'L', x:p.exact?CLAMP(p.x,20,1000):140+(i*137)%735,
        y:p.exact?CLAMP(p.y,20,700):130+(i*97)%430,
        description:p.description,origin:p.origin,source:p.source,discovered:p.discovered,estimated:!p.exact});
    }
  }
  // Plain prose may state that a campus has a library / cafeteria / sports field
  // without a MAP line or a named World Info memo. Promote an existing template
  // pin to a lore-backed *presence* while keeping its coordinates estimated.
  // Never claim the schematic position comes from the lore itself.
  const knownAliases = {
    gate: ['main gate', 'school gate', 'front entrance'],
    block1: ['classroom building', 'school building', 'teaching building', '\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19'],
    block2: ['classroom building', 'school building', 'teaching building', '\u0e2d\u0e32\u0e04\u0e32\u0e23\u0e40\u0e23\u0e35\u0e22\u0e19'],
    library: ['library', 'libraries'], canteen: ['canteen', 'cafeteria', 'dining hall'],
    football: ['football field', 'football pitch', 'soccer field', '\u0e2a\u0e19\u0e32\u0e21\u0e01\u0e35\u0e2c\u0e32'],
    gym: ['gymnasium', 'gym building'], infirmary: ['infirmary', 'nurse office', 'school clinic'],
    garden: ['school garden', 'courtyard'], cityhall: ['city hall', 'town hall'],
    market: ['market', 'bazaar'], hospital: ['hospital', 'clinic'],
    station: ['train station', 'railway station', 'rail station'],
    park: ['public park', 'city park'], shop: ['shop', 'store'],
    docks: ['harbor', 'harbour', 'docks', 'port'], village: ['village', 'hamlet'],
    forest: ['forest', 'woodland'], castle: ['castle', 'palace'],
    tower: ['watchtower', 'wizard tower'], ruins: ['ruins', 'ancient ruins'],
    port: ['port town', 'port city'], mountain: ['mountain', 'highlands'],
    cave: ['cave', 'cavern'], bridge: ['bridge']
  };
  const blocks = [
    ...available.map(e=>({text:String(e.content||'').toLowerCase(),source:e.world||'Lorebook',origin:'lorebook',secret:/\[(?:secret|hidden|undiscovered)\]/i.test(String(e.content||'').slice(0,180))})),
    {text:publicCard.toLowerCase(),source:'Character Card',origin:'character',secret:false}
  ];
  for (const pin of markers) {
    if (pin.origin !== 'template') continue;
    const aliases = [pin.name.toLowerCase(),...(knownAliases[pin.id]||[])];
    const found = blocks.find(b=>aliases.some(term=>term && b.text.includes(term.toLowerCase())));
    if (!found) continue;
    pin.origin=found.origin;
    pin.source=found.source;
    pin.discovered=!found.secret;
    pin.estimated=true;
    pin.description=t.templateHint;
  }
  const title = detectedName || ({school:t.schoolPlan, city:t.cityPlan, fantasy:t.fantasyPlan}[kind]);
  // No character is placed at the entrance/port unless the story confirms it.
  const sources = Array.from(new Set([...available.map(e=>e.world||e.source).filter(Boolean), ...extraSourceNames]));
  return {version:2, kind, title, characterName:clean(characterName), markers,
    currentId:null, actors:[], showActors:true, lastSceneSyncId:null, lastSceneTime:'',
    showFog:false, sources, sourceEntryCount:available.length, notes:t.templateHint, syncEnabled:false, lastUpdateId:null};
}
function applyMapUpdate(map, update) {
  if (!update || typeof update !== 'object' || Array.isArray(update)) return false;
  let changed = false;
  const match = name => map.markers.find(m => m.id === name || m.name === name);
  const discovering = Array.isArray(update.discover) ? update.discover.slice(0, 20) : [];
  for (const key of discovering) { const p=match(String(key)); if(p && !p.discovered){p.discovered=true;changed=true;} }
  const adding = Array.isArray(update.add) ? update.add.slice(0, 10) : [];
  for (const it of adding) {
    if (!it || typeof it.name !== 'string' || it.name.trim().length < 2 || map.markers.length > 75) continue;
    if (match(it.name)) continue;
    const i=map.markers.length;
    map.markers.push({id:stableId('ai','AI',it.name,map.markers),name:clean(it.name), type:clean(it.type||'other'),icon:'+',
      x:CLAMP(it.x??(180+(i*123)%675),18,1005),y:CLAMP(it.y??(155+(i*91)%420),18,700),
      description:clean(it.description||''),origin:'assistant',source:'AI',estimated:!(Number.isFinite(it.x)&&Number.isFinite(it.y)),discovered:true});
    changed=true;
  }
  const move = String(update.move || update.current_location || '');
  if(move){const p=match(move);if(p){if(!p.discovered)p.discovered=true;if(map.currentId!==p.id)map.currentId=p.id;changed=true;}}
  return changed;
}
function parseMapUpdates(text) {
  const matches = [...String(text||'').matchAll(/<map_update>\s*([\s\S]{1,6000}?)\s*<\/map_update>/gi)];
  return matches.slice(-4).flatMap(m => {try{const value=JSON.parse(m[1]);return Array.isArray(value)?[]:[value];}catch{return [];}});
}
function normalizeImported(value) {
  if (!value || typeof value !== 'object' || !['school','city','fantasy'].includes(value.kind) || !Array.isArray(value.markers)) throw new Error('Invalid NEON MAP data');
  const base=createMap({forcedKind:value.kind});
  base.title=clean(value.title||base.title);
  base.characterName=clean(value.characterName||'');
  base.markers=value.markers.slice(0,90).filter(x=>x&&typeof x.name==='string').map((x,i)=>({
    id:clean(x.id||('imp'+i)),name:clean(x.name),x:CLAMP(x.x,0,W),y:CLAMP(x.y,0,H),
    icon:clean(x.icon||'P'),type:clean(x.type||'other'),description:clean(x.description||''),
    origin:['lorebook','character','template','manual','assistant','scene'].includes(x.origin)?x.origin:'manual',
    source:clean(x.source||''),discovered:x.discovered!==false,estimated:x.estimated!==false
  }));
  base.currentId=base.markers.some(x=>x.id===value.currentId)?value.currentId:null;
  base.actors=Array.isArray(value.actors)?value.actors.slice(0,22).filter(a=>a && typeof a.name==='string').map((a,i)=>({
    id:clean(a.id||('npc_'+i)),name:clean(a.name),role:['user','char','npc'].includes(a.role)?a.role:'npc',
    locationId:base.markers.some(p=>p.id===a.locationId)?a.locationId:null,
    placeName:clean(a.placeName||''),present:!!a.present,source:clean(a.source||'unknown'),
    detail:clean(a.detail||''),lastKnown:clean(a.lastKnown||'')})):[];
  base.showActors=value.showActors!==false;
  base.lastSceneSyncId=clean(value.lastSceneSyncId||'')||null;
  base.lastSceneTime=clean(value.lastSceneTime||'');
  base.showFog=!!value.showFog;
  base.syncEnabled=!!value.syncEnabled;
  base.sources=Array.isArray(value.sources)?value.sources.slice(0,30).map(clean):[];
  base.sourceEntryCount=CLAMP(value.sourceEntryCount||0,0,1000);
  return base;
}

return {W,H,templatesFor,kindFromTexts,extractPlaces,createMap,applyMapUpdate,parseMapUpdates,normalizeImported};
})();
__nmModules['scene.js']=(()=>{
// NEON MAP: read-only interpretation of confirmed in-chat scene state.
// No model calls; no NPC omniscience; any diagram coordinates are schematic.
const LIM = (n, a, b) => Math.max(a, Math.min(b, n));
const tidy = v => String(v ?? '').trim().replace(/^[\s"'\[({]+|[\s"'\])}]+$/g, '').trim().slice(0, 100);
const sane = v => tidy(v) && !/^(?:-|unknown|none|n\/a|\?|\u0e44\u0e21\u0e48\u0e17\u0e23\u0e32\u0e1a|\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49|\u0e44\u0e21\u0e48\u0e21\u0e35)$/i.test(tidy(v));
const same = (a,b) => tidy(a).toLocaleLowerCase() === tidy(b).toLocaleLowerCase();
const names = raw => {
  if(!sane(raw)) return [];
  return [...new Set(String(raw).split(/[,;\uFF0C\u3001\uFF1B]|\s+\u0e41\u0e25\u0e30\s+|\s+and\s+|\s+&\s+/i)
    .map(tidy).filter(n=>n && n.length<=46 && sane(n) && !/[.!?]/.test(n) && !/\b(?:all|everyone|multiple people)\b/i.test(n)).slice(0,18))];
};
function parseKV(line, prefix) {
  const raw=String(line||'');
  if(!raw.startsWith(prefix+'|')) return null;
  return Object.fromEntries(raw.slice(prefix.length+1).split('|').map(item=>{
    const i=item.indexOf('=');return i<0?[]:[item.slice(0,i).trim().toUpperCase(),tidy(item.slice(i+1))];
  }).filter(p=>p.length===2));
}
function positionClaims(s) {
  if(!sane(s))return [];
  return String(s).split(/[;\uFF1B\n]/).map(v=>v.trim()).flatMap(chunk=>{
    const at=chunk.match(/^([^@:]{1,48})\s*[@:]\s*(.{2,90})$/);
    if(at)return [{who:tidy(at[1]),where:tidy(at[2])}];
    const thai=chunk.match(/^(.{1,40}?)\s+\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\s*(.{2,90})$/);
    if(thai)return [{who:tidy(thai[1]),where:tidy(thai[2])}];
    return [];
  }).filter(x=>sane(x.who)&&sane(x.where)).slice(0,24);
}
function parseNeonState(text) {
  const matches=[...String(text||'').matchAll(/<neon_state\b[^>]*>\s*([\s\S]{1,12000}?)\s*<\/neon_state>/gi)];
  if(!matches.length)return null;
  const lines=matches.at(-1)[1].split(/\r?\n/).map(s=>s.trim());
  const clock=parseKV(lines.find(s=>s.startsWith('CLOCK|')),'CLOCK');
  const now=parseKV(lines.find(s=>s.startsWith('NOW|')),'NOW');
  if(!clock && !now)return null;
  return {loc:sane(clock?.LOC)?tidy(clock.LOC):'',
    time:clock?.TIME||'',pov:sane(now?.POV)?tidy(now.POV):'',
    present:names(now?.PRESENT||''), positions:positionClaims(now?.POS||''),
    act:sane(now?.ACT)?tidy(now.ACT):'',rawNow:now||{},rawClock:clock||{}};
}
function latestSceneFromChat(chat) {
  if(!Array.isArray(chat))return null;
  for(let i=chat.length-1;i>=Math.max(0,chat.length-70);i--){
    const msg=chat[i];if(!msg||msg.is_user)continue;
    const parsed=parseNeonState(msg.mes);if(parsed){
      return {...parsed,stamp:`${i}:${String(msg.swipe_id||0)}:${String(msg.mes||'').length}`,
        messageIndex:i};
    }
  }
  return null;
}
function ensureCast(map,{userName='',charName=''}={}) {
  if(!map || !Array.isArray(map.markers))return false;
  if(!Array.isArray(map.actors))map.actors=[];
  let changed=false;
  for(const [id,name,role] of [['user',userName,'user'],['char',charName,'char']]) {
    if(!name)continue;
    const actor=map.actors.find(a=>a.id===id);
    if(actor){if(actor.name!==name){actor.name=name;changed=true;}}
    else{map.actors.push({id,name:tidy(name),role,locationId:null,placeName:'',present:false,source:'unknown',detail:''});changed=true;}
  }
  map.actors=map.actors.slice(0,22);
  return changed;
}
function roleId(raw,{userName='',charName=''}={}) {
  const value=tidy(raw).toLocaleLowerCase().replace(/[{}]/g,'').trim();
  if(['user','director','protagonist','\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19'].includes(value)||same(value,userName))return 'user';
  if(['char','character','\u0e15\u0e31\u0e27\u0e25\u0e30\u0e04\u0e23\u0e2b\u0e25\u0e31\u0e01'].includes(value)||same(value,charName))return 'char';
  return 'npc:'+value.replace(/\s+/g,'_').slice(0,50);
}
function actorFor(map,raw,nm) {
  const id=roleId(raw,nm);
  let actor=map.actors.find(a=>a.id===id);
  if(actor)return actor;
  if(map.actors.length>=22)return null;
  if(id==='user'||id==='char')return null;
  actor={id,name:tidy(raw),role:'npc',locationId:null,placeName:'',present:false,source:'unknown',detail:''};
  map.actors.push(actor);
  return actor;
}
const indexKey = v => tidy(v).toLocaleLowerCase().replace(/\s+/g,'');
function looksLikeSpecificPlace(s) {
  const str=tidy(s);
  return str && str.length<=70 && sane(str) && !/^(?:\u0e40\u0e02\u0e32|\u0e40\u0e18\u0e2d|\u0e21\u0e31\u0e19|inside|outside|near|somewhere|\u0e1a\u0e23\u0e34\u0e40\u0e27\u0e13|\u0e41\u0e16\u0e27|\u0e02\u0e49\u0e32\u0e07|\u0e43\u0e01\u0e25\u0e49)/i.test(str);
}
function locatePlace(map, input, create = false) {
  const name=tidy(input);
  if(!sane(name)||!map?.markers?.length)return null;
  const needle=indexKey(name);
  let p=map.markers.find(m=>indexKey(m.id)===needle||indexKey(m.name)===needle);
  if(!p){const choices=map.markers.filter(m=>{
    const title=indexKey(m.name);
    return title.length>=4 && (needle.includes(title)||title.includes(needle));
  }).sort((a,b)=>b.name.length-a.name.length);
    if(choices.length) p=choices[0];
  }
  if(p)return p;
  if(!create||!looksLikeSpecificPlace(name)||map.markers.length>=85)return null;
  const i=map.markers.length;
  // A prose location establishes existence, not its geometric coordinates.
  p={id:(()=>{let h=2166136261;for(const c of ('scene|'+name.toLocaleLowerCase())){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return 'scene_'+(h>>>0).toString(36);})(),name,type:'scene',icon:'S',
    x:LIM(130+(i*149)%750,26,1000),y:LIM(110+(i*113)%490,24,700),
    description:'\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e08\u0e32\u0e01\u0e09\u0e32\u0e01\u0e25\u0e48\u0e32\u0e2a\u0e38\u0e14 \u2014 \u0e1e\u0e34\u0e01\u0e31\u0e14\u0e1a\u0e19\u0e1c\u0e31\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13',
    origin:'scene',source:'NEON state',estimated:true,discovered:true};
  map.markers.push(p);
  return p;
}
function syncScene(map, snapshot, namesIn={}) {
  if(!map||!snapshot)return false;
  if(snapshot.stamp && snapshot.stamp===map.lastSceneSyncId)return false;
  const before=JSON.stringify([map.currentId,map.actors,map.markers.length,map.lastSceneSyncId]);
  ensureCast(map,namesIn);
  const primary=locatePlace(map,snapshot.loc,true);
  if(primary){primary.discovered=true;map.currentId=primary.id;
    if(primary.origin==='template'){primary.origin='scene';primary.source='NEON state';}
  }
  const people=[...snapshot.present];
  if(snapshot.pov && !people.some(x=>same(x,snapshot.pov)))people.push(snapshot.pov);
  for(const pos of snapshot.positions)if(!people.some(x=>same(x,pos.who)))people.push(pos.who);
  const active=new Set();
  for(const label of people.slice(0,22)){
    const actor=actorFor(map,label,namesIn);if(!actor)continue;
    active.add(actor.id);
    const specified=snapshot.positions.find(p=>roleId(p.who,namesIn)===actor.id);
    const explicit=specified?locatePlace(map,specified.where,false):null;
    if(explicit?.origin==='template'){explicit.origin='scene';explicit.source='NEON state';}
    const place=explicit||primary;
    actor.present=true;
    actor.locationId=place?.id||null;
    actor.placeName=place?.name||'';
    actor.source=explicit?'explicit':place?'scene':'unknown';
    actor.detail=specified?.where || snapshot.loc || '';
  }
  for(const actor of map.actors){
    if(active.has(actor.id))continue;
    // Do not pin an absent character to their last observed coordinates.
    if(actor.locationId)actor.lastKnown=actor.placeName;
    actor.present=false;actor.locationId=null;actor.placeName='';
    actor.source='unknown';actor.detail='';
  }
  map.lastSceneSyncId=snapshot.stamp||null;
  map.lastSceneTime=snapshot.time||'';
  return before!==JSON.stringify([map.currentId,map.actors,map.markers.length,map.lastSceneSyncId]);
}
function setActorLocation(map,id,placeId) {
  const actor=map?.actors?.find(a=>a.id===id);if(!actor)return false;
  const place=map.markers.find(m=>m.id===placeId)||null;
  if(place){
    actor.present=true;actor.locationId=place.id;actor.placeName=place.name;actor.source='manual';actor.detail='';
    place.discovered=true;
  }else{
    actor.present=false;actor.locationId=null;actor.placeName='';actor.source='unknown';actor.detail='';
  }
  return true;
}
function addManualActor(map,name) {
  if(!map||!sane(name)||tidy(name).length>45)return null;
  if(!Array.isArray(map.actors))map.actors=[];
  return actorFor(map,tidy(name),{});
}

return {parseNeonState,latestSceneFromChat,ensureCast,locatePlace,syncScene,setActorLocation,addManualActor};
})();
__nmModules['tracker.js']=(()=>{
// v0.5 - conservative, deterministic reader for movement actually described in prose.
// This code NEVER calls an LLM, changes the story, or sends information to a model.
const clean = value => String(value ?? '').replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g,' ').trim();
const same = (a,b) => clean(a).toLocaleLowerCase() === clean(b).toLocaleLowerCase();
const escapeRE = s => String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const stripQuotes = text => String(text||'').replace(/[“\u201C][^”\u201D]{0,400}[”\u201D]/g, ' ').replace(/"[^"\n]{0,350}"/g,' ').replace(/[‘\u2018][^’\u2019]{0,350}[’\u2019]/g,' ');
const movementRE = /(?:เดิน\s*จาก|ออกจาก|เดิน\s*ไป(?:ยัง|ที่)?|เดิน\s*เข้า(?:ไป)?(?:ใน|สู่)?|เดิน\s*มาถึง|วิ่ง\s*ไป(?:ยัง|ที่)?|มุ่งหน้า\s*ไป(?:ยัง|ที่)?|ย้าย\s*ไป(?:ยัง|ที่)?|กลับ\s*ไป(?:ยัง|ที่)?|ไป\s*(?:ยัง|ที่)|มา\s*ถึง|เข้า\s*(?:ไป)?(?:ใน|สู่)|arrived\s+at|walked\s+to|went\s+to|moved\s+to|entered)\s*/giu;
const locationSignal = /(?:อาคาร|ชั้น|ห้อง|โรงเรียน|โรงอาหาร|โรงพยาบาล|ห้องสมุด|หอพัก|สนาม|สวน|สถานี|ตลาด|เมือง|หมู่บ้าน|ป่า|ถนน|ร้าน|ประตู|โรงแรม|ปราสาท|หอคอย|จุด|พื้นที่|เขต|หาด|school|building|floor|room|library|canteen|hospital|station|park|garden|castle|city|town|market|cafe|dormitory|gate|point|area)/iu;
const endBoundary = /(?:[,\n\r.!?。]|\s+(?:before|after|while|then|and|but)\s+|(?:จากนั้น|ต่อมา|ก่อนจะ|ขณะที่|ระหว่างที่|เพื่อจะ|และเดิน|แล้วเดิน|แล้ววิ่ง|แล้ว(?=[^\n,.!?]{0,35}(?:เดิน|วิ่ง|ไป|เข้า|มาถึง))|แล้วก็|จนกระทั่ง))/giu;
const notActual = /(?:ไม่|ไม่ได้|ยังไม่|คิดจะ|อยากจะ|อยาก|หวังว่า|คงจะ|อาจจะ|จะ|วางแผน|ถ้า|ห้าม|ตั้งใจ|almost|might|would|wants?\s+to|plans?\s+to|didn't|never)\s*$/iu;
function findActor(prefix, names) {
  let best=null;
  for (const person of names) {
    const name=clean(person.name);
    if(!name || name.length<2) continue;
    // Require an explicit speaker/actor in the same local clause, not a bare pronoun.
    const re = new RegExp(escapeRE(name), 'giu');
    for(const m of prefix.matchAll(re)){
      const end=m.index+m[0].length;
      if(prefix.length-end>72)continue;
      if(!best || end>best.end)best={name:person.name,end};
    }
  }
  return best;
}
function extractTarget(text){
  let value=clean(text).replace(/^(?:ยัง|ที่|ใน|ไป|มา|สู่|ถึง|from|the)\s*/iu,'');
  const end=endBoundary.exec(value);endBoundary.lastIndex=0;
  if(end)value=value.slice(0,end.index);
  value=value.replace(/(?:\s+(?:ด้วย|พร้อมกับ|โดย|กับ)\s+.+)$/u,'').trim();
  // Avoid long speculative descriptions; only accept place-like phrases.
  if(value.length<2 || value.length>70 || !locationSignal.test(value))return '';
  if(/^(?:ที่นั่น|แถวนั้น|ข้างหน้า|ตรงนั้น|ใกล้ๆ|somewhere)$/iu.test(value))return '';
  return value;
}
function extractRouteEvents(prose,{userName='',charName='',npcNames=[]}={}) {
  const known = [{name:userName,role:'user'}, {name:charName,role:'char'}, ...npcNames.map(name=>({name,role:'npc'}))].filter(v=>clean(v.name).length>=2);
  const sections=stripQuotes(prose).split(/(?:[.!?。]+|\n+)/u).filter(Boolean);
  const output=[];
  let offset=0;
  for(const section of sections){
    const re=new RegExp(movementRE.source,movementRE.flags);let matched;
    let carry=null;
    while((matched=re.exec(section))){
      const prefix=section.slice(Math.max(0,matched.index-110),matched.index);
      const person=findActor(prefix,known);
      if(person){carry=person;}
      else if(!carry)continue;
      // If a different actor is mentioned after the carried actor, attribution becomes ambiguous.
      const near=prefix.slice(Math.max(0,prefix.length-70));
      if(!person && known.some(p=>!same(p.name,carry.name)&&near.includes(p.name)))continue;
      if(notActual.test(prefix.slice(-24)))continue;
      let target=extractTarget(section.slice(re.lastIndex,re.lastIndex+110));
      // Walk FROM x TO y: treat the destination rather than the source as the move.
      if(/(?:เดิน\s*จาก|ออกจาก)/iu.test(matched[0])){
        const after=section.slice(re.lastIndex,re.lastIndex+110);
        const m=after.match(/(?:ไป(?:ยัง|ที่)?|สู่|towards?)\s*([^\n,.!?]{2,70})/iu);
        target=m?extractTarget(m[1]):'';
      }
      if(!target)continue;
      const role=known.find(p=>same(p.name,carry.name))?.role||'npc';
      output.push({who:carry.name,role,where:target,offset:offset+matched.index,source:'story'});
      if(output.length>=36)return output;
    }
    offset+=section.length+1;
  }
  return output;
}

// Conservative new NPC discovery from explicitly NAMED movements.
// Only role-title + name (Thai) or a titled Latin name is accepted. Bare
// pronouns, quoted plans, and arbitrary words never create new NPCs.
function findNewNpcNames(prose,{userName='',charName=''}={}) {
  const text=stripQuotes(prose).replace(/<neon_state\b[^>]*>[\s\S]*?<\/neon_state>/giu,'');
  const pattern=/(?:^|[\s\n.,!?])((?:ครู|อาจารย์|คุณหมอ|หมอ|คุณ|นาย|นาง|ตำรวจ|เจ้าหน้าที่)\s*[\p{Script=Thai}]{2,20}?|(?:Mr\.|Mrs\.|Ms\.|Dr\.|Professor|Officer)\s+[A-Z][a-z]{2,28})(?=\s*(?:เดิน|วิ่ง|มุ่งหน้า|เข้า|ออก|ย้าย|กลับ|ไปยัง|arrived|walked|went|entered|moved))/giu;
  const found=[];let m;
  while((m=pattern.exec(text))){
    const candidate=clean(m[1]);
    if(candidate.length>38||candidate.length<4||same(candidate,userName)||same(candidate,charName))continue;
    if(/(?:ทุกคน|คนหนึ่ง|หลายคน|กลุ่ม|พวก|หน้าที่)$/.test(candidate))continue;
    // Reject movements negated by immediate local context.
    const suffix=text.slice(pattern.lastIndex,pattern.lastIndex+65);
    if(/^(?:\s*ไม่|\s*ไม่ได้|\s*ยังไม่)/u.test(suffix))continue;
    if(!found.includes(candidate))found.push(candidate);
    if(found.length>=12)break;
  }
  return found;
}

// Optional structured scene banners, only when POV is named explicitly.
function extractSceneHeaders(prose,{userName='',charName=''}={}) {
  const out=[];
  const re=/\[SCENE\|([^\]\n]{3,360})\]/giu;let m;
  while((m=re.exec(String(prose||'')))){
    const props=Object.fromEntries(m[1].split('|').map(segment=>{const i=segment.indexOf('=');return i<0?[]:[segment.slice(0,i).trim().toUpperCase(),clean(segment.slice(i+1))];}).filter(x=>x.length===2));
    const place=props.LOC||props.LOCATION||props.PLACE||'';
    const point=props.POV||props.FOCAL||'';
    const who=same(point,userName)||/^(user|\{\{user\}\})$/iu.test(point)?userName:same(point,charName)||/^(char|\{\{char\}\})$/iu.test(point)?charName:'';
    if(who&&place&&locationSignal.test(place))out.push({who,role:same(who,userName)?'user':'char',where:place,offset:m.index,source:'SCENE'});
  }
  return out;
}

// v0.7: Conservative player-action reader. User text is never sent back to a
// model. An instruction to the narrator or a future plan is not a confirmed
// movement. Explicit first-person / *action* directions are accepted.
function extractUserRouteEvents(text,{userName='',charName=''}={}){
 const raw=String(text||'');if(!raw.trim()||!clean(userName))return [];
 const named=extractRouteEvents(raw,{userName,charName,npcNames:[]}).filter(x=>x.role==='user')
  .map(x=>({...x,source:'user-action'}));
 // Keep action clauses short. Only a line beginning with a player-action
 // formulation qualifies. No third-person narration or generated directives.
 const lines=raw.split(/[\r\n]+/);let offset=0;const bare=[];
 const starts=/^\s*(?:\*+\s*)?(?:(?:ฉัน|เรา|ผม|ดิฉัน|ข้า|I)\s*)?(?:เดิน\s*ไป(?:ยัง|ที่)?|เดิน\s*เข้า(?:ไป)?(?:ใน|สู่)?|วิ่ง\s*ไป(?:ยัง|ที่)?|มาถึง|กลับ\s*ไป(?:ยัง|ที่)?|ไป\s*(?:ยัง|ที่)|เข้าห้อง|(?:I\s+)?(?:walk(?:ed)?\s+to|went\s+to|enter(?:ed)?))\s*/iu;
 for(const line of lines){
  const chunk=stripQuotes(line).trim();
  // Explicit plans, imperatives to other characters, and quoted speech are excluded.
  if(/^(?:ไม่|ไม่ได้|ยังไม่|จะ|อยาก|คิดจะ|ถ้า|ให้|ขอให้|ช่วย|สมมติ|if |please |make |could |would |I want|I plan)/iu.test(chunk)){offset+=line.length+1;continue;}
  if(!starts.test(chunk) || !/^(?:\*|ฉัน|เรา|ผม|ดิฉัน|ข้า|I\b|เดิน|วิ่ง|มาถึง|กลับ|ไป|เข้า)/iu.test(chunk)){
   offset+=line.length+1;continue;
  }
  const synthetic=userName+' '+chunk.replace(/^\*+|\*+$/g,'').trim();
  const events=extractRouteEvents(synthetic,{userName,charName,npcNames:[]});
  for(const event of events)if(event.role==='user')bare.push({...event,offset:offset+event.offset,source:'user-action'});
  offset+=line.length+1;
 }
 return [...named,...bare].sort((a,b)=>a.offset-b.offset)
  .filter((event,i,array)=>!i||event.where!==array[i-1].where||Math.abs(event.offset-array[i-1].offset)>10).slice(0,18);
}

return {extractRouteEvents,findNewNpcNames,extractSceneHeaders,extractUserRouteEvents};
})();
__nmModules['lore-style.js']=(()=>{
// Deterministic, read-only style inference from linked Character Card and World Info.
// No extra model calls, no prompt injection into the roleplay model.
// Active AU lorebooks take precedence over old Character Card world history when they
// explicitly describe a different setting. Generic AU mechanics are additive.

const THEMES = [
  {id:'fantasy', label:'fantasy', cues:['fantasy','magic','magical','wizard','mage','sorcerer','kingdom','elf','dragon','medieval fantasy','เวท','แฟนตาซี','พ่อมด','จอมมาร','ปราสาท'], visual:'a believable fantasy setting, with timber, stonework, lanterns, and crafted details where appropriate'},
  {id:'modern', label:'contemporary', cues:['modern','present-day','present day','contemporary','current day','21st century','today','apartment','condominium','police station','office','city apartment','urban','ปัจจุบัน','ทันสมัย','คอนโด','อพาร์ตเมนต์','ตำรวจ','ตึกสำนักงาน'], visual:'a contemporary real-world setting, with practical architecture, everyday furniture, and current technology'},
  {id:'historical', label:'historical', cues:['historical','victorian','regency','renaissance','arabian nights','sultan','ancient empire','period drama','imperial court','medieval kingdom','ยุคโบราณ','ย้อนยุค','ยุควิกตอเรีย','สุลต่าน','ราชสำนัก','ฮาเร็ม'], visual:'a historical setting with period-appropriate architecture, rugs, drapery, carved wood, and handcrafted objects'},
  {id:'scifi', label:'sci-fi', cues:['science fiction','sci-fi','cyberpunk','spaceship','space station','futuristic','android','robot society','starship','ไฮเทค','ยานอวกาศ','ไซเบอร์พังก์','โลกอนาคต'], visual:'a science-fiction setting with modular rooms, screens, technology, and clean futuristic forms'},
  {id:'school', label:'school', cues:['high school','school campus','classroom','student dorm','japanese high school','academy','university','โรงเรียน','มัธยม','โรงเรียนญี่ปุ่น','มหาวิทยาลัย','หอพักนักเรียน'], visual:'an educational campus setting with classrooms, study desks, dorms, corridors, and modest everyday details'},
  {id:'horror', label:'horror', cues:['horror','haunted','eerie','abandoned house','ghostly','survival horror','haunted mansion','creepy','สยอง','สยองขวัญ','หลอน','บ้านผีสิง','เอาชีวิตรอด'], visual:'a suspenseful, eerie setting with atmospheric shadows and subtle lived-in wear'},
];
const ROLES=[
  {id:'police', cues:['police officer','detective','investigator','police','ตำรวจ','นักสืบ'], visual:'a functional space with practical files, storage, notes, or work equipment when suitable'},
  {id:'mage', cues:['mage','wizard','sorcerer','alchemist','witch','พ่อมด','แม่มด','นักเวท'], visual:'a personal space with books, study materials, or magical craft details where lore permits'},
  {id:'student', cues:['student','high schooler','university student','นักเรียน','นักศึกษา'], visual:'an everyday student space with books, study furniture, or a bag'},
  {id:'noble', cues:['noble','prince','princess','sultan','queen','king','aristocrat','เจ้าชาย','เจ้าหญิง','ขุนนาง','สุลต่าน'], visual:'a more comfortable room with tasteful decorative objects appropriate to the character status'},
  {id:'doctor', cues:['doctor','physician','nurse','medic','หมอ','แพทย์','พยาบาล'], visual:'a practical, orderly medical or professional space when appropriate'},
  {id:'artist', cues:['artist','actor','musician','painter','นักแสดง','นักดนตรี','ศิลปิน'], visual:'an individualized creative space with props, instruments, or art supplies'},
];
const DECOR=[
  {id:'tidy', cues:['tidy','neat','organized','orderly','meticulous','เรียบร้อย','สะอาด','เป็นระเบียบ','เจ้าระเบียบ'], visual:'neat organization and restrained clutter'},
  {id:'messy', cues:['messy','disorganized','cluttered','untidy','รก','ไม่เป็นระเบียบ','ยุ่งเหยิง'], visual:'some lived-in clutter and imperfect organization'},
  {id:'minimal', cues:['minimalist','minimal decor','sparse','austere','มินิมอล','เรียบง่าย','สมถะ'], visual:'restrained furnishing and generous open space'},
  {id:'luxury', cues:['luxurious','opulent','lavish','wealthy','richly furnished','หรูหรา','ฟุ่มเฟือย','โอ่อ่า'], visual:'richer materials and well-chosen decorative furnishings'},
  {id:'cozy', cues:['cozy','homely','warmhearted','อบอุ่น','น่าอยู่','สบายๆ','สบายใจ'], visual:'a soft, welcoming, comfortably lived-in arrangement'},
];
const LOW_PRIORITY=new Set(['horror','school']);
const negation = /(?:\b(?:no|never|not|without|non|neither|avoid|rather than|instead of|isn't|aren't|cannot|can't|doesn't|don't|unlike)\b|ไม่ใช่|ไม่ใช่โลก|ไม่มี|ไม่เอา|ห้าม|ปราศจาก|ไม่เคย|ไม่ต้องการ|ปฏิเสธ)(?:[\s\p{L}\p{M}\p{N}.,-]{0,46})$/iu;
const boundary=(s,i,n)=>{
  const a=i>0?s[i-1]:'';const b=s[i+n]||'';
  const latin=(c)=>/[a-z0-9]/i.test(c);
  return !latin(a)&&!latin(b);
};
function scoreTerms(text, definitions){
  const result=new Map(definitions.map(x=>[x.id,0]));
  const lower=String(text||'').toLowerCase().slice(0,40000);
  for(const item of definitions){
    let hits=0;
    for(const cue of item.cues){
      const term=cue.toLowerCase();let at=0;
      while((at=lower.indexOf(term,at))>=0){
        if(boundary(lower,at,term.length)){
          const preceding=lower.slice(Math.max(0,at-52),at);
          // Negative claims such as "never a wizard" must not establish fantasy.
          hits += negation.test(preceding)?-1:1;
        }
        at+=term.length;
        if(hits>6||hits< -6)break;
      }
    }
    result.set(item.id,Math.max(-6,Math.min(6,hits)));
  }
  return result;
}
const lexical=v=>String(v||'').slice(0,40000);
const choose=(scores, fallback, defs)=>{
  const ranked=defs.map((x,i)=>({id:x.id,score:scores[x.id]||0,i})).sort((a,b)=>b.score-a.score||a.i-b.i);
  return ranked[0]?.score>0?ranked[0].id:fallback;
};
function addScores(target,source,weight){for(const [id,v] of source)target[id]=(target[id]||0)+v*weight;}
function weightBook(name){
  const s=String(name||'');
  if(/(?:\bau\b|world\s*rewrite|full\s*rewrite|alternate\s*universe|เวิร์ส|โลกคู่ขนาน)/i.test(s))return 6;
  return 2;
}
function inferStyleProfile({characterName='',characterText='',entries=[],extraSourceNames=[],baseKind='' }={}){
  const card=lexical(`${characterName}\n${characterText}`);
  const group=new Map();
  for(const e of (Array.isArray(entries)?entries:[]).slice(0,400)){
    const name=String(e?.world||'linked world info');
    const text=`${e?.comment||''}\n${lexical(e?.content||'').slice(0,1100)}`;
    group.set(name,(group.get(name)||'')+'\n'+text);
  }
  // Book names are useful when the content describes only mechanics (e.g. a school AU).
  const allBooks=new Set([...group.keys(),...(extraSourceNames||[])]);
  for(const name of allBooks)group.set(name,`${name}\n${group.get(name)||''}`);
  const cardThemes=scoreTerms(card,THEMES);
  const epochScores={};const totalScores={};
  addScores(totalScores,cardThemes,1);
  for(const [book,txt] of group){
    const scores=scoreTerms(txt,THEMES),w=weightBook(book);
    addScores(totalScores,scores,w);
    if(w>2)addScores(epochScores,scores,w);
  }
  // Explicit AU setting overrides older card backstory only when AU has a positive setting.
  const mainEpochs=['fantasy','modern','historical','scifi'];
  const auEpoch=choose(epochScores,null,THEMES.filter(x=>mainEpochs.includes(x.id)));
  const globalEpoch=choose(totalScores,null,THEMES.filter(x=>mainEpochs.includes(x.id)));
  const baseFallback=baseKind==='school'?'modern':baseKind==='city'?'modern':'neutral';
  let setting=auEpoch || globalEpoch || baseFallback;
  // A school/horror AU describes the place or mood and need not erase the era.
  const school=(totalScores.school||0)>0 || baseKind==='school';
  const horror=(totalScores.horror||0)>0;
  if(!auEpoch&&!globalEpoch&&school)setting='modern';
  const fullRewrite=[...group].some(([name,txt])=>weightBook(name)>=6 && /(?:full\s*rewrite|complete\s*rewrite|overwrite\s*(?:all|the)\s*(?:character|card|backstory)|เขียนใหม่ทั้งหมด|แทนที่ประวัติ)/i.test(txt));
  const roleScore={};const decorScore={};
  // Full Rewrite AUs replace the Character Card's old world and role, but keep personality cues.
  if(!fullRewrite)addScores(roleScore,scoreTerms(card,ROLES),3);
  addScores(decorScore,scoreTerms(card,DECOR),3);
  for(const [name,txt] of group){
    const w=weightBook(name)>=6?4:1;
    addScores(roleScore,scoreTerms(txt,ROLES),w);
    addScores(decorScore,scoreTerms(txt,DECOR),w);
  }
  const role=choose(roleScore,'general',ROLES);
  const decor=choose(decorScore,'balanced',DECOR);
  const theme=THEMES.find(x=>x.id===setting);
  const roleDef=ROLES.find(x=>x.id===role);
  const decorDef=DECOR.find(x=>x.id===decor);
  const moods=[school?'school/campus':'',horror?'horror/suspense':''].filter(Boolean);
  const settingCue=[theme?.visual||'a believable setting matching the written lore', school&&setting!=='school'?'include educational or dorm details only where the place calls for them':'',horror?'use a subtle ominous mood when the current place justifies it':''].filter(Boolean).join('; ');
  return {
    schema:2,setting,role,decor,school,horror,
    roomCue:roleDef?.visual||'furniture and useful items appropriate to the character and the current room',
    decorCue:decorDef?.visual||'lived-in furnishings; not a fixed canon inventory',
    settingCue,palette:setting==='fantasy'?'earthy fantasy hues':setting==='scifi'?'cool futuristic tones':setting==='historical'?'warm handcrafted hues':setting==='modern'?'natural present-day colors':'palette suited to the described world',
    summary:[setting,...moods,role,decor].filter(Boolean).join(' / '),
    evidence:{linkedBooks:[...allBooks].slice(0,24),auOverride:!!auEpoch,signal:auEpoch?'linked AU':globalEpoch?'lore and card':'fallback',fullRewrite},
  };
}

return {inferStyleProfile};
})();
__nmModules['atlas.js']=(()=>{
// NEON MAP v0.4: local-only, deterministic spatial atlas.
// Never calls a model and never injects prompts. Locations are schematic.
const {createMap, kindFromTexts}=__nmModules['engine.js'];
const {parseNeonState}=__nmModules['scene.js'];
const {inferStyleProfile}=__nmModules['lore-style.js'];
const {extractRouteEvents, extractSceneHeaders, findNewNpcNames, extractUserRouteEvents}=__nmModules['tracker.js'];
const L={
 school:'\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19',city:'\u0e40\u0e21\u0e37\u0e2d\u0e07',village:'\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19',
 building:'\u0e2d\u0e32\u0e04\u0e32\u0e23',floor:'\u0e0a\u0e31\u0e49\u0e19',room:'\u0e2b\u0e49\u0e2d\u0e07',
 meeting:'\u0e2b\u0e49\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21',library:'\u0e2b\u0e49\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e14',
 infirmary:'\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25',canteen:'\u0e42\u0e23\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23',
 dorm:'\u0e2b\u0e2d\u0e1e\u0e31\u0e01',hospital:'\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25',
 castle:'\u0e1b\u0e23\u0e32\u0e2a\u0e32\u0e17',street:'\u0e16\u0e19\u0e19',district:'\u0e40\u0e02\u0e15',
};
const TRIM=v=>String(v??'').replace(/[\r\n\t]+/g,' ').replace(/\s+/g,' ').trim().replace(/^[\[\("']+|[\]\)"']+$/g,'').slice(0,120);
const fold=v=>TRIM(v).toLocaleLowerCase().replace(/[\s\-_]+/g,'');
const same=(a,b)=>!!a&&!!b&&fold(a)===fold(b);
const hash=text=>{let h=2166136261;for(const c of String(text)){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return (h>>>0).toString(36);};
const idFor=(p,n)=>p+'_'+hash(n);
const clone=v=>JSON.parse(JSON.stringify(v));
const valid=v=>{const x=TRIM(v);return x.length>=2&&x.length<100&&!/^(?:-|unknown|none|null|n\/a|\?)$/i.test(x);};
const safeNext=arr=>Array.isArray(arr)?arr:[];
const matchName=(a,b)=>same(a,b)||((fold(a).length>=5&&fold(b).length>=5)&&(fold(a).includes(fold(b))||fold(b).includes(fold(a))));
const placeSeed=(n,s=0)=>({x:Math.max(70,Math.min(950,Math.round(510+Math.cos(n*2.39+s*.61)*(80+Math.sqrt(n+1)*62)))) ,y:Math.max(65,Math.min(655,Math.round(340+Math.sin(n*2.39+s*.61)*(65+Math.sqrt(n+1)*47))))});
const areaSeed=(n,s=0)=>({x:Math.round(560+Math.cos(n*2.4+s*.4)*(195+Math.sqrt(n)*170)),y:Math.round(390+Math.sin(n*2.4+s*.4)*(170+Math.sqrt(n)*130))});
const NUM_WORDS={'\u0e2b\u0e19\u0e36\u0e48\u0e07':1,'\u0e2a\u0e2d\u0e07':2,'\u0e2a\u0e32\u0e21':3,'\u0e2a\u0e35\u0e48':4,'\u0e2b\u0e49\u0e32':5,'\u0e2b\u0e01':6};
const explicitSiteRE=/(?:\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19|\u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22|\u0e40\u0e21\u0e37\u0e2d\u0e07|\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19|school|campus|town|city|village|point|\u0e08\u0e38\u0e14|\u0e1e\u0e37\u0e49\u0e19\u0e17\u0e35\u0e48|\u0e2a\u0e27\u0e19\u0e2a\u0e32\u0e18\u0e32\u0e23\u0e13\u0e30)\s*[^\s,;|]{0,30}/i;
const explicitBuildingRE=/(?:\u0e2d\u0e32\u0e04\u0e32\u0e23(?:\u0e40\u0e23\u0e35\u0e22\u0e19)?|\u0e15\u0e36\u0e01|\u0e2b\u0e2d\u0e1e\u0e31\u0e01|building|dormitory|tower)\s*(?:\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02)?\s*[\p{L}\p{M}\p{N}\-]{0,22}/iu;
const ROOM_NAMES=['\u0e2b\u0e49\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e14','\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25','\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e31\u0e01\u0e04\u0e23\u0e39','\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19','\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33','\u0e2b\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e27','\u0e2b\u0e49\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21'];

function parseFloor(raw){
 const s=TRIM(raw);const m=s.match(/(?:\u0e0a\u0e31\u0e49\u0e19|floor|level)\s*(?:[:#\-]?\s*)(-?\d{1,2}|\u0e2b\u0e19\u0e36\u0e48\u0e07|\u0e2a\u0e2d\u0e07|\u0e2a\u0e32\u0e21|\u0e2a\u0e35\u0e48|\u0e2b\u0e49\u0e32|\u0e2b\u0e01)/i);
 if(m){const v=/^-?\d+$/.test(m[1])?Number(m[1]):NUM_WORDS[m[1]];return v>=-4&&v<=99?String(v):null;}
 if(/\u0e0a\u0e31\u0e49\u0e19\u0e25\u0e48\u0e32\u0e07|ground floor/i.test(s))return '1';
 if(/\u0e0a\u0e31\u0e49\u0e19\u0e43\u0e15\u0e49\u0e14\u0e34\u0e19|basement/i.test(s))return '-1';
 return null;
}
function parseRoom(raw){
 const s=TRIM(raw);if(!s)return null;
 // Exact room numbers have priority. A short word such as "room" alone is never a room name.
 let m=s.match(/(?:\u0e2b\u0e49\u0e2d\u0e07(?:\u0e40\u0e23\u0e35\u0e22\u0e19)?|room)\s*(?:\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02|\u0e40\u0e25\u0e02\u0e17\u0e35\u0e48|number|no\.|#|:)?\s*([0-9A-Za-z][0-9A-Za-z\/-]{0,12})/i);
 if(m)return TRIM(m[0]);
 for(const r of ROOM_NAMES){if(s.includes(r)){if(r.endsWith('\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21')){
   const k=s.match(/\u0e2b\u0e49\u0e2d\u0e07\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21[\p{L}\p{M}\p{N}\s]{0,20}/u);return TRIM(k?.[0]||r).split(/(?:\u0e0a\u0e31\u0e49\u0e19|\u0e2d\u0e32\u0e04\u0e32\u0e23)/)[0].trim();}
   return r;}}
 const named=s.match(/\u0e2b\u0e49\u0e2d\u0e07\s*([\p{L}\p{M}\p{N}]{2,30})/u);
 if(named && !/^\u0e17\u0e35\u0e48|\u0e19\u0e35\u0e49|\u0e19\u0e31\u0e49\u0e19/.test(named[1]))return TRIM(named[0]);
 const english=s.match(/\b(?:library|bedroom|bathroom|classroom|meeting room|infirmary)\b/i);
 return english?english[0]:null;
}
function newAreaCandidate(v,atlas,prevArea){
 const explicit=v.match(explicitSiteRE)?.[0]||'';
 if(!explicit||!/\S/.test(explicit))return null;
 const existing=atlas.areas.find(a=>matchName(a.name,explicit));
 if(existing)return existing;
 if(matchName(explicit,atlas.root.name))return atlas.areas[0];
 if((atlas.kind==='school'||atlas.root.name.includes(L.school)) && /^\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19$/.test(explicit))return atlas.areas[0];
 // Single generic mention of school/area is not evidence of a NEW site.
 if(fold(explicit).length<=3 && !/[0-9A-Za-z]/.test(explicit))return null;
 if(prevArea==='area_root' && atlas.root.name.startsWith(explicit))return atlas.areas[0];
 return {id:idFor('area',explicit),name:explicit};
}
function recognizedBuilding(site,v){
 const pins=(site?.markers||[]).filter(p=>p.name && p.name.length>=3).sort((a,b)=>b.name.length-a.name.length);
 return pins.find(p=>fold(v)===fold(p.name)||fold(v).includes(fold(p.name))&&fold(p.name).length>=4)||null;
}
function buildingToken(v){
 const m=v.match(explicitBuildingRE);if(!m)return null;
 const val=TRIM(m[0]).split(/(?:\u0e0a\u0e31\u0e49\u0e19|\u0e2b\u0e49\u0e2d\u0e07|floor|room|\,|\;)/i)[0];
 return val.length>=3?val:null;
}
function extractLocation(raw,atlas,base=null){
 const value=TRIM(raw);if(!valid(value)||!atlas)return null;
 const prev=base||atlas.current||{};
 const room=parseRoom(value),floor=parseFloor(value);
 let areaId=prev.areaId||'area_root';
 const possible=newAreaCandidate(value,atlas,areaId);
 if(possible)areaId=possible.id;
 const sameArea=areaId===prev.areaId;
 const site=areaId==='area_root'?atlas.root:(atlas.sites?.[areaId]||{});
 const foundPin=recognizedBuilding(site,value);
 // A lore POI explicitly declared as a room stays a ROOM; it does not replace its building.
 const known=foundPin?.type==='room'?null:foundPin;
 const specified=buildingToken(value);
 let buildingId=sameArea?(prev.buildingId??null):null;
 let buildingName=sameArea?(prev.buildingName??null):null;
 if(known){buildingId=known.id;buildingName=known.name;}
 else if(specified){buildingName=specified;buildingId=idFor('building',areaId+'|'+fold(specified));}
 // A room name by itself MUST NOT become a new building.
 // Named sites such as libraries are only buildings when a matching explicit site marker exists.
 const sameBuilding=sameArea && buildingId===prev.buildingId;
 const floorId=floor!==null?floor:(sameBuilding?(prev.floorId??null):null);
 let roomId=room||null;
 const roomIsSite=known && room && same(known.name,room) && !specified;
 if(roomIsSite)roomId=null;
 const enteringBuilding=(known||specified)&&!room && floor===null;
 if(!roomId && !enteringBuilding && floor===null && sameBuilding)roomId=prev.roomId??null;
 if(enteringBuilding)roomId=null;
 // Entering a new floor without specifying a room clears the prior room.
 if(floor!==null && floorId!==prev.floorId && !room)roomId=null;
 if(!sameBuilding && !room)roomId=null;
 return {areaId,buildingId,floorId,roomId,buildingName,raw:value,verified:'scene'};
}
function baseSite(b){return {id:'area_root',name:b.title||b.characterName||'WORLD',kind:b.kind||'city',markers:clone(b.markers||[]),estimated:true};}
function cleanBaseMarker(p){return {...p,known:p.origin!=='template',discovered:false};}
function createAtlas({characterName='Character',characterText='',entries=[],forcedKind=null,extraSourceNames=[],seed=0,revealLore=false}={}){
 // Discovered-only is the default: read lore for SETTING TYPE, not to reveal secret place names.
 const inferred=forcedKind || kindFromTexts([characterText,...entries.slice(0,350).map(e=>`${e.comment||''} ${String(e.content||'').slice(0,1000)}`)]);
 const base=createMap({characterName,characterText:revealLore?characterText:'',entries:revealLore?entries:[],forcedKind:inferred,extraSourceNames});
 const root=baseSite(base);root.markers=root.markers.map(cleanBaseMarker);
 const styleProfile=inferStyleProfile({characterName,characterText,entries,extraSourceNames,baseKind:base.kind});
 return {version:10,kind:base.kind,title:base.title,characterName,root,baseRoot:clone(root),
  areas:[{id:'area_root',name:root.name,kind:base.kind,x:600,y:410,known:true,discovered:true,estimated:true}],sites:{},rooms:{},
  current:{areaId:'area_root',buildingId:null,floorId:null,roomId:null,raw:'',turn:0},browse:null,actors:[],journal:[],journalTexts:[],turns:0,
  signatures:[],replyIndices:[],auditCursor:0,lastScanIndex:0,lastBotIndex:-1,lastBotSignature:'',extraBooks:[],seed,showFog:true,revealLore:!!revealLore,followUser:true,autoOpen:true,view:1,manual:[],sources:extraSourceNames,
  interactiveRooms:true,dynamicRoomContext:false,styleProfile,roomStages:{},placePins:[],placeTarget:null,
  sourceEntryCount:entries.length,pendingReset:false,status:'',lastTime:'',initialized:true};
}
function fromOld(old){if(!old||!Array.isArray(old.markers))return null;const a=createAtlas({characterName:old.characterName,forcedKind:old.kind||'city'});
 a.root.markers=clone(old.markers).map(cleanBaseMarker);a.root.name=old.title||a.root.name;a.baseRoot=clone(a.root);a.title=a.root.name;a.areas[0].name=a.title;return a;}
function collectManual(a){const found=[];
 for(const [areaId,site] of [['area_root',a.root],...Object.entries(a.sites||{})]){
  for(const p of site?.markers||[])if(p.origin==='manual')found.push({areaId,point:clone(p),areaName:a.areas.find(x=>x.id===areaId)?.name||''});
 }
 return found;
}
function normalizeAtlas(value){if(!value||![3,4,5,6,7,8,9,10].includes(value.version)||!Array.isArray(value.areas)||!value.root||!Array.isArray(value.root.markers))return null;
 const a=clone(value);a.actors=safeNext(a.actors);a.journal=safeNext(a.journal);a.signatures=safeNext(a.signatures);
 a.sites=a.sites||{};a.rooms=a.rooms||{};a.manual=safeNext(a.manual);a.extraBooks=safeNext(a.extraBooks);a.showFog=a.showFog!==false;
 a.revealLore=a.revealLore===true;a.journalTexts=safeNext(a.journalTexts);
 a.followUser=a.followUser!==false;a.autoOpen=a.autoOpen!==false;a.view=Math.max(0,Math.min(3,Number(a.view)||0));a.browse=a.browse||null;
 a.roomStages=typeof a.roomStages==='object'&&!Array.isArray(a.roomStages)&&a.roomStages?a.roomStages:{};
 a.interactiveRooms=a.interactiveRooms!==false; a.dynamicRoomContext=a.dynamicRoomContext===true; a.styleProfile=a.styleProfile||inferStyleProfile({characterName:a.characterName,extraSourceNames:a.sources||[],baseKind:a.kind});
 if(a.version===3){const oldManual=collectManual(a);const have=new Set(a.manual.map(x=>x.point?.id));
  for(const op of oldManual)if(!have.has(op.point.id))a.manual.push(op);
  a.baseRoot=clone(a.root);a.baseRoot.markers=a.baseRoot.markers.filter(p=>p.origin!=='manual'&&p.origin!=='scene'||['block1','block2','library','canteen','gate','football','gym','infirmary','garden'].includes(p.id)).map(cleanBaseMarker);
  a.version=7;a.signatures=['v3-migrate-replay'];
 }
 if(!a.baseRoot){a.baseRoot=clone(a.root);a.baseRoot.markers=a.baseRoot.markers.filter(p=>p.origin!=='manual'&&p.origin!=='scene').map(cleanBaseMarker);}
 if(a.version>=4 && a.version<=6){a.version=7;a.signatures=['v07-migrate-replay'];a.lastScanIndex=null;a.lastBotIndex=-1;a.lastBotSignature='';}
 if(a.version===7){a.version=8; if(a.lastScanIndex==null){a.lastBotIndex=-1;a.lastBotSignature='';}}
 if(a.version===8){a.version=9;}
 if(a.version===9)a.version=10;
 a.placePins=safeNext(a.placePins);a.placeTarget=a.placeTarget||null;
 a.replyIndices=safeNext(a.replyIndices);a.auditCursor=Number.isInteger(a.auditCursor)?a.auditCursor:0;
 if(!Number.isInteger(a.lastScanIndex)||a.lastScanIndex<0){a.lastScanIndex=null;a.lastBotIndex=-1;a.lastBotSignature='';}
 compactJournal(a);return a;
}
function area(atlas,id,name,{discovered=false}={}){
 let a=atlas.areas.find(x=>x.id===id);if(!a){if(atlas.areas.length>=400)return atlas.areas[0];
  a={id,name:TRIM(name)||'Unknown',kind:kindFromTexts([name]),...areaSeed(atlas.areas.length,atlas.seed),estimated:true,known:true,discovered};
  atlas.areas.push(a);atlas.sites[id]={id,name:a.name,kind:a.kind,markers:[],estimated:true};}
 if(discovered)a.discovered=true;return a;
}
function makeBuilding(atlas,loc,{discovered=false}={}){
 if(!loc.buildingId)return;
 const site=loc.areaId==='area_root'?atlas.root:atlas.sites?.[loc.areaId];if(!site)return;
 let p=site.markers.find(m=>m.id===loc.buildingId);
 if(!p){const name=loc.buildingName||loc.raw.split(/[,;/]/)[0].slice(0,40);
  p={id:loc.buildingId,name:TRIM(name),...placeSeed(site.markers.length,atlas.seed),type:'other',icon:'+',description:'Story location; geometry schematic',origin:'scene',source:'scene',known:true,estimated:true,discovered:false};
  site.markers.push(p);}
 p.known=true;if(discovered)p.discovered=true;
}
function ensureLocation(atlas,loc,{discovered=true}={}){
 if(!loc)return;const inferredAreaName=loc.raw.match(explicitSiteRE)?.[0]||loc.raw;
 if(loc.areaId!=='area_root')area(atlas,loc.areaId,inferredAreaName,{discovered});
 if(loc.areaId==='area_root' && discovered)atlas.areas[0].discovered=true;
 makeBuilding(atlas,loc,{discovered});
 if(loc.roomId){const key=JSON.stringify([loc.areaId,loc.buildingId,loc.floorId,loc.roomId]);
   const entry=atlas.rooms[key]||(atlas.rooms[key]={name:loc.roomId,areaId:loc.areaId,buildingId:loc.buildingId,floorId:loc.floorId,firstTurn:atlas.turns,known:true,discovered:false});
   if(discovered)entry.discovered=true;
 }
}
function actor(atlas,role,name){const id=role==='user'?'user':role==='char'?'char':idFor('npc',fold(name));
 let a=atlas.actors.find(x=>x.id===id);
 if(!a){a={id,name:TRIM(name),role,importance:role==='npc'?'minor':'main',mentions:0,lastMention:0,position:null,display:false};atlas.actors.push(a);}
 else if(name&&(role==='user'||role==='char'))a.name=TRIM(name);return a;
}
function journalWord(a,word){
 a.journalTexts=safeNext(a.journalTexts);
 const value=TRIM(word||'-').slice(0,88);
 let idx=a.journalTexts.indexOf(value);
 if(idx<0){idx=a.journalTexts.length;a.journalTexts.push(value);}
 return idx;
}
function compactJournal(a){
 a.journalTexts=safeNext(a.journalTexts);
 for(const row of safeNext(a.journal)){
  if(row.fromIndex==null){row.fromIndex=journalWord(a,row.from);delete row.from;}
  if(row.toIndex==null){row.toIndex=journalWord(a,row.to);delete row.to;}
 }
 return a;
}
function journalEndpoints(a,row){return {from:a.journalTexts?.[row.fromIndex]??row.from??'-',to:a.journalTexts?.[row.toIndex]??row.to??'-'};}
const posKey=v=>v?JSON.stringify([v.areaId,v.buildingId,v.floorId,v.roomId]):'';
function move(atlas,a,loc,turn,source,{discovered=false}={}){
 if(!loc)return false;ensureLocation(atlas,loc,{discovered});
 const changed=posKey(a.position)!==posKey(loc);
 if(changed)atlas.journal.push({turn,who:a.name,role:a.role,fromIndex:journalWord(atlas,a.position?.raw||'-'),toIndex:journalWord(atlas,loc.raw),source});
 a.position={...loc,turn};return changed;
}
function explicitPos(name,positions,role){const aliases=role==='user'?['user','{{user}}','protagonist']:role==='char'?['char','{{char}}','character']:[];
 return (positions||[]).find(p=>same(p.who,name)||aliases.some(x=>same(p.who,x)));
}
const mentioned=(name,prose)=>!!name&&TRIM(name).length>1&&prose.toLocaleLowerCase().includes(TRIM(name).toLocaleLowerCase());
const focal=(pov,name,role)=>same(pov,name)||((role==='user')&&['user','{{user}}','protagonist'].some(s=>same(pov,s)))||((role==='char')&&['char','{{char}}','character'].some(s=>same(pov,s)));
function textPlace(text){
 const hits=[...String(text).matchAll(/(?:\u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b|\u0e21\u0e32\u0e16\u0e36\u0e07|\u0e44\u0e1b\u0e17\u0e35\u0e48|arrived at|entered)\s*([^.,\n\r!?]{2,65})/gi)];
 if(!hits.length)return '';
 const v=TRIM(hits.at(-1)[1]).split(/\s+(?:and|then|before|while)\s+/i)[0];
 if(v.length>70)return '';
 return /\u0e2d\u0e32\u0e04\u0e32\u0e23|\u0e0a\u0e31\u0e49\u0e19|\u0e2b\u0e49\u0e2d\u0e07|\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19|building|floor|room|school|city/i.test(v)?v:'';
}
function applyTurn(atlas,message,{userName='User',charName='Character'}={}){
 if(!atlas||!message||message.is_user||message.is_system)return false;
 const text=String(message.mes||'');if(!text.trim())return false;
 const turn=++atlas.turns,snapshot=parseNeonState(text);
 const prose=text.replace(/<neon_state\b[^>]*>[\s\S]*?<\/neon_state>/gi,'').replace(/<map_update\b[^>]*>[\s\S]*?<\/map_update>/gi,'');
 const u=actor(atlas,'user',userName),c=actor(atlas,'char',charName);
 let changed=false;
 // Travel events are an optional fallback and keep intermediate stops, never a second model request.
 // Actors must be named, or identified by a SCENE header with its own explicit POV.
 const knownNpcs=[...new Set([...(atlas.actors||[]).filter(x=>x.role==='npc').map(x=>x.name),...findNewNpcNames(prose,{userName,charName})])];
 const userEvents=extractUserRouteEvents(message._nmUserText||'',{userName,charName});
 const headerEvents=extractSceneHeaders(prose,{userName,charName});
 const routeEvents=extractRouteEvents(prose,{userName,charName,npcNames:knownNpcs});
 // Sort within each source. The player's stated action precedes the AI's narrated result.
 const travel=[...userEvents.sort((a,b)=>a.offset-b.offset), ...[...headerEvents,...routeEvents].sort((a,b)=>a.offset-b.offset)].slice(0,36);
 for(const e of travel){
  if(!valid(e.where))continue;
  const a=actor(atlas,e.role,e.who);if(!a)continue;
  const loc=extractLocation(e.where,atlas,a.position||atlas.current);
  if(!loc)continue;
  changed=move(atlas,a,loc,turn,e.source,{discovered:a.role==='user'})||changed;
  if(a.lastMention!==turn){a.lastMention=turn;a.mentions++;}
  if(a.role==='user')atlas.current={...loc,turn};
 }
 const scenePlace=valid(snapshot?.loc)?snapshot.loc:'';
 // CLOCK.LOC is only the final focal person's location; NEVER relocate the entire cast.
 const protagonistFocal=focal(snapshot?.pov,userName,'user');
 const userClaim=explicitPos(userName,snapshot?.positions,'user');
 const explicitUser=!!userClaim && (mentioned(userName,prose)||protagonistFocal||(!u.position&&same(snapshot?.pov,'user')));
 const userSeen=mentioned(userName,prose)||protagonistFocal||explicitUser;
 if(userSeen){u.mentions++;u.lastMention=turn;
  const locValue=explicitUser?userClaim.where:(protagonistFocal?scenePlace:'');
  if(valid(locValue)){
   const next=extractLocation(locValue,atlas,u.position||atlas.current);
   if(next){changed=move(atlas,u,next,turn,explicitUser?'NOW.POS':'FOCAL CLOCK',{discovered:true})||changed;atlas.current={...next,turn};}
  }
 }
 const charFocal=focal(snapshot?.pov,charName,'char');
 const charClaim=explicitPos(charName,snapshot?.positions,'char');
 const charSeen=mentioned(charName,prose)||charFocal;
 if(charSeen){c.mentions++;c.lastMention=turn;
  const positionText=charClaim?.where||(charFocal?scenePlace:'');
  if(valid(positionText))changed=move(atlas,c,extractLocation(positionText,atlas,c.position||atlas.current),turn,charClaim?'NOW.POS':'FOCAL CLOCK',{discovered:false})||changed;
 }
 const npcNames=new Set([...(snapshot?.present||[]),...(snapshot?.positions||[]).map(p=>p.who)]);
 for(const a of atlas.actors)if(a.role==='npc')npcNames.add(a.name);
 for(const name of npcNames){
  if(!valid(name)||same(name,userName)||same(name,charName)||['user','char','{{user}}','{{char}}'].some(a=>same(name,a)))continue;
  if(!mentioned(name,prose))continue;
  const n=actor(atlas,'npc',name);if(n.lastMention!==turn){n.mentions++;n.lastMention=turn;}
  if(n.mentions>=2)n.importance='key';
  const exact=explicitPos(name,snapshot?.positions,'npc'),isFocal=same(snapshot?.pov,name);
  const textLoc=exact?.where||(isFocal?scenePlace:'');
  if(valid(textLoc))changed=move(atlas,n,extractLocation(textLoc,atlas,n.position||atlas.current),turn,exact?'NOW.POS':'FOCAL CLOCK',{discovered:false})||changed;
 }
 for(const a of atlas.actors)a.display=!!(a.position&&(a.role==='user'||(a.lastMention>0&&turn-a.lastMention<=10&&(a.role!=='npc'||a.importance==='key'))));
 if(snapshot?.time)atlas.lastTime=snapshot.time;
 if(atlas.followUser){atlas.browse=null;atlas.view=bestView(atlas);}
 return changed||userSeen||charSeen||travel.length>0;
}
function bestView(a){const p=currentFor(a);if(!p?.raw)return 0;
 // Following the player's position should not depend on whether room context is sent to the image prompt.
 // dynamicRoomContext only controls how context-rich the room image prompt becomes.
 return p.roomId?(a?.interactiveRooms!==false?3:2):p.floorId!=null?2:p.buildingId||p.areaId?1:0;}
// A replay unit is an assistant response paired with immediately preceding player
// messages. Only the local extension reads these; no AI prompt is modified.
function messagesForReplay(chat){
 const output=[];let userTexts=[];
 for(let i=0;i<(Array.isArray(chat)?chat.length:0);i++){
  const m=chat[i];if(!m||m.is_system)continue;
  const content=String(m.mes||'');if(!content.trim())continue;
  if(m.is_user){userTexts.push(content.slice(0,4500));if(userTexts.length>4)userTexts.shift();continue;}
  output.push({...m,_nmIndex:i,_nmUserText:userTexts.join('\n')});userTexts=[];
 }
 return output;
}
// Constant-time for the usual one-user-message, one-assistant-reply cycle.
function compositeAt(chat,index){
 const m=chat?.[index];if(!m||m.is_user||m.is_system)return null;
 const texts=[];
 for(let i=index-1;i>=0&&texts.length<4;i--){
  const other=chat[i];if(other&&!other.is_user&&!other.is_system&&String(other.mes||'').trim())break;
  if(other?.is_user&&String(other.mes||'').trim())texts.unshift(String(other.mes).slice(0,4500));
 }
 return {...m,_nmIndex:index,_nmUserText:texts.join('\n')};
}
function replySignature(msg){return hash(String(msg?.mes||'')+':'+String(msg?.swipe_id??'')+':'+String(msg?._nmUserText||''));}

function restoreManual(a){
 for(const op of a.manual||[]){if(!op?.point?.id)continue;
  if(op.areaId==='world'){
    const point=clone(op.point);
    if(!a.areas.some(x=>x.id===point.id))a.areas.push(point);
    if(!a.sites[point.id])a.sites[point.id]={id:point.id,name:point.name,kind:kindFromTexts([point.name]),markers:[],estimated:true};
    continue;
  }
  if(op.areaId!=='area_root'&&!a.areas.some(x=>x.id===op.areaId))area(a,op.areaId,op.areaName||'Custom Area',{discovered:true});
  const site=op.areaId==='area_root'?a.root:a.sites?.[op.areaId];if(!site)continue;
  if(!site.markers.some(x=>x.id===op.point.id))site.markers.push(clone(op.point));
 }
}
function resetForReplay(a){a.root=clone(a.baseRoot||a.root);a.areas=[{id:'area_root',name:a.root.name,kind:a.kind,x:600,y:410,known:true,discovered:true,estimated:true}];
 a.sites={};a.rooms={};a.actors=[];a.journal=[];a.journalTexts=[];a.turns=0;a.signatures=[];a.current={areaId:'area_root',buildingId:null,floorId:null,roomId:null,raw:'',turn:0};
 a.browse=null;a.lastTime='';a.lastScanIndex=0;a.lastBotIndex=-1;a.lastBotSignature='';a.replyIndices=[];a.auditCursor=0;
}
function processHistory(atlas,chat,names={}){
 const replies=messagesForReplay(chat),signs=replies.map(replySignature),old=atlas.signatures||[];
 let prefix=0;while(prefix<old.length&&prefix<signs.length&&old[prefix]===signs[prefix])prefix++;
 const replay=prefix!==old.length||atlas.turns>replies.length;
 if(replay){resetForReplay(atlas);prefix=0;}
 for(let i=prefix;i<replies.length;i++){applyTurn(atlas,replies[i],names);atlas.signatures.push(signs[i]);atlas.replyIndices.push(replies[i]._nmIndex);}
 if(replay || replies.length>prefix || atlas.manual?.length)restoreManual(atlas);
 if(atlas.replyIndices.length!==replies.length)atlas.replyIndices=replies.map(m=>m._nmIndex);
 atlas.lastScanIndex=Array.isArray(chat)?chat.length:0;
 atlas.lastBotIndex=replies.length?replies.at(-1)._nmIndex:-1;
 atlas.lastBotSignature=replies.length?signs.at(-1):'';
 atlas.auditCursor=atlas.replyIndices.length?atlas.auditCursor%atlas.replyIndices.length:0;
 return {newTurns:replies.length-prefix,replayed:replay,changed:replay||replies.length>prefix};
}
// Fast path: read only appended chat messages. Full replay is reserved for
// edits, deletions, swipes, migration, or a detected tail mismatch.
function advanceHistory(atlas,chat,names={},forceReplay=false){
 const list=Array.isArray(chat)?chat:[];
 if(forceReplay||!Number.isInteger(atlas.lastScanIndex)||atlas.lastScanIndex<0||list.length<atlas.lastScanIndex){
   if(forceReplay)atlas.signatures=['forced-history-replay'];
   return processHistory(atlas,list,names);
 }
 if(atlas.lastBotIndex>=0){
   const msg=list[atlas.lastBotIndex];
   if(!msg||replySignature(compositeAt(list,atlas.lastBotIndex))!==atlas.lastBotSignature){atlas.signatures=['tail-changed-replay'];return processHistory(atlas,list,names);}
 }
 // Verify a small rolling checkpoint. Old edits without host events are
 // eventually detected without hashing the entire history each turn.
 if(atlas.replyIndices?.length>1){
  const n=atlas.replyIndices.length;const sample=atlas.auditCursor%n;
  const probe=compositeAt(list,atlas.replyIndices[sample]);
  if(!probe||replySignature(probe)!==atlas.signatures[sample]){
    atlas.signatures=['periodic-checkpoint-replay'];return processHistory(atlas,list,names);
  }
  atlas.auditCursor=(sample+1)%n;
 }
 const start=atlas.lastScanIndex;
 let count=0;
 for(let i=start;i<list.length;i++){
   const m=list[i];
   if(!m||m.is_user||m.is_system||!String(m.mes||'').trim())continue;
   const composite=compositeAt(list,i);applyTurn(atlas,composite,names);atlas.signatures.push(replySignature(composite));
   atlas.replyIndices.push(i);atlas.lastBotIndex=i;atlas.lastBotSignature=replySignature(composite);count++;
 }
 atlas.lastScanIndex=list.length;
 if(count&&atlas.manual?.length)restoreManual(atlas);
 return {newTurns:count,replayed:false,changed:count>0};
}
function rerollLayout(a){a.seed=(a.seed||0)+1;
 for(let i=1;i<a.areas.length;i++)Object.assign(a.areas[i],areaSeed(i,a.seed));
 for(const site of [a.root,...Object.values(a.sites||{})]){
   (site.markers||[]).forEach((p,i)=>{if(p.origin==='manual'||p.estimated===false)return;Object.assign(p,placeSeed(i,a.seed));});
 }
 // Layout changes do not alter location IDs or the journal; keep template geometry stable for future replays.
 const markers=a.baseRoot?.markers||[];markers.forEach((p,i)=>{if(p.origin!=='manual'&&p.estimated!==false)Object.assign(p,placeSeed(i,a.seed));});
}
function addManualPlace(a,name,level=1){name=TRIM(name);if(!valid(name))return null;
 const focus=a.browse||currentFor(a);const areaId=level===0?'area_root':focus?.areaId||'area_root';
 if(level===0){const id=idFor('area','manual:'+name);const p=area(a,id,name,{discovered:true});p.origin='manual';
  // Manual areas should remain on replay, too.
  if(!a.manual.some(op=>op.areaId==='world'&&op.point.id===id))a.manual.push({areaId:'world',point:clone(p),areaName:name});return p;}
 const site=areaId==='area_root'?a.root:a.sites?.[areaId];if(!site)return null;
 const existing=site.markers.find(p=>same(p.name,name));if(existing)return existing;
 const id=idFor('manual',areaId+'|'+name);const point={id,name,...placeSeed(site.markers.length,a.seed),type:'manual',icon:'+',description:'Player-added (not canon)',origin:'manual',source:'player',known:true,estimated:true,discovered:true};
 site.markers.push(point);a.manual.push({areaId,areaName:a.areas.find(x=>x.id===areaId)?.name||'',point:clone(point)});return point;
}
function sourceLabels(a){return safeNext(a?.sources).slice(0,20).join(' / ');}
function currentFor(a){return a?.actors?.find(x=>x.id==='user'&&x.position)?.position||a?.current||null;}
function visibleAt(a){return a?.browse||currentFor(a);}
function displayActors(a){return (a?.actors||[]).filter(x=>x.display&&x.position);}
function levelName(a,level){const loc=visibleAt(a);if(level===0)return a.title||'World';
 if(level===1)return a.areas.find(x=>x.id===loc?.areaId)?.name||a.root.name;
 if(level===2)return loc?.floorId!=null?L.floor+' '+loc.floorId:'Floor unknown';
 return loc?.roomId||'Room unknown';}
function viewData(a,level){const loc=visibleAt(a);
 if(!loc)return {level,kind:a.kind,points:[],width:1024,height:720,title:levelName(a,level),unknown:true};
 if(level===0){const xs=a.areas.map(x=>x.x),ys=a.areas.map(x=>x.y),minX=Math.min(0,...xs)-100,minY=Math.min(0,...ys)-100;
  return {level,kind:a.kind,points:a.areas.map(p=>({...p,x:p.x-minX,y:p.y-minY})),width:Math.max(1024,Math.max(...xs)-minX+180),height:Math.max(720,Math.max(...ys)-minY+180),title:levelName(a,level)};}
 if(level===1){const site=loc.areaId==='area_root'?a.root:a.sites?.[loc.areaId];return {level,kind:site?.kind||a.kind,points:site?.markers||[],width:1024,height:720,title:levelName(a,level),unknown:!site};}
 if(level===2){
  const areaRooms=Object.values(a.rooms||{}).filter(r=>r.areaId===loc.areaId&&r.buildingId===loc.buildingId);
  if(loc.floorId==null){
    const floors=[...new Set(areaRooms.map(r=>r.floorId).filter(v=>v!=null))].sort((a,b)=>Number(a)-Number(b));
    return {level,kind:'floor',points:floors.map((f,i)=>({id:'floor_'+f,name:L.floor+' '+f,floorId:f,...placeSeed(i,a.seed),estimated:true,discovered:areaRooms.some(r=>r.floorId===f&&r.discovered)})),width:1024,height:720,title:'Select floor',unknown:!floors.length,floorPicker:true};
  }
  const rooms=areaRooms.filter(r=>r.floorId===loc.floorId);
  return {level,kind:'floor',points:rooms.map((r,i)=>({id:idFor('room',JSON.stringify([r.areaId,r.buildingId,r.floorId,r.name])),name:r.name,...placeSeed(i,a.seed),known:true,discovered:r.discovered,estimated:true})),width:1024,height:720,title:levelName(a,level),unknown:false};
 }
 return {level,kind:'room',points:[],width:1024,height:720,title:levelName(a,level),unknown:!loc.roomId,room:loc.roomId};
}

return {parseFloor,parseRoom,extractLocation,createAtlas,fromOld,normalizeAtlas,ensureLocation,compactJournal,journalEndpoints,applyTurn,bestView,messagesForReplay,replySignature,processHistory,advanceHistory,rerollLayout,addManualPlace,sourceLabels,currentFor,visibleAt,displayActors,levelName,viewData};
})();
__nmModules['persistence.js']=(()=>{
// NEON MAP v0.7. Crash-resilient chat metadata: an update starts its save
// immediately, rather than relying on a four-turn timer that can be lost when
// switching chats. No model request, prompt injection, or generated response.
// One save request is started per completed map change, never more than one
// simultaneous save for the same chat. SillyTavern owns the server-side save.
function createMetadataSaver({getContext, getChatKey, metadataKey}){
 const states=new Map();let activeChat=null;
 const entry=chat=>{
  let item=states.get(chat);
  if(!item){item={version:0,saved:0,promise:null,error:null};states.set(chat,item);}
  // Only keep a small number of metadata handles, no chat objects are retained.
  if(states.size>16)for(const key of states.keys())if(key!==activeChat && !states.get(key)?.promise){states.delete(key);break;}
  return item;
 };
 const currentFor=chat=>{
  const ctx=getContext();return ctx?.chatMetadata&&ctx.chatId!=null&&getChatKey(ctx)===chat?ctx:null;
 };
 async function flush(targetChat=activeChat){
  if(!targetChat)return false;
  const state=entry(targetChat);
  if(state.promise)return state.promise;
  if(state.saved===state.version)return true;
  const ctx=currentFor(targetChat);
  if(!ctx||typeof ctx.saveMetadata!=='function')return false;
  const savedThrough=state.version;
  // Dispatch starts NOW, while the old chat is still active, not after a timer.
  const job=(async()=>{
   try{await ctx.saveMetadata();state.saved=Math.max(state.saved,savedThrough);state.error=null;return true;}
   catch(error){state.error=String(error?.message||error);console.warn('[NEON MAP] Failed to persist chat atlas',error);return false;}
  })();
  state.promise=job;
  try{return await job;}
  finally{
   if(state.promise===job)state.promise=null;
   // If the atlas changed during an in-flight write, save the newer version
   // only while this SAME chat remains active (never write into another chat).
   if(state.saved<state.version && !state.error && currentFor(targetChat))void flush(targetChat);
  }
 }
 function mark(atlas,{urgent=false,turn=false}={}){
  const ctx=getContext();if(!ctx?.chatMetadata||ctx.chatId==null||!atlas)return Promise.resolve(false);
  const chat=getChatKey(ctx);changeChat(chat);
  ctx.chatMetadata[metadataKey]=atlas;
  const state=entry(chat);state.version++;
  // `turn` and `urgent` share one eager save path. Repeated UI mutations
  // while an existing save is running are combined into the following save.
  return flush(chat);
 }
 function changeChat(next){activeChat=next||null;}
 function onVisibilityHidden(){if(typeof document!=='undefined' && document.visibilityState==='hidden')void flush();}
 function stats(){const state=activeChat?entry(activeChat):null;return state?{pending:state.saved<state.version,saving:!!state.promise,error:state.error}:{pending:false,saving:false,error:null};}
 return {mark,flush,changeChat,onVisibilityHidden,stats};
}

return {createMetadataSaver};
})();
__nmModules['lore-sources.js']=(()=>{
// v0.7: Multiple Chat Lorebooks explicit binding support.
// Safe local source-name resolution for native and auxiliary SillyTavern lorebooks.
// Explicitly bound books only; never enumerate and read every book on the host.
const sane = name => typeof name === 'string' && name.trim().length > 0 && name.trim().length < 140;
function collect(target, value, depth = 0) {
  if (depth > 3 || value == null) return;
  if (sane(value)) { target.add(value.trim()); return; }
  if (Array.isArray(value)) { for (const item of value) collect(target, item, depth + 1); return; }
  if (typeof value !== 'object') return;
  for (const key of ['name', 'world', 'world_info', 'book', 'bookName', 'lorebook', 'books', 'lorebooks', 'worlds', 'extraBooks', 'names']) {
    if (Object.hasOwn(value, key)) collect(target, value[key], depth + 1);
  }
}
function linkedWorldNames({ctx, card, worldSettings, selectedWorlds, extraBooks} = {}) {
  const out = new Set();
  collect(out, card?.primary);
  const meta = ctx?.chatMetadata || {};
  for (const key of ['world_info', 'extra_world_info', 'world_info_extra', 'chat_lorebooks', 'chatLorebooks', 'multipleChatLorebooks', 'multi_chat_lorebooks', 'additional_lorebooks']) collect(out, meta[key]);
  collect(out, ctx?.powerUserSettings?.persona_description_lorebook);
  collect(out, ctx?.power_user?.persona_description_lorebook);
  collect(out, ctx?.persona_description_lorebook);
  collect(out, worldSettings?.globalSelect);
  collect(out, worldSettings?.global);
  collect(out, selectedWorlds);
  const ch = worldSettings?.charLore || [];
  const avatar = String(card?.avatar || '').replace(/\.[^.\/]+$/, '');
  for (const row of Array.isArray(ch) ? ch : []) {
    if (!row || ![avatar, card?.name].filter(Boolean).includes(row.name)) continue;
    collect(out, row.extraBooks);
  }
  collect(out, extraBooks);
  return [...out].slice(0, 64);
}

return {linkedWorldNames};
})();
__nmModules['pollinations-auth.js']=(()=>{
// Pollinations Connect User Wallets device authorization.
// Only ephemeral, user-authorized scoped keys are accepted; no personal sk_ key input.
// The key is returned to the caller and must remain in memory, not chat metadata.
const DEVICE_CODE='https://enter.pollinations.ai/api/device/code';
const DEVICE_TOKEN='https://enter.pollinations.ai/api/device/token';
const ABORT='AbortError';
function cancelled(){return Object.assign(new Error('Authorization cancelled'),{name:ABORT});}
function requireHttpsPollinations(url){
  const u=new URL(String(url));
  if(u.protocol!=='https:'||u.hostname!=='enter.pollinations.ai')throw new Error('Unexpected Pollinations authorization link');
  return u.href;
}
async function delay(ms,signal){
  if(signal?.aborted)throw cancelled();
  await new Promise((resolve,reject)=>{
    let fired=false;
    const off=()=>signal?.removeEventListener?.('abort',onAbort);
    const onAbort=()=>{if(fired)return;fired=true;clearTimeout(timer);off();reject(cancelled());};
    const timer=setTimeout(()=>{if(fired)return;fired=true;off();resolve();},ms);
    signal?.addEventListener?.('abort',onAbort,{once:true});
  });
}
async function connectPollinationsDevice({appKey='',signal,onChallenge,onStatus,fetchImpl=fetch}={}){
  const key=String(appKey||'').trim();
  if(key && !/^pk_[A-Za-z0-9_-]{4,160}$/.test(key))throw new Error('App Key must begin with pk_');
  if(signal?.aborted)throw cancelled();
  const body=key?{client_id:key}:{};
  const started=await fetchImpl(DEVICE_CODE,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),signal});
  if(!started.ok)throw new Error(`Pollinations device authorization failed (${started.status}). A registered App Key may be required.`);
  const auth=await started.json();
  if(!auth?.device_code||!auth?.user_code||!auth?.verification_uri)throw new Error('Pollinations did not return a usable device code');
  const verificationUrl=requireHttpsPollinations(auth.verification_uri_complete||auth.verification_uri);
  onChallenge?.({verificationUrl,userCode:String(auth.user_code),expiresIn:Number(auth.expires_in)||1800});
  let interval=Math.max(5,Math.min(20,Number(auth.interval)||5));
  const deadline=Date.now()+Math.min(3600,Math.max(120,Number(auth.expires_in)||1800))*1000;
  while(Date.now()<deadline){
    await delay(interval*1000,signal);
    const res=await fetchImpl(DEVICE_TOKEN,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({device_code:auth.device_code}),signal});
    const data=await res.json().catch(()=>({}));
    if(res.ok && /^sk_[A-Za-z0-9_-]{4,}$/.test(String(data?.access_token||''))){
      onStatus?.('Pollinations connected (scoped wallet authorization)');
      return {token:String(data.access_token),expiresAt:Date.now()+Math.max(60,Number(data.expires_in)||604800)*1000};
    }
    const code=String(data?.error||'');
    if(code==='authorization_pending'){onStatus?.('รอการอนุญาตจากหน้า Pollinations…');continue;}
    if(code==='slow_down'){interval=Math.min(30,interval+5);continue;}
    if(code==='expired_token'||code==='access_denied')throw new Error(`Pollinations authorization: ${code}`);
    if(res.ok)throw new Error('Pollinations did not issue a scoped key');
    throw new Error(`Pollinations authorization error (${res.status}): ${code||'unknown'}`);
  }
  throw new Error('Pollinations authorization timed out');
}

return {connectPollinationsDevice};
})();
__nmModules['room-interaction.js']=(()=>{
// Local, GM-only 16x12 room staging grid. Never changes character canon or chat prompts.
const ROOM_GRID={columns:16,rows:12,x:110,y:90,width:805,height:540};
const id=(x,y)=>`${x},${y}`;
const cellIndex=(x,y)=>Math.trunc(y)*ROOM_GRID.columns+Math.trunc(x);
const roomStageKey=loc=>loc?.roomId?JSON.stringify([loc.areaId,loc.buildingId,loc.floorId,loc.roomId]):'';
function obstaclesForRoom(roomName=''){
  const name=String(roomName).toLowerCase();
  const ranges=/bed|นอน|dorm|หอพัก/.test(name)?[[2,3,8,7],[11,3,13,7]]:
    /lib|สมุด|archive|library/.test(name)?[[2,3,4,8],[7,3,9,8],[12,3,13,8]]:
    /bath|toilet|น้ำ/.test(name)?[[2,3,5,7],[11,2,13,6]]:
    /canteen|dining|ครัว|restaurant|kitchen/.test(name)?[[3,4,6,6],[10,4,12,6]]:
    /clinic|hospital|พยาบาล/.test(name)?[[2,4,5,7],[10,4,13,7]]:
    [[3,4,6,6],[10,4,12,6]];
  const result=new Set();
  for(const [x1,y1,x2,y2] of ranges)for(let y=y1;y<=y2;y++)for(let x=x1;x<=x2;x++)result.add(id(x,y));
  return result;
}
function isWalkable(x,y,obstacles){
  return Number.isInteger(x)&&Number.isInteger(y)&&x>=0&&x<ROOM_GRID.columns&&y>=0&&y<ROOM_GRID.rows&&!obstacles.has(id(x,y));
}
function findRoomPath(from,to,obstacles){
  if(!from||!to)return [];
  if(!isWalkable(from.x,from.y,obstacles)||!isWalkable(to.x,to.y,obstacles))return [];
  const start=cellIndex(from.x,from.y),goal=cellIndex(to.x,to.y);
  if(start===goal)return [{...from}];
  const previous=new Int16Array(ROOM_GRID.columns*ROOM_GRID.rows).fill(-1);
  const queue=[start];previous[start]=start;
  for(let i=0;i<queue.length;i++){
    const n=queue[i],x=n%ROOM_GRID.columns,y=Math.trunc(n/ROOM_GRID.columns);
    for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]){
      const nx=x+dx,ny=y+dy;
      if(!isWalkable(nx,ny,obstacles))continue;
      const at=cellIndex(nx,ny);
      if(previous[at]>=0)continue;
      previous[at]=n;queue.push(at);
      if(at===goal){
        const route=[];let t=goal;
        while(t!==start){route.unshift({x:t%ROOM_GRID.columns,y:Math.trunc(t/ROOM_GRID.columns)});t=previous[t];}
        route.unshift({...from});return route;
      }
    }
  }
  return [];
}
function cellAtPixels(x,y){
  return {x:Math.floor((x-ROOM_GRID.x)/ROOM_GRID.width*ROOM_GRID.columns),y:Math.floor((y-ROOM_GRID.y)/ROOM_GRID.height*ROOM_GRID.rows)};
}
function cellCenter(cell){return {x:ROOM_GRID.x+(cell.x+.5)*ROOM_GRID.width/ROOM_GRID.columns,y:ROOM_GRID.y+(cell.y+.5)*ROOM_GRID.height/ROOM_GRID.rows};}
function safeStartingCell(n, obstacles){
  const bases=[{x:1,y:9},{x:14,y:9},{x:1,y:1},{x:14,y:1},{x:8,y:10}];
  const start=bases[n%bases.length];
  if(isWalkable(start.x,start.y,obstacles))return start;
  for(let y=0;y<ROOM_GRID.rows;y++)for(let x=0;x<ROOM_GRID.columns;x++)if(isWalkable(x,y,obstacles))return {x,y};
  return null;
}
function ensureRoomStage(atlas,location){
  const key=roomStageKey(location);
  if(!atlas||!key)return null;
  atlas.roomStages ||= {};
  const existing=atlas.roomStages[key];
  if(existing&&typeof existing==='object'&&existing.tokens)return existing;
  if(Object.keys(atlas.roomStages).length>100)return null;
  const stage={key,tokens:{},lastPath:[]};atlas.roomStages[key]=stage;return stage;
}

return {ROOM_GRID,roomStageKey,obstaclesForRoom,isWalkable,findRoomPath,cellAtPixels,cellCenter,safeStartingCell,ensureRoomStage};
})();
__nmModules['area-inspector.js']=(()=>{
// NEON MAP Area Inspector v0.9.3. Read-only GM view of facts revealed in the roleplay.
// No LLM calls, no chat prompt injection, no use of undiscovered lore place names.
const {currentFor}=__nmModules['atlas.js'];
const REVEALED_ONLY_RULE = 'Use only details already revealed to the player in the current story. Unknown places are not discovered, mapped, counted or named. Unconfirmed scenery is merely illustrative, never established canon.';

const UNKNOWN='ยังไม่ทราบจากเนื้อเรื่อง';
const clean=s=>String(s??'').replace(/\s+/g,' ').trim().slice(0,140);
const validName=s=>clean(s).length>1;
const escapeRe=s=>String(s).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const wordMention=(text,name)=>{
 const term=clean(name);
 if(term.length<3 || /^(?:building|floor|room|place|area|school|city|world|อาคาร|ห้อง|ชั้น|เมือง|โรงเรียน)$/i.test(term))return false;
 const escaped=escapeRe(term);
 const rx=/^[a-z0-9 _-]+$/i.test(term)?new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`,'i'):new RegExp(escaped,'i');
 return rx.test(text);
};
function publicStoryLines(chat,{assistantOnly=false}={}){
 const result=[];
 const source=Array.isArray(chat)?chat:[];
 // Read existing message text locally. Never inspect system prompts, private state or hidden lore entries.
 for(const row of source.slice(-220)){
  if(!row || row.is_system || (assistantOnly && row.is_user) || typeof row.mes!=='string')continue;
  const text=row.mes
    .replace(/<(?:neon_state|think|analysis|reasoning|private)\b[^>]*>[\s\S]*?<\/(?:neon_state|think|analysis|reasoning|private)>/gi,'')
    .replace(/<map_update\b[^>]*>[\s\S]*?<\/map_update>/gi,'')
    .replace(/<!--[^]*?-->/g,'')
    .replace(/\[(?:secret|hidden|undiscovered)\][\s\S]*?\[\/(?:secret|hidden|undiscovered)\]/gi,'')
    .replace(/```[\s\S]*?```/g,'')
    .replace(/<[^>]*>/g,' ')
    .slice(0,15000);
  for(const line of text.split(/[\n.!?。！？;；]+/)){
    const value=clean(line).slice(0,420);
    if(value.length>=6)result.push(value);
  }
 }
 return result.slice(-1250);
}

function placeRevealed(point,storyLines=[]){
 if(!point || !validName(point.name))return false;
 // Only story-confirmed places count; manual dots are GM notes, template dots are imaginary.
 if(point.discovered===true && point.origin!=='template')return true;
 return storyLines.some(line=>wordMention(line,point.name));
}

const AREA_TYPES=[
 {key:'residential',label:'บ้านเรือน / ที่พักอาศัย',rx:/บ้าน|หมู่บ้าน|หอพัก|ที่พัก|residen|apartment|condo|house|home|dorm|village|living quarter|กระท่อม/i,types:['town']},
 {key:'commercial',label:'ร้านค้า / ย่านการค้า',rx:/ตลาด|ร้านค้า|ร้านอาหาร|ย่านการค้า|market|shop|store|restaurant|bazaar|mall|commercial|shopping|cafe|café/i,types:['food','shop']},
 {key:'terrain',label:'ธรรมชาติ / เนินเขา / สวน',rx:/เนินเขา|ภูเขา|ป่า|ลำธาร|แม่น้ำ|สวน|ชายหาด|forest|mountain|hill|nature|park|garden|meadow|lake|beach|river|cave|ruins|ถ้ำ/i,types:['nature','park','ruins']},
 {key:'public',label:'อาคารสาธารณะ / สถาบัน',rx:/โรงเรียน|มหาวิทยาลัย|โรงพยาบาล|สถานพยาบาล|ห้องสมุด|สถานีตำรวจ|school|academy|university|hospital|clinic|library|infirmary|campus|city hall|ศาลากลาง/i,types:['classroom','library','medical','office','fortress']},
 {key:'industrial',label:'โกดัง / เขตอุตสาหกรรม',rx:/โกดัง|โรงงาน|โรงเก็บ|warehouse|factory|industrial|workshop|storage depot/i,types:['industrial','warehouse']},
 {key:'transport',label:'ท่าเรือ / เส้นทางคมนาคม',rx:/ท่าเรือ|สถานีรถ|สนามบิน|สะพาน|port|dock|harbor|harbour|station|road|bridge|terminal|airport|rail/i,types:['transport','road']},
 {key:'other',label:'สิ่งปลูกสร้าง / อื่นๆ',rx:/อาคาร|ตึก|ปราสาท|บ้านพัก|tower|building|castle|structure|quarter|district/i,types:[]}
];
function placeCategory(point){
 const name=clean(point?.name),type=String(point?.type||'').toLowerCase();
 for(const item of AREA_TYPES){if(item.rx.test(name))return item;}
 for(const item of AREA_TYPES){if(item.types.includes(type))return item;}
 return AREA_TYPES.at(-1);
}
function proportions(points){
 if(!points.length)return [];
 const counts=new Map();for(const point of points){const category=placeCategory(point);counts.set(category.key,(counts.get(category.key)||0)+1);}
 const rows=AREA_TYPES.filter(i=>counts.has(i.key)).map(category=>({key:category.key,label:category.label,count:counts.get(category.key)}));
 const total=points.length;
 for(const row of rows){const exact=row.count*100/total;row.percent=Math.floor(exact);row.remainder=exact-row.percent;}
 let rest=100-rows.reduce((n,x)=>n+x.percent,0);
 for(const row of [...rows].sort((a,b)=>b.remainder-a.remainder).slice(0,rest))row.percent++;
 return rows.sort((a,b)=>b.count-a.count||a.label.localeCompare(b.label)).map(({key,label,count,percent})=>({key,label,count,percent}));
}

const OBSERVATIONS={
 weather:[
  {label:'ฝนตก / ฝนพรำ',rx:/(?:ฝน(?:ตก|โปรย|พรำ|สาด|กระหน่ำ)|raining|rainy|drizzle|downpour)/i},
  {label:'พายุ / อากาศรุนแรง',rx:/พายุ|ฟ้าคะนอง|storm|thunder|blizzard/i},
  {label:'หมอกลง',rx:/หมอก|foggy|misty|thick fog/i},
  {label:'ท้องฟ้าแจ่มใส / แดดออก',rx:/แดดออก|ฟ้าใส|ท้องฟ้าโปร่ง|sunny|clear sky|bright sunshine/i},
  {label:'เมฆมาก / ครึ้ม',rx:/ครึ้ม|เมฆครึ้ม|เมฆมาก|overcast|cloudy/i},
  {label:'หิมะตก',rx:/หิมะตก|snowing|snowfall/i},
  {label:'ลมแรง',rx:/ลมแรง|ลมพัดแรง|strong wind|windy/i}
 ],
 people:[
  {label:'คนพลุกพล่าน',rx:/พลุกพล่าน|แออัด|คนแน่น|ผู้คนมากมาย|crowded|bustling|packed with people/i},
  {label:'ผู้คนบางตา',rx:/คนบางตา|คนไม่มาก|ผู้คนประปราย|sparsely populated|few people|light foot traffic/i},
  {label:'เงียบ / แทบไม่มีคน',rx:/ไร้ผู้คน|ไม่มีผู้คน|แทบไม่มีใคร|เงียบสงัด|deserted|empty streets|no one around|eerily quiet/i},
  {label:'ผู้คนทำกิจกรรมตามปกติ',rx:/ผู้คนเดิน|คนเดินผ่าน|นักเรียนเดิน|people walking|students walking|people milling about/i}
 ],
 access:[
  {label:'หวงห้าม / จำกัดสิทธิ์',rx:/หวงห้าม|ห้ามเข้า|ห้ามผ่าน|พื้นที่ปิด|เขตห้าม|เข้าไม่ได้|บุคคลภายนอกห้าม|restricted|off.?limits|staff only|authorized personnel only|no entry|forbidden to enter|locked gate|private area/i},
  {label:'เปิดให้เข้าได้ตามเรื่อง',rx:/เข้าได้|เปิดให้เข้า|อนุญาตให้เข้า|ผ่านเข้าไปได้|ยินยอมให้เข้า|open to visitors|open to public|allowed to enter|permitted inside|public access/i},
  {label:'ปิดชั่วคราว',rx:/ปิดทำการ|ปิดชั่วคราว|temporarily closed|closed for maintenance/i}
 ],
 terrain:[
  {label:'เป็นเนินเขา / พื้นที่สูง',rx:/เนินเขา|ภูเขา|ทางลาดชัน|บนเขา|hilly|mountainous|steep slope/i},
  {label:'พื้นที่ริมน้ำ / ท่าเรือ',rx:/ริมแม่น้ำ|ใกล้ทะเล|ริมน้ำ|ท่าเรือ|แม่น้ำไหล|waterfront|riverside|seaside|coastal|harbor/i},
  {label:'ป่า / ต้นไม้หนาแน่น',rx:/ป่าทึบ|ป่าลึก|แนวต้นไม้|ต้นไม้หนาทึบ|dense forest|thick woodland|forest trail/i},
  {label:'ย่านเมือง / ถนนและสิ่งปลูกสร้าง',rx:/ถนนเรียงราย|ตึกสูง|อาคารเรียงราย|ถนนคนเดิน|urban street|city block|rows of buildings/i},
  {label:'ลานกว้าง / พื้นที่เปิด',rx:/ลานกว้าง|ทุ่งโล่ง|สนามโล่ง|wide plaza|open field|large courtyard/i}
 ],
 time:[
  {label:'กลางคืน',rx:/กลางคืน|ยามค่ำ|ค่ำคืน|ตอนดึก|เที่ยงคืน|ราตรี|nighttime|midnight|late at night|after dark/i},
  {label:'กลางวัน',rx:/กลางวัน|ตอนกลางวัน|แสงแดดยามสาย|เที่ยงวัน|ตอนเที่ยง|กลางเที่ยง|daylight|noon|midday|during the day/i},
  {label:'เช้า',rx:/ตอนเช้า|ยามเช้า|รุ่งเช้า|รุ่งอรุณ|dawn|morning|sunrise/i},
  {label:'เย็น / พลบค่ำ',rx:/ยามเย็น|พลบค่ำ|โพล้เพล้|ใกล้ค่ำ|evening|dusk|sunset|twilight/i}
 ]
};
// Only claim the latest unambiguous fact. A correction MUST supersede older narration.
const NO_RAIN=/(?:ฝน(?:ไม่ตก|หยุด(?:ตก)?|ซาลง|ซาแล้ว)|ไม่มีฝน|ไม่มีฝนตก|ไม่(?:ได้)?มีฝนตก|no rain|not raining|isn't raining|stopped raining|rain (?:has )?stopped|no longer raining|rain cleared)/i;
const NO_FOG=/(?:หมอก(?:จาง|หาย|สลาย|ไม่ลง)|ไม่มีหมอก|fog (?:has )?(?:lifted|cleared)|no (?:more )?fog)/i;
const NO_SUN=/(?:แดดไม่ออก|ฟ้าไม่ใส|ท้องฟ้าไม่โปร่ง|not sunny|no sunshine)/i;
const NOT_CROWDED=/(?:ไม่(?:ค่อย)?พลุกพล่าน|ไม่แออัด|คนไม่เยอะ|not crowded|not busy|uncrowded)/i;
const NOT_RESTRICTED=/(?:ไม่ใช่เขตหวงห้าม|ไม่(?:มี)?ข้อห้ามเข้า|ไม่หวงห้าม|not restricted|no longer restricted|restrictions? (?:were|have been) lifted)/i;
const DENIED_ACCESS=/(?:ไม่อนุญาตให้เข้า|ไม่ให้เข้า|ห้ามมิให้เข้า|เข้าไม่ได้|unauthori[sz]ed|entry (?:is )?(?:denied|prohibited)|cannot enter|can't enter|not allowed to enter)/i;
function factFromLines(lines,kind){
 const evidence=(label,text)=>({label,source:'เนื้อเรื่อง',evidence:clean(text).slice(0,180)});
 for(let i=lines.length-1;i>=0;i--){
  const text=String(lines[i]||'');
  // Evaluate later contradictory clauses first (e.g. "เคยฝนตก แต่ตอนนี้ฝนหยุดแล้ว").
  const clauses=text.split(/(?:\s+whereas\s+|\s+however\s+|\s+but\s+|แต่|ทว่า|ส่วน|ขณะที่|ตอนนี้(?=.{0,30}(?:ฝน|rain)))/i);
  for(let j=clauses.length-1;j>=0;j--){
   const clause=clauses[j];if(!clause.trim())continue;
   if(kind==='weather'){
    if(NO_RAIN.test(clause))return evidence('ฝนหยุดแล้ว / ขณะนี้ไม่มีฝนตก',clause);
    if(NO_FOG.test(clause))return evidence('ไม่มีหมอกตามที่บรรยาย',clause);
    if(NO_SUN.test(clause))return evidence('ไม่มีแดด / ท้องฟ้าไม่โปร่งตามที่บรรยาย',clause);
   }
   if(kind==='people' && NOT_CROWDED.test(clause))return evidence('ผู้คนไม่พลุกพล่าน',clause);
   if(kind==='access'){
    if(DENIED_ACCESS.test(clause))return evidence('ไม่อนุญาตให้เข้า / ถูกจำกัดสิทธิ์',clause);
    if(NOT_RESTRICTED.test(clause))return evidence('ข้อความระบุว่าไม่เป็นพื้นที่หวงห้าม',clause);
   }
   for(const match of OBSERVATIONS[kind])if(match.rx.test(clause)){
    // An explicit negation should not revive an earlier positive observation.
    if(kind==='weather' && match.label.startsWith('ฝน') && /(?:ไม่ตก|ไม่(?:ได้)?มี|ไม่มี|not|no |stopped)/i.test(clause))continue;
    if(kind==='access' && match.label.startsWith('หวง') && NOT_RESTRICTED.test(clause))continue;
    return evidence(match.label,clause);
   }
  }
 }
 return {label:UNKNOWN,source:'unknown',evidence:''};
}

// Claims are attributed to a selected place, not merely to a sentence that also
// happens to mention it as a neighbour. Ambiguous multi-location clauses are omitted.
function scopedFactLines(lines,point,atlas,{isCurrent=false}={}){
 const subject=clean(point?.name);
 const names=[...(atlas?.areas||[]).map(x=>x.name),...(atlas?.root?.markers||[]).map(x=>x.name),
   ...Object.values(atlas?.sites||{}).flatMap(s=>(s?.markers||[]).map(x=>x.name))]
   .filter(n=>validName(n)&&clean(n)!==subject);
 const out=[];
 for(const line of lines){
  // Subordinate relative-place mentions often describe geography, not the weather at that place.
  const clauses=String(line).split(/(?:\s+whereas\s+|\s+while\s+|\s+meanwhile\s+|\s+however\s+|ซึ่ง|แต่|ส่วน|ขณะที่|ในขณะที่|ขณะเดียวกัน)/i);
  let continuesSubject=false;
  for(const clause of clauses){
   // A rumour, hypothesis, or a question is not a verified environmental fact.
   if(/(?:คิดว่า|คาดว่า|น่าจะ|อาจจะ|ดูเหมือนว่า?|สมมติ|ข่าวลือ|หรือเปล่า|จริงไหม|ไหม\s*$|\?|\bperhaps\b|\bmaybe\b|\bmight\b|\bpossibly\b|\brumou?r\b|\bsupposedly\b|\bI think\b|\bI guess\b)/i.test(clause)){
    continuesSubject=false;continue;
   }
   const mentionsTarget=wordMention(clause,subject);
   const mentionsOther=names.some(name=>wordMention(clause,name));
   if(mentionsOther){continuesSubject=false;continue;}
   if(mentionsTarget){continuesSubject=true;out.push(clause);continue;}
   if(continuesSubject)out.push(clause); // A correction with no new named place.
  }
 }
 return out;
}
function timeFromClock(input){
 const value=String(input||'').trim();
 if(!value)return null;
 const match=value.match(/(?:^|\s)([01]?\d|2[0-3]):[0-5]\d(?:\s|$)/);
 if(match){const h=Number(match[1]);return {label:h>=6&&h<17?'กลางวัน':h>=17&&h<19?'เย็น / พลบค่ำ':'กลางคืน',source:'เวลาในเนื้อเรื่อง',evidence:value.slice(0,80)};}
 return null;
}
function uniquePlaces(points,storyLines){
 const visited=new Set();const output=[];
 for(const p of points){
  if(!p || !validName(p.name) || visited.has(String(p.id||p.name)))continue;
  if(!placeRevealed(p,storyLines))continue;
  visited.add(String(p.id||p.name));
  output.push({id:String(p.id||''),name:clean(p.name),type:placeCategory(p).label,origin:p.origin,discovered:p.discovered===true,areaId:p.areaId||''});
 }
 return output;
}
const eq=(a,b)=>String(a??'')===String(b??'');
function roomsFor(atlas,scope,storyLines){
 const list=Object.values(atlas?.rooms||{}).filter(r=>
  eq(r.areaId,scope.areaId) && (scope.buildingId==null || eq(r.buildingId,scope.buildingId)) &&
  (scope.floorId==null || eq(r.floorId,scope.floorId)) &&
  (r.discovered===true || storyLines.some(x=>wordMention(x,r.name)))
 );
 return list.slice(0,80).map(r=>({name:clean(r.name),areaId:r.areaId||'area_root',buildingId:r.buildingId??null,floorId:r.floorId??null,discovered:r.discovered===true}));
}

function inspectArea(atlas,{level,point,focus,radius=180}={},chat=[]){
 const storyLines=publicStoryLines(chat,{assistantOnly:true});
 if(!atlas||!point)return null;
 const current=currentFor(atlas)||{};
 const here=focus||current;
 const scope={areaId:here.areaId||'area_root',buildingId:null,floorId:null};
 if(level===0)scope.areaId=point.id;
 if(level===1)scope.buildingId=point.id;
 if(level===2){scope.buildingId=here.buildingId??null;scope.floorId=point.floorId??here.floorId??null;}
 const pointKnown=level===0 ? (point.discovered===true && point.origin!=='template') || storyLines.some(x=>wordMention(x,point.name))
   : level===2 ? point.discovered===true || storyLines.some(x=>wordMention(x,point.name)) : placeRevealed(point,storyLines);
 if(!pointKnown){
  return {name:atlas.revealLore===true && ['lorebook','character'].includes(point.origin) ? clean(point.name):'บริเวณที่ยังไม่เปิดเผย',unknown:true,placeKind:'ไม่ทราบ',source:'ยังไม่ปรากฏในเรื่อง',
   weather:{label:UNKNOWN},people:{label:UNKNOWN},access:{label:UNKNOWN},terrain:{label:UNKNOWN},time:{label:UNKNOWN},
   count:0,ratios:[],knownPlaces:[],rooms:[],districts:[],nearbyMentions:[],isCurrent:false,scope};
 }
 const centerX=Number(point.x)||512,centerY=Number(point.y)||360;
 let possible=[];
 if(level===0){const site=scope.areaId==='area_root'?atlas.root:atlas.sites?.[scope.areaId];possible=site?.markers||[];}
 if(level===1){const site=scope.areaId==='area_root'?atlas.root:atlas.sites?.[scope.areaId];
  possible=(site?.markers||[]).filter(p=>{
   const x=Number(p.x),y=Number(p.y);
   return p.id===point.id||(Number.isFinite(x)&&Number.isFinite(y)&&Math.hypot(x-centerX,y-centerY)<=radius);
  });
 }
 if(level===2)possible=(Array.isArray(atlas.rooms)?atlas.rooms:Object.values(atlas.rooms||{}))
  .filter(r=>eq(r.areaId,scope.areaId)&&eq(r.buildingId,scope.buildingId) && (scope.floorId==null||eq(r.floorId,scope.floorId)))
  .map(r=>({id:r.name,name:r.name,type:'room',origin:'scene',discovered:r.discovered===true}));
 const knownPlaces=uniquePlaces(possible,storyLines);
 // A place mentioned as "near X" is known by name but has no confirmed coordinates.
 // Display separately; never count it as within the red circle or assign a made-up pin.
 const nearbyMentions=[];
 const localRelation=/(?:near|nearby|next to|around|beside|in the vicinity|ใกล้|ข้าง|ละแวก|บริเวณ|รอบๆ|แถว|ถัดจาก)/i;
 const knownCategoryName=/(?:โกดัง|โรงพยาบาล|ตลาด|ท่าเรือ|สถานีตำรวจ|สถานีรถไฟ|โรงงาน|ร้านค้า|ห้องสมุด|โรงเรียน|warehouse|hospital|market|port|station|factory|library|school)/gi;
 for(const line of storyLines){
  if(!wordMention(line,point.name) || !localRelation.test(line))continue;
  for(const match of line.matchAll(knownCategoryName)){
   const mentioned=clean(match[0]);
   if(wordMention(mentioned,point.name)||knownPlaces.some(p=>p.name.toLowerCase()===mentioned.toLowerCase())||nearbyMentions.includes(mentioned))continue;
   nearbyMentions.push(mentioned);
   if(nearbyMentions.length>=8)break;
  }
  if(nearbyMentions.length>=8)break;
 }
 const roomList=roomsFor(atlas,scope,storyLines);
 // A click on a building should also count the clicked known building in the observed surroundings.
 if(level===1 && !knownPlaces.some(p=>p.id===String(point.id)))knownPlaces.unshift({id:String(point.id),name:clean(point.name),type:placeCategory(point).label,origin:point.origin,discovered:true});
 const isCurrent=eq(current.areaId||'area_root',scope.areaId) &&
  (level===0 || level===1&&eq(current.buildingId,scope.buildingId) || level===2&&eq(current.buildingId,scope.buildingId)&&eq(current.floorId,scope.floorId));
 // Only public assistant narration establishes environmental facts. Never infer a
 // hospital's weather simply because it was mentioned next to a rainy school.
 const assistantLines=publicStoryLines(chat,{assistantOnly:true});
 const scopedLines=scopedFactLines(assistantLines,point,atlas,{isCurrent});
 // For the current scene, only statements that mention NO other known place
 // can serve as unnamed scene context. Keep their real chronological order.
 if(isCurrent){
  const recent=publicStoryLines((Array.isArray(chat)?chat:[]).filter(x=>x&&!x.is_user&&!x.is_system).slice(-1),{assistantOnly:true}).slice(-8);
  const knownNames=[...(atlas.areas||[]).map(x=>x.name),...(atlas.root?.markers||[]).map(x=>x.name),
   ...Object.values(atlas.sites||{}).flatMap(s=>(s?.markers||[]).map(x=>x.name))].filter(validName);
  for(const line of recent){
   if(!knownNames.some(name=>wordMention(line,name)))scopedLines.push(line);
  }
 }
 const weather=factFromLines(scopedLines,'weather');
 const people=factFromLines(scopedLines,'people');
 const access=factFromLines(scopedLines,'access');
 const terrain=factFromLines(scopedLines,'terrain');
 const time=factFromLines(scopedLines,'time');
 if(time.source==='unknown' && isCurrent){const clock=timeFromClock(atlas.lastTime);if(clock)Object.assign(time,clock);}
 const zones=proportions(knownPlaces);
 const districts=knownPlaces.filter(p=>/ย่าน|เขต|district|quarter|neighbou?rhood/i.test(p.name)).slice(0,6).map(p=>p.name);
 return {
  name:clean(point.name),unknown:false,placeKind:placeCategory(point).label,
  source:point.origin==='manual'?'GM เพิ่มเอง (โน้ต ไม่ใช่ข้อมูล Canon)':level===0?'พื้นที่จากเรื่อง/แผนที่':(point.origin==='scene'?'พบในเนื้อเรื่อง':storyLines.some(x=>wordMention(x,point.name))?'กล่าวถึงในเนื้อเรื่อง':'ข้อมูลแผนที่'),
  worldStyle:String(atlas?.styleProfile?.setting||atlas?.kind||'').slice(0,30),
  weather,people,access,terrain,time,
  count:knownPlaces.length,ratios:zones,knownPlaces:knownPlaces.slice(0,30),rooms:roomList.slice(0,30),districts,nearbyMentions,
  isCurrent,scope
 };
}

return {REVEALED_ONLY_RULE,publicStoryLines,placeRevealed,inspectArea};
})();
__nmModules['place-cards.js']=(()=>{
// NEON MAP v0.9.13: local-only place bookmarks with safe legacy-ref recovery.
// This state never changes character positions, story text, image generation or LLM prompts.
const {viewData}=__nmModules['atlas.js'];
const str=(value,size=120)=>String(value??'').trim().slice(0,size);
const nullable=value=>value==null?null:str(value,120);
const MAX_PINS=80;
const nameKey=v=>str(v,120).normalize('NFC').toLocaleLowerCase().replace(/\s+/g,' ').trim();
const validRef=r=>!!r && typeof r==='object' && Number.isInteger(r.level) && r.level>=0 && r.level<=2 && !!str(r.id) && !!str(r.key,512);

function makePlaceRef(point,level,focus={},data={}){
 if(!point || !Number.isInteger(level) || level<0 || level>2)return null;
 const id=str(point.id),name=str(point.name),areaId=str(focus?.areaId||'area_root');
 if(!id || !name)return null;
 const buildingId=level<2?null:nullable(focus?.buildingId);
 const floorPicker=level===2&&data.floorPicker===true;
 const floorId=level<2 || floorPicker?null:nullable(focus?.floorId);
 const key=JSON.stringify([level,level===0?'world':areaId,level===2?buildingId:null,level===2?floorId:null,floorPicker?1:0,id]);
 return {key,level,id,name,areaId:level===0?'area_root':areaId,buildingId,floorId,floorPicker};
}

function sanitizeRef(value){
 if(!validRef(value))return null;
 const level=value.level,ref={level,id:str(value.id),name:str(value.name),areaId:str(value.areaId||'area_root'),
  buildingId:nullable(value.buildingId),floorId:nullable(value.floorId),floorPicker:value.floorPicker===true};
 if(!ref.name)return null;
 // Recompute the identifier; never trust arbitrary saved keys from import.
 const canonical=makePlaceRef({id:ref.id,name:ref.name},level,ref,{floorPicker:ref.floorPicker});
 return canonical?.key===value.key?canonical:null;
}
function normalizePlaceActions(atlas){
 if(!atlas)return atlas;
 const unique=new Set();const pins=[];
 for(const row of Array.isArray(atlas.placePins)?atlas.placePins:[]){
  const ref=sanitizeRef(row);if(!ref||unique.has(ref.key))continue;
  unique.add(ref.key);pins.push(ref);if(pins.length===MAX_PINS)break;
 }
 atlas.placePins=pins;
 atlas.placeTarget=sanitizeRef(atlas.placeTarget);
 return atlas;
}
function pinned(atlas,ref){return !!ref?.key && !!atlas?.placePins?.some(p=>p.key===ref.key);}
function targeted(atlas,ref){return !!ref?.key && atlas?.placeTarget?.key===ref.key;}
function togglePin(atlas,ref){
 if(!atlas || !validRef(ref))return false;
 normalizePlaceActions(atlas);
 const at=atlas.placePins.findIndex(p=>p.key===ref.key);
 if(at>=0){atlas.placePins.splice(at,1);return false;}
 // Limit prevents unbounded growth of per-chat metadata.
 if(atlas.placePins.length>=MAX_PINS)atlas.placePins.shift();
 atlas.placePins.push(sanitizeRef(ref));return true;
}
function toggleTarget(atlas,ref){
 if(!atlas||!validRef(ref))return false;
 normalizePlaceActions(atlas);
 if(targeted(atlas,ref)){atlas.placeTarget=null;return false;}
 atlas.placeTarget=sanitizeRef(ref);return true;
}
// Resolve against CURRENT revealed atlas. Stale/hidden pins remain as private notes,
// but are never displayed or made navigable as spoiler locations.
function resolvePlaceRef(atlas,ref){
 if(!atlas)return null;const clean=sanitizeRef(ref);if(!clean)return null;
 const focus={areaId:clean.areaId,buildingId:clean.buildingId,floorId:clean.floorPicker?null:clean.floorId,roomId:null,raw:clean.name};
 const scoped={...atlas,browse:focus};const data=viewData(scoped,clean.level);
 // A former random-ID location may have been rebuilt. Search by an EXACT
 // normalized name only within the original area/building/floor; never fuzzy match.
 // Reject ambiguous duplicates and ID reuse with a different name.
 const candidates=data?.points||[];
 const match=candidates.find(p=>String(p.id)===clean.id && nameKey(p.name)===nameKey(clean.name));
 const byName=candidates.filter(p=>nameKey(p.name)===nameKey(clean.name));
 const point=match||(byName.length===1?byName[0]:null);
 if(!point)return null;
 if(!point.discovered){
  // Revealing lore names is an explicit opt-in; disabling fog must not leak them.
  if(!(atlas.revealLore===true && ['lorebook','character'].includes(point.origin)))return null;
 }
 const canonical=makePlaceRef(point,clean.level,focus,data);
 return canonical?{point,data,focus,ref:canonical,legacy:canonical.key!==clean.key}:null;
}
function reconcilePlaceActions(atlas){
 if(!atlas)return false;
 normalizePlaceActions(atlas);
 let changed=false;
 const keys=new Set(),pins=[];
 for(const old of atlas.placePins){
  const current=resolvePlaceRef(atlas,old);
  const ref=current?.ref||old;
  if(ref.key!==old.key)changed=true;
  if(keys.has(ref.key)){changed=true;continue;}
  keys.add(ref.key);pins.push(ref);
 }
 if(pins.length!==atlas.placePins.length)changed=true;
 atlas.placePins=pins;
 if(atlas.placeTarget){
  const next=resolvePlaceRef(atlas,atlas.placeTarget)?.ref;
  if(next && next.key!==atlas.placeTarget.key){atlas.placeTarget=next;changed=true;}
 }
 return changed;
}

return {makePlaceRef,normalizePlaceActions,reconcilePlaceActions,pinned,targeted,togglePin,toggleTarget,resolvePlaceRef};
})();
__nmModules['image-renderer.js']=(()=>{
const {viewData, visibleAt, levelName}=__nmModules['atlas.js'];
const {REVEALED_ONLY_RULE}=__nmModules['area-inspector.js'];
const DB_NAME='neon-map-image-cache-v1';
const STORE='renders';
const activeObjectUrls=new Map();

const IMAGE_DEFAULTS={
  enabled:false,
  provider:'none', // none | localpixel | pollinations | aihorde
  autoGenerate:false,
  promptExtra:'',
  pollinationsModel:'black-forest-labs/flux.1-schnell',
  hordeModel:'',
  width:1024,
  height:768,
  style:'top-down pixel art RPG map',
  styleMode:'auto', // auto | hybrid | manual
  pollinationsAppKey:'', // publishable pk_, not a secret
};

function ensureImageSettings(atlas){
  if(!atlas) return {...IMAGE_DEFAULTS};
  const raw=atlas.imageSettings||{};
  // Never persist secrets in chat metadata or exported map JSON. Strip keys left by v0.8.0.
  const {apiKey:_unsafeOldKey, ...safeRaw}=raw;
  atlas.imageSettings={
    ...IMAGE_DEFAULTS,
    ...safeRaw,
    width: clamp64(raw.width, 1024),
    height: clamp64(raw.height, 768),
    enabled: raw.enabled===true,
    autoGenerate: raw.autoGenerate===true,
    provider: ['none','localpixel','pollinations','aihorde'].includes(raw.provider)?raw.provider:'none',
    pollinationsModel: String(raw.pollinationsModel||IMAGE_DEFAULTS.pollinationsModel).trim() || IMAGE_DEFAULTS.pollinationsModel,
    hordeModel: String(raw.hordeModel||'').trim(),
    promptExtra: String(raw.promptExtra||'').trim().slice(0,500),
    style: String(raw.style||IMAGE_DEFAULTS.style).trim().slice(0,120) || IMAGE_DEFAULTS.style,
    styleMode: ['auto','hybrid','manual'].includes(raw.styleMode)?raw.styleMode:'auto',
    pollinationsAppKey: String(raw.pollinationsAppKey||'').trim().slice(0,180),
  };
  return atlas.imageSettings;
}

function clamp64(v, fallback){
  const n=Number(v);
  return Math.max(512, Math.min(1536, Math.round((Number.isFinite(n) && n>0?n:fallback)/64)*64));
}

function openDb(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(DB_NAME,1);
    req.onupgradeneeded=()=>{const db=req.result; if(!db.objectStoreNames.contains(STORE))db.createObjectStore(STORE,{keyPath:'id'});};
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error||new Error('IndexedDB open failed'));
  });
}
async function withStore(mode, fn){
  const db=await openDb();
  return new Promise((resolve,reject)=>{
    const tx=db.transaction(STORE,mode);
    const store=tx.objectStore(STORE);
    let result;
    try{result=fn(store,resolve,reject);}catch(err){reject(err);}
    tx.oncomplete=()=>{ if(result!==undefined) resolve(result); db.close(); };
    tx.onerror=()=>{ reject(tx.error||new Error('IndexedDB transaction failed')); db.close(); };
    tx.onabort=()=>{ reject(tx.error||new Error('IndexedDB transaction aborted')); db.close(); };
  });
}

async function fetchBlobFromUrl(url, signal){
  const res=await fetch(url,{signal});
  if(!res.ok) throw new Error('Image download failed');
  return await res.blob();
}

function revokeActive(key){
  const prior=activeObjectUrls.get(key);
  if(prior){ try{URL.revokeObjectURL(prior);}catch{} activeObjectUrls.delete(key); }
}

async function getCachedRender(key){
  if(!key) return null;
  const row=await withStore('readonly',(store)=>new Promise((resolve,reject)=>{const req=store.get(key); req.onsuccess=()=>resolve(req.result||null); req.onerror=()=>reject(req.error);}));
  if(!row?.blob) return null;
  revokeActive(key);
  const url=URL.createObjectURL(row.blob);
  activeObjectUrls.set(key,url);
  return {key,url,meta:row.meta||{},updatedAt:row.updatedAt||0};
}

async function saveRender(key, blob, meta={}){
  if(!key || !(blob instanceof Blob)) throw new Error('Missing cached image data');
  await withStore('readwrite',(store)=>store.put({id:key,blob,meta,updatedAt:Date.now()}));
  return getCachedRender(key);
}

async function clearRender(key){
  if(!key) return;
  revokeActive(key);
  await withStore('readwrite',(store)=>store.delete(key));
}

async function clearAllRenders(){
  for(const key of [...activeObjectUrls.keys()]) revokeActive(key);
  await withStore('readwrite',(store)=>store.clear());
}

function hash(text){
  let h=2166136261;
  for(const c of String(text||'')){ h^=c.charCodeAt(0); h=Math.imul(h,16777619); }
  return (h>>>0).toString(36);
}

function joinList(list, limit=10){
  return [...new Set((list||[]).map(v=>String(v||'').trim()).filter(Boolean))].slice(0,limit).join(', ');
}

function styleProfileText(atlas, descriptor, settings){
  const profile=atlas?.styleProfile||{};
  const parts=[];
  const mode=settings?.styleMode||'auto';
  if(mode==='manual') return '';
  if(profile.settingCue) parts.push(`World/style setting hint: ${profile.settingCue}.`);
  if(profile.roomCue && descriptor?.level>=2) parts.push(`Character/lore room identity hint: ${profile.roomCue}.`);
  if(profile.decorCue && descriptor?.level>=2) parts.push(`Lifestyle/decor hint: ${profile.decorCue}.`);
  if(profile.palette) parts.push(`Preferred palette: ${profile.palette}.`);
  if(profile.summary) parts.push(`The visual theme inferred from the character card and linked lorebooks is ${profile.summary}.`);
  if(mode==='hybrid') parts.push('Blend the inferred setting with the user style note. Keep them coherent rather than literal.');
  return parts.join(' ');
}

function roomSpecificFlavor(descriptor){
  const room=String(descriptor?.focus?.roomId||descriptor?.data?.room||'').toLowerCase();
  if(!room) return '';
  if(/bed|bedroom|dorm|ห้องนอน|หอพัก/.test(room)) return 'Show a comfortable sleeping/living room layout with bed, side furniture, and personal belongings.';
  if(/bath|toilet|ห้องน้ำ/.test(room)) return 'Show a compact bathroom layout with fixtures placed clearly in top-down view.';
  if(/library|study|สมุด/.test(room)) return 'Show shelving, desk areas, books, and quiet study details.';
  if(/kitchen|ครัว|canteen|cafeteria|restaurant|dining/.test(room)) return 'Show counters, tables, and food-prep or dining layout cues.';
  if(/office|meeting|ประชุม/.test(room)) return 'Show an office-like layout with work surfaces and organized furniture.';
  if(/clinic|infirmary|hospital|พยาบาล/.test(room)) return 'Show a clean medical or clinic-like room arrangement.';
  return '';
}

function viewIsRevealed(atlas,level,focus){
 if(level===0)return true;
 if(level===1)return focus?.areaId==='area_root' || atlas?.areas?.some(p=>p.id===focus?.areaId && p.discovered===true && p.origin!=='manual');
 if(level===2){const site=focus?.areaId==='area_root'?atlas?.root:atlas?.sites?.[focus?.areaId];
  return !!site?.markers?.some(p=>p.id===focus?.buildingId && p.discovered===true && p.origin!=='manual');
 }
 if(level===3)return Object.values(atlas?.rooms||{}).some(r=>r?.areaId===focus?.areaId && r?.buildingId===focus?.buildingId && r?.floorId===focus?.floorId && r?.name===focus?.roomId && r?.discovered===true);
 return false;
}

function currentViewDescriptor(atlas, level=atlas?.view||0, namespace='', settings=ensureImageSettings(atlas)){ 
  if(!atlas) return null;
  const focus=visibleAt(atlas)||{};
  const data=viewData(atlas, level);
  const viewPublic=viewIsRevealed(atlas,level,focus);
  const title=viewPublic?(String(levelName(atlas, level)||'Map').trim() || 'Map'):'Unexplored location';
  let rawId='';
  if(level===0) rawId=`world::${atlas?.title||atlas?.root?.name||'world'}`;
  else if(level===1) rawId=`site::${focus.areaId||'area_root'}`;
  else if(level===2) rawId=`floor::${focus.areaId||'area_root'}::${focus.buildingId||'none'}::${focus.floorId||'all'}`;
  else rawId=`room::${focus.areaId||'area_root'}::${focus.buildingId||'none'}::${focus.floorId||'all'}::${focus.roomId||'unknown'}`;
  // Publicly visited/confirmed spots only. Reveal Lore toggle never exposes secret site names to an image provider.
  const publicPoints=(data.points||[]).filter(p=>p?.discovered===true && p.origin!=='manual' && p.origin!=='template');
  const pointNames=publicPoints.map(p=>p?.name||p?.id||'').filter(Boolean);
  const renderSignature={
    signatureVersion:2,rawId,title,level,
    mapSeed:atlas?.seed||0,
    visibleGeometry:publicPoints.map(p=>[p.id||'',Math.round(p.x||0),Math.round(p.y||0),p.name||'']).slice(0,300),
    style:settings?.style||'',styleMode:settings?.styleMode||'auto',promptExtra:settings?.styleMode==='auto'?'':(settings?.promptExtra||''),
    width:settings?.width||0,height:settings?.height||0,
    provider:settings?.provider||'none',model:settings?.provider==='aihorde'?(settings?.hordeModel||'default'):(settings?.pollinationsModel||''),
    styleProfile:atlas?.styleProfile||null,
    interactiveRooms:atlas?.interactiveRooms!==false,
    dynamicRoomContext:atlas?.dynamicRoomContext===true,
    points:pointNames.join('|'),
  };
  const key='view-'+hash(String(namespace)+'|'+JSON.stringify(renderSignature));
  return {key,rawId,title,level,data,focus:viewPublic?focus:{},pointNames:viewPublic?pointNames:[],renderSignature,viewPublic};
}

function buildPrompt(atlas, descriptor, settings){
  if(descriptor?.viewPublic===false)throw new Error('This location has not been revealed in the story');
  const {level,title,focus,pointNames}=descriptor;
  const mode=settings?.styleMode||'auto';
  const flavor=[];
  if(level===0){
    flavor.push(`Create a readable world overview map for "${title}".`);
    if(pointNames.length) flavor.push(`Show major regions or notable sites such as ${joinList(pointNames,8)}.`);
  }else if(level===1){
    flavor.push(`Create a top-down local area map for "${title}".`);
    if(pointNames.length) flavor.push(`Include a handful of important landmarks or buildings such as ${joinList(pointNames,10)}.`);
  }else if(level===2){
    flavor.push(`Create a top-down floor-plan style map for "${title}".`);
    if(focus?.buildingName) flavor.push(`This level is inside the building "${focus.buildingName}".`);
    if(pointNames.length) flavor.push(`Visible rooms or areas can loosely include ${joinList(pointNames,12)}.`);
  }else{
    flavor.push(`Create a single-room top-down map illustration for "${title}".`);
    if(atlas?.dynamicRoomContext===true && focus?.roomId) flavor.push(`The current room is "${focus.roomId}".`);
  }
  const size=`Target canvas ${settings.width}x${settings.height}.`;
  const safety='No text labels, no UI frame, no watermark, and no logo. This should work as a clean map background for an interactive atlas.';
  const schematic='The image must stay readable from a top-down game-map view: clear walkable space, simplified geometry, readable furniture silhouettes, and broad thematic details instead of brittle exact props.';
  const pixel='Render it as crisp pixel art / retro game environment art. Keep pixel readability strong, with clean clusters, simple shading, and a cohesive overhead RPG-map look.';
  const styleBase=mode==='manual'
    ? `Use this user-specified pixel-art direction as the main style note: ${settings.style}.`
    : `Base style: ${settings.style||'top-down pixel art RPG map'}. Keep the overall treatment broad, adaptable, and setting-aware while remaining clearly pixel art.`;
  const adaptive=styleProfileText(atlas, descriptor, settings);
  const roomCue=(atlas?.dynamicRoomContext===true || level<3) ? roomSpecificFlavor(descriptor) : '';
  const loreLogic='Infer only the overall art direction from the character card and linked lorebooks: setting, era, occupation, status, personality, and general lifestyle. Do not depict named places or narrative facts that the player has not yet learned. Exact props are optional; prioritize believable atmosphere.';
  let extra='';
  if(mode==='manual' && settings.promptExtra) extra=`Additional required style note: ${settings.promptExtra}.`;
  else if(mode==='hybrid' && settings.promptExtra) extra=`Additional user style note to blend in: ${settings.promptExtra}.`;
  return [
    'Generate a map background image for a roleplay atlas extension.',
    pixel,
    styleBase,
    loreLogic,
    REVEALED_ONLY_RULE,
    adaptive,
    flavor.join(' '),
    roomCue,
    schematic,
    safety,
    size,
    extra,
  ].filter(Boolean).join(' ');
}

async function blobFromAnyImageResult(result, signal){
  if(result instanceof Blob) return result;
  if(typeof result==='string'){
    if(/^data:image\//i.test(result)){
      const res=await fetch(result,{signal});
      return await res.blob();
    }
    return await fetchBlobFromUrl(result, signal);
  }
  if(result?.url) return await fetchBlobFromUrl(result.url, signal);
  if(result?.b64_json){
    const res=await fetch(`data:image/png;base64,${result.b64_json}`,{signal});
    return await res.blob();
  }
  throw new Error('Image response was empty');
}

async function pollinationsRender(prompt, settings, signal, apiCredential){
  const apiKey=String(apiCredential||'').trim();
  if(!apiKey) throw new Error('Pollinations requires an API key');
  const url=new URL(`https://gen.pollinations.ai/image/${encodeURIComponent(prompt)}`);
  url.searchParams.set('model', settings.pollinationsModel||IMAGE_DEFAULTS.pollinationsModel);
  url.searchParams.set('width', String(settings.width));
  url.searchParams.set('height', String(settings.height));
  url.searchParams.set('nologo', 'true');
  url.searchParams.set('private', 'true');
  url.searchParams.set('safe', 'true');
  url.searchParams.set('enhance', 'false');
  const res=await fetch(String(url),{headers:{Authorization:`Bearer ${apiKey}`},signal});
  if(!res.ok) throw new Error(`Pollinations error ${res.status}`);
  return await res.blob();
}

async function sleep(ms, signal){
  await new Promise((resolve,reject)=>{
    if(signal?.aborted){reject(Object.assign(new Error('Cancelled'),{name:'AbortError'}));return;}
    let settled=false;
    const onAbort=()=>{if(settled)return;settled=true;clearTimeout(id);signal?.removeEventListener('abort',onAbort);reject(Object.assign(new Error('Cancelled'),{name:'AbortError'}));};
    const id=setTimeout(()=>{settled=true;signal?.removeEventListener('abort',onAbort);resolve();},ms);
    signal?.addEventListener('abort',onAbort,{once:true});
  });
}

async function cancelHordeJob(jobId, apiCredential=''){
  if(!/^[A-Za-z0-9-]{8,80}$/.test(String(jobId||'')))return false;
  const headers={'Client-Agent':'neon-map:0.9.3:local','apikey':String(apiCredential||'0000000000').trim()||'0000000000'};
  try{
    const response=await fetch(`https://aihorde.net/api/v2/generate/status/${jobId}`,{method:'DELETE',headers});
    return response.ok;
  }catch{return false;}
}

async function hordeRender(prompt, settings, signal, onStatus, apiCredential){
  const headers={
    'Content-Type':'application/json',
    'Client-Agent':'neon-map:0.9.3:local',
    'apikey':String(apiCredential||'0000000000').trim()||'0000000000',
  };
  const body={
    prompt,nsfw:false,censor_nsfw:true,trusted_workers:false,slow_workers:true,shared:true,r2:true,
    params:{n:1,width:settings.width,height:settings.height,steps:22,cfg_scale:7,sampler_name:'k_euler_a'},
  };
  if(settings.hordeModel)body.models=[settings.hordeModel];
  let id='',finished=false,cancelSent=false;
  const cancel=()=>{
    if(!id||finished||cancelSent)return;
    cancelSent=true;
    onStatus?.('Cancelling AI Horde queue job…');
    void cancelHordeJob(id,apiCredential);
  };
  signal?.addEventListener?.('abort',cancel,{once:true});
  try{
    const kickoff=await fetch('https://aihorde.net/api/v2/generate/async',{method:'POST',headers,body:JSON.stringify(body),signal});
    if(!kickoff.ok)throw new Error(`AI Horde error ${kickoff.status}`);
    const init=await kickoff.json();
    if(!init?.id)throw new Error('AI Horde did not return a job id');
    id=String(init.id);
    if(signal?.aborted){cancel();throw Object.assign(new Error('Cancelled'),{name:'AbortError'});}
    for(let tries=0;tries<50;tries++){
      await sleep(2500,signal);
      const checkRes=await fetch(`https://aihorde.net/api/v2/generate/check/${id}`,{headers,signal});
      if(!checkRes.ok)continue;
      const check=await checkRes.json();
      if(onStatus){
        const parts=[];
        if(Number.isFinite(check?.queue_position))parts.push(`queue ${check.queue_position}`);
        if(Number.isFinite(check?.wait_time))parts.push(`~${check.wait_time}s`);
        if(parts.length)onStatus(`AI Horde: ${parts.join(' · ')}`);
      }
      if(check?.faulted)throw new Error('AI Horde job faulted');
      if(check?.done){
        const statusRes=await fetch(`https://aihorde.net/api/v2/generate/status/${id}`,{headers,signal});
        if(!statusRes.ok)throw new Error(`AI Horde status error ${statusRes.status}`);
        const status=await statusRes.json();
        const gen=status?.generations?.[0];
        if(!gen)throw new Error('AI Horde returned no image');
        const result=await blobFromAnyImageResult(gen.img||gen.url,signal);
        finished=true;
        return result;
      }
    }
    throw new Error('AI Horde timed out');
  }finally{
    signal?.removeEventListener?.('abort',cancel);
    if(id&&!finished&&!cancelSent){cancelSent=true;await cancelHordeJob(id,apiCredential);}
  }
}

async function generateAndCacheView(atlas, level, {signal, onStatus, approvedPaid=false, apiCredential='', namespace=''}={}){
  const settings=ensureImageSettings(atlas);
  if(!settings.enabled || settings.provider==='none') throw new Error('AI image mode is disabled');
  const descriptor=currentViewDescriptor(atlas, level, namespace);
  if(!descriptor) throw new Error('No view available');
  if(descriptor.viewPublic===false)throw new Error('The location has not been revealed in the story');
  const prompt=buildPrompt(atlas, descriptor, settings);
  if(onStatus) onStatus(`Generating image with ${settings.provider==='aihorde'?'AI Horde':'Pollinations'}...`);
  let blob;
  // Hard stop: no paid provider request without a fresh explicit approval from the UI.
  if(settings.provider==='pollinations' && approvedPaid!==true) throw new Error('Paid image request requires explicit user approval');
  if(settings.provider==='pollinations' && !/^sk_[A-Za-z0-9_-]{4,}$/.test(String(apiCredential))) throw new Error('Connect your Pollinations wallet first; personal browser keys are not accepted');
  if(settings.provider==='pollinations') blob=await pollinationsRender(prompt, settings, signal, apiCredential);
  else if(settings.provider==='aihorde') blob=await hordeRender(prompt, settings, signal, onStatus, apiCredential);
  else throw new Error('Unknown image provider');
  const saved=await saveRender(descriptor.key, blob, {
    provider: settings.provider,
    title: descriptor.title,
    level: descriptor.level,
    prompt,
    model: settings.provider==='pollinations'?settings.pollinationsModel:(settings.hordeModel||''),
  });
  return {descriptor,prompt,...saved};
}

return {IMAGE_DEFAULTS,ensureImageSettings,getCachedRender,saveRender,clearRender,clearAllRenders,currentViewDescriptor,buildPrompt,cancelHordeJob,generateAndCacheView};
})();
__nmModules['index.js']=(()=>{
// NEON MAP v0.9.13: stable local atlas + optional user-triggered image generation.
// Never inject prompts into chat generation. Optional AI image calls are direct provider requests, separate from roleplay.
const {t}=__nmModules['labels.js'];
const {backgroundSvg}=__nmModules['backgrounds.js'];
const {createAtlas, normalizeAtlas, fromOld, processHistory, advanceHistory, applyTurn, bestView, viewData, displayActors, currentFor, visibleAt, sourceLabels, rerollLayout, addManualPlace, messagesForReplay, replySignature, levelName, journalEndpoints}=__nmModules['atlas.js'];
const {createMetadataSaver}=__nmModules['persistence.js'];
const {linkedWorldNames}=__nmModules['lore-sources.js'];
const {connectPollinationsDevice}=__nmModules['pollinations-auth.js'];
const {ROOM_GRID, roomStageKey, obstaclesForRoom, findRoomPath, cellAtPixels, cellCenter, safeStartingCell, ensureRoomStage}=__nmModules['room-interaction.js'];
const {inspectArea}=__nmModules['area-inspector.js'];
const {makePlaceRef, normalizePlaceActions, reconcilePlaceActions, pinned, targeted, togglePin, toggleTarget, resolvePlaceRef}=__nmModules['place-cards.js'];
const {IMAGE_DEFAULTS, ensureImageSettings, currentViewDescriptor, getCachedRender, saveRender, generateAndCacheView, clearRender, clearAllRenders}=__nmModules['image-renderer.js'];
const KEY='neon_map_v3', LEGACY='neon_map_v1';
const K={
  world:'\u0e42\u0e25\u0e01',site:'\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48',floor:'\u0e0a\u0e31\u0e49\u0e19',room:'\u0e2b\u0e49\u0e2d\u0e07',
  current:'\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19',history:'\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19',
  unknown:'\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e17\u0e23\u0e32\u0e1a',follow:'\u0e15\u0e32\u0e21\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19',
  local:'แผนที่ local / ภาพ AI เป็นทางเลือก',
  build:'\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e08\u0e32\u0e01 Lorebook',rescan:'\u0e2d\u0e48\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e41\u0e0a\u0e15\u0e43\u0e2b\u0e21\u0e48',
  rebuild:'\u0e08\u0e31\u0e14\u0e1c\u0e31\u0e07\u0e43\u0e2b\u0e21\u0e48',reset:'\u0e25\u0e1a\u0e41\u0e25\u0e30\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e40\u0e17\u0e34\u0e23\u0e4c\u0e19\u0e2b\u0e19\u0e49\u0e32',
  add:'\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48',noChat:'\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e1b\u0e34\u0e14\u0e41\u0e0a\u0e15\u0e15\u0e31\u0e27\u0e25\u0e30\u0e04\u0e23\u0e01\u0e48\u0e2d\u0e19',
  pending:'\u0e23\u0e2d\u0e04\u0e33\u0e15\u0e2d\u0e1a AI \u0e40\u0e17\u0e34\u0e23\u0e4c\u0e19\u0e16\u0e31\u0e14\u0e44\u0e1b\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e43\u0e2b\u0e21\u0e48',
  roomUnknown:'\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e0a\u0e31\u0e49\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e2b\u0e49\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07',
  auto:'\u0e40\u0e1b\u0e34\u0e14\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e41\u0e0a\u0e15',inferred:'\u0e1c\u0e31\u0e07\u0e08\u0e33\u0e25\u0e2d\u0e07 / \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 Canon',
  resetWarning:'\u0e25\u0e1a\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48\u0e41\u0e25\u0e30\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e40\u0e14\u0e34\u0e19 \u0e41\u0e25\u0e49\u0e27\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e2b\u0e25\u0e31\u0e07 AI \u0e15\u0e2d\u0e1a\u0e40\u0e17\u0e34\u0e23\u0e4c\u0e19\u0e16\u0e31\u0e14\u0e44\u0e1b? \u0e41\u0e19\u0e30\u0e19\u0e33\u0e2a\u0e48\u0e07\u0e2d\u0e2d\u0e01 JSON \u0e2a\u0e33\u0e23\u0e2d\u0e07\u0e01\u0e48\u0e2d\u0e19',
  positions:'\u0e40\u0e01\u0e47\u0e1a\u0e1b\u0e23\u0e30\u0e27\u0e31\u0e15\u0e34\u0e01\u0e32\u0e23\u0e22\u0e49\u0e32\u0e22\u0e15\u0e33\u0e41\u0e2b\u0e19\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e23\u0e27\u0e08\u0e1e\u0e1a'
};
const $ = id => document.getElementById(id);
let atlas=null, chatKey='', epoch=0, ready=false, panelOpen=false, selectedPoint=null, inspectorExpanded=false;
let zoom=1, dx=0, dy=0, down=null, activeBooks=new Set(), cacheBooks=[], busy=false, demo=false;
let loreTimer=null,chatTimer=null,pendingReplay=false, imgBusy=false, imgAbort=null, visibleImageKey='';
let autoImageAttempts=new Set();
let walletAuthAbort=null, walletAuthBusy=false, walletAuthExpiry=new Map();
let roomSelectedActor='user';
// UI-only placement state: no remote API requests and no roleplay prompt injection.
const UI_STORAGE_KEY='neon-map-floating-ui-v098';
const floatingUI={x:null,y:null,width:null,height:null,autoOpen:false,detailsOpen:false};
function loadFloatingPrefs(){
 try{
  const raw=JSON.parse(localStorage.getItem(UI_STORAGE_KEY)||'{}');
  for(const key of ['x','y','width','height']){
   if(Number.isFinite(raw?.[key]))floatingUI[key]=Number(raw[key]);
  }
  floatingUI.autoOpen=raw?.autoOpen===true;
 }catch{}
}
function saveFloatingPrefs(){
 try{localStorage.setItem(UI_STORAGE_KEY,JSON.stringify({
   x:floatingUI.x,y:floatingUI.y,width:floatingUI.width,height:floatingUI.height,
   autoOpen:floatingUI.autoOpen
 }));}catch{}
}
function clampNumber(value,min,max){return Math.max(min,Math.min(max,value));}
function launchPosition(){
 const el=$('nm-launch');if(!el)return;
 const width=Math.max(56,el.offsetWidth||58),height=Math.max(56,el.offsetHeight||58);
 const w=window.innerWidth,h=window.innerHeight,edge=8;
 const maxX=Math.max(edge,w-width-edge),maxY=Math.max(edge,h-height-edge);
 const x=clampNumber(Number.isFinite(floatingUI.x)?floatingUI.x:w-width-16,edge,maxX);
 const y=clampNumber(Number.isFinite(floatingUI.y)?floatingUI.y:h-height-100,edge,maxY);
 floatingUI.x=x;floatingUI.y=y;
 el.style.left=Math.round(x)+'px';el.style.top=Math.round(y)+'px';
 el.style.right='auto';el.style.bottom='auto';
}
function panelDimensions(){
 const panel=$('nm-panel');if(!panel)return;
 const w=window.innerWidth,h=window.innerHeight;
 const narrow=w<=800;
 const maxWidth=Math.max(180,w-(narrow?10:24));
 const minWidth=Math.min(maxWidth,narrow?268:420);
 const defaultWidth=narrow?maxWidth:Math.min(920,Math.round(w*.74));
 const minHeight=Math.min(Math.max(250,Math.round(h*.37)),Math.max(200,h-14));
 const maxHeight=Math.max(minHeight,h-14);
 const defaultHeight=Math.round(h*(narrow?.68:.66));
 const width=clampNumber(floatingUI.width??defaultWidth,minWidth,maxWidth);
 const height=clampNumber(floatingUI.height??defaultHeight,minHeight,maxHeight);
 panel.style.width=Math.round(width)+'px';panel.style.height=Math.round(height)+'px';
 panel.style.top='auto';panel.style.left='auto';
 panel.style.bottom=narrow?'5px':'12px';panel.style.right=narrow?'5px':'12px';
}
function adjustPanelSize(delta){
 const panel=$('nm-panel');if(!panel)return;
 floatingUI.height=panel.getBoundingClientRect().height+delta;
 panelDimensions();saveFloatingPrefs();
 if(panelOpen&&!floatingUI.detailsOpen)requestAnimationFrame(fit);
}
function setDetailsOpen(open){
 floatingUI.detailsOpen=!!open;
 const panel=$('nm-panel'),button=$('nm-details-toggle');
 if(panel)panel.classList.toggle('nm-details-open',floatingUI.detailsOpen);
 if(button){
   button.textContent=floatingUI.detailsOpen?'\u21a9 Map':'\u2630 Info';
   button.setAttribute('aria-pressed',String(floatingUI.detailsOpen));
 }
 if(!floatingUI.detailsOpen&&panelOpen)requestAnimationFrame(fit);
}
function installFloatingControls(){
 loadFloatingPrefs();
 const launch=$('nm-launch');panelDimensions();
 if(!launch){
  const close=$('nm-close');if(close)close.addEventListener('click',()=>show(false));
  window.addEventListener('resize',()=>{panelDimensions();if(panelOpen&&!floatingUI.detailsOpen)requestAnimationFrame(fit);});
  return;
 }
 let dragging=null,suppressClick=false;
 launch.addEventListener('pointerdown',event=>{
  if(event.button!=null&&event.button!==0)return;
  const rect=launch.getBoundingClientRect();
  dragging={id:event.pointerId,x:event.clientX,y:event.clientY,left:rect.left,top:rect.top,moved:false};
  try{launch.setPointerCapture(event.pointerId);}catch{}
 });
 launch.addEventListener('pointermove',event=>{
  if(!dragging||event.pointerId!==dragging.id)return;
  const diffX=event.clientX-dragging.x,diffY=event.clientY-dragging.y;
  if(!dragging.moved&&Math.hypot(diffX,diffY)<=7)return;
  dragging.moved=true;
  floatingUI.x=dragging.left+diffX;floatingUI.y=dragging.top+diffY;
  launchPosition();
 });
 const endLaunchDrag=event=>{
  if(!dragging||event.pointerId!==dragging.id)return;
  if(dragging.moved){suppressClick=true;saveFloatingPrefs();}
  dragging=null;
 };
 launch.addEventListener('pointerup',endLaunchDrag);
 launch.addEventListener('pointercancel',event=>{endLaunchDrag(event);});
 launch.addEventListener('click',event=>{
   if(suppressClick){suppressClick=false;event.preventDefault();return;}
   show(true);
 });
 const wireResize=(id,both)=>{
  const grip=$(id);if(!grip)return;
  let active=null;
  grip.addEventListener('pointerdown',event=>{
    if(event.button!=null&&event.button!==0)return;
    event.preventDefault();event.stopPropagation();
    const rect=$('nm-panel').getBoundingClientRect();
    active={id:event.pointerId,x:event.clientX,y:event.clientY,width:rect.width,height:rect.height};
    try{grip.setPointerCapture(event.pointerId);}catch{}
  });
  grip.addEventListener('pointermove',event=>{
    if(!active||active.id!==event.pointerId)return;
    floatingUI.height=active.height+active.y-event.clientY;
    if(both)floatingUI.width=active.width+active.x-event.clientX;
    panelDimensions();
    if(panelOpen&&!floatingUI.detailsOpen)requestAnimationFrame(fit);
  });
  const finish=event=>{
    if(!active||active.id!==event.pointerId)return;
    active=null;saveFloatingPrefs();
  };
  grip.addEventListener('pointerup',finish);
  grip.addEventListener('pointercancel',finish);
 };
 wireResize('nm-sheet-resizer',false);
 wireResize('nm-resize-corner',true);
 $('nm-sheet-resizer').addEventListener('keydown',event=>{
   if(event.key==='ArrowUp'){event.preventDefault();adjustPanelSize(40);}
   if(event.key==='ArrowDown'){event.preventDefault();adjustPanelSize(-40);}
 });
 $('nm-window-shrink').addEventListener('click',()=>adjustPanelSize(-120));
 $('nm-window-expand').addEventListener('click',()=>adjustPanelSize(120));
 $('nm-details-toggle').addEventListener('click',()=>setDetailsOpen(!floatingUI.detailsOpen));
 window.addEventListener('resize',()=>{launchPosition();panelDimensions();if(panelOpen&&!floatingUI.detailsOpen)requestAnimationFrame(fit);});
}
const REGION_RADIUS={0:205,1:225,2:155};
// Credentials live only in this page's JavaScript memory; never write them to Chat Metadata.
const sessionImageKeys=new Map();
const sessionKeyFor=(provider)=>{const key=chatKey+'|'+provider; if(provider==='pollinations' && (walletAuthExpiry.get(key)||0)<Date.now()){sessionImageKeys.delete(key);return '';}return sessionImageKeys.get(key)||'';};
const st=()=>{try{return globalThis.SillyTavern?.getContext?.()||null;}catch{return null;}};
const contextKey=ctx=>ctx?.chatId!=null?String(ctx.chatId)+'/'+String(ctx.characterId??ctx.groupId??''):'none';
const currentChat=()=>{const c=st();return c && c.chatId!=null && (c.characterId!=null || c.groupId!=null);};
const safe=v=>String(v??'').trim().slice(0,120);
const trace=(msg,err=false)=>{const el=$('nm-status');if(el){el.textContent=msg;el.classList.toggle('nm-error',err);}};
const charInfo=(ctx)=>{
 const c=ctx?.characters?.[ctx.characterId];if(!c)return {name:'Character',text:'',primary:'',avatar:''};
 return {name:safe(c.name),avatar:c.avatar||'',primary:c.data?.extensions?.world||'',
   text:[c.name,c.description,c.personality,c.scenario,c.mes_example,c.data?.description,c.data?.personality,
     c.data?.scenario,c.data?.first_mes].filter(Boolean).join('\n').slice(0,25000)};
};
const names=ctx=>({userName:safe(ctx?.name1||ctx?.userName||'User'),charName:safe(charInfo(ctx).name||'Character')});
const clone=v=>JSON.parse(JSON.stringify(v));
const currentNames=()=>names(st());
const describeStyleProfile=()=>{const p=atlas?.styleProfile||{}; const parts=[]; if(p.setting)parts.push(p.setting); if(p.role&&p.role!=='general')parts.push(p.role); return parts.length?parts.join(' · '):'auto';};
const saver=createMetadataSaver({getContext:st,getChatKey:contextKey,metadataKey:KEY});
// One lazy import per page: SillyTavern officially exports World Info readers
// from this module, while context.loadWorldInfo is host-version-dependent.
let wiPromise=null;
const worldInfoModule=()=>wiPromise ||= import('/scripts/world-info.js').catch(error=>{wiPromise=null;console.warn('[NEON MAP] World Info module unavailable',error);return null;});

async function linkedBooks(ctx) {
 const c=charInfo(ctx);let worldSettings={},selectedWorlds=[];
 try{
  const mod=await worldInfoModule();
  worldSettings=mod.getWorldInfoSettings?.()?.world_info||{};
  selectedWorlds=mod.selected_world_info||[];
 }catch(e){console.debug('[NEON MAP] Optional world-info settings unavailable',e);}
 return linkedWorldNames({ctx,card:c,worldSettings,selectedWorlds,
   extraBooks:[...activeBooks,...(Array.isArray(atlas?.extraBooks)?atlas.extraBooks:[]),
   ...(Array.isArray(ctx?.chatMetadata?.[KEY]?.extraBooks)?ctx.chatMetadata[KEY].extraBooks:[])]});
}
async function makeAtlas(ctx, token, seed=0, revealLore=false) {
 const c=charInfo(ctx);const entries=[],found=[];
 const linked=await linkedBooks(ctx);
 const wi=typeof ctx.loadWorldInfo==='function'?null:await worldInfoModule();
 const loadBook=typeof ctx.loadWorldInfo==='function'?ctx.loadWorldInfo.bind(ctx):wi?.loadWorldInfo;
 for(const name of linked){
   try{const data=await loadBook?.(name);if(!data?.entries)continue;
     found.push(name);
     for(const e of Object.values(data.entries)){
       if(!e||e.disable||e.disabled)continue;
       const text=String(e.content||'');
       // Secret lore is not automatically shown on the player's map.
       if(/\[(?:secret|hidden|undiscovered)\]|\bdo not reveal\b/i.test(text))continue;
       entries.push({...e,world:name});if(entries.length>=1300)break;
     }
   }catch(err){console.warn('[NEON MAP] Lorebook read failed',name,err);}
   if(entries.length>=1300)break;
 }
 if(token!==epoch)return null;
 const built=createAtlas({characterName:c.name,characterText:c.text,entries,extraSourceNames:found,seed,revealLore});
 built.extraBooks=[...activeBooks];
 if(seed>0){built.seed=seed-1;rerollLayout(built);}
 return built;
}
function show(open){
 panelOpen=!!open;
 const panel=$('nm-panel'),launch=$('nm-launch');
 if(!panel)return;
 panel.hidden=!panelOpen;if(launch)launch.hidden=panelOpen;
 globalThis.__NEON_MAP_OPEN=panelOpen;
 document.dispatchEvent(new CustomEvent('neon-map:visibility',{detail:{open:panelOpen}}));
 if(!panelOpen){
   if(imgAbort){try{imgAbort.abort();}catch{}}
   setDetailsOpen(false);if(launch)launchPosition();return;
 }
 panelDimensions();setDetailsOpen(false);
 requestAnimationFrame(()=>{try{draw();fit();if(atlas?.followUser)focusUser();}catch(error){console.error('[NEON MAP] Map render failed but panel stays open',error);trace('Map render error: '+String(error?.message||error).slice(0,100),true);}});
}
// Update in-memory chatMetadata now; coalesce explicit server saves.
// SillyTavern's regular chat save may already persist the same metadata.
async function persist(urgent=false,turn=false) {
 const ctx=st();
 if(!ctx?.chatMetadata||!atlas||ctx.chatId==null||chatKey!==contextKey(ctx))return false;
 const ok=await saver.mark(atlas,{urgent,turn});
 if(!ok&&saver.stats().error)trace('Local map updated, but server save failed. Export JSON to back up.',true);
 return ok;
}
async function loadChat() {
 const token=++epoch;const ctx=st();const next=contextKey(ctx);
 if(chatKey===next&&atlas)return;
 if(imgAbort){try{imgAbort.abort();}catch{}}
 if(walletAuthAbort){try{walletAuthAbort.abort();}catch{}}
 chatKey=next;saver.changeChat(next);activeBooks.clear();pendingReplay=false;selectedPoint=null;inspectorExpanded=false;autoImageAttempts.clear();clearVisibleImage();
 if(!currentChat()) {atlas=null;show(false);return;}
 const old=ctx.chatMetadata?.[KEY];const oldSecretPresent=!!old?.imageSettings?.apiKey;atlas=normalizeAtlas(old);
 if(!atlas)atlas=fromOld(ctx.chatMetadata?.[LEGACY]);
 for(const name of (atlas?.extraBooks||[]))activeBooks.add(name);
 if(atlas){ensureImageSettings(atlas);normalizePlaceActions(atlas);} // scrub older plaintext keys and normalize place notes
 const needsLoreRefresh=!!old && (!old.styleProfile || Number(old.styleProfile.schema||0)<2 || old.sourceEntryCount==null || Number(old.version||0)<9);
 trace('Reading chat / Lorebooks (local only)');
 if(!atlas)atlas=await makeAtlas(ctx,token);
 if(token!==epoch||!atlas)return;
 const result=processHistory(atlas,ctx.chat||[],names(ctx));
 if(result.changed || !old || old.version!==10 || oldSecretPresent)void persist(!old||old.version!==10||oldSecretPresent, result.newTurns>0);
 if(atlas.followUser)atlas.view=bestView(atlas);
 draw();if(floatingUI.autoOpen)show(true);
 if(needsLoreRefresh) scheduleLoreRefresh();
 trace(`Local only | ${atlas.turns} turns | ${atlas.journal.length} moves`);
}
async function updateFromTurn() {
 const ctx=st();if(!atlas||ctx?.chatId==null||chatKey!==contextKey(ctx))return;
 if(atlas.pendingReset){
   const newReplies=messagesForReplay(ctx.chat||[]);
   if(newReplies.length<=atlas.signatures.length)return;
   const token=++epoch;
   const newAtlas=await makeAtlas(ctx,token,(atlas.seed||0)+1,atlas.revealLore===true);
   if(token!==epoch||!newAtlas)return;
   const replies=messagesForReplay(ctx.chat||[]);
   if(replies.length){newAtlas.turns=replies.length-1;applyTurn(newAtlas,replies.at(-1),names(ctx));newAtlas.signatures=replies.map(replySignature);newAtlas.replyIndices=replies.map(m=>m._nmIndex);}
   newAtlas.lastScanIndex=(ctx.chat||[]).length;newAtlas.lastBotIndex=replies.length?replies.at(-1)._nmIndex:-1;newAtlas.lastBotSignature=replies.length?replySignature(replies.at(-1)):'';
   selectedPoint=null;inspectorExpanded=false;newAtlas.placePins=clone(atlas?.placePins||[]);newAtlas.placeTarget=clone(atlas?.placeTarget||null);newAtlas.extraBooks=[...activeBooks];newAtlas.imageSettings={...imageState()};newAtlas.interactiveRooms=atlas?.interactiveRooms!==false;newAtlas.dynamicRoomContext=atlas?.dynamicRoomContext===true;newAtlas.roomStages=clone(atlas?.roomStages||{});atlas=newAtlas;await persist(true);draw();if(atlas.followUser)focusUser();trace('New local map created from this turn');return;
 }
 const change=advanceHistory(atlas,ctx.chat||[],names(ctx),pendingReplay);pendingReplay=false;
 if(change.changed){if(atlas.followUser)atlas.view=bestView(atlas);void persist(false,true);draw();if(atlas.followUser)focusUser();trace(`Local | ${atlas.turns} turns | ${atlas.journal.length} moves`);}
}
function renderShell(){
 const root=document.createElement('div');root.id='neon-map-v3';
 root.innerHTML=`
 <section id="nm-panel" role="region" aria-label="NEON MAP floating bottom map" hidden>
 <div id="nm-sheet-resizer" role="separator" tabindex="0" aria-label="Drag up or down to resize map height" aria-orientation="horizontal"><span></span></div><button type="button" id="nm-resize-corner" aria-label="Drag to resize map width and height" title="Drag to resize">&#8698;</button>
 <header class="nm-head"><span class="nm-brand">N<span>NEON ATLAS</span></span><div class="nm-head-right"><span class="nm-noai" id="nm-ai-mode">LOCAL MAP</span><button type="button" id="nm-details-toggle" aria-label="Toggle map details" aria-pressed="false">&#9776; Info</button><button type="button" id="nm-window-shrink" title="Shrink map window" aria-label="Shrink map window">&#8722;</button><button type="button" id="nm-window-expand" title="Expand map window" aria-label="Expand map window">&#10530;</button><button type="button" id="nm-close" title="Close to floating button" aria-label="Close map to floating button">&#10005;</button></div></header>
 <div class="nm-summary"><strong>v0.9.13 · Open from chat · Floating dock</strong><span id="nm-status">${K.noChat}</span></div>
 <nav id="nm-levels" aria-label="Map levels"><button data-level="0">1 · ${K.world}</button><button data-level="1">2 · ${K.site}</button><button data-level="2">3 · ${K.floor}</button><button data-level="3">4 · ${K.room}</button></nav>
 <div class="nm-topline"><button id="nm-prev" title="Previous level">&#10094;</button><span id="nm-location">${K.location}</span><button id="nm-next" title="Next level">&#10095;</button><button id="nm-follow" title="${K.follow}">&#9678;</button></div>
 <div class="nm-body"><div id="nm-viewport" aria-label="Interactive schematic map" tabindex="0">
   <div id="nm-canvas"><svg id="nm-background" aria-hidden="true"></svg><img id="nm-ai-image" alt="AI map background" hidden><div id="nm-points"></div><svg id="nm-fog-layer" aria-hidden="true"></svg><svg id="nm-region-highlight" aria-hidden="true"></svg><svg id="nm-room-grid" aria-label="GM room grid" hidden></svg><div id="nm-people"></div></div>
   <div class="nm-stage"><b id="nm-map-title">NEON MAP</b><small id="nm-stage-note">${K.inferred}</small></div>
   <div class="nm-zoom"><button id="nm-plus">+</button><button id="nm-minus">&minus;</button><button id="nm-fit" title="Fit">&#9633;</button></div>
   <div id="nm-empty" hidden>${K.roomUnknown}</div>
   <div class="nm-watermark">${K.inferred} · ${K.local}</div>
   <section id="nm-place-card" class="nm-place-card" role="region" aria-label="การ์ดสถานที่ที่เลือก" hidden>
     <div class="nm-place-eyebrow"><span id="nm-place-presence">📍 สถานที่ที่เลือก</span><button id="nm-place-close" type="button" aria-label="ปิดการ์ดสถานที่">✕</button></div>
     <strong id="nm-place-title">สถานที่</strong>
     <div class="nm-place-tags"><span id="nm-place-type"></span><span id="nm-place-weather"></span><span id="nm-place-access"></span></div>
     <div class="nm-place-actions"><button id="nm-place-enter" type="button">🚪 เข้าไปข้างใน</button><button id="nm-place-pin" type="button" aria-pressed="false">📌 ปักหมุด</button><button id="nm-place-target" type="button" aria-pressed="false">🎯 ตั้งเป้าหมาย</button></div>
     <button id="nm-place-expand" type="button" aria-expanded="false" aria-controls="nm-place-sheet">▤ ดูข้อมูลพื้นที่ทั้งหมด ▴</button>
     <small id="nm-place-disclaimer">หมายเหตุ GM เท่านั้น ไม่เคลื่อนตัวละครและไม่เปลี่ยนเนื้อเรื่อง</small>
   </section>
   <div id="nm-place-sheet" class="nm-place-sheet" role="region" aria-label="รายละเอียดสถานที่" hidden>
    <div class="nm-card nm-area-inspector" id="nm-area-inspector" hidden>
     <div class="nm-subhead"><span>PLACE DETAILS · รายละเอียดสถานที่</span><button id="nm-inspect-close" type="button" title="ย่อแผงข้อมูล" aria-label="ย่อแผงข้อมูล">✕</button></div>
     <strong id="nm-inspect-title">ข้อมูลบริเวณ</strong><small id="nm-inspect-source"></small>
     <div id="nm-inspect-sections"></div>
     <div class="nm-inspect-actions"><button id="nm-inspect-enter" type="button">↳ เข้าไปดูข้างใน</button></div>
     <small class="nm-reveal-rule">ข้อมูลที่ยืนยันจากเรื่องและโน้ต GM (ไม่ใช่ Canon) เท่านั้น · การสังเกตอาจเปลี่ยนตามเวลา · เปอร์เซ็นต์นับจุดที่รู้จัก ไม่ใช่พื้นที่จริงหรือระยะทางจริง</small>
    </div>
   </div>
 </div><div class="nm-aside" id="nm-aside">
   <div class="nm-card nm-place-board"><div class="nm-subhead"><span>📌 PLACES · สถานที่ที่บันทึก</span><small id="nm-pin-count">0 จุด</small></div><div id="nm-goal-line"></div><div id="nm-saved-list"></div><small class="nm-board-note">แสดงหมุดทั้งหมดสูงสุด 80 จุด · โน้ตแยกแชต ไม่ย้ายตัวละคร</small></div>
   <div class="nm-card"><div class="nm-subhead">LIVE / CHARACTERS</div><div id="nm-cast"></div></div>
   <div class="nm-card nm-journal"><div class="nm-subhead">${K.history} <small id="nm-turns"></small></div><div id="nm-moves"></div></div>
   <div class="nm-card" id="nm-room-tools" hidden><div class="nm-subhead">GM ROOM STAGING <small>local only</small></div><label class="nm-field">เลือกหมุด <select id="nm-room-actor"></select></label><div class="nm-buttons"><button id="nm-room-reset">Reset positions</button></div><small>แตะช่องเพื่อเดินบนกริดจำลองและหลบสิ่งกีดขวางตามประเภทห้อง (ไม่ตรวจเฟอร์นิเจอร์จากภาพ AI) · ไม่เปลี่ยนเนื้อเรื่องหรือ Prompt</small></div>
   <div class="nm-card"><div class="nm-subhead">MAP TOOLS · ${K.local}</div>
     <div class="nm-buttons"><button id="nm-build">สร้างผังจาก Lorebook ใหม่ (ฟรี)</button><button id="nm-lore-refresh">รีเฟรช Lorebook</button><button id="nm-rescan">${K.rescan}</button><button id="nm-reroll">จัดผังใหม่ (ฟรี)</button><button id="nm-reset">สร้างผังใหม่เทิร์นหน้า (ฟรี)</button><button id="nm-add">+ ${K.add}</button><button id="nm-export">${t.export}</button><button id="nm-import">${t.import}</button></div>
     <label class="nm-check"><input id="nm-auto" type="checkbox"> Auto-open map on chat change (optional)</label>
     <label class="nm-check"><input id="nm-follow-check" type="checkbox" checked> ${K.follow}</label>
     <label class="nm-check"><input id="nm-fog" type="checkbox" checked> ${t.fog}</label>
     <label class="nm-check"><input id="nm-interactive-rooms" type="checkbox" checked> Interactive Room (GM Grid + เดินหลบเฟอร์นิเจอร์)</label>
     <label class="nm-check"><input id="nm-dynamic-room" type="checkbox"> Detailed Room Image Context (สำหรับพรอมป์ภาพเท่านั้น)</label>
     <label class="nm-check"><input id="nm-reveal" type="checkbox"> แสดงสถานที่จาก Lorebook ที่ยังไม่ค้นพบ (อาจมีสปอยล์)</label>
     <label class="nm-book">+ Lorebook <select id="nm-extra"><option value="">Add source...</option></select></label>
     <small id="nm-source-list"></small>
   </div>
   <div class="nm-card"><div class="nm-subhead">MAP IMAGE / PIXEL ART <small>local ฟรี หรือ AI ภายนอก</small></div>
     <label class="nm-check"><input id="nm-img-enabled" type="checkbox"> เปิดเลเยอร์ภาพประกอบแผนที่</label>
     <label class="nm-check"><input id="nm-img-auto" type="checkbox"> เจนอัตโนมัติเมื่อเปิดสถานที่ใหม่ (Local Pixel / AI Horde ฟรี)</label>
     <label class="nm-field">Provider<select id="nm-img-provider"><option value="none">Off (map only)</option><option value="localpixel">Local Pixel Art (ฟรี / offline)</option><option value="aihorde">AI Horde (ฟรี / community)</option><option value="pollinations">Pollinations.ai (เสียเงิน / Connect Wallet)</option></select></label>
     <label class="nm-field" id="nm-horde-key-box">AI Horde API Key (ไม่จำเป็น) <input id="nm-img-key" autocomplete="off" spellcheck="false" type="password" placeholder="AI Horde optional key"></label>
     <div id="nm-pollinations-box"><label class="nm-field">Pollinations model <input id="nm-pollinations-model" type="text" placeholder="black-forest-labs/flux.1-schnell"></label><label class="nm-field">Public App Key (pk_...; optional) <input id="nm-pollinations-app-key" type="text" autocomplete="off" placeholder="pk_... or leave blank"></label><div class="nm-buttons"><button id="nm-pollinations-connect">Connect Pollen Wallet</button><button id="nm-pollinations-disconnect">Disconnect</button><button id="nm-pollinations-cancel" hidden>Cancel connection</button></div><div id="nm-pollinations-auth-info" class="nm-auth-info"></div></div>
     <label class="nm-field" id="nm-horde-box">AI Horde model <input id="nm-horde-model" type="text" placeholder="leave blank = provider default"></label>
     <label class="nm-field">Style mode<select id="nm-img-style-mode"><option value="auto">Auto จาก Character + Lorebook</option><option value="hybrid">Hybrid (Auto + Extra note)</option><option value="manual">Manual only</option></select></label>
     <label class="nm-field">Extra prompt / style note<textarea id="nm-img-extra" rows="3" placeholder="ex: bright fantasy town, cozy, 16-bit JRPG"></textarea></label>
     <small id="nm-style-summary">ธีมที่เดาได้: auto</small>
     <small id="nm-paid-warning" hidden>คำเตือน: โหมดนี้อาจมีค่าใช้จ่ายจริง</small>
     <div class="nm-buttons"><button id="nm-img-generate">เจนภาพใหม่ (เลือกฟรี/เสียเงิน)</button><button id="nm-img-cancel" hidden>Cancel queued image</button><button id="nm-img-clear">Clear current image</button><button id="nm-img-clear-all">Clear all cached images</button></div>
     <small id="nm-img-note">ค่าเริ่มต้นปิดภาพประกอบ โหมด Local Pixel ฟรีและทำงานในเบราว์เซอร์ ไม่ส่งเข้า Prompt</small>
   </div></div></div><footer>${K.positions} · ${K.inferred}</footer>
 <input type="file" id="nm-import-file" accept="application/json,.json" hidden>
 </section>`;
 document.body.appendChild(root);
 installFloatingControls();
 $('nm-close').addEventListener('click',()=>show(false));
 $('nm-place-close').addEventListener('click',()=>{selectedPoint=null;inspectorExpanded=false;draw({selectionOnly:true});});
 $('nm-inspect-close').addEventListener('click',()=>{inspectorExpanded=false;draw({selectionOnly:true});});
 $('nm-place-expand').addEventListener('click',()=>{if(!selectedPoint)return;inspectorExpanded=!inspectorExpanded;draw({selectionOnly:true});});
 $('nm-place-enter').addEventListener('click',()=>enterSelectedPlace());
 $('nm-place-pin').addEventListener('click',()=>{void setSelectedPlaceAction('pin');});
 $('nm-place-target').addEventListener('click',()=>{void setSelectedPlaceAction('target');});
 $('nm-inspect-enter').addEventListener('click',()=>enterSelectedPlace());
 for(const b of document.querySelectorAll('#nm-levels button'))b.addEventListener('click',()=>goLevel(Number(b.dataset.level)));
 $('nm-prev').addEventListener('click',()=>goLevel((atlas?.view||0)-1));
 $('nm-next').addEventListener('click',()=>goLevel((atlas?.view||0)+1));
 $('nm-follow').addEventListener('click',async()=>{if(!atlas)return;selectedPoint=null;atlas.followUser=true;atlas.browse=null;atlas.view=bestView(atlas);await persist();draw();focusUser();});
 $('nm-plus').addEventListener('click',()=>zoomAt(1.25));$('nm-minus').addEventListener('click',()=>zoomAt(.8));$('nm-fit').addEventListener('click',fit);
 $('nm-build').addEventListener('click',async()=>{if(!currentChat())return;
   if(!confirm('Recreate map from linked Lorebooks and re-read local chat history? This makes no AI request.'))return;
   const ctx=st(),token=++epoch;trace(K.build);const newer=await makeAtlas(ctx,token,(atlas?.seed||0)+1,atlas?.revealLore===true);
   if(!newer||token!==epoch)return;newer.manual=clone(atlas?.manual||[]);newer.placePins=clone(atlas?.placePins||[]);newer.placeTarget=clone(atlas?.placeTarget||null);newer.followUser=atlas?.followUser!==false;newer.autoOpen=atlas?.autoOpen!==false;newer.showFog=atlas?.showFog!==false;newer.interactiveRooms=atlas?.interactiveRooms!==false;newer.dynamicRoomContext=atlas?.dynamicRoomContext===true;newer.roomStages=clone(atlas?.roomStages||{});newer.imageSettings={...imageState()};atlas=newer;processHistory(atlas,ctx.chat||[],names(ctx));atlas.view=bestView(atlas);
   selectedPoint=null;await persist(true);fit();draw();if(atlas.followUser)focusUser();trace('Recreated locally from lore + history');});
 $('nm-lore-refresh').addEventListener('click',()=>{void refreshLore();});
 $('nm-rescan').addEventListener('click',async()=>{if(!atlas)return;atlas.signatures=['force-replay'];const r=processHistory(atlas,st()?.chat||[],currentNames());
   atlas.view=bestView(atlas);await persist(true);draw();if(atlas.followUser)focusUser();trace(`Re-read ${r.newTurns} AI replies locally`);});
 $('nm-reroll').addEventListener('click',async()=>{if(!atlas)return;rerollLayout(atlas);await persist(true);draw();fit();trace('Layout changed. History preserved; no AI call.');});
 $('nm-reset').addEventListener('click',async()=>{if(!atlas)return;if(!confirm(K.resetWarning))return;
   atlas.pendingReset=true;await persist(true);draw();trace(K.pending);});
 $('nm-add').addEventListener('click',async()=>{if(!atlas)return;const name=prompt('Name of location (local only):');if(!name?.trim())return;
   addManualPlace(atlas,name,atlas.view);await persist(true);draw();});
 $('nm-export').addEventListener('click',exportMap);
 $('nm-import').addEventListener('click',()=>$('nm-import-file').click());
 $('nm-import-file').addEventListener('change',importMap);
 $('nm-auto').addEventListener('change',e=>{floatingUI.autoOpen=e.target.checked;saveFloatingPrefs();});
 $('nm-follow-check').addEventListener('change',async e=>{if(!atlas)return;atlas.followUser=e.target.checked;if(atlas.followUser){atlas.browse=null;atlas.view=bestView(atlas);}await persist();draw();});
 $('nm-fog').addEventListener('change',async e=>{if(!atlas)return;atlas.showFog=e.target.checked;await persist();draw();});
 $('nm-interactive-rooms').addEventListener('change',async e=>{if(!atlas)return;atlas.interactiveRooms=e.target.checked; if(atlas.followUser)atlas.view=bestView(atlas); await persist(true); draw(); if(panelOpen)fit();});
 $('nm-room-actor').addEventListener('change',e=>{roomSelectedActor=e.target.value; drawRoomInteraction();});
 $('nm-room-reset').addEventListener('click',async()=>{if(!atlas)return;const loc=visibleAt(atlas),key=roomStageKey(loc);if(key&&atlas.roomStages)delete atlas.roomStages[key];roomSelectedActor='user';await persist(true);drawRoomInteraction();});
 $('nm-room-grid').addEventListener('click',e=>{void onRoomGridClick(e);});
 $('nm-dynamic-room').addEventListener('change',async e=>{if(!atlas)return;atlas.dynamicRoomContext=e.target.checked; if(atlas.followUser)atlas.view=bestView(atlas); await persist(true); draw(); if(atlas.followUser)focusUser();});
 $('nm-reveal').addEventListener('change',async e=>{if(!atlas)return;
   const want=e.target.checked;if(want&&!confirm('แสดงชื่อสถานที่ที่ Lorebook ระบุ แม้ยังไม่เคยสำรวจ? อาจมีสปอยล์')){e.target.checked=false;return;}
   atlas.revealLore=want;await refreshLore();});
 $('nm-extra').addEventListener('change',e=>{const x=e.target.value;if(x){activeBooks.add(x);if(atlas){atlas.extraBooks=[...activeBooks];void persist(true);}}e.target.value='';trace('Extra source selected for next Build: '+[...activeBooks].join(', '));});
 const saveImageUi=()=>{void saveImageSettingsFromUi();};
 for(const id of ['nm-img-enabled','nm-img-auto','nm-img-style-mode'])$(id).addEventListener('change',saveImageUi);
 $('nm-img-provider').addEventListener('change',e=>{const next=e.target.value||'none';const prev=imageState().provider||'none';if(next==='pollinations' && !confirm('คำเตือน: คุณกำลังเลือกโหมด Pollinations.ai ซึ่งอาจมีค่าใช้จ่ายจริงและต้องยืนยันก่อนสร้างภาพทุกครั้ง\n\nต้องการเปลี่ยนเป็นโหมดเสียเงินนี้หรือไม่?')){e.target.value=prev;updateImageProviderFields();return;}$('nm-img-key').value=sessionKeyFor('aihorde');saveImageUi();});
 for(const id of ['nm-img-key','nm-pollinations-model','nm-horde-model','nm-pollinations-app-key'])$(id).addEventListener('change',saveImageUi);
 $('nm-pollinations-connect').addEventListener('click',()=>{if(confirm('คำเตือน: การเชื่อม Pollinations Wallet ใช้สำหรับโหมดสร้างภาพแบบเสียเงินจริง และการกดสร้างภาพภายหลังอาจใช้เครดิต Pollen ของคุณ\n\nยืนยันว่าต้องการเชื่อม Wallet หรือไม่?')){void beginWalletConnection();}});
 $('nm-pollinations-disconnect').addEventListener('click',()=>{disconnectWallet();});
 $('nm-pollinations-cancel').addEventListener('click',()=>{walletAuthAbort?.abort();});
 $('nm-img-cancel').addEventListener('click',()=>{if(imgAbort){imgAbort.abort();trace('Cancelling image request…');}});
 $('nm-img-extra').addEventListener('blur',saveImageUi);
 $('nm-img-generate').addEventListener('click',()=>{const provider=imageState().provider||'none';if(provider==='pollinations' && !confirm('คำเตือน: คุณกำลังกดสร้างภาพในโหมดเสียเงินจริง ระบบจะมีการยืนยันอีกครั้งก่อนส่งคำขอจริง\n\nต้องการไปต่อหรือไม่?'))return;void generateCurrentMapImage(true);});
 $('nm-img-clear').addEventListener('click',()=>{void clearCurrentMapImage();});
 $('nm-img-clear-all').addEventListener('click',()=>{if(confirm('Clear every cached AI image stored in this browser?'))void clearAllMapImages();});
 const vp=$('nm-viewport');
 vp.addEventListener('pointerdown',e=>{if(e.target.closest('button, #nm-room-grid, #nm-place-card, #nm-place-sheet'))return;down={id:e.pointerId,x:e.clientX,y:e.clientY,panX:dx,panY:dy,time:Date.now(),moved:false};vp.setPointerCapture?.(e.pointerId);});
 vp.addEventListener('pointermove',e=>{if(!down||down.id!==e.pointerId)return;const mx=e.clientX-down.x,my=e.clientY-down.y;if(Math.abs(mx)+Math.abs(my)>6)down.moved=true;
   dx=down.panX+mx;dy=down.panY+my;applyTransform();});
 vp.addEventListener('pointerup',e=>{if(!down||down.id!==e.pointerId)return;const mx=e.clientX-down.x,my=e.clientY-down.y;
   if(Math.abs(mx)>88 && Math.abs(mx)>Math.abs(my)*1.45 && Date.now()-down.time<850){goLevel((atlas?.view||0)+(mx<0?1:-1));}down=null;});
 vp.addEventListener('pointercancel',()=>down=null);
 vp.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.12:.9);},{passive:false});
 document.addEventListener('keydown',e=>{if(e.key!=='Escape'||!panelOpen)return;if(inspectorExpanded){inspectorExpanded=false;draw({selectionOnly:true});}else if(selectedPoint){selectedPoint=null;draw({selectionOnly:true});}else show(false);});
 window.addEventListener('resize',()=>{if(panelOpen)fit();});
}

function roomPresentActors(loc){
 return displayActors(atlas).filter(a=>{
   if(!a?.position||!safeActorPosition(a))return false;
   const p=a.position;
   return !!p.roomId && p.roomId===loc.roomId && p.floorId===loc.floorId && p.buildingId===loc.buildingId && p.areaId===loc.areaId;
 }).slice(0,12);
}
function drawRoomInteraction(){
 const svg=$('nm-room-grid'),tools=$('nm-room-tools');if(!svg||!tools)return;
 svg.setAttribute('hidden','');tools.hidden=true;svg.replaceChildren();
 if(!atlas||!panelOpen||atlas.view!==3||atlas.interactiveRooms===false)return;
 const loc=visibleAt(atlas);if(!loc?.roomId)return;
 if(atlas.showFog){const r=Object.values(atlas.rooms||{}).find(x=>x.areaId===loc.areaId&&x.buildingId===loc.buildingId&&x.floorId===loc.floorId&&x.name===loc.roomId);if(r&&!r.discovered)return;}
 const stage=ensureRoomStage(atlas,loc);if(!stage)return;
 const cast=roomPresentActors(loc),obstacles=obstaclesForRoom(loc.roomId);
 const select=$('nm-room-actor');select.replaceChildren();
 for(const [i,a] of cast.entries()){
   if(!stage.tokens[a.id])stage.tokens[a.id]=safeStartingCell(i,obstacles);
   select.add(new Option(a.name,a.id));
 }
 if(!cast.length){select.add(new Option('No confirmed actors in room',''));select.disabled=true;}else select.disabled=false;
 if(!cast.some(a=>a.id===roomSelectedActor))roomSelectedActor=cast[0]?.id||'';
 select.value=roomSelectedActor;
 const NS='http://www.w3.org/2000/svg';
 svg.setAttribute('viewBox','0 0 1024 720');svg.setAttribute('width','1024');svg.setAttribute('height','720');
 const el=(tag,attributes={})=>{const n=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attributes))n.setAttribute(k,String(v));svg.appendChild(n);return n;};
 el('rect',{x:ROOM_GRID.x,y:ROOM_GRID.y,width:ROOM_GRID.width,height:ROOM_GRID.height,fill:'transparent','pointer-events':'all'});
 for(let x=0;x<=ROOM_GRID.columns;x++){const xp=ROOM_GRID.x+x*ROOM_GRID.width/ROOM_GRID.columns;el('line',{x1:xp,y1:ROOM_GRID.y,x2:xp,y2:ROOM_GRID.y+ROOM_GRID.height,stroke:'#465b6a','stroke-opacity':'.3','stroke-width':'1','pointer-events':'none'});}
 for(let y=0;y<=ROOM_GRID.rows;y++){const yp=ROOM_GRID.y+y*ROOM_GRID.height/ROOM_GRID.rows;el('line',{x1:ROOM_GRID.x,y1:yp,x2:ROOM_GRID.x+ROOM_GRID.width,y2:yp,stroke:'#465b6a','stroke-opacity':'.3','stroke-width':'1','pointer-events':'none'});}
 for(const key of obstacles){const [x,y]=key.split(',').map(Number),p=cellCenter({x,y});el('rect',{x:p.x-ROOM_GRID.width/ROOM_GRID.columns/2,y:p.y-ROOM_GRID.height/ROOM_GRID.rows/2,width:ROOM_GRID.width/ROOM_GRID.columns,height:ROOM_GRID.height/ROOM_GRID.rows,fill:'#704d46','fill-opacity':'.12','pointer-events':'none'});}
 if(stage.lastPath?.length>1){const d=stage.lastPath.map((cell,i)=>{const p=cellCenter(cell);return (i?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1);}).join(' ');el('path',{d,fill:'none',stroke:'#4acaba','stroke-width':4,'stroke-dasharray':'8 7','pointer-events':'none'});}
 for(const a of cast){const cell=stage.tokens[a.id],p=cell&&cellCenter(cell);if(!p)continue;
  el('circle',{cx:p.x,cy:p.y,r:20,fill:a.role==='user'?'#286f9f':a.role==='char'?'#ac7641':'#6d8a73',stroke:'#fff','stroke-width':3,'pointer-events':'none'});
  const label=el('text',{x:p.x,y:p.y+5,'text-anchor':'middle',fill:'#fff','font-size':16,'font-weight':'bold','pointer-events':'none'});label.textContent=a.role==='user'?'U':a.role==='char'?'C':'N';
 }
 svg.removeAttribute('hidden');tools.hidden=false;
}
async function onRoomGridClick(e){
 if(!atlas||atlas.view!==3||atlas.interactiveRooms===false||!roomSelectedActor)return;
 const svg=$('nm-room-grid'),loc=visibleAt(atlas),stage=ensureRoomStage(atlas,loc);if(!stage||svg.hasAttribute('hidden'))return;
 const pt=svg.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;
 const matrix=svg.getScreenCTM();if(!matrix)return;
 const at=pt.matrixTransform(matrix.inverse());const cell=cellAtPixels(at.x,at.y);
 const obstacles=obstaclesForRoom(loc?.roomId);
 const from=stage.tokens[roomSelectedActor];const route=findRoomPath(from,cell,obstacles);
 if(!route.length){trace('ช่องนี้เดินไม่ได้หรือถูกเฟอร์นิเจอร์กั้น (GM grid)',true);return;}
 stage.tokens[roomSelectedActor]=cell;stage.lastPath=route;
 drawRoomInteraction();await persist(true);trace('GM moved token through '+(route.length-1)+' grid steps (not story canon)');
}
async function beginWalletConnection(){
 if(walletAuthBusy||!atlas)return;
 const savedChat=chatKey, appKey=String($('nm-pollinations-app-key')?.value||'').trim();
 walletAuthAbort=new AbortController();walletAuthBusy=true;
 const start=$('nm-pollinations-connect'),cancel=$('nm-pollinations-cancel'),info=$('nm-pollinations-auth-info');
 start.disabled=true;cancel.hidden=false;info.replaceChildren();
 try{
   const result=await connectPollinationsDevice({appKey,signal:walletAuthAbort.signal,
    onStatus:msg=>trace(msg),
    onChallenge:challenge=>{
     if(chatKey!==savedChat)return;
     const label=document.createElement('span');label.textContent='รหัสยืนยัน: '+challenge.userCode+' — ';
     const link=document.createElement('a');link.href=challenge.verificationUrl;link.target='_blank';link.rel='noopener noreferrer';link.textContent='เปิด Pollinations เพื่ออนุญาตวงเงิน';
     info.replaceChildren(label,link);trace('เปิดลิงก์ Pollinations และใส่รหัสเพื่ออนุญาตกระเป๋าเครดิต');
    }});
   if(savedChat!==chatKey)return;
   const k=savedChat+'|pollinations';sessionImageKeys.set(k,result.token);walletAuthExpiry.set(k,result.expiresAt);
   info.textContent='เชื่อมกระเป๋าเครดิตสำเร็จ (ใช้ได้เฉพาะแท็บนี้ / ยังต้องยืนยันก่อนเจนทุกครั้ง)';trace('Pollinations Wallet connected — paid image confirmations remain required');
 }catch(err){if(err?.name==='AbortError')trace('ยกเลิกการเชื่อมบัญชี Pollinations');else trace('เชื่อม Pollinations ไม่สำเร็จ: '+err.message,true);}
 finally{walletAuthBusy=false;walletAuthAbort=null;start.disabled=false;cancel.hidden=true;}
}
function disconnectWallet(){
 walletAuthAbort?.abort();const k=chatKey+'|pollinations';sessionImageKeys.delete(k);walletAuthExpiry.delete(k);
 const info=$('nm-pollinations-auth-info');if(info)info.textContent='Disconnected (issued key can still be revoked in Pollinations dashboard)';
 trace('Pollinations wallet disconnected from this tab');
}
function imageState(){return ensureImageSettings(atlas);}
function isPaidProvider(provider){return provider==='pollinations';}
function updatePaidWarningUi(provider){const el=$('nm-paid-warning');if(!el)return;const paid=isPaidProvider(provider);el.hidden=!paid;el.textContent=paid?'คำเตือน: Pollinations.ai เป็นโหมดเสียเงิน ต้องยืนยันก่อนเชื่อม Wallet และก่อนกดสร้างภาพทุกครั้ง':'คำเตือน: โหมดนี้อาจมีค่าใช้จ่ายจริง';}
function imageCacheKey(desc,provider){return !desc?.key?'':provider==='localpixel'?desc.key+'::localpixel-v1':desc.key;}
function hashText(value){let h=2166136261;for(const c of String(value||'')){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
function nextRand(seedObj){seedObj.v=(Math.imul(seedObj.v,1664525)+1013904223)>>>0;return seedObj.v/4294967295;}
function pixelFill(ctx,x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(Math.round(x),Math.round(y),Math.max(1,Math.round(w)),Math.max(1,Math.round(h)));}
function pixelStroke(ctx,x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(Math.round(x),Math.round(y),Math.max(1,Math.round(w)),1);ctx.fillRect(Math.round(x),Math.round(y+h-1),Math.max(1,Math.round(w)),1);ctx.fillRect(Math.round(x),Math.round(y),1,Math.max(1,Math.round(h)));ctx.fillRect(Math.round(x+w-1),Math.round(y),1,Math.max(1,Math.round(h)));}
function localPixelMood(){
 const s=imageState?.()||{};
 const raw=[atlas?.styleProfile?.summary,atlas?.styleProfile?.palette,atlas?.styleProfile?.settingCue,s.promptExtra].filter(Boolean).join(' ').toLowerCase();
 if(/neon|cyber|sci-fi|scifi|futur|ไนท์|นีออน/.test(raw)) return 'neon';
 if(/dark|goth|horror|spooky|grim|haunt|night|มืด|สยอง|หลอน/.test(raw)) return 'dark';
 if(/bright|happy|cute|soft|pastel|sunny|สดใส|น่ารัก|อบอุ่น/.test(raw)) return 'bright';
 if(/cozy|warm|home|slice|relax|ชิล|สบาย|อบอุ่น/.test(raw)) return 'cozy';
 return 'base';
}
function localPixelPalette(kind,level,mood='base'){
 let pal;
 if(level===2||level===3) pal={bg:'#17202a',panel:'#c7b9a1',panel2:'#b6a98f',line:'#5f5249',accent:'#8a6d52',green:'#5d7e4a',blue:'#4c6f97'};
 else if(kind==='school') pal={bg:'#9bcf78',panel:'#d8d1c7',panel2:'#c5b9aa',line:'#48505b',accent:'#a95d52',green:'#4f7c3a',blue:'#7eb8d9',road:'#b7b0a3'};
 else if(kind==='fantasy') pal={bg:'#6fa05d',panel:'#c49a67',panel2:'#9b6c44',line:'#493627',accent:'#7f404a',green:'#406b2a',blue:'#6fa8dc',road:'#8d774e'};
 else pal={bg:'#8aa08f',panel:'#b6b9bf',panel2:'#8f959f',line:'#38424c',accent:'#c46d38',green:'#566d4e',blue:'#5b7da5',road:'#69737f'};
 if(mood==='dark') return {...pal,bg:'#121a22',panel:'#85796e',panel2:'#655a52',line:'#d3c7ad',accent:'#8f4859',green:'#46593f',blue:'#4b6791'};
 if(mood==='bright') return {...pal,bg:'#afd3a5',panel:'#efe3d5',panel2:'#e0c2a2',line:'#49545a',accent:'#dc8f51',green:'#6a9b57',blue:'#86c0e6'};
 if(mood==='cozy') return {...pal,bg:'#97a57e',panel:'#dbc5ab',panel2:'#b68e69',line:'#5c463a',accent:'#bf7c43',green:'#5e7f48',blue:'#7d99c2'};
 if(mood==='neon') return {...pal,bg:'#1a2035',panel:'#8fd3ff',panel2:'#ff76c8',line:'#f2f5ff',accent:'#ffc857',green:'#5ef0b3',blue:'#6f9dff'};
 return pal;
}
function drawPixelDecoration(ctx,w,h,seed,kind,level,pal){
 const rng={v:hashText(seed+'::decor')};
 const cell=5;
 const mood=localPixelMood();
 for(let y=0;y<h;y+=cell){for(let x=0;x<w;x+=cell){const r=nextRand(rng);if(level<=1&&r>0.73){ctx.fillStyle=(kind==='city')?(r>0.88?pal.panel2:'#7b8a95'):(r>0.88?pal.green:'#89b96c');ctx.fillRect(x,y,1,1);}else if(level>=2&&r>0.79){ctx.fillStyle=r>0.9?pal.panel2:'#ddcfb8';ctx.fillRect(x,y,1,1);}if(mood==='neon'&&r>0.975){ctx.fillStyle=pal.accent;ctx.fillRect(x,y,1,1);}}}
 if(level<=1){ctx.fillStyle='rgba(255,255,255,.12)';for(let y=0;y<h;y+=14)ctx.fillRect(0,y,w,1);}
 if(kind!=='city'&&level<=1){ctx.fillStyle='rgba(0,0,0,.08)';for(let x=4;x<w;x+=18)ctx.fillRect(x,0,1,h);}
}
function drawPixelMarker(ctx,x,y,type,kind,seed,level){
 const mood=localPixelMood();
 const pal=localPixelPalette(kind,level,mood);
 const tx=Math.round(x),ty=Math.round(y);
 const box=level===0?10:8;
 const by=ty-Math.round(box*0.6),bx=tx-Math.round(box/2);
 const roof=(type==='medical'||type==='office')?pal.accent:(kind==='fantasy'?pal.panel2:pal.panel);
 const body=(type==='park'||type==='forest')?pal.green:(kind==='city'?'#cfd6dd':'#e9e2d4');
 pixelFill(ctx,bx+1,by+box-1,box,2,'rgba(0,0,0,.18)');
 pixelFill(ctx,bx,by,box,box-2,body);
 pixelStroke(ctx,bx,by,box,box-2,pal.line);
 pixelFill(ctx,bx-1,by-3,box+2,3,roof);
 pixelStroke(ctx,bx-1,by-3,box+2,3,pal.line);
 if(type==='medical'){pixelFill(ctx,tx-1,by+1,2,box-6,'#c64444');pixelFill(ctx,bx+2,ty-1,box-4,2,'#c64444');}
 else if(type==='food'){pixelFill(ctx,bx+2,by+2,box-4,2,'#d6a33a');}
 else if(type==='transport'){pixelFill(ctx,bx+2,by+2,box-4,2,pal.blue);}
 else if(type==='park'||type==='forest'){pixelFill(ctx,tx-1,by-2,2,2,pal.green);pixelFill(ctx,bx+1,by,box-2,3,pal.green);}
 else if(type==='home'||type==='residence'||type==='dorm'){pixelFill(ctx,bx+2,by+2,box-4,2,'#f5dca0');}
 else {for(let i=0;i<3;i++)pixelFill(ctx,bx+2+i*2,by+2,1,1,'#8fbce7');}
 if(mood==='neon'){pixelFill(ctx,bx-2,by-4,1,box+3,pal.accent);pixelFill(ctx,bx+box+1,by-4,1,box+3,pal.blue);}
 pixelFill(ctx,tx-1,ty+3,2,2,pal.line);
}
function backgroundMarkupForLocal(data){return data.level===0?worldBackground(data):data.level===1?(atlas?.seed>0?proceduralSiteBackground(data):backgroundSvg(data.kind)):data.level===2?floorBackground():(atlas?.interactiveRooms!==false?roomBackground(data):simpleRoomBackground());}
function canvasToBlob(canvas){return new Promise((resolve,reject)=>{canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Canvas export failed')),'image/png');});}
async function buildLocalPixelBlob(desc){
 if(!atlas||!desc) throw new Error('Missing atlas');
 const data=viewData(atlas, atlas.view);
 const seedKey=(desc.key||'map')+'::'+(atlas?.seed||0)+'::'+(data.kind||'world');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${data.width} ${data.height}" width="${data.width}" height="${data.height}">${backgroundMarkupForLocal(data)}</svg>`;
 const low=document.createElement('canvas');
 const maxSide=448;
 const scale=Math.max(data.width/maxSide,data.height/maxSide,1);
 low.width=Math.max(192,Math.round(data.width/scale));
 low.height=Math.max(144,Math.round(data.height/scale));
 const lctx=low.getContext('2d',{alpha:false});
 const img=new Image();
 const src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
 await new Promise((resolve,reject)=>{img.onload=()=>resolve();img.onerror=()=>reject(new Error('Local pixel SVG load failed'));img.src=src;});
 lctx.imageSmoothingEnabled=true;
 lctx.drawImage(img,0,0,low.width,low.height);
 const mood=localPixelMood();
 const pal=localPixelPalette(data.kind||atlas?.kind||'city',data.level,mood);
 drawPixelDecoration(lctx,low.width,low.height,seedKey,data.kind||atlas?.kind||'city',data.level,pal);
 const sx=low.width/Math.max(1,data.width), sy=low.height/Math.max(1,data.height);
 const pts=filteredMapPoints(data).slice(0,160);
 for(const p of pts){drawPixelMarker(lctx,p.x*sx,p.y*sy,p.type||'other',data.kind||atlas?.kind||'city',seedKey+'::'+(p.id||p.name||''),data.level);}
 if(data.level===3){
   const rng={v:hashText(seedKey+'::room')};
   for(let i=0;i<20;i++){const x=Math.floor(nextRand(rng)*(low.width-12))+3,y=Math.floor(nextRand(rng)*(low.height-12))+3;pixelFill(lctx,x,y,2,2,nextRand(rng)>.5?pal.accent:pal.green);}
   const roomName=String(desc?.focus?.roomId||data?.room||'').toLowerCase();
   if(/bed|bedroom|dorm|ห้องนอน/.test(roomName)){for(let i=0;i<2;i++){const x=10+i*18,y=10+i*10;pixelFill(lctx,x,y,10,5,pal.panel);pixelStroke(lctx,x,y,10,5,pal.line);pixelFill(lctx,x,y,3,2,pal.blue);}}
   else if(/kitchen|canteen|cafeteria|dining|ครัว/.test(roomName)){for(let i=0;i<3;i++){const x=8+i*12,y=12+(i%2)*8;pixelFill(lctx,x,y,6,4,pal.panel2);pixelStroke(lctx,x,y,6,4,pal.line);}}
   else if(/office|study|library|ประชุม|โต๊ะ/.test(roomName)){for(let i=0;i<3;i++){const x=12+i*14,y=10;pixelFill(lctx,x,y,8,5,pal.panel2);pixelStroke(lctx,x,y,8,5,pal.line);}}
 }
 const out=document.createElement('canvas');out.width=data.width;out.height=data.height;
 const octx=out.getContext('2d',{alpha:false});
 octx.imageSmoothingEnabled=false;
 octx.fillStyle=pal.bg;octx.fillRect(0,0,out.width,out.height);
 octx.drawImage(low,0,0,out.width,out.height);
 octx.fillStyle='rgba(0,0,0,.08)';
 for(let y=1;y<out.height;y+=4)octx.fillRect(0,y,out.width,1);
 octx.fillStyle='rgba(255,255,255,.05)';
 for(let x=0;x<out.width;x+=8)octx.fillRect(x,0,1,out.height);
 return canvasToBlob(out);
}
async function renderLocalPixelCurrent(force=false){
 if(!atlas) return null;
 const desc=currentViewDescriptor(atlas, atlas.view, chatKey);
 if(!desc || desc.viewPublic===false) return null;
 const key=imageCacheKey(desc,'localpixel');
 if(!force){const cached=await getCachedRender(key).catch(()=>null);if(cached?.url)return {descriptor:desc,url:cached.url,key};}
 const blob=await buildLocalPixelBlob(desc);
 let cached=null;
 try{cached=await saveRender(key,blob,{provider:'localpixel',descriptor:desc,version:1});}catch(error){console.warn('[NEON MAP] Local image cache unavailable; showing the render without persistent cache',error); }
 return {descriptor:desc,url:cached?.url||URL.createObjectURL(blob),key};
}
function setImageBusyUi(flag){
 const button=$('nm-img-generate');
 if(button){const current=imageState();button.disabled=flag||!current.enabled||current.provider==='none';button.textContent=flag?'กำลังเรนเดอร์ภาพ…':current.provider==='pollinations'?'เจนภาพใหม่ (เสียเงิน · ต้องยืนยัน)':current.provider==='aihorde'?'เจนภาพใหม่ (ฟรี)':current.provider==='localpixel'?'เรนเดอร์ Pixel Art ใหม่ (ฟรี / offline)':'เลือกโหมดภาพก่อน';}
 const clearOne=$('nm-img-clear'),clearAll=$('nm-img-clear-all');
 if(clearOne)clearOne.disabled=flag;
 if(clearAll)clearAll.disabled=flag;
 const cancel=$('nm-img-cancel');if(cancel){cancel.hidden=!flag;cancel.disabled=!(flag&&imageState().provider!=='localpixel');}
}
function clearVisibleImage(){
 const img=$('nm-ai-image');
 visibleImageKey='';
 if(img){img.hidden=true;img.removeAttribute('src');img.alt='';}
}
function updateImageProviderFields(){
 const provider=$('nm-img-provider')?.value||atlas?.imageSettings?.provider||'none';
 const poll=$('nm-pollinations-box'),horde=$('nm-horde-box'),note=$('nm-img-note'),badge=$('nm-ai-mode'),hordeKey=$('nm-horde-key-box');
 if(poll)poll.hidden=provider!=='pollinations';
 if(horde)horde.hidden=provider!=='aihorde';
 if(hordeKey)hordeKey.hidden=provider!=='aihorde';
 if(!imgBusy)setImageBusyUi(false);
 if(badge)badge.textContent=provider==='pollinations'?'PAID / CONFIRM EACH TIME':provider==='aihorde'?'FREE AI READY':provider==='localpixel'?'LOCAL PIXEL READY':'LOCAL MAP';
 updatePaidWarningUi(provider);
 const auto=$('nm-img-auto');if(auto){auto.disabled=provider==='pollinations';auto.title=provider==='pollinations'?'Paid images require a manual click and confirmation for each request.':provider==='localpixel'?'Local pixel can render automatically with zero credits.':'';}
 const connect=$('nm-pollinations-connect'); if(connect){connect.title='คำเตือน: การเชื่อม Pollinations Wallet ใช้สำหรับโหมดสร้างภาพแบบเสียเงิน';}
 const gen=$('nm-img-generate'); if(gen && provider==='pollinations'){gen.title='คำเตือน: ปุ่มนี้จะถามยืนยันก่อนส่งคำขอสร้างภาพแบบเสียเงิน';} else if(gen){gen.title='';}
 if(note){
   note.textContent=provider==='pollinations'
     ?'คำเตือน: Pollinations เป็นโหมดเสียเงินจริง ต้อง Connect Wallet และยืนยันก่อนเชื่อม/ก่อนเจนทุกครั้ง ค่าใช้จ่ายแยกจากการโรลเพลย์เสมอ' 
     :provider==='aihorde'
       ?'AI Horde can work free with the public horde (slower / queue-based). Optional API key can identify your account.'
       :provider==='localpixel'
         ?'Local Pixel Art เรนเดอร์จากแผนที่ในเบราว์เซอร์ของคุณเอง ฟรี ไม่มีเครดิต ไม่ส่งข้อความแชทไปให้ผู้ให้บริการภาพ และไม่เพิ่มภาระโทเคนของโมเดล'
         :'Off = zero extra cost. Cached images are kept in your browser only, not inside chat metadata.';
 }
}
function syncImageControls(){
 if(!atlas) return;
 const s=imageState();
 if($('nm-img-enabled'))$('nm-img-enabled').checked=s.enabled;
 if($('nm-img-auto'))$('nm-img-auto').checked=s.autoGenerate && s.provider!=='pollinations';
 if($('nm-img-provider'))$('nm-img-provider').value=s.provider;
 if($('nm-img-key'))$('nm-img-key').value=sessionKeyFor('aihorde');
 if($('nm-pollinations-app-key'))$('nm-pollinations-app-key').value=s.pollinationsAppKey||'';
 if($('nm-pollinations-model'))$('nm-pollinations-model').value=s.pollinationsModel||IMAGE_DEFAULTS.pollinationsModel;
 if($('nm-horde-model'))$('nm-horde-model').value=s.hordeModel||'';
 if($('nm-img-style-mode'))$('nm-img-style-mode').value=s.styleMode||'auto';
 if($('nm-img-extra'))$('nm-img-extra').value=s.promptExtra||'';
 const ss=$('nm-style-summary'); if(ss)ss.textContent='ธีมที่เดาได้: '+describeStyleProfile();
 updateImageProviderFields();
}
async function saveImageSettingsFromUi(){
 if(!atlas)return;
 const s=imageState();
 s.enabled=$('nm-img-enabled')?.checked===true;
 s.provider=$('nm-img-provider')?.value||'none';
 s.autoGenerate=(s.provider==='aihorde' || s.provider==='localpixel') && $('nm-img-auto')?.checked===true;
 sessionImageKeys.set(chatKey+'|aihorde', String($('nm-img-key')?.value||'').trim());
 s.pollinationsAppKey=String($('nm-pollinations-app-key')?.value||'').trim().slice(0,180);
 s.pollinationsModel=String($('nm-pollinations-model')?.value||IMAGE_DEFAULTS.pollinationsModel).trim()||IMAGE_DEFAULTS.pollinationsModel;
 s.hordeModel=String($('nm-horde-model')?.value||'').trim();
 s.styleMode=$('nm-img-style-mode')?.value||'auto';
 s.promptExtra=String($('nm-img-extra')?.value||'').trim().slice(0,500);
 autoImageAttempts.clear();
 updateImageProviderFields();
 await persist(true);
 void syncCurrentMapImage();
}
async function syncCurrentMapImage(){
 const img=$('nm-ai-image');
 if(!img){return;}
 if(!panelOpen||!atlas){clearVisibleImage();return;}
 syncImageControls();
 const s=imageState();
 const desc=currentViewDescriptor(atlas, atlas.view, chatKey);
 if(!s.enabled || s.provider==='none' || !desc || desc.viewPublic===false){clearVisibleImage();return;}
 const cacheKey=imageCacheKey(desc,s.provider);
 const cached=await getCachedRender(cacheKey).catch(()=>null);
 if(cached?.url){
   if(currentViewDescriptor(atlas,atlas.view,chatKey)?.key!==desc.key)return;
   visibleImageKey=cacheKey;
   img.src=cached.url;
   img.alt=desc.title;
   img.hidden=false;
   return;
 }
 clearVisibleImage();
 if(s.provider==='localpixel'){
   try{
     imgBusy=true;setImageBusyUi(true);
     const result=await renderLocalPixelCurrent(false);
     if(currentViewDescriptor(atlas,atlas.view,chatKey)?.key!==desc.key)return;
     if(result?.url){visibleImageKey=result.key;img.src=result.url;img.alt=desc.title;img.hidden=false;}
   }catch(err){trace('Local pixel render failed: '+(err?.message||String(err)),true);
   }finally{imgBusy=false;setImageBusyUi(false);}
   return;
 }
 if(s.provider==='aihorde' && s.autoGenerate && !imgBusy && desc?.key && !autoImageAttempts.has(desc.key)){
   autoImageAttempts.add(desc.key);
   void generateCurrentMapImage(false);
 }
}
async function generateCurrentMapImage(force=false){
 if(!atlas || imgBusy)return;
 const s=imageState();
 if(!s.enabled || s.provider==='none'){trace('Enable image mode and choose a provider first.',true);return;}
 const desc=currentViewDescriptor(atlas, atlas.view, chatKey);
 if(!desc || desc.viewPublic===false){trace('สถานที่นี้ยังไม่เปิดเผยในเรื่อง จึงยังไม่สร้างภาพประกอบ',true);return;}
 if(s.provider==='localpixel'){
   imgBusy=true;setImageBusyUi(true);
   try{
     const result=await renderLocalPixelCurrent(!!force);
     const current=currentViewDescriptor(atlas, atlas.view, chatKey);
     if(current?.key===result?.descriptor?.key && result?.url){
       const img=$('nm-ai-image');
       visibleImageKey=result.key;img.src=result.url;img.alt=result.descriptor.title;img.hidden=false;
     }
     trace('Local pixel art ready · free/offline mode');
   }catch(err){
     trace('Local pixel render failed: '+(err?.message||String(err)),true);
   }finally{imgBusy=false;setImageBusyUi(false);imgAbort=null;}
   return;
 }
 if(s.provider==='pollinations' && !force) return; // no paid generation through automatic refreshes
 if(s.provider==='pollinations' && !sessionKeyFor('pollinations')){trace('โปรดเชื่อม Pollinations Wallet ก่อนเจนภาพ',true);return;}
 const approvedPaid=s.provider==='pollinations' ? confirm('นี่คือการสร้างภาพด้วย Pollinations.ai ซึ่งอาจมีค่าใช้จ่ายจริงตามโมเดลที่เลือก และจะใช้เครดิต Pollen ของคุณ\n\nระบบจะส่งคำขอสร้างภาพใหม่ 1 ภาพ โดยราคาจริงอาจเปลี่ยนแปลงได้\n\nยืนยันว่าต้องการสร้างภาพแบบเสียเงินครั้งนี้หรือไม่?') : false;
 if(s.provider==='pollinations' && !approvedPaid){trace('ยกเลิกการสร้างภาพแบบเสียเงิน — ไม่มีการส่งคำขอ',false);return;}
 imgAbort=new AbortController();
 imgBusy=true;setImageBusyUi(true);
 try{
   if(!force){
     const cached=await getCachedRender(imageCacheKey(desc,s.provider)).catch(()=>null);
     if(cached?.url){
       const img=$('nm-ai-image');
       visibleImageKey=imageCacheKey(desc,s.provider);img.src=cached.url;img.alt=desc.title;img.hidden=false;
       trace('Loaded cached AI image');
       return;
     }
   }
   const workChat=chatKey;const workAtlas=atlas;
   const result=await generateAndCacheView(atlas, atlas.view, {signal:imgAbort.signal,onStatus:(msg)=>trace(msg),approvedPaid,apiCredential:sessionKeyFor(s.provider),namespace:chatKey});
   if(workChat!==chatKey || workAtlas!==atlas)return;
   const current=currentViewDescriptor(atlas, atlas.view, chatKey);
   if(current?.key===result?.descriptor?.key){
     const img=$('nm-ai-image');
     visibleImageKey=result.descriptor.key;img.src=result.url;img.alt=result.descriptor.title;img.hidden=false;
   }
   trace(`AI image ready · ${s.provider==='aihorde'?'free/community':'paid'} mode`);
 }catch(err){
   if(err?.name!=='AbortError')trace('AI image failed: '+(err?.message||String(err)),true);
 }finally{imgBusy=false;setImageBusyUi(false);imgAbort=null;}
}
async function clearCurrentMapImage(){
 if(!atlas)return;
 const desc=currentViewDescriptor(atlas, atlas.view, chatKey);
 if(!desc)return;
 const key=imageCacheKey(desc,imageState().provider||'none');
 autoImageAttempts.delete(desc.key);
 await clearRender(key);
 if(visibleImageKey===key || visibleImageKey===desc.key)clearVisibleImage();
 trace('Cleared current cached map image');
}
async function clearAllMapImages(){
 autoImageAttempts.clear();
 await clearAllRenders();
 clearVisibleImage();
 trace('Cleared all cached AI images');
}
function applyTransform(){const c=$('nm-canvas');if(c)c.style.transform=`translate(${dx}px,${dy}px) scale(${zoom})`;}
function fit(){const a=$('nm-viewport'),c=$('nm-canvas');if(!a||!c||!atlas)return;
 const data=viewData(atlas,atlas.view),w=a.clientWidth||600,h=a.clientHeight||450;
 zoom=Math.min(w/data.width,h/data.height)*.96;dx=(w-data.width*zoom)/2;dy=(h-data.height*zoom)/2;applyTransform();}
function focusUser(){
 if(!atlas)return;const data=viewData(atlas,atlas.view),vp=$('nm-viewport'),loc=visibleAt(atlas);if(!vp||!loc)return;
 let x=data.width/2,y=data.height/2;
 if(atlas.view===0){const p=data.points.find(p=>p.id===loc.areaId);if(p){x=p.x;y=p.y;}}
 else if(atlas.view===1){const p=data.points.find(p=>p.id===loc.buildingId);if(p){x=p.x;y=p.y;}}
 else if(atlas.view===2){const p=data.points.find(p=>loc.roomId&&p.name===loc.roomId);if(p){x=p.x;y=p.y;}}
 const base=Math.min(vp.clientWidth/data.width,vp.clientHeight/data.height)*.96;
 zoom=atlas.view<=1?Math.min(2.4,Math.max(base,base*1.4)):base;
 dx=vp.clientWidth/2-x*zoom;dy=vp.clientHeight/2-y*zoom;applyTransform();
}
function zoomAt(factor){const vp=$('nm-viewport');if(!vp)return;const cx=vp.clientWidth/2,cy=vp.clientHeight/2;
 const z=Math.max(.2,Math.min(4,zoom*factor));dx=cx-(cx-dx)*z/zoom;dy=cy-(cy-dy)*z/zoom;zoom=z;applyTransform();}
async function goLevel(level){if(!atlas)return;selectedPoint=null;atlas.view=Math.min(3,Math.max(0,level));await persist();draw();fit();}
function filteredMapPoints(data){
  return (data?.points||[]).filter(p=>{
    if(p.discovered===true)return true;
    // Explicit opt-in reveals non-secret lore names; no hidden lore details.
    if(atlas?.revealLore===true && ['lorebook','character'].includes(p.origin))return true;
    // Turning the fog graphic off does not reveal undiscovered scene/lore names.
    // Only generic illustrative template dots may appear when fog is disabled.
    return atlas?.showFog===false && p.origin==='template';
  });
}
function worldBackground(data){const points=filteredMapPoints(data);
 let out=`<rect width="${data.width}" height="${data.height}" fill="#98bcb3"/>`;
 for(let y=0;y<data.height;y+=95)for(let x=0;x<data.width;x+=105){const z=(x*3+y*7)%7;
   out+=`<rect x="${x}" y="${y}" width="100" height="88" rx="19" fill="${z<3?'#9cc6a0':z<5?'#b2c6a5':'#8daeb0'}" opacity=".52"/>`;}
 const base=points.find(p=>p.id==='area_root');
 for(const p of points){if(!base||p.id==='area_root')continue;
   out+=`<path d="M${Math.round(base.x)},${Math.round(base.y)} Q${Math.round((base.x+p.x)/2)},${Math.round((base.y+p.y)/2-80)} ${Math.round(p.x)},${Math.round(p.y)}" fill="none" stroke="#d9c7a3" stroke-width="22" stroke-linecap="round"/><path d="M${Math.round(base.x)},${Math.round(base.y)} L${Math.round(p.x)},${Math.round(p.y)}" stroke="#a79176" stroke-width="3" stroke-dasharray="8 13" opacity=".7"/>`;
 }
 return out;
}
function proceduralSiteBackground(data){
 let out='<rect width="1024" height="720" fill="#94bd91"/>';
 for(let x=0;x<1024;x+=112)for(let y=0;y<720;y+=115){
   out+=`<rect x="${x+5}" y="${y+5}" width="98" height="104" rx="8" fill="${(x+y)%3?'#a9c79b':'#c0d1a9'}" opacity=".67"/>`;
 }
 out+='<path d="M0 343 H1024 M505 0 V720" stroke="#e5dcc4" stroke-width="28"/><path d="M0 343 H1024 M505 0 V720" stroke="#faf2d8" stroke-width="6"/>';
 for(const p of filteredMapPoints(data)){const x=Math.round(Number(p.x)||400),y=Math.round(Number(p.y)||350),type=p.type||'';
   const sport=type==='sport'||type==='park';
   if(sport){out+=`<rect x="${x-78}" y="${y-53}" width="156" height="106" rx="7" fill="#4a9863" stroke="#e9f1da" stroke-width="5"/><path d="M${x} ${y-48} V${y+48} M${x-74} ${y} H${x+74}" stroke="#d9f0cd" stroke-width="2"/>`;}
   else{out+=`<rect x="${x-79}" y="${y-47}" width="158" height="94" rx="7" fill="#566c70" stroke="#d3e0da" stroke-width="6"/><rect x="${x-69}" y="${y-40}" width="138" height="80" rx="4" fill="#d7b39e" stroke="#f3e9d9" stroke-width="3"/>`;}
 }
 return out;
}
function floorBackground(){let out='<rect width="1024" height="720" fill="#b4c5c7"/>';
 out+='<rect x="100" y="65" width="825" height="590" rx="8" fill="#e7e6d8" stroke="#394f57" stroke-width="20"/>';
 out+='<rect x="463" y="85" width="108" height="548" fill="#c1c9bc" stroke="#7b8b8e" stroke-width="2"/>';
 for(let i=0;i<4;i++){let y=102+i*140;
   out+=`<rect x="120" y="${y}" width="324" height="120" fill="#d9dfcf" stroke="#a8b3ad" stroke-width="4"/><rect x="587" y="${y}" width="320" height="120" fill="#d9dfcf" stroke="#a8b3ad" stroke-width="4"/>`;}
 return out;
}
function simpleRoomBackground(){let out='<rect width="1024" height="720" fill="#bcc6c8"/>';
 out+='<rect x="100" y="82" width="824" height="556" rx="16" fill="#e2ddd0" stroke="#54646c" stroke-width="18"/>';
 out+='<rect x="472" y="82" width="80" height="66" fill="#c3d0d6" opacity=".8"/>';
 out+='<rect x="512" y="560" width="92" height="78" rx="6" fill="#d0c7b7" stroke="#7a7063" stroke-width="4"/>';
 out+='<path d="M512 638 V560 M512 560 A92 92 0 0 1 604 652" fill="none" stroke="#6c7a80" stroke-width="4"/>';
 out+='<rect x="180" y="168" width="220" height="120" rx="8" fill="#d4d7cf" stroke="#9aa5a5" stroke-width="4"/>';
 out+='<rect x="630" y="190" width="150" height="210" rx="10" fill="#b8a38b" stroke="#7f6b58" stroke-width="5"/>';
 out+='<rect x="210" y="412" width="520" height="110" rx="10" fill="#c4b096" stroke="#816d5a" stroke-width="5"/>';
 return out;}

function roomBackground(data){
 // Render the room being BROWSED; it may differ from the player's current room.
 const name=String(data?.room||visibleAt(atlas)?.roomId||'').toLowerCase();
 const has=(...words)=>words.some(w=>name.includes(w));
 let out='<rect width="1024" height="720" fill="#b9c5c7"/>';
 out+='<rect x="90" y="75" width="844" height="570" rx="15" fill="#dfd8c7" stroke="#526a70" stroke-width="19"/>';
 out+='<path d="M492 645 h90 v-95 a90 90 0 0 0 -90 90" fill="none" stroke="#506067" stroke-width="4"/>';
 out+='<rect x="145" y="114" width="240" height="24" rx="5" fill="#b6d3e0" stroke="#7a9caa" stroke-width="4"/>';
 if(has('bedroom','\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19','dorm')){
   out+='<rect x="185" y="212" width="335" height="235" rx="20" fill="#a89779" stroke="#746954" stroke-width="8"/><rect x="201" y="239" width="305" height="193" rx="16" fill="#c4d8dd"/><rect x="225" y="250" width="260" height="64" rx="12" fill="#f1eeea"/>';
   out+='<rect x="645" y="200" width="160" height="270" fill="#a48264" stroke="#71543f" stroke-width="7"/><rect x="635" y="511" width="185" height="65" rx="8" fill="#b5a085"/>';
 }else if(has('library','\u0e2b\u0e49\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e14')){
   for(let i=0;i<4;i++){const x=180+i*178;out+=`<rect x="${x}" y="185" width="112" height="336" rx="4" fill="#977052" stroke="#5f4935" stroke-width="6"/>`;
     for(let j=0;j<5;j++)out+=`<rect x="${x+11}" y="${199+j*59}" width="90" height="43" fill="${j%2?'#c2a273':'#b8946f'}"/>`;}
 }else if(has('bathroom','toilet','\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33')){
   for(let i=0;i<4;i++){let x=160+i*184;out+=`<rect x="${x}" y="208" width="144" height="250" fill="#bccfcd" stroke="#7e9da0" stroke-width="5"/><ellipse cx="${x+72}" cy="350" rx="36" ry="54" fill="#fff" stroke="#91afb1" stroke-width="5"/>`;}
 }else if(has('canteen','cafeteria','dining','\u0e42\u0e23\u0e07\u0e2d\u0e32\u0e2b\u0e32\u0e23','restaurant')){
   for(let i=0;i<3;i++)for(let j=0;j<2;j++)out+=`<rect x="${205+i*235}" y="${210+j*177}" width="140" height="88" rx="13" fill="#a98260" stroke="#654a39" stroke-width="5"/>`;
   out+='<rect x="120" y="565" width="784" height="34" fill="#bd9b81"/>';
 }else if(has('infirmary','clinic','\u0e2b\u0e49\u0e2d\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25')){
   for(let i=0;i<3;i++){const x=170+i*255;out+=`<rect x="${x}" y="238" width="205" height="123" rx="8" fill="#cee1e1" stroke="#688f99" stroke-width="6"/><rect x="${x+17}" y="253" width="70" height="92" rx="15" fill="#fff"/>`;}
 }else{
   for(let i=0;i<4;i++)for(let j=0;j<3;j++)out+=`<rect x="${205+i*157}" y="${210+j*114}" width="102" height="60" rx="8" fill="#ac9274" stroke="#6d5d50" stroke-width="4"/>`;
 }
 return out;
}
function paintBackground(data){const bg=$('nm-background');bg.setAttribute('viewBox',`0 0 ${data.width} ${data.height}`);
 bg.setAttribute('width',data.width);bg.setAttribute('height',data.height);
 bg.innerHTML=data.level===0?worldBackground(data):data.level===1?(atlas?.seed>0?proceduralSiteBackground(data):backgroundSvg(data.kind)):data.level===2?floorBackground():(atlas?.interactiveRooms!==false?roomBackground(data):simpleRoomBackground());
}
function paintFog(data){
 const fog=$('nm-fog-layer');if(!fog)return;
 fog.setAttribute('viewBox',`0 0 ${data.width} ${data.height}`);
 fog.setAttribute('width',data.width);fog.setAttribute('height',data.height);
 if(!atlas?.showFog || data.unknown){fog.innerHTML='';return;}
 if(data.level===3){
   // Room floor plan can be seen only after the player actually entered it.
   const r=visibleAt(atlas);const record=Object.values(atlas.rooms||{}).find(x=>x.areaId===r?.areaId&&x.buildingId===r?.buildingId&&x.floorId===r?.floorId&&x.name===r?.roomId);
   fog.innerHTML=record?.discovered?'':`<rect width="${data.width}" height="${data.height}" fill="#10243c" opacity=".88"/>`;
   return;
 }
 const visible=filteredMapPoints(data);
 let holes=visible.map(p=>`<circle cx="${Math.round(p.x)}" cy="${Math.round(p.y)}" r="${data.level===0?155:data.level===1?135:145}" fill="black"/>`).join('');
 if(!holes)holes=`<circle cx="${data.width/2}" cy="${data.height/2}" r="110" fill="black"/>`;
 fog.innerHTML=`<defs><mask id="nm-private-fog"><rect width="100%" height="100%" fill="white"/>${holes}</mask></defs><rect width="${data.width}" height="${data.height}" fill="#0a192b" fill-opacity=".88" mask="url(#nm-private-fog)"/>`;
}
function browseTo(level,point,data){
 if(!atlas)return;selectedPoint=null;const prior=visibleAt(atlas)||{};
 atlas.followUser=false;
 if(level===0){atlas.browse={areaId:point.id,buildingId:null,floorId:null,roomId:null,raw:point.name};goLevel(1);return;}
 if(level===1){atlas.browse={...prior,buildingId:point.id,buildingName:point.name,floorId:null,roomId:null,raw:point.name};goLevel(2);return;}
 if(level===2 && data.floorPicker){atlas.browse={...prior,floorId:point.floorId,roomId:null,raw:point.name};goLevel(2);return;}
 if(level===2){atlas.browse={...prior,roomId:point.name,raw:point.name};goLevel(3);}
}
function addDot(parent,x,y,label,klass,title,action){if(!Number.isFinite(Number(x))||!Number.isFinite(Number(y)))return;
 const b=document.createElement('button');b.type='button';b.className=klass;b.style.left=x+'px';b.style.top=y+'px';b.title=title||label;
 const circle=document.createElement('span');circle.className='nm-pin-icon';circle.textContent=klass.includes('nm-person')?(klass.includes('user')?'U':klass.includes('char')?'C':'N'):'●';
 const caption=document.createElement('span');caption.className='nm-pin-label';caption.textContent=label;
 b.append(circle,caption);b.addEventListener('pointerdown',e=>e.stopPropagation());b.addEventListener('click',e=>{e.stopPropagation();action?.();});parent.append(b);
}
// Do not disclose an unvisited NPC location through the cast list or map pins.
function safeActorPosition(a){
 if(!a?.position || a.role==='user' || atlas?.revealLore===true)return true;
 const pos=a.position;
 const area=atlas.areas?.find(x=>x.id===pos.areaId);
 if(area && !area.discovered)return false;
 if(pos.buildingId){const site=pos.areaId==='area_root'?atlas.root:atlas.sites?.[pos.areaId];
  const pin=site?.markers?.find(p=>p.id===pos.buildingId);
  if(pin && !pin.discovered)return false;
 }
 if(pos.roomId){const room=atlas.rooms?.[JSON.stringify([pos.areaId,pos.buildingId,pos.floorId,pos.roomId])];
  if(room&&!room.discovered)return false;
 }
 return true;
}
function showActors(data){const layer=$('nm-people');layer.replaceChildren();if(data?.level===3&&atlas?.interactiveRooms!==false)return;const current=visibleAt(atlas),matching=[];
 for(const a of displayActors(atlas)){
   if(!safeActorPosition(a))continue;
   const loc=a.position;if(!loc)continue;
   let x,y;
   if(data.level===0){const p=data.points.find(z=>z.id===loc.areaId);if(!p || (atlas.showFog && !p.discovered && a.role!=='user'))continue;x=p.x;y=p.y;}
   else if(data.level===1){if(loc.areaId!==current?.areaId)continue;
     const p=data.points.find(z=>z.id===loc.buildingId);if(atlas.showFog && !p?.discovered && a.role!=='user')continue;x=p?.x??510;y=p?.y??360;}
   else if(data.level===2){if(loc.areaId!==current?.areaId||loc.buildingId!==current.buildingId||loc.floorId!==current.floorId)continue;
     const p=data.points.find(z=>loc.roomId&&z.name===loc.roomId);if(atlas.showFog && !p?.discovered && a.role!=='user')continue;x=p?.x??510;y=p?.y??360;}
   else{if(!loc.roomId||loc.roomId!==current?.roomId||loc.areaId!==current.areaId||loc.buildingId!==current.buildingId||loc.floorId!==current.floorId)continue;x=490;y=380;}
   matching.push({a,x,y});
 }
 const used=new Map();
 for(const m of matching){const key=Math.floor(m.x/50)+'-'+Math.floor(m.y/50),n=used.get(key)||0;used.set(key,n+1);
  const off=[[0,-52],[68,-40],[-68,-40],[0,46],[72,48],[-72,48]][n%6];
  addDot(layer,m.x+off[0],m.y+off[1],m.a.name,'nm-pin nm-person '+m.a.role,m.a.name+' - '+m.a.position.raw,()=>{});
 }
}
// All actions below are local GM navigation notes. A target does not move any actor.
function selectedPlace(){
 if(!atlas||!selectedPoint||atlas.view!==selectedPoint.level)return null;
 const data=viewData(atlas,atlas.view);const point=filteredMapPoints(data).find(p=>p.id===selectedPoint.id);
 if(!point)return null;
 const ref=makePlaceRef(point,data.level,visibleAt(atlas),data);
 if(selectedPoint.key && selectedPoint.key!==ref?.key)return null;
 return ref?{data,point,ref}:null;
}
function enterSelectedPlace(){
 const current=selectedPlace();if(!current)return;
 const info=inspectArea(atlas,{level:current.data.level,point:current.point,focus:visibleAt(atlas)},st()?.chat||[]);
 if(!info || info.unknown || (current.data.level===2 && current.point.discovered!==true))return;
 inspectorExpanded=false;browseTo(current.data.level,current.point,current.data);
}
async function setSelectedPlaceAction(mode){
 const current=selectedPlace();if(!current)return;
 const info=inspectArea(atlas,{level:current.data.level,point:current.point,focus:visibleAt(atlas)},st()?.chat||[]);
 if(!info || (info.unknown && current.point.discovered!==true && !(atlas.revealLore===true && ['lorebook','character'].includes(current.point.origin))))return;
 if(mode==='pin')togglePin(atlas,current.ref);
 else if(mode==='target')toggleTarget(atlas,current.ref);
 else return;
 draw({selectionOnly:true});await persist(true);
}
async function showSavedPlace(ref){
 if(!atlas)return;const found=resolvePlaceRef(atlas,ref);
 if(!found)return;
 atlas.followUser=false;
 atlas.browse=found.focus;
 atlas.view=found.ref.level;
 selectedPoint={level:found.ref.level,id:found.ref.id,key:found.ref.key};
 inspectorExpanded=false;
 draw();fit();await persist();
}
async function clearGoal(){if(!atlas)return;atlas.placeTarget=null;draw({selectionOnly:true});await persist(true);}
function drawPlaceBoard(){
 const goal=$('nm-goal-line'),list=$('nm-saved-list'),counter=$('nm-pin-count');
 if(!goal||!list||!counter)return;
 goal.replaceChildren();list.replaceChildren();
 const known=atlas?.placePins?.map(ref=>resolvePlaceRef(atlas,ref)).filter(Boolean)||[];
 counter.textContent=known.length+'/'+(atlas?.placePins?.length||0)+' จุด';
 const target=atlas?.placeTarget;
 const foundTarget=target?resolvePlaceRef(atlas,target):null;
 if(target){
  const goalRow=document.createElement('div');goalRow.className='nm-board-goal';
  const btn=document.createElement('button');btn.type='button';btn.textContent='🎯 '+(foundTarget?.point?.name||'เป้าหมายที่ยังไม่เปิดเผย');btn.disabled=!foundTarget;
  btn.addEventListener('click',()=>void showSavedPlace(target));
  const clear=document.createElement('button');clear.type='button';clear.className='nm-board-clear';clear.textContent='✕';clear.title='ยกเลิกเป้าหมาย';clear.setAttribute('aria-label','ยกเลิกเป้าหมาย');
  clear.addEventListener('click',()=>void clearGoal());goalRow.append(btn,clear);goal.append(goalRow);
 }
 if(!known.length){const empty=document.createElement('small');empty.textContent=(atlas?.placePins?.length||0)>0?
  'มีหมุดบันทึกอยู่ แต่ยังเปิดไม่ได้ (สถานที่อาจเปลี่ยนชื่อหรือยังไม่เปิดเผย) — ไม่ได้ลบทิ้ง':'ยังไม่มีสถานที่ที่ปักหมุด';list.append(empty);return;}
 const board=document.createElement('div');board.className='nm-board-pins';
 for(const item of known.slice().reverse()){
  const button=document.createElement('button');button.type='button';button.textContent='📌 '+item.point.name;
  button.title='เปิดสถานที่นี้บนแผนที่';button.addEventListener('click',()=>void showSavedPlace(item.ref));board.append(button);
 }list.append(board);
 if(known.length < (atlas?.placePins?.length||0)){
  const notice=document.createElement('small');notice.textContent='มี '+((atlas?.placePins?.length||0)-known.length)+' หมุดที่ยังเปิดไม่ได้ (ข้อมูลถูกเปลี่ยนหรือยังซ่อนอยู่) — ไม่ได้ลบทิ้ง';list.append(notice);
 }
}
function inspectorRow(parent,label,value,source=''){
 const item=document.createElement('div');item.className='nm-inspect-row';
 const left=document.createElement('span');left.className='nm-inspect-label';left.textContent=label;
 const right=document.createElement('span');right.className='nm-inspect-value';right.textContent=String(value||'ยังไม่ทราบจากเนื้อเรื่อง');
 if(source && source!=='unknown'){const mark=document.createElement('small');mark.className='nm-inspect-evidence';mark.textContent=source;right.append(mark);}
 item.append(left,right);parent.append(item);
}
function inspectorSection(parent,heading){
 const section=document.createElement('section');section.className='nm-inspect-section';
 const head=document.createElement('h3');head.textContent=heading;section.append(head);parent.append(section);return section;
}
async function enterKnownRoom(room){
 if(!atlas||!room?.discovered)return;
 atlas.followUser=false;
 atlas.browse={areaId:room.areaId,buildingId:room.buildingId,floorId:room.floorId,roomId:room.name,raw:room.name};
 await goLevel(3);
}
async function enterKnownFloor(room){
 if(!atlas || !room?.discovered)return;
 atlas.followUser=false;
 atlas.browse={areaId:room.areaId,buildingId:room.buildingId,floorId:room.floorId,roomId:null,raw:'ชั้น '+room.floorId};
 await goLevel(2);
}
function drawAreaInspector(data){
 const ring=$('nm-region-highlight'),panel=$('nm-area-inspector'),card=$('nm-place-card'),sheet=$('nm-place-sheet');
 if(!ring||!panel||!card||!sheet)return;
 ring.replaceChildren();panel.hidden=true;card.hidden=true;sheet.hidden=true;
 if(!selectedPoint||selectedPoint.level!==atlas?.view||atlas?.view>2)return;
 const point=filteredMapPoints(data).find(p=>p.id===selectedPoint.id);
 if(!point)return;
 const candidate=makePlaceRef(point,data.level,visibleAt(atlas),data);
 if(selectedPoint.key && selectedPoint.key!==candidate?.key)return;
 const radius=REGION_RADIUS[data.level]||170;
 ring.setAttribute('viewBox',`0 0 ${data.width} ${data.height}`);
 ring.setAttribute('width',data.width);ring.setAttribute('height',data.height);
 // A non-interactive, translucent red circle. No location names enter the SVG markup.
 const svgNS='http://www.w3.org/2000/svg';
 const circle=document.createElementNS(svgNS,'circle');
 circle.setAttribute('cx',Number(point.x)||0);circle.setAttribute('cy',Number(point.y)||0);
 circle.setAttribute('r',radius);circle.setAttribute('class','nm-area-circle');ring.append(circle);
 const center=document.createElementNS(svgNS,'circle');center.setAttribute('cx',Number(point.x)||0);center.setAttribute('cy',Number(point.y)||0);
 center.setAttribute('r',7);center.setAttribute('class','nm-area-center');ring.append(center);
 const info=inspectArea(atlas,{level:data.level,point,focus:visibleAt(atlas),radius},st()?.chat||[]);
 if(!info)return;
 card.hidden=false;
 const ref=makePlaceRef(point,data.level,visibleAt(atlas),data);
 const pinActive=pinned(atlas,ref),goalActive=targeted(atlas,ref);
 $('nm-place-presence').textContent=info.isCurrent?'📍 คุณอยู่บริเวณนี้':'📍 สถานที่ที่เลือก';
 $('nm-place-title').textContent=info.name;
 $('nm-place-type').textContent=info.placeKind;
 $('nm-place-weather').textContent=info.weather.source==='unknown'?'🌤 สภาพอากาศยังไม่ทราบ':'🌤 '+info.weather.label;
 $('nm-place-access').textContent=info.access.source==='unknown'?'การเข้าถึงยังไม่ทราบ':info.access.label;
 $('nm-place-pin').textContent=pinActive?'📌 ถอนหมุด':'📌 ปักหมุด';
 $('nm-place-pin').setAttribute('aria-pressed',String(pinActive));
 $('nm-place-target').textContent=goalActive?'🎯 ยกเลิกเป้าหมาย':'🎯 ตั้งเป้าหมาย';
 $('nm-place-target').setAttribute('aria-pressed',String(goalActive));
 const actionable=!info.unknown||point.discovered===true||(atlas.revealLore===true&&['lorebook','character'].includes(point.origin));
 $('nm-place-pin').disabled=!actionable;$('nm-place-target').disabled=!actionable;
 const canEnter=!info.unknown&&(data.level!==2||point.discovered===true);
 $('nm-place-enter').hidden=!canEnter;
 $('nm-place-expand').setAttribute('aria-expanded',String(inspectorExpanded));
 $('nm-place-expand').textContent=inspectorExpanded?'▤ ย่อข้อมูลพื้นที่ ▾':'▤ ดูข้อมูลพื้นที่ทั้งหมด ▴';
 $('nm-place-disclaimer').textContent=info.unknown?'ยังไม่พบสถานที่นี้ในเนื้อเรื่อง · ไม่เปิดเผยรายละเอียดที่ไม่ยืนยัน':point.origin==='manual'?'สถานที่ GM เพิ่มเอง (ไม่ใช่ Canon) · การดูไม่ย้ายตัวละคร':'โน้ต GM เท่านั้น · การดูสถานที่ไม่ย้ายตัวละคร';
 if(!inspectorExpanded)return;
 card.hidden=true;sheet.hidden=false;panel.hidden=false;
 $('nm-inspect-title').textContent=info.name;
 $('nm-inspect-source').textContent=info.unknown?'ยังไม่มีข้อมูลบริเวณนี้ในเรื่อง':(info.isCurrent?'◎ USER อยู่ในบริเวณนี้ · ':'')+info.source+(info.worldStyle?` · แนวโลก: ${info.worldStyle} (อนุมานจาก Card/Lorebook)`:'');
 const parent=$('nm-inspect-sections');parent.replaceChildren();
 const a=inspectorSection(parent,'01 · สถานที่ / สิ่งปลูกสร้าง');inspectorRow(a,'ชื่อ',info.name);inspectorRow(a,'ประเภท',info.placeKind);
 const b=inspectorSection(parent,'02 · อากาศและผู้คน');inspectorRow(b,'อากาศ',info.weather.label,info.weather.source);inspectorRow(b,'ผู้คน',info.people.label,info.people.source);
 const c=inspectorSection(parent,'03–04 · การเข้าถึง / ชั้นและห้อง');inspectorRow(c,'เข้าใช้งาน',info.access.label,info.access.source);
 if(info.rooms.length){
  const groups=new Map();for(const room of info.rooms){
   const site=room.areaId==='area_root'?atlas.root:atlas.sites?.[room.areaId];
   const building=site?.markers?.find(x=>x.id===room.buildingId)?.name||'อาคารยังไม่ทราบชื่อ';
   const floor=String(room.floorId??'?');const label=(data.level===0?building+' · ':'')+'ชั้น '+(floor==='?'?'ยังไม่ทราบ':floor);
   if(!groups.has(label))groups.set(label,[]);groups.get(label).push(room);
  }
  for(const [label,rooms] of groups){
   const head=document.createElement('div');head.className='nm-inspect-floor';head.textContent=label;c.append(head);
   const chips=document.createElement('div');chips.className='nm-inspect-rooms';
   for(const room of rooms.slice(0,12)){
    const chip=document.createElement('button');chip.type='button';chip.textContent=room.name+(room.discovered?' ↗':' · รู้ชื่อ');chip.disabled=!room.discovered;
    chip.title=room.discovered?'ดูภายในห้องที่เคยเข้าแล้ว':'รู้ชื่อห้อง แต่ยังไม่เคยเห็นภายใน';
    chip.addEventListener('click',()=>void enterKnownRoom(room));chips.append(chip);
   }
   c.append(chips);
  }
 }else{
  const note=document.createElement('div');note.className='nm-inspect-muted';note.textContent='ยังไม่มีชื่อชั้นหรือห้องที่เปิดเผยในเรื่อง';c.append(note);
 }
 const d=inspectorSection(parent,'05 · สภาพพื้นที่ / ภูมิประเทศ');inspectorRow(d,'ลักษณะพื้นที่',info.terrain.label,info.terrain.source);
 const e=inspectorSection(parent,'06 · กลางวันหรือกลางคืน');inspectorRow(e,'ช่วงเวลา',info.time.label,info.time.source);
 const f=inspectorSection(parent,'07 · สัดส่วนจุดที่รู้จักบนผังจำลอง');
 if(info.ratios.length){
  const detail=document.createElement('div');detail.className='nm-inspect-muted';detail.textContent=`จากจุดที่รู้จักบนผังจำลอง ${info.count} แห่ง (พิกัดไม่ใช่ระยะจริง)`;f.append(detail);
  for(const ratio of info.ratios){
   const row=document.createElement('div');row.className='nm-ratio-row';
   const top=document.createElement('div');top.className='nm-ratio-label';top.textContent=`${ratio.label} · ${ratio.count} จุด · ${ratio.percent}%`;
   const track=document.createElement('div');track.className='nm-ratio-track';
   const bar=document.createElement('div');bar.style.width=ratio.percent+'%';track.append(bar);row.append(top,track);f.append(row);
  }
 }else{
  const empty=document.createElement('div');empty.className='nm-inspect-muted';empty.textContent='ยังไม่พบจุดที่รู้จักในบริเวณนี้ จึงยังไม่คำนวณเปอร์เซ็นต์';f.append(empty);
 }
 if(info.districts.length)inspectorRow(f,'ย่านที่กล่าวถึง',info.districts.join(', '));
 const g=inspectorSection(parent,'08 · สถานที่ในวงสีแดง (ผังจำลอง)');
 if(info.knownPlaces.length){for(const p of info.knownPlaces){
  const row=document.createElement('div');row.className='nm-known-place';
  const title=document.createElement('b');title.textContent=p.name;
  const label=document.createElement('small');label.textContent=p.type+' · '+(p.origin==='manual'?'GM เพิ่มเอง (ไม่ใช่ Canon)':p.discovered?'เคยพบในเรื่อง':'มีชื่อกล่าวถึง');
  row.append(title,label);g.append(row);
 }}else{const empty=document.createElement('div');empty.className='nm-inspect-muted';empty.textContent='ยังไม่รู้จักสถานที่ใดในบริเวณนี้';g.append(empty);}
 if(info.nearbyMentions?.length){const extras=document.createElement('div');extras.className='nm-inspect-muted';extras.textContent='มีการกล่าวถึงใกล้เคียง แต่ยังไม่ทราบพิกัดและไม่รวมในเปอร์เซ็นต์: '+info.nearbyMentions.join(', ');g.append(extras);}
 $('nm-inspect-enter').hidden=info.unknown||data.level>2||(data.level===2&&point.discovered!==true);
 $('nm-inspect-enter').textContent=data.level===0?'เข้าไปดูแผนที่บริเวณ ↳':data.level===1?'เข้าไปดูชั้น / ห้อง ↳':'เข้าไปดูภายในห้อง ↳';
}

function draw({selectionOnly=false}={}){if(!atlas||!panelOpen)return;
 const repaired=reconcilePlaceActions(atlas);
 const view=atlas.view, data=viewData(atlas,view);
 const canvas=$('nm-canvas');canvas.style.width=data.width+'px';canvas.style.height=data.height+'px';
 const current=currentFor(atlas),focus=visibleAt(atlas);const currentPoint=view===0?current?.areaId:view===1?current?.buildingId:null;
 paintBackground(data);$('nm-map-title').textContent=data.floorPicker?'เลือกชั้นของอาคาร':levelName(atlas,view);
 $('nm-location').textContent=K.current+': '+(current?.raw||K.unknown);
 $('nm-stage-note').textContent=(view===2||view===3)&&data.unknown?K.roomUnknown:K.inferred;
 $('nm-empty').hidden=!data.unknown;
 $('nm-prev').disabled=view===0;$('nm-next').disabled=view===3;
 for(const b of document.querySelectorAll('#nm-levels button')){b.classList.toggle('active',Number(b.dataset.level)===view);}
 $('nm-points').replaceChildren();
 for(const p of filteredMapPoints(data).slice(0,300)){
  const isCurrent=p.id===currentPoint||(view===2&&p.name===current?.roomId);
  const ref=makePlaceRef(p,view,focus,data);
  const pinHere=pinned(atlas,ref),targetHere=targeted(atlas,ref),selected=selectedPoint?.level===view&&selectedPoint?.id===p.id&&(!selectedPoint.key||selectedPoint.key===ref?.key);
  const klass='nm-pin '+(isCurrent?'nm-pin-current ':'')+(p.estimated?'nm-pin-estimated ':'')+
   (pinHere?'nm-pin-saved ':'')+(targetHere?'nm-pin-target ':'')+(selected?'nm-pin-selected':'');
  const label=p.name+(pinHere?' 📌':'')+(targetHere?' 🎯':'');
  addDot($('nm-points'),p.x,p.y,label,klass,p.name+(p.estimated?' (schematic)':'')+' · แตะเพื่อดูการ์ดสถานที่',()=>{
    selectedPoint={level:view,id:p.id,key:ref?.key};inspectorExpanded=false;draw({selectionOnly:true});
  });
 }
 paintFog(data);showActors(data);drawRoomInteraction();drawAreaInspector(data);
 $('nm-auto').checked=floatingUI.autoOpen===true;$('nm-follow-check').checked=atlas.followUser!==false;$('nm-fog').checked=atlas.showFog!==false;$('nm-interactive-rooms').checked=atlas.interactiveRooms!==false;$('nm-dynamic-room').checked=atlas.dynamicRoomContext===true;$('nm-reveal').checked=atlas.revealLore===true;
 syncImageControls();
 $('nm-viewport').classList.toggle('nm-foggy',atlas.showFog);
 $('nm-turns').textContent=atlas.turns+' turns';$('nm-source-list').textContent=sourceLabels(atlas)||'Character Card / chat';
 drawCast();drawJournal();drawPlaceBoard();applyTransform();
 if(!selectionOnly)void syncCurrentMapImage();
 if(atlas.pendingReset)trace(K.pending);
 if(repaired)void persist(false);
}
function drawCast(){const list=$('nm-cast');list.replaceChildren();
 const priority=a=>a.role==='user'?0:a.role==='char'?1:2;
 const actors=(atlas.actors||[]).filter(a=>a.display&&a.position&&safeActorPosition(a)).sort((a,b)=>priority(a)-priority(b) || (b.lastMention||0)-(a.lastMention||0));
 for(const a of actors.slice(0,25)){
  const div=document.createElement('div');div.className='nm-cast-entry';
  const avatar=document.createElement('b');avatar.className='nm-ava '+a.role;avatar.textContent=a.role==='user'?'U':a.role==='char'?'C':'N';
  const txt=document.createElement('div');const nm=document.createElement('b');nm.textContent=a.name;
  const small=document.createElement('small');small.textContent=(a.position?.raw||K.unknown)+' · turn '+(Number.isInteger(a.lastMention)?a.lastMention:(Number.isInteger(a.position?.turn)?a.position.turn:'?'));
  txt.append(nm,small);div.append(avatar,txt);list.append(div);
 }
 if(!actors.length){const empty=document.createElement('small');empty.textContent=K.unknown;list.append(empty);}
}
function drawJournal(){const target=$('nm-moves');target.replaceChildren();
 for(const x of [...(atlas.journal||[])].slice(-32).reverse()){
  const el=document.createElement('div');el.className='nm-movement';const when=document.createElement('b');when.textContent='#'+x.turn+' · '+x.who;
  const move=document.createElement('span');const ends=journalEndpoints(atlas,x);move.textContent=(ends.from||'?')+'  →  '+(ends.to||'?');el.append(when,move);target.append(el);
 }
 if(!atlas.journal.length)target.textContent=K.positions;
}
async function exportMap(){if(!atlas)return;
 const blob=new Blob([JSON.stringify(atlas,null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='NEON_MAP_CHAT_'+Date.now()+'.json';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200);
}
async function importMap(e){const file=e.target.files?.[0];if(!file)return;
 try{if(file.size>12_000_000)throw new Error('File too large');const value=JSON.parse(await file.text());
   const newer=normalizeAtlas(value);if(!newer)throw new Error('Incompatible map format');ensureImageSettings(newer);normalizePlaceActions(newer);selectedPoint=null;inspectorExpanded=false;atlas=newer;await persist(true);fit();draw();trace('Map imported locally');
 }catch(err){trace('Import failed: '+err.message,true);}finally{e.target.value='';}}
async function refreshBookChoices(){const sel=$('nm-extra');
 const wi=await worldInfoModule();
 const list=await Promise.resolve(st()?.getWorldInfoNames?.()||wi?.world_names||[]);
 if(!Array.isArray(list)||JSON.stringify(list)===JSON.stringify(cacheBooks))return;cacheBooks=list;sel.replaceChildren(new Option('Add Lorebook...',''));
 for(const name of list)if(typeof name==='string')sel.add(new Option(name,name));
}
// Rebuild source map using the local Lorebook files; preserve player edits and replay movements.
async function refreshLore(){
 const ctx=st();if(!atlas||!currentChat()||!ctx)return;
 const intended=chatKey,settings={manual:clone(atlas.manual||[]),seed:atlas.seed||0,
  revealLore:atlas.revealLore===true,showFog:atlas.showFog!==false,
  placePins:clone(atlas.placePins||[]),placeTarget:clone(atlas.placeTarget||null),
  followUser:atlas.followUser!==false,autoOpen:atlas.autoOpen!==false,interactiveRooms:atlas.interactiveRooms!==false,dynamicRoomContext:atlas.dynamicRoomContext===true,roomStages:clone(atlas.roomStages||{}),imageSettings:{...imageState()}};
 const token=++epoch;trace('Reading revised Lorebooks locally...');
 const fresh=await makeAtlas(ctx,token,settings.seed,settings.revealLore);
 if(!fresh||token!==epoch||chatKey!==intended)return;
 Object.assign(fresh,{manual:settings.manual,placePins:settings.placePins,placeTarget:settings.placeTarget,showFog:settings.showFog,followUser:settings.followUser,autoOpen:settings.autoOpen,interactiveRooms:settings.interactiveRooms,dynamicRoomContext:settings.dynamicRoomContext,roomStages:settings.roomStages,imageSettings:settings.imageSettings});
 const result=processHistory(fresh,ctx.chat||[],names(ctx));
 selectedPoint=null;inspectorExpanded=false;atlas=fresh;atlas.view=bestView(atlas);await persist(true);fit();draw();if(atlas.followUser)focusUser();
 trace(`Lore refreshed (local) | ${result.newTurns} turns replayed`);
}
function scheduleLoreRefresh(){if(loreTimer)clearTimeout(loreTimer);loreTimer=setTimeout(()=>{loreTimer=null;void refreshLore();},600);}
function scheduleTurnUpdate(forceReplay=false){pendingReplay=pendingReplay||forceReplay;if(chatTimer)clearTimeout(chatTimer);chatTimer=setTimeout(()=>{chatTimer=null;void updateFromTurn();},forceReplay?100:35);}
async function init(){if(ready)return;ready=true;
 try{renderShell();globalThis.__NEON_MAP_TOGGLE=()=>show(!panelOpen);globalThis.__NEON_MAP_READY=true;globalThis.__NEON_MAP_ERROR='';}
 catch(error){globalThis.__NEON_MAP_READY=false;globalThis.__NEON_MAP_ERROR=error?.message||String(error);console.error('[NEON MAP] Floating window initialization failed',error);return;}

 const ctx=st();if(ctx?.eventSource && ctx?.event_types){
  ctx.eventSource.on(ctx.event_types.CHAT_CHANGED,()=>{if(loreTimer)clearTimeout(loreTimer);if(chatTimer)clearTimeout(chatTimer);void loadChat().then(refreshBookChoices);});
  // Normal replies use the constant-time incremental cursor, not a full hash
  // scan over every older message. Mutating history forces a single replay.
  if(ctx.event_types.MESSAGE_RECEIVED)ctx.eventSource.on(ctx.event_types.MESSAGE_RECEIVED,()=>{void updateFromTurn();});
  for(const name of ['MESSAGE_EDITED','MESSAGE_SWIPED','MESSAGE_DELETED']){
   const evt=ctx.event_types[name];if(evt)ctx.eventSource.on(evt,()=>scheduleTurnUpdate(true));
  }
  if(ctx.event_types.MESSAGE_UPDATED)ctx.eventSource.on(ctx.event_types.MESSAGE_UPDATED,(payload)=>{
   // A normal update of the most recent reply only needs the tail check.
   // Mutations to earlier chat items still require a full replay.
   const index=Number.isInteger(payload)?payload:(Number.isInteger(payload?.index)?payload.index:null);
   scheduleTurnUpdate(index!=null && index<(atlas?.lastScanIndex??0)-1);
  });
  for(const name of ['WORLDINFO_UPDATED','WORLDINFO_SETTINGS_UPDATED']){
   const evt=ctx.event_types[name];if(evt)ctx.eventSource.on(evt,()=>{void refreshBookChoices();scheduleLoreRefresh();});
  }
 }
 document.addEventListener('visibilitychange',()=>saver.onVisibilityHidden());
 try{await loadChat();await refreshBookChoices();}
 catch(error){console.warn('[NEON MAP] Chat/Lorebook data did not load yet. The floating button remains available.',error);trace('เปิดแผนที่ได้ แต่ยังโหลดข้อมูลแชทไม่สำเร็จ: '+String(error?.message||error).slice(0,80),true);}
 console.log('[NEON MAP v0.9.13] Floating UI initialized; chat features are local.');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>void init(),{once:true});else void init();

return {};
})();