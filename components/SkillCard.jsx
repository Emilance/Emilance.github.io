import {FaReact} from "react-icons/fa"
import styles from '../styles/About.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SkillCard =({icon, name, scolor})=>{
    useEffect(() => {
        AOS.init( {duration:800});
      }, [])
    return(
        <div  data-aos="fade-up"  className={styles.skillcard}>
             <div  className={styles.pentagon}>
                {icon}
             </div>
             <h3>{name}</h3>
   
        </div>

    )
}

export default SkillCard