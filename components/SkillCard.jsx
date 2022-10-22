import {FaReact} from "react-icons/fa"
import styles from '../styles/About.module.css'


const SkillCard =({icon, name, scolor})=>{
    return(
        <div  className={styles.skillcard}>
             <div  className={styles.pentagon}>
                {icon}
             </div>
             <h3>{name}</h3>
   
        </div>

    )
}

export default SkillCard