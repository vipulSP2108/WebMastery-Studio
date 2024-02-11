import * as THREE from 'three';

import road from '../public/textures/road.png';
import grass from '../public/textures/grass.png';

import impcommercial11 from '../public/textures/commercial11.png';
import impcommercial12 from '../public/textures/commercial12.png';
import impcommercial21 from '../public/textures/commercial21.png';
import impcommercial22 from '../public/textures/commercial22.png';
import impcommercial31 from '../public/textures/commercial31.png';
import impcommercial32 from '../public/textures/commercial32.png';

import impindustry11 from '../public/textures/industry11.png';
import impindustry12 from '../public/textures/industry12.png';
import impindustry21 from '../public/textures/industry21.png';
import impindustry22 from '../public/textures/industry22.png';
import impindustry31 from '../public/textures/industry31.png';
import impindustry32 from '../public/textures/industry32.png';

import impresidence11 from '../public/textures/residence11.png';
import impresidence12 from '../public/textures/residence12.png';
import impresidence21 from '../public/textures/residence21.png';
import impresidence22 from '../public/textures/residence22.png';
import impresidence31 from '../public/textures/residence31.png';
import impresidence32 from '../public/textures/residence32.png';
import { degToRad } from 'three/src/math/MathUtils';

const loader = new THREE.TextureLoader();
  
function loadTexture(importurl){
    const tex = loader.load(importurl);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(1,1);
    return tex;
}

const textures = {
    "grass" : loadTexture(grass),
    "road" : loadTexture(road),

    "commercial11" : loadTexture(impcommercial11),
    "commercial12" : loadTexture(impcommercial12),
    "commercial21" : loadTexture(impcommercial21),
    "commercial22" : loadTexture(impcommercial22),
    "commercial31" : loadTexture(impcommercial31),
    "commercial32" : loadTexture(impcommercial32),

    "industry11" : loadTexture(impindustry11),
    "industry12" : loadTexture(impindustry12),
    "industry21" : loadTexture(impindustry21),
    "industry22" : loadTexture(impindustry22),
    "industry31" : loadTexture(impindustry31),
    "industry32" : loadTexture(impindustry32),

    "residence11" : loadTexture(impresidence11),
    "residence12" : loadTexture(impresidence12),
    "residence21" : loadTexture(impresidence21),
    "residence22" : loadTexture(impresidence22),
    "residence31" : loadTexture(impresidence31),
    "residence32" : loadTexture(impresidence32),
}

function getTop(){
    return new THREE.MeshLambertMaterial({color : 0x555555});
}

function getSides(texturename){
    return new THREE.MeshLambertMaterial({map: textures[texturename]});
}

function applyTexture(i, j, data){
    const boxgeometry = new THREE.BoxGeometry(1,data.height,1);
    const randomtexture = data.id + data.upgrade + data.style;
    let boxmaterial;
    if (data.upgrade == 0){
        boxmaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
    }
    else {
        const top = getTop();
        const side = getSides(randomtexture);
        boxmaterial = [side, side, top, top, side, side];
    }
    let box = new THREE.Mesh(boxgeometry, boxmaterial);
    box.scale.set(0.8,1,0.8);
    // box.material.forEach(material => material.map?.repeat.set(1, data.height -1))
    box.position.set(i, data.height/2, j);
    box.userData = {id : data.id, i, j};
    box.receiveShadow = true;
    box.castShadow = true;
    return box;
}

const assets = {
    "grass" : (i,j) => {
        const boxgeometry = new THREE.BoxGeometry(1,1,1);
        const boxmaterial = new THREE.MeshLambertMaterial({map: textures.grass});
        const box = new THREE.Mesh(boxgeometry, boxmaterial);
        box.position.set(i, -0.5, j);
        box.userData = {id : 'grass', i, j};
        box.receiveShadow = true;
        return box;
    },
    'residence' : (i,j,data) => applyTexture(i, j, data),
    'industry' :  (i,j,data) => applyTexture(i, j, data),
    'commercial' :  (i,j,data) => applyTexture(i, j, data),
    'road' : (i,j,data) => {
        const boxgeometry = new THREE.BoxGeometry(1,0.05,1);
        const boxmaterial = new THREE.MeshLambertMaterial({map: textures.road});
        const box = new THREE.Mesh(boxgeometry, boxmaterial);
        box.position.set(i, 0.05/2, j);
        // box.scale.set(1,1,0.7);
        box.userData = {id : 'road', i, j};
        box.receiveShadow = true;
        return box;
    }
}

// /** 
//  * @param {object} 
//  * @returns
//  */


export function createAssets(assetID, i, j, data){
    if(assetID in assets){return assets[assetID](i, j, data)}
    else{
        console.warn(`${assetID} not found in assets`);
        return undefined;
    }
}