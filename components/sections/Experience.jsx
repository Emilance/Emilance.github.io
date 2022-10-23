import styles from '../../styles/Experience.module.css'
import {FaPencilAlt} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const experienceInfo =[
    {
        title:"NextJS Frontend Developer at PlayJor",
        year: "Jul 2022 - Aug 2022",
        description:"I worked together with a team of backend dev and frontend dev to setup a marketplace on Playjor platform"
    },
    {
        title:"NodeJS Developer at Hostinza",
        year: "Aug 2022 - Oct 2022",
        description:"I setup stripe payment workflow on Hostinza with Nodejs and connected with NextJS frontend, built some API endpoints and cofigured the platform for matomo analytics"
    },

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

              <div data-aos="fade-up" className={styles.experience}>
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

              <div data-aos="fade-up" className={styles.experience}>
                  <h2>Freelance Web Designer on Fiverr</h2>
                  <span>May 2021 - Aug 2022</span>
                  <p>As a freelance Web designer , I designed and redesigned websites for clients on CMS platforms like Wordpress, squarespace, Shopify e.t.c   Check out my fiverr profile  <a target='_blank' href='https://www.fiverr.com/emilance'>here</a></p>
              </div>
         </div>
      
     </div>
    )
}

export default Experience