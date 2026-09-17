import * as THREE from '../assets/vendor/three.module.js';
import {character} from './player.js';
export function createNPCs(scene,missions,addLabel){return missions.map(m=>{const model=character(m);model.position.set(m.x,0,m.z);scene.add(model);const label=addLabel('❗ '+m.npc,new THREE.Vector3(m.x,3.1,m.z),'npc');return {mission:m,model,label};});}
// Kumar stays at the hall entrance; friends gather around him without blocking arrival.
export function gatherNPCs(npcs){const positions={kumar:[0,4],mei:[-3,3],aisyah:[3,3],ravi:[-4,6],teck:[4,6]};for(const n of npcs){const [x,z]=positions[n.mission.id];n.model.position.set(x,0,z);n.model.rotation.y=Math.atan2(-x,8-z);}}
