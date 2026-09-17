import * as THREE from '../assets/vendor/three.module.js';
import {block} from './player.js';
export function createWorld(scene){const occluders=[],solids=[],labels=[],trees=[],clouds=[];const add=(mesh,solid=false)=>{scene.add(mesh);if(solid){solids.push(new THREE.Box3().setFromObject(mesh));occluders.push(mesh);}return mesh;};const cube=(w,h,d,c,x,y,z,solid=false)=>add(block(w,h,d,c,x,y,z),solid);
function label(text,x,y,z){labels.push({text,position:new THREE.Vector3(x,y,z)});}
function sign(text,x,y,z,width){const c=document.createElement('canvas');c.width=1024;c.height=160;const ctx=c.getContext('2d');ctx.fillStyle='#fff6db';ctx.fillRect(0,0,c.width,c.height);ctx.strokeStyle='#255e4d';ctx.lineWidth=12;ctx.strokeRect(6,6,1012,148);ctx.fillStyle='#174e42';ctx.font='bold 66px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,512,82,970);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const board=new THREE.Mesh(new THREE.PlaneGeometry(width,width*160/1024),new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide}));board.position.set(x,y,z);scene.add(board);}
cube(82,.5,106,0x74b971,0,-.3,10);cube(81,.7,105,0x60985c,0,-.75,10);
// A connected, unobstructed road network; buildings stand beside the roads.
cube(56,.035,5,0xe6d4ad,0,0,4);cube(5,.04,80,0xe6d4ad,0,.005,12);cube(28,.04,5,0xe6d4ad,-12,.005,25);
for(let z=-34;z<54;z+=4)cube(.12,.055,1.2,0xfaf0d5,2.15,.01,z);
function building(x,z,w,d,color,roof,title){cube(w+.8,.25,d+.8,0xe8e1cc,x,.1,z);cube(w,3.5,d,color,x,1.9,z,true);cube(w+.8,.5,d+1,roof,x,3.85,z);cube(w+.2,.4,d+.5,roof,x,4.3,z);cube(w-1,.35,d-.4,roof,x,4.65,z);cube(1.3,2.4,.1,0x6a503b,x,1.35,z+d/2+.06);for(const side of [-1,1]){cube(1.7,1.4,.1,0x9cd9e9,x+side*w*.31,2.05,z+d/2+.08);cube(.08,1.4,.12,0xfff6de,x+side*w*.31,2.05,z+d/2+.14);cube(1.7,.08,.12,0xfff6de,x+side*w*.31,2.05,z+d/2+.14);}const roofMesh=new THREE.Mesh(new THREE.ConeGeometry(w*.76,2.4,4),new THREE.MeshLambertMaterial({color:roof}));roofMesh.rotation.y=Math.PI/4;roofMesh.position.set(x,5.15,z);roofMesh.scale.z=d/w;add(roofMesh);occluders.push(roofMesh);sign(title,x,3.4,z+d/2+.2,w*.85);}
building(-24,-3,7,6,0xffe7a5,0xc97550,'RUMAH PEMAIN');building(0,-4,10,7,0xfaf2ce,0x368c7c,'DEWAN KOMUNITI');building(24,-3,9,6,0xf6ca92,0xef7c68,'PASAR RAYA');building(0,18,8,6,0xf6ddad,0xb77790,'RUMAH TERBUKA');building(0,40,10,6,0xc4e5dc,0x4685ac,'PUSAT INTERNET DESA');
// Market awning and crates.
for(let i=0;i<7;i++)cube(1.35,.18,1.8,i%2?0xfff6df:0xef7964,20+i*1.35,3.1,.8);for(let i=0;i<3;i++){cube(1.3,.8,.8,0xb1804e,20+i*1.7,.4,1.8,true);for(let k=0;k<3;k++)cube(.28,.3,.28,[0xf39d3b,0x83b45b,0xdf6a5f][i],19.6+i*1.7+k*.35,.95,1.8);}
// Open-air buffet, computer displays, park furniture.
function bench(x,z){cube(2,.25,.7,0xc08b54,x,.7,z,true);cube(2,.6,.15,0xc08b54,x,1.15,z-.3,true);for(const s of [-.7,.7])cube(.15,.7,.5,0x4c6d62,x+s,.35,z);}
for(const x of [-5,5]){bench(x,-24);bench(x,-30);}sign('TAMAN REKREASI',0,3,-30,6);label('TAMAN REKREASI',0,4,-30);cube(10,.09,10,0x94c983,0,0,-28);
for(const x of [-4.8,4.8]){cube(2.5,.2,1.3,0xf6edd7,x,1.2,24,true);for(const s of [-.9,.9])cube(.15,1.2,.8,0x996848,x+s,.6,24);for(let i=0;i<3;i++)cube(.45,.15,.5,[0xeaa84c,0xaac468,0xe08576][i],x-.75+i*.75,1.38,24);}
for(const x of [-3,3]){cube(1.4,.15,.8,0xa5845b,x,1.2,44,true);cube(.85,.6,.1,0x304b59,x,1.65,44);cube(.69,.43,.12,0x71c3d5,x,1.65,44.07);}
function tree(x,z,size=1){cube(.55,2.6,.55,0x98714c,x,1.3,z,true);const crown=new THREE.Group();crown.position.set(x,3,z);crown.add(block(2.7,1.8,2.6,0x4d9560),block(2.1,1.2,2,0x6db772,.1,1,0),block(1.5,.7,1.4,0x8ac57b,0,1.85,.1));crown.scale.setScalar(size);scene.add(crown);trees.push(crown);}
for(const [x,z,s] of [[-34,-22,1.3],[-16,-24,1],[-9,-34,1.2],[10,-32,1],[19,-24,1.2],[33,-18,1.4],[35,12,1],[-35,12,1.2],[-13,13,.9],[13,14,1.1],[15,32,1],[-13,36,1.1],[-29,43,1.4],[26,47,1.2],[-9,51,1],[11,53,1]])tree(x,z,s);
for(let i=0;i<40;i++){const x=Math.sin(i*7.23)*35,z=-33+(i*13.71%86);if(Math.abs(x)<7||Math.abs(z-4)<5||Math.abs(z-25)<4)continue;cube(.1,.45,.1,0x538b52,x,.2,z);cube(.4,.22,.4,[0xffd166,0xf6b2a4,0xffffff][i%3],x,.5,z);}
for(const x of [-10,10])for(const z of [4,25,46]){cube(.15,2.9,.15,0x42675f,x,1.45,z,true);cube(.55,.5,.55,0xffe5a2,x,3,z);cube(.7,.15,.7,0x42675f,x,3.33,z);}
for(let i=0;i<8;i++){const c=new THREE.Group();c.position.set(-36+i*11,15+(i%3)*2,-30+(i%4)*20);c.add(block(6,1.4,2.5,0xffffff),block(3,2.1,2,0xffffff,0,.6,0));scene.add(c);clouds.push(c);}
// Bendera kecil dan hiasan guna semula di dewan.
for(let i=0;i<9;i++){const flag=new THREE.Mesh(new THREE.ConeGeometry(.26,.5,3),new THREE.MeshLambertMaterial({color:[0xef476f,0xffd166,0x4ea8de][i%3]}));flag.rotation.z=Math.PI;flag.position.set(-4+i,3.1-Math.sin(i/8*Math.PI)*.6,.4);scene.add(flag);}
const ball=new THREE.Mesh(new THREE.IcosahedronGeometry(.4,0),new THREE.MeshLambertMaterial({color:0xfff6df}));ball.position.set(2,.4,-26);scene.add(ball);
for(const x of [-2,2])cube(.12,2.2,.12,0xfff6df,x,1.1,-33);cube(4.1,.12,.12,0xfff6df,0,2.2,-33);
// Fence on the perimeter only, leaving broad pathways clear.
for(let x=-38;x<=38;x+=4){cube(.25,1.2,.25,0xf2e6ca,x,.6,-37,true);cube(4,.18,.15,0xf2e6ca,x+2,.85,-37,true);}for(const x of [-37,37])for(let z=-32;z<=52;z+=4){cube(.25,1.2,.25,0xf2e6ca,x,.6,z,true);cube(.15,.18,4,0xf2e6ca,x,.85,z+2,true);}
return {solids,occluders,labels,update(t,dt){trees.forEach((v,i)=>v.rotation.z=Math.sin(t*.8+i)*.012);clouds.forEach(c=>{c.position.x+=dt*.16;if(c.position.x>47)c.position.x=-47;});}};
}
