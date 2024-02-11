import * as THREE from 'three'

export function createLighting() {
    const amb_light = [
        new THREE.AmbientLight(0xffffff ,0.6),
    //     new THREE.DirectionalLight(0xffffff ,0.4),
    //     new THREE.DirectionalLight(0xffffff ,0.4),
    //     new THREE.DirectionalLight(0xffffff ,0.4),
        new THREE.DirectionalLight(0xffffff ,0.8)
    ];
    // amb_light[1].position.set(0,1,0);
    // amb_light[2].position.set(1,1,0);
    // amb_light[3].position.set(0,1,1);
    // const sun = new THREE.DirectionalLight(0xffffff ,0.4);
    amb_light[1].position.set(20, 20, 20);
    amb_light[1].castShadow = true;
    amb_light[1].shadow.camera.left = -13;
    amb_light[1].shadow.camera.right = 13;
    amb_light[1].shadow.camera.top = 0;
    amb_light[1].shadow.camera.bottom = -15;
    amb_light[1].shadow.camera.near = -10;
    amb_light[1].shadow.camera.far = 50;
    amb_light[1].shadow.mapSize.height = 500;
    amb_light[1].shadow.mapSize.width = 500;

    const camerahelper = new THREE.CameraHelper(amb_light[1].shadow.camera);
    return{
        amb_light,
        camerahelper,
    }
}