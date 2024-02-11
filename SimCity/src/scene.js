import * as THREE from 'three';
import {orbitCamera} from './camera';
import {createCity} from './city';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {createLighting} from './lights';
import { createAssets } from './assets';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function createScene () {
    // const carURL = new URL('.../models/low-poly_city_asset_pack_v1.0.glb', import.meta.url);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);

    // //  <---------------------------- Shadow
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
   

    // <---------------------------- Cameras ---------------------------->
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x3498DB);
    // 0x3498DB
    // made orbit 1st out of 2
    // window.orbit = orbitCamera();

    // by default orbit 1st out of 2
    const orbitcamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );
    const orbit = new OrbitControls(orbitcamera, renderer.domElement);
    orbitcamera.position.set(10,10,10);
    orbit.update();

    // <---------------------------- reendering ---------------------------->
    function animation() {
        // made orbit 2st out of 2
        // renderer.render(scene, window.orbit.orbitcamera);
        
        // by default orbit 2st out of 2
        renderer.render(scene, orbitcamera);
    }
    function start() {
        renderer.setAnimationLoop(animation);
    }
        
    function stop() {
        renderer.setAnimationLoop(null);
    }

    // <---------------------------- Lighting ---------------------------->
    window.light = createLighting();
    scene.add(...window.light.amb_light);
    // scene.add(window.light.camerahelper);
    // scene.add(window.light.sun);

    // <---------------------------- City Formation ---------------------------->
    window.city = createCity();
    let meshes = [];
    let building = [];

    function initialize(city){
        scene.clear;
        meshes = [];
        building = [];
        for (let i = 0; i <= city.size; i++){
            let coloumb = [];
            let coloumbss = [];
            for (let j = 0; j <= city.size; j++){
                // Grass
                const tarrainID = city.data[i][j].tarrainid;
                const box = createAssets(tarrainID, i, j, window.city.data[i][j]);
                box.receiveshadow = true;
                scene.add(box);
                coloumb.push(box);
                // renderer.shadowMap.enabled = true;
                // box.receiveshadow = true;
                // if (i === 0 && j === 0){
                //     const box = createAssets('road', 0, 0);
                //     scene.add(box);
                //     coloumb.push(box);
                // }
            }
            meshes.push(coloumb);
            building.push([...Array(city.size)]);
            // building.push(coloumbss);
        }
    }

    

    function update(city) {
        for (let i = 0; i <= city.size; i++){
            for (let j = 0; j <= city.size; j++){
                // Building
                const existBuilding = building[i][j];
                const newbuilding_tile = city.data[i][j];
                // currentbuildingID = building[i][j]?.userData.id;
                // newbuildingID = city.data[i][j].buildings?.id;
                // if (!newbuildingID && currentbuildingID){
                //     scene.remove(building[i][j]);
                //     building[i][j] = undefined;
                // }
                if (!newbuilding_tile.buildings && existBuilding){
                    scene.remove(existBuilding);
                    building[i][j] = undefined;
                }
                if (newbuilding_tile.buildings && newbuilding_tile.buildings.updated){
                    scene.remove(existBuilding);
                    building[i][j] = createAssets(newbuilding_tile.buildings.id, i, j, newbuilding_tile.buildings );
                    scene.add(building[i][j]);
                    building[i][j].receiveshadow = true;
                    // newbuilding_tile.buildings.update();
                    newbuilding_tile.buildings.updated = false;
                }
                // if (newbuildingID && newbuildingID !== currentbuildingID){
                //     scene.remove(building[i][j]);
                //     building[i][j] = createAssets(newbuildingID, i, j, window.city.data[i][j].buildings );
                //     scene.add(building[i][j]);
                // }
            }
        }
    }

    // <---------------------------- Selecting Tales ---------------------------->
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let currentobject = undefined;
    let onObjectSelected = undefined;
       
    function onmousedownscene(event){
      // window.orbit.onmousedownscene(event);
        
       mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1; //to bring in -1 to 1
       mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1; //to bring in -1 to 1
   
       raycaster.setFromCamera(mouse, orbitcamera);
   
        let intersection = raycaster.intersectObjects(scene.children, false);
       
        if (intersection.length > 0){
            if (currentobject) currentobject.material.emissive.setHex(0);
            currentobject = intersection[0].object;
            currentobject.material.emissive.setHex(0x444444);
        }

        if (this.onObjectSelected){
            this.onObjectSelected(currentobject);
        }
    }

    document.body.appendChild(renderer.domElement);
     

    return{
        onObjectSelected,
        onmousedownscene,
        update,
        initialize,
        renderer,
        start,
        stop
    }
}