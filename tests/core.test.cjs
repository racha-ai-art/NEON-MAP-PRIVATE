const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const code=fs.readFileSync(require('node:path').join(__dirname,'../index.js'),'utf8');
const sandbox={console,Blob,URL,setTimeout,clearTimeout};
vm.createContext(sandbox);
vm.runInContext(code.slice(0,code.indexOf("export const modules"))+'\nglobalThis.modules=__nmModules;',sandbox);
const m=sandbox.modules;
const atlas=m['atlas.js'];
const json=value=>JSON.parse(JSON.stringify(value));
const scene=(where='Building A, Floor 1, Room 101')=>({mes:'User and Arun arrive.\n<neon_state>\nCLOCK|LOC='+where+'|TIME=10:00\nNOW|POV=User|POS=User@'+where+';Arun@'+where+'\n</neon_state>',is_user:false});

test('history replay and incremental updates do not double-count replies',()=>{
 const a=atlas.createAtlas(),chat=[scene()];
 atlas.processHistory(a,chat,{userName:'User',charName:'Arun'});
 assert.equal(a.turns,1);assert.equal(a.current.roomId,'Room 101');
 assert.equal(atlas.advanceHistory(a,chat).changed,false);
 chat.push({mes:'I walked to Room 102',is_user:true},scene('Building A, Floor 1, Room 102'));
 atlas.advanceHistory(a,chat,{userName:'User',charName:'Arun'});
 assert.equal(a.turns,2);assert.equal(a.current.roomId,'Room 102');
 chat.pop();atlas.advanceHistory(a,chat,{userName:'User',charName:'Arun'});
 assert.equal(a.turns,1);assert.equal(a.current.roomId,'Room 101');
});

test('swipe/edit replay preserves manual places and stable bookmark keys',()=>{
 const a=atlas.createAtlas(),chat=[scene()];atlas.processHistory(a,chat);
 const place=atlas.addManualPlace(a,'My saved park',0);
 const cards=m['place-cards.js'],ref=cards.makePlaceRef(place,0);
 cards.togglePin(a,ref);const key=a.placePins[0].key;
 chat[0]=scene('Building B, Floor 2, Room 202');
 atlas.advanceHistory(a,chat,{},true);atlas.rerollLayout(a);
 assert.equal(a.placePins[0].key,key);assert.ok(cards.resolvePlaceRef(a,ref));
});

test('invalid bookmark keys never insert null pins or targets',()=>{
 const a=atlas.createAtlas(),cards=m['place-cards.js'];
 const forged={level:0,id:'area_root',key:'forged',name:'World'};
 assert.equal(cards.togglePin(a,forged),false);assert.equal(a.placePins.length,0);
 assert.equal(cards.toggleTarget(a,forged),false);assert.equal(a.placeTarget,null);
});

test('import rejects corrupt core geometry and repairs optional collection shapes',()=>{
 const base=atlas.createAtlas();assert.ok(atlas.normalizeAtlas(json(base)));
 for(const bad of [null,{}, {...json(base),areas:[null]}, {...json(base),root:{markers:[{id:'bad',name:'broken',x:'Infinity',y:1}]}}])assert.equal(atlas.normalizeAtlas(bad),null);
 const repaired=atlas.normalizeAtlas({...json(base),actors:[null,{}],sites:[],rooms:{bad:null},manual:[null],current:null,placePins:[null]});
 assert.ok(repaired);assert.equal(repaired.actors.length,0);assert.equal(repaired.current.areaId,'area_root');
 m['place-cards.js'].normalizePlaceActions(repaired);assert.equal(repaired.placePins.length,0);
 assert.doesNotThrow(()=>atlas.viewData(repaired,0));
});

test('image settings use an allowlist and scrub arbitrary saved credentials',()=>{
 const a=atlas.createAtlas();a.imageSettings={apiKey:'secret',access_token:'secret',token:'secret',enabled:true,provider:'aihorde',width:999999};
 const settings=m['image-renderer.js'].ensureImageSettings(a);
 assert.equal(settings.apiKey,undefined);assert.equal(settings.access_token,undefined);assert.equal(settings.token,undefined);assert.equal(settings.width,1536);
});

