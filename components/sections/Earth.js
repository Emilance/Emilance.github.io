import  React, { useState } from 'react'


import { useFrame,  } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import { useRef } from 'react'


function Earth (){

     const colorMap = useTexture("/world2.png")

  
  
    const earthRef =useRef()
   
    useFrame(({ clock }) =>{
        const elapseTime = clock.getElapsedTime()
        earthRef.current.rotation.y = elapseTime / 6;
       
    })
  
    return (
          <>
      
      <directionalLight intensity={1} />
          <mesh ref={earthRef} position={[0.5 , 0, -1]}>
              <sphereGeometry  args={[0.895, 32, 32 ]}/>
              <meshPhongMaterial  color='red' />
              <meshStandardMaterial map={colorMap} />
          </mesh>
          </>

   )
}


export default Earth
