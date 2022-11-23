import Image from 'next/image'
import styles from '../../styles/Project.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const projectList =[
    {
        image: "/befunded.png",
        title: "BeFunded Fintech  Web App",
        description: "I collaborated with 2 developers to build  beFunded a web app that connects entrepreneurs with angel investors and Venture capitalists who are ready to invest in companies and scalable ideas in exchange for equity",
        live:"https://be-funded.vercel.app",
        source: "https://github.com/Emilance/BeFunded"
    },
    {
        image: "/dyen.png",
        title: "DYEN ECOMMERCE WEBSITE",
        description: "A fullstack Ecommerce website built with NextJS and MongoDB as database, It allows user to login add products to cart and checkout, admin can also logIn with unique login detail to view the admin dashboard",
        live:"https://dyen.vercel.app",
        source: "https://github.com/Emilance/Dyenwebsite"
    },
    {
        image: "/vuepage.png",
        title: "Emchat Chat Application",
        description: "Emchat is a real-time chat application built with vue and Django",
        live:"https://github.com/Emilance/Emchat-frontend",
        source: "https://github.com/Emilance/Emchat-frontend"
    },
    {
        image: "/TheVolink.PNG",
        title: "TheVolink Landing Page",
        description: "A business landing page built with ReactJs and typescript, the landing page was built with the motive of generating leads of visitors who are interested in joining theVolink waitlist",
        live:"https://theVolink.netlify.app",
        source: "https://github.com/Emilance/thevolink"
    },
]
const  Projects  = ()=>{
    useEffect(() => {
        AOS.init( {duration:"800"});
      }, [])
    return(
        <div id="project" className={styles.container}>
         <h1  data-aos="fade-up" >Project</h1>
         <h3   data-aos="fade-up" > My Projects</h3>
         {projectList.map((data, i)=>{
            return(
         <div key={i} className={i% 2 === 0 ?   styles.projectCon  : styles.projectCon1}>
              <div className={styles.buttonCon}>
              <a target='_blank' rel="noopener noreferrer" href={data.live}>LIVE PROJECT</a>
              <a  target='_blank' rel="noopener noreferrer" href={data.source}>GITHUB REPO</a>
              </div>
            <div   data-aos="fade-right"  className={styles.image}>
                 <Image src={data.image} alt='' layout='fill'   className={styles.img} />
            </div>
            <div   data-aos="fade-left"  className={styles.projectdetails}>
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