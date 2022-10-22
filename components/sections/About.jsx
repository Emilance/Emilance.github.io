import styles from '../../styles/About.module.css'
import SkillCard from '../SkillCard'
import {FaReact, FaNodeJs, FaPython, FaVuejs} from "react-icons/fa"
import {SiMongodb, SiTypescript, SiDjango}  from "react-icons/si"
import  {TbBrandJavascript,  TbBrandNextjs} from "react-icons/tb"

const  About  = ()=>{
    return(
        <div id="about" className={styles.container}>
            <h1>About</h1>
            <h3> WHO AM I</h3>
            <p>An enthusiastic team player  with vast curousity to solve problems in the web field,  I'm eager to contribute to team success through hard work, 
attention to detail and excellent organizational skills. With clear understanding of client application and 
server based application, I’m motivated to learn, grow and excel in the tech space. </p>
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
                 icon={<SiDjango  size="30"/>}
                 name="Django"
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