test('linked lorebooks include native, multiple-chat and explicit sources only',()=>{
 const names=m['lore-sources.js'].linkedWorldNames({ctx:{chatMetadata:{world_info:'Chat',chat_lorebooks:['Extra','Chat']}},card:{primary:'Card',avatar:'Test.png'},worldSettings:{charLore:[{name:'Test',extraBooks:['Secondary']}]},extraBooks:['Chosen']});
 assert.deepEqual(json(names),['Card','Chat','Extra','Secondary','Chosen']);
});

test('a new floor clears the old room; another building clears floor and room',()=>{
 const a=atlas.createAtlas();const first=atlas.extractLocation('Building A Floor 1 Room 101',a);
 const floor=atlas.extractLocation('Floor 2',a,first);assert.equal(floor.floorId,'2');assert.equal(floor.roomId,null);
 const building=atlas.extractLocation('Building B',a,first);assert.equal(building.floorId,null);assert.equal(building.roomId,null);
});

test('negative and zero floor numbers keep their meaning',()=>{
 assert.equal(atlas.parseFloor('Floor -1'),'-1');assert.equal(atlas.parseFloor('ชั้น -2'),'-2');assert.equal(atlas.parseFloor('Floor 0'),'0');
});

test('movement attribution ignores English negation, future plans and name substrings',()=>{
 const tracker=m['tracker.js'],names={userName:'Ann',charName:'Arun'};
 assert.equal(tracker.extractRouteEvents('Ann has not walked to the hospital.',names).length,0);
 assert.equal(tracker.extractRouteEvents('Joanne walked to the hospital.',names).length,0);
 assert.equal(tracker.extractRouteEvents('Ann walked to the hospital.',names).length,1);
});

test('legacy maps tolerate corrupt optional rows and migrate without crashing',()=>{
 const migrated=atlas.fromOld({markers:[null,{id:'a',name:'Park',x:'200',y:'100'}],kind:'city'});
 assert.ok(migrated);assert.equal(migrated.root.markers.length,1);assert.equal(migrated.root.markers[0].x,200);
});

test('GM room paths remain in walkable cells and reject furniture destinations',()=>{
 const room=m['room-interaction.js'],obstacles=room.obstaclesForRoom('bedroom');
 const start=room.safeStartingCell(0,obstacles),route=room.findRoomPath(start,{x:14,y:1},obstacles);
 assert.ok(route.length>1);assert.ok(route.every(c=>room.isWalkable(c.x,c.y,obstacles)));
 assert.equal(room.findRoomPath(start,{x:3,y:4},obstacles).length,0);
});

test('metadata saves coalesce while preserving the latest in-memory atlas',async()=>{
 let resolveFirst,calls=0;
 const ctx={chatId:'one',chatMetadata:{},saveMetadata(){calls++;return calls===1?new Promise(resolve=>{resolveFirst=resolve;}):Promise.resolve();}};
 const saver=m['persistence.js'].createMetadataSaver({getContext:()=>ctx,getChatKey:c=>c.chatId,metadataKey:'map'});
 const first=saver.mark({turns:1});const second=saver.mark({turns:2});
 assert.equal(calls,1);assert.equal(ctx.chatMetadata.map.turns,2);
 resolveFirst();await Promise.all([first,second]);await new Promise(resolve=>setTimeout(resolve,0));
 assert.equal(calls,2);assert.equal(saver.stats().pending,false);
});

test('a pending save never triggers a follow-up save into another chat',async()=>{
 let release,calls=0;let ctx={chatId:'one',chatMetadata:{},saveMetadata(){calls++;return new Promise(resolve=>{release=resolve;});}};
 const saver=m['persistence.js'].createMetadataSaver({getContext:()=>ctx,getChatKey:c=>c.chatId,metadataKey:'map'});
 const job=saver.mark({turns:1});saver.mark({turns:2});
 ctx={chatId:'two',chatMetadata:{},saveMetadata:async()=>{calls++;}};saver.changeChat('two');
 release();await job;assert.equal(calls,1);assert.equal(ctx.chatMetadata.map,undefined);
});
