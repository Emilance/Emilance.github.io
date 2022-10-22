import Image from 'next/image'
import styles from '../../styles/Project.module.css'

const projectList =[
    {
        image: "/dyen.png",
        title: "DYEN ECOMMERCE WEBSITE",
        description: "A fullstack Ecommerce website built with NextJS and MongoDB as database, It allows user to login add products to cart and checkout, admin can also logIn with unique login detail to view the admin dashboard"

    },
    {
        image: "/astro.PNG",
        title: "Astromutatio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, nihil?"

    },
    {
        image: "/TheVolink.PNG",
        title: "TheVolink Landing Page",
        description: "A responsive and converting Landingpage for theVolink business, created with the motive of converting visitors to join the business waitlist and await its launching"

    },
]
const  Projects  = ()=>{
    return(
        <div id="project" className={styles.container}>
         <h1>Project</h1>
         <h3> My Projects</h3>
         {projectList.map((data, i)=>{
            return(

         <div className={i% 2 === 0 ?   styles.projectCon  : styles.projectCon1}>
              <div className={styles.buttonCon}>
              <a href="#">LIVE PROJECT</a>
              <a href="#">GITHUB REPO</a>
              </div>
            <div className={styles.image}>
                 <Image src={data.image} alt='' layout='fill'   className={styles.img} />
            </div>
            <div className={styles.projectdetails}>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
            </div>
         </div>
            )
         })}

               
        </div>
    )
}

export default Projects