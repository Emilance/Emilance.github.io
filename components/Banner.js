import Link from "next/link";
import styles from '../styles/Banner.module.css'
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Stars } from '@react-three/drei';
import {Model} from '../public/Model'
import {BsTwitter, BsInstagram } from 'react-icons/bs'
import {RiFacebookFill, RiLinkedinFill, RiGithubLine}  from 'react-icons/ri'

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
           <span data-aos="fade-up" >Revolutionize Your Web Presence:</span>
           <h2   data-aos="fade-up"> Let's Create <span>Innovative Solutions</span>  Together</h2>
           <a  href="#contact" data-aos="fade-up" >CONTACT ME NOW</a>
           <div className={styles.socialIcon}>
                            <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/EminenceX3' className ={styles.IconCon}>
                                <BsTwitter size="15"/>
                            </a>
                           
                          
                            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/'  className ={styles.IconCon}>
                                <RiLinkedinFill size="20"/>
                            </a>
                            <a target='_blank' rel="noopener noreferrer" href='https://github.com/emilance'  className ={styles.IconCon}>
                                <RiGithubLine size="20"/>
                            </a>
                            <div class={styles.vertical_line}>
                                
                            </div>
                        </div> 
      </div>
    
    </div>
  );
}


