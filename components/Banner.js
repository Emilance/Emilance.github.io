import Link from "next/link";
import styles from '../styles/Banner.module.css'
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Stars } from '@react-three/drei';
import {Model} from '../public/Model'
import Earth from "./sections/Earth";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function AppBanner(){
  useEffect(() => {
    AOS.init( {duration:"1000"});
  }, [])

  return (
    <div id="home" className={styles.container}>
      <div className={styles.float}>
           <span data-aos="fade-up" > I AM DAMILOLA DANIEL ALABI</span>
           <h2   data-aos="fade-up">A PROFICIENT WEB DEVELOPER </h2>
           <a target='_blank' rel="noopener noreferrer" href="/Damilola.pdf" data-aos="fade-up" >DOWNLOAD MY RESUME</a>
      </div>
     <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: '#111a21',
            width: '100%',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[1.5, -0.9, 4]}  dispose={null} /> 
            <Stars  radius={300} 
          depth={100} 
          count={20000} 
          factor={7} 
          saturation={5}  
          fade={true}

          />
          <Earth   />
         </Suspense>
         <OrbitControls />
      </Canvas>
    </div>
  );
}


