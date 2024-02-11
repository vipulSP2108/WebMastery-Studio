import {createScene} from './scene.js';
import {orbitCamera} from './camera.js';
import {createCity} from './city.js';
import buildingModels from './building.js';

const count = 0;

export function createGame() {

    const citysize = 20;

    window.scene = createScene();
    window.orbit = orbitCamera();
    window.city = createCity(citysize);

    window.scene.renderer.shadowMap.enabled = true;
    
    window.scene.initialize(window.city);

    window.scene.onObjectSelected = (currentobject) => {
        // console.log(currentobject);
        // if (userData){
        let { i , j } = currentobject.userData;
        const tile =  window.city.data[i][j];
        console.log(tile);
        // }
        if (activeToolID === 'bulldozer'){
            tile.buildings = undefined;
            scene.update(window.city);
        }
        else if (!tile.buildings){
            // if (activeToolID == "road"){
            //     console.log(count);
            //     if (
            //         (window.scene.data[i - 1][j] && window.scene.data[i - 1][j].buildingid === 'road') ||
            //         (window.scene.data[i + 1][j] && window.scene.data[i + 1][j].buildingid === 'road') ||
            //         (window.scene.data[i][j - 1] && window.scene.data[i][j - 1].buildingid === 'road') ||
            //         (window.scene.data[i][j + 1] && window.scene.data[i][j + 1].buildingid === 'road')
            //     ) {
            //         tile.buildingid = activeToolID;
            //     }
            // }
            // else{
            tile.buildings = buildingModels[activeToolID]();
            // }
            scene.update(window.city);
        }
    }
    
    document.addEventListener('mousedown', window.scene.onmousedownscene.bind(window.scene), false);

    document.addEventListener('mousedown', window.orbit.onmousedown.bind(window.orbit), false);
    document.addEventListener('mouseup', window.orbit.onmouseup.bind(window.orbit), false);
    document.addEventListener('mousemove', window.orbit.onmousemove.bind(window.orbit), false);

    let activeToolID = undefined;

    function setActiveToolID(toolid) {
        activeToolID = toolid;
        console.log(activeToolID);

        // if (activeToolID === 'bulldozer'){
            
        //     city.data.tile.buildingid = undefined;
        // }
        // else if (!tile.buildingid){
        //     city.data.tile.buildingid = activeToolID;
        // }
    }

    const game = {
        update () {
            window.city.update();
            window.scene.update(city);
        },
        
        // setActiveToolID(toolid) {
        //     activeToolID = toolid;
        //     console.log(activeToolID);
        // }
    }

    setInterval (() => {
        game.update();
    }, 10)



    window.scene.start();

    return{
        setActiveToolID,
        game
    }
}