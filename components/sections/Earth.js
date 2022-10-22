import  React, { useState } from 'react'


import { useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from "three"
import { useRef } from 'react'


function Earth (){

     const colorMap = useTexture("/8k_earth_daymap.jpg")
     const cloudMap = useTexture("/8k_earth_clouds.jpg")
     const normalMap = useTexture("/8k_earth_normal_map.jpg")
     const specularMap = useTexture("/8k_earth_specular_map.jpg")
     const nightMap = useTexture("8k_earth_nightmap.jpg")
    const earthRef =useRef()
    const cloudRef =useRef()
    useFrame(({ clock }) =>{
        const elapseTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapseTime / 6;
        cloudRef.current.rotation.y = elapseTime / 6;
    })
  
    return (
          <>
          <ambientLight intensity={0.1} />
          <pointLight color='#f6f3ea'  position ={[2, 0, 2]} intensity={1.2}/>
          <mesh  ref={cloudRef}  position={[0.5, 0, -1]}  >
          <sphereGeometry  args={[0.9, 32, 32 ]}/>
          <meshPhongMaterial map={cloudMap}    
          opacity={0.4}
          depthWrite ={true}
          transparent={true}
          side ={THREE.DoubleSide}

          />
          </mesh>
          <Stars  radius={300} 
          depth={60} 
          count={20000} 
          factor={7} 
          saturation={0}  
          fade={true}

          />
          <mesh ref={earthRef} position={[0.5 , 0, -1]}>
              <sphereGeometry  args={[0.895, 32, 32 ]}/>
              <meshPhongMaterial  color='red'  specularMap={specularMap}/>
              <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
              <OrbitControls  enableZoom={true} 
               enablePan={true}
               enableRotate={true}
               zoomSpeed={0.6}
               panSpeed={0.5}
               rotateSpeed={0.4}
           
               />
          </mesh>
          </>

   )
}


export default Earth
