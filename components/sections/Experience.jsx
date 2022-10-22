import styles from '../../styles/Experience.module.css'
import {FaPencilAlt} from "react-icons/fa"
 

const experienceInfo =[
    {
        title:"NextJS Frontend Developer at PlayJor",
        year: "Jul 2022 - Aug 2022",
        description:"I worked together with a team of backend dev and front end dev to setup a marketplace on Playjor platform"
    },
    {
        title:"NodeJS Developer at Hostinza",
        year: "Aug 2022 - Oct 2022",
        description:"I setup stripe payment workflow on Hostinza with Nodejs and connected with NextJS frontend, built some API endpoints and cofigured the platform for matomo analytics"
    },
    {
        title:"Freelance Web Designer on Fiverr",
        year: "May 2021 - Aug 2022",
        description:"As a freelance Web designer , I designed and redesigned websites for clients on CMS platforms like Wordpress, squarespace, Shopify e.t.c"
    },
]
const  Experience  = ()=>{
    return(
     <div id="experience"   className={styles.container}>
         <h1>Experience</h1>
         <h3> My Work Experience</h3>
         {experienceInfo.map((data, index)=>{
            return(

         <div key={index} className={styles.exContainer}>
               <div className={styles.treeIcon}>
                  <FaPencilAlt size="20"/>
               </div>

              <div className={styles.experience}>
                  <h2>{data.title}</h2>
                  <span>{data.year}</span>
                  <p> {data.description}</p>
              </div>
         </div>
            )
         })}
      
     </div>
    )
}

export default Experience