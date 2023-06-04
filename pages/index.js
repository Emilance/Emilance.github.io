import Head from 'next/head'
import Image from 'next/image'
import  React, { Suspense, useEffect, useState } from 'react'
import AppBanner from '../components/Banner.js'
import FancyBurger from '../components/FancyBurger.jsx'
import Footer from '../components/Footer.jsx'
import MobileSideNav from '../components/MobileSidebar.jsx'
import About from '../components/sections/About.jsx'
import Contact from '../components/sections/Contact.jsx'
import Experience from '../components/sections/Experience.jsx'
import Loading from '../components/sections/LoadingComponent.js'
import SideNav from '../components/SideNav.jsx'
const Projects = React.lazy(() => import('../components/sections/Projects.jsx'));
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei';
import Earth from '../components/sections/Earth.js'


export default function Home() {
  const [openSideBar,  setOpenSideBar] = useState(false)
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] =useState({   x:0,  y:0, })
    useEffect(()=>{
         const mouseMove = (e)=> {
           setMousePosition({
            x:e.clientX,
            y: e.clientY
           })
         }
         window.addEventListener("mousemove", mouseMove)

         return ()=> {
           window.removeEventListener("mousemove", mouseMove)
         }
    },[])

  useEffect(() => {  
     // Simulate a delay before hiding the loading screen
     const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup function to prevent memory leaks
    return () => clearTimeout(delay);
    
  }, []);

  const  toggleSideBar = ()=>{
    setOpenSideBar(!openSideBar)
  }
 const  variants = {
    default: {
      x:mousePosition.x -16,
      y:mousePosition.y -16

    }

  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Portfolio</title>
        <meta name="description" content="A Portfolio website built with NextJs" />
        <link rel="icon" href="/danport.png" />
        <meta property="og:title"  content="Daniel Portfolio"/>
        <meta property="og:description"  content="A Portfolio website built with NextJs"/>
        <meta property="og:url"  content="https://danport.vercel.app/"/>
        <meta property="og:image6"  href="/danport.png"/>
      </Head>
     {loading ? <Loading/>
     :    <>
     {openSideBar    &&  
       <MobileSideNav toggleSideBar={toggleSideBar} />
   }
   <SideNav/>

     <div className={styles.pageContainer}>
      <motion.div className={styles.cursor}
        variants={variants}
        animate ="default"
      />

     
       <FancyBurger toggleSideBar={toggleSideBar} />
       <AppBanner/>
       <About/>
       <Experience/>
       <Suspense fallback={<h1>Loading......</h1>}>

       <Projects/>
       </Suspense>
       <Contact/>
       <Footer/>

     </div>
      
     <div className={styles.canva}>

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
            {/* <Model position={[1.5, -0.9, 4]}  dispose={null} />  */}
            <Stars  radius={400} 
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
     </> }
    
    </div>
  )
}
