import styles from '../../styles/Experience.module.css'
import {FaPencilAlt} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const experienceInfo =[
    {
        title:"Backend developer at LearnPlanet",
        year: "Dec 2022 - Present",
        description:"Currently working at  HomeSchoolNg as a NodeJs developer where I work on a project called learnplanet"
    },

    {
        title:"NextJS Frontend Developer at PlayJor",
        year: "Jul 2022 - Aug 2022",
        description:"I worked together with a team of backend dev and frontend dev to setup a marketplace on Playjor platform"
    }
   
]
const  Experience  = ()=>{
    useEffect(() => {
        AOS.init( {duration:"500"});
      }, [])
    return(
     <div id="experience"   className={styles.container}>
         <h1 data-aos="fade-up">Experience</h1>
         <h3 data-aos="fade-up"> My Work Experience</h3>
         {experienceInfo.map((data, index)=>{
            return(

         <div key={index} className={styles.exContainer}>
               <div className={styles.treeIcon}>
                  <FaPencilAlt size="20"/>
               </div>

              <div data-aos="fade-left" className={styles.experience}>
                  <h2>{data.title}</h2>
                  <span>{data.year}</span>
                  <p> {data.description}</p>
              </div>
         </div>
            )
         })}
          <div  className={styles.exContainer}>
               <div className={styles.treeIcon}>
                  <FaPencilAlt size="20"/>
               </div>

              <div data-aos="fade-left" className={styles.experience}>
                  <h2>Freelance Web Designer on Fiverr</h2>
                  <span>May 2021 - Aug 2022</span>
                  <p>As a freelance Web designer , I designed and redesigned websites for clients on CMS platforms like Wordpress, squarespace, Shopify e.t.c   Check out my fiverr profile  <a target='_blank' rel="noopener noreferrer" href='https://www.fiverr.com/emilance'>here</a></p>
              </div>
         </div>
      
     </div>
    )
}

export default Experience