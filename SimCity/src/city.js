import * as THREE from 'three';

export function createCity(passsize) {
    const size = passsize;
    const data = [];

    function createTile(i,j) {
        return{
            i,
            j,
            tarrainid:'grass',
            buildings: undefined
            // update() {
                // if(0.01 > Math.random()){
                    // if(this.buildingid === undefined){this.buildingid = 'building1';}
                    // else if(this.buildingid === 'building1'){this.buildingid = 'building2';}
                    // else if(this.buildingid === 'building2'){this.buildingid = 'building3';}
                // }
            // }
        }
    }

    function initialize() {
        for (let i = 0; i <= size; i++){
            const columb = [];
            for (let j = 0; j <= size; j++){
                const tile = createTile(i,j);
                columb.push(tile);
            }
            data.push(columb);
        }
    }

    function update() {
        for (let i = 0; i <= size; i++){
            for (let j = 0; j <= size; j++){
                // data[i][j].update();
                // setInterval (() => {
                    data[i][j].buildings?.update();
                // }, 10000)
            }
        }
    }

    initialize();

    return{
        data,
        size,
        update
    }
}