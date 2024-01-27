import { OrbitControls, CameraControls, Environment, Text, MeshReflectorMaterial, RenderTexture, Float, useGLTF } from "@react-three/drei";
import { Home } from "./Home";
import { degToRad, lerp } from "three/src/math/MathUtils";
import React, { useContext, useEffect, useRef } from "react";
import { Color } from "three";
import { useAtom } from "jotai";
import { currentPageAtom, storepartAtom} from "./UI";
import { useFrame } from "@react-three/fiber";

// import { computer_ref, computer_table_ref, photo_frame_ref, bed_ref, trolly_ref } from "./Home";
import { MyContext } from "./Home";

export const Experience = () => {
  const glowlight = new Color("#fff");
  glowlight.multiplyScalar(1.01);

  const fitcamera = useRef();
  const fitcamerastore = useRef();
  const controls = useRef();
  const textmaterial = useRef();

  const aayush = useContext(MyContext);

  console.log("aayush");
  console.log(aayush);

  useFrame((_, delta) => {
    textmaterial.current.opacity = lerp(textmaterial.current.opacity, currentPage === "home" || currentPage === "intro" ? 1 : 0,
    delta*2.5)
  }) 

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [storepart, setstorepart] = useAtom(storepartAtom);
  const current = React.MutableRefObject;
  
  const camerafit_fuction = async () => {
    if (currentPage === "store"){
      controls.current.smoothTime = 0.6;
      controls.current.fitToBox(fitcamerastore.current, true);
    }
    else{
      controls.current.smoothTime = 1.5;
      controls.current.fitToBox(fitcamera.current, true);
    }
  };

  const intro = async () => {
    controls.current.dolly(-22);
    // controls.current.dolly(22, true);

    setTimeout(() => {
      setCurrentPage("home");
    }, 1200);
    camerafit_fuction();
  };

  useEffect( () => {
    intro();
  }, []);

  useEffect( () => {
    camerafit_fuction();
    window.addEventListener("resize", camerafit_fuction);
    return () => window.removeEventListener("resize", camerafit_fuction);
  }, [currentPage]);

  // console.log(currentPage);

  // const storecamera_fuction = async () => {
  //   if (currentPage === "store"){
  //     if (storepart === "computer_table"){
  //       console.log("Comptable");
  //       controls.current.smoothTime = 0.4;
  //       controls.current.fitToBox(computer_table_ref.current, true);
  //     }
  //     else if (storepart === "photo_frame"){
  //       controls.current.smoothTime = 0.4;
  //       controls.current.fitToBox(photo_frame_ref.current, true);
  //     }
  //     else if (storepart === "trolly"){
  //       controls.current.smoothTime = 0.4;
  //       controls.current.fitToBox(trolly_ref.current, true);
  //     }
  //     else if (storepart === "bed"){
  //       controls.current.smoothTime = 0.4;
  //       controls.current.fitToBox(bed_ref.current, true);
  //     }
  //     else if (storepart === "computer"){
  //       controls.current.smoothTime = 0.4;
  //       controls.current.fitToBox(computer_ref.current, true);
  //     }
  //   }
  // };

  // const storepartanimation = async () => {
  //   // controlsHome.current.dolly(-22);
  //   storecamera_fuction();    
  // };

  // useEffect( () => {
  //   storepartanimation();
  // }, [storepart]);

  return (
    <>
      
      
      <CameraControls ref={controls}/>

      <mesh ref={fitcamera} position-x={0.15} position-y={0.4} visible={false}>
        <boxGeometry 
          args={[8.5, 3, 6]}
          
        />
        <meshBasicMaterial transparent opacity={0.2}/>
      </mesh>
      
      {/* <OrbitControls/> */}

      <Text font={'public/fonds/Poppins-Black.ttf'} 
      position-z={-2.5} 
      position-x={-3} 
      position-y={0.5} 
      lineHeight={1} 
      rotation-y = {degToRad(10)}
      // anchorY={"bottom"}
      >
         Complete {"\n"}  Cocoon
        <meshBasicMaterial color={glowlight} toneMapped={false} ref={textmaterial}>
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset"/>
            <Float floatIntensity={4} rotationIntensity={5}>
              <Home user = {controls}
                scale={1.5}
              />
            </Float>
          </RenderTexture>
          </meshBasicMaterial>
      </Text>
      
      <group position-x={4} position-y={0} position-z={-1}>
        <Home rotation-y = {degToRad(-90)} html />
        <mesh ref={fitcamerastore} rotation-y = {degToRad(90)} position-x={-0.5} position-y={1} position-z={-0.5} visible={false}>
        {/* <mesh ref={fitcamerastore} rotation-y = {degToRad(45)} position-x={-0} position-y={1} position-z={-0.5}> */}
          <boxGeometry args={[3, 2, 3]}/>
          <meshBasicMaterial color="red"  transparent opacity={0.2}/>
        </mesh>
      </group>
      <Environment preset="sunset"/>


   

      <mesh position-y={-0.48} rotation-x={-Math.PI/2}>
        <planeGeometry args={[100, 100, 100]}/>
        <MeshReflectorMaterial
          blur={[100, 100]} // Blur ground reflections (width, height), 0 skips blur
          mixBlur={1} // How much blur mixes with surface roughness (default = 1)
          mixStrength={10} // Strength of the reflections
          // mixContrast={1} // Contrast of the reflections
          resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality, slower
          // mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
          roughness={1}
          depthScale={1} // Scale the depth factor (0 = no depth, default = 0)
          opacity={0.5}
          transparent
          minDepthThreshold={0.4} // Lower edge for the depthTexture interpolation (default = 0)
          maxDepthThreshold={1.4} // Upper edge for the depthTexture interpolation (default = 0)
          color = "#333"
          metalness = {0.5}
          // depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
          // distortion={1} // Amount of distortion based on the distortionMap texture
          // distortionMap={distortionTexture} // The red channel of this texture is used as the distortion map. Default is null
          // debug={0} 
          /* Depending on the assigned value, one of the following channels is shown:
            0 = no debug
            1 = depth channel
            2 = base channel
            3 = distortion channel
            4 = lod channel (based on the roughness)
          */
          // reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
        />
      </mesh>


      
    </>
  );
};

useGLTF.preload("/three/public/fonds/Poppins-Black.ttf");
useGLTF.preload("/three/public/models/Jason.glb");
export default Experience;



