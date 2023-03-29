import styles from '../../styles/About.module.css'
import SkillCard from '../SkillCard'
import {SiJest}  from "react-icons/si"
import {FaReact, FaNodeJs, FaPython, FaVuejs} from "react-icons/fa"
import {SiMongodb, SiTypescript}  from "react-icons/si"
import  {TbBrandJavascript,  TbBrandNextjs} from "react-icons/tb"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const  About  = ()=>{
    useEffect(() => {
        AOS.init( {duration:"500"});
      }, [])
    return(
        <div id="about" className={styles.container}>
            <h1  data-aos="fade-up">About</h1>
            <h3 data-aos="fade-up"> WHO AM I</h3>
            <p data-aos="fade-up">An enthusiastic team player  with vast curousity to solve problems using web technologies, always eager to contribute to team success through hard work, 
attention to details and excellent organizational skills. I am currently open to work, feel free to contact me for  gig related to web development </p>
            <h3> SKILLS</h3>
            <div className={styles.skillcon}>
                <SkillCard
                    icon={<FaReact  size="30"/>}
                    name="ReactJs"
                    scolor= "#7cc5d9"
                />
                <SkillCard  
                 icon={<FaNodeJs  size="30"/>}
                 name= "NodeJS"
                 scolor="#68a063"
                />
                <SkillCard
                 icon={<SiMongodb  size="30"/>}
                 name="MongoDb"
                 scolor="#589636"
                />
                 <SkillCard
                 icon={<TbBrandJavascript  size="30"/>}
                 name="JavaScript"
                 scolor="#f0db4f"
                />
                 <SkillCard
                 icon={<FaPython  size="30"/>}
                 name="Python"
                 scolor="#ffde57"
                />
                 <SkillCard
                 icon={<SiTypescript  size="30"/>}
                 name="TypeScript"
                 scolor="#007acc"
                />
                 <SkillCard
                 icon={<TbBrandNextjs  size="30"/>}
                 name="NextJs"
                 scolor="#fa74a0"
                />
                 <SkillCard
                 icon={<SiJest  size="30"/>}
                 name="Git"
                 scolor="#092e20"
                />
                 <SkillCard
                 icon={<FaVuejs  size="30"/>}
                 name="VueJs"
                 scolor="#35495e"
                />
            </div>
        
        </div>
    )
}

export default About