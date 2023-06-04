import styles from '../../styles/About.module.css'
import SkillCard from '../SkillCard'
import {SiJest}  from "react-icons/si"
import {FaReact, FaNodeJs, FaPython, FaVuejs} from "react-icons/fa"
import {SiMongodb, SiTypescript}  from "react-icons/si"
import  {TbBrandJavascript,  TbBrandNextjs} from "react-icons/tb"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ServiceSection from '../Service'
const  About  = ()=>{
    useEffect(() => {
        AOS.init( {duration:"500"});
      }, [])
    return(
        <div id="about" className={styles.container}>
            <h1  data-aos="fade-up">About</h1>
            <h3 data-aos="fade-up"> WHO AM I</h3>
            <p data-aos="fade-up">I help businesses and individuals establish a compelling online presence. I combine creativity, technical proficiency, and a customer-centric approach to deliver tailored solutions that engage audiences, streamline processes, and drive tangible results. Let's collaborate to bring your digital vision to life and make a lasting impact in the digital world </p>
            <h3> SERVICE</h3>
            <ServiceSection/>
          
        
        </div>
    )
}

export default About