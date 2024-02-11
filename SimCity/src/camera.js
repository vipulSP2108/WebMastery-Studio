import * as THREE from 'three';

export function orbitCamera () {
    const orbitcamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
    );

    const LEFT_MOUSE_BUTTON = 0;
    const MIDDLE_MOUSE_BUTTON = 1;
    const RIGHT_MOUSE_BUTTON = 2;

    let orbitcamera_latitude = 0;
    let orbitcamera_longitude = 0;
    
    let camera_origin = new THREE.Vector3();
    
    let zoom = 2;
    const manimumzoom = 2;
    const maximumzoom = 10;

    let camera_radius = manimumzoom;

    let leftmousedown = false;
    let middlemousedown = false;
    let rightmousedown = false;

    let privious_y = 0;
    let privious_x = 0;


    // const orbitcontrol = new OrbitControls(camera, renderer.domElement);
    // orbitcontrol.update();

    function onmousedown(event){
        if (event.button === LEFT_MOUSE_BUTTON) {leftmousedown = true;}
        if (event.button === MIDDLE_MOUSE_BUTTON) {middlemousedown = true;}
        if (event.button === RIGHT_MOUSE_BUTTON) {rightmousedown = true;console.log("hii");}
    }
    function onmouseup(event){
        if (event.button === LEFT_MOUSE_BUTTON) {leftmousedown = false;}
        if (event.button === MIDDLE_MOUSE_BUTTON) {middlemousedown = false;}
        if (event.button === RIGHT_MOUSE_BUTTON) {rightmousedown = false;}
    }

    function onmousemove(event){ 
        
        // This is for Moving camera
        if (leftmousedown === true && middlemousedown === true){
            const y_axis = new THREE.Vector3(0,1,0);
            const front_back = new THREE.Vector3(0,0,1).applyAxisAngle(y_axis, orbitcamera_longitude*Math.PI/180);
            const left_right = new THREE.Vector3(1,0,0).applyAxisAngle(y_axis, orbitcamera_longitude*Math.PI/180);
            camera_origin.add(front_back.multiplyScalar(-0.01 * (event.clientY - privious_y)));
            camera_origin.add(left_right.multiplyScalar(-0.01 * (event.clientX - privious_x)));
            update_camera();
        }

        // This is for Rotation of camera
        else if (leftmousedown === true){
            orbitcamera_latitude += ((event.clientY - privious_y) * 0.5);
            orbitcamera_latitude = Math.min(90, Math.max(0, orbitcamera_latitude))
            
            orbitcamera_longitude += -((event.clientX - privious_x) * 0.5);
            
            update_camera();
        }

        // This is for Zooming of camera
        else if(middlemousedown === true){
            zoom += event.clientY - privious_y;
            zoom = Math.min(400, Math.max(2, zoom));
            currentzoom = gsap.utils.mapRange(2, window.innerHeight*0.7, manimumzoom, maximumzoom, zoom);
            camera_radius = currentzoom;
            update_camera();
        }

        privious_y = event.clientY;
        privious_x = event.clientX;
    }

    function update_camera () {
        orbitcamera.position.x = camera_radius * Math.sin(orbitcamera_longitude*Math.PI/180) * Math.cos(orbitcamera_latitude*Math.PI/180);
        orbitcamera.position.y = camera_radius * Math.sin(orbitcamera_latitude*Math.PI/180);
        orbitcamera.position.z = camera_radius * Math.cos(orbitcamera_longitude*Math.PI/180) * Math.cos(orbitcamera_latitude*Math.PI/180);
        
        orbitcamera.position.add(camera_origin);
        orbitcamera.lookAt(camera_origin);
        // orbitcamera.lookAt(0,0,0);
        orbitcamera.updateMatrix();
    }
    
    update_camera();
    return{
        onmousedown,
        onmouseup,
        onmousemove,
        orbitcamera
    }
}