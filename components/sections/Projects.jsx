import Image from 'next/image'
import styles from '../../styles/Project.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BsCodeSlash, BsLink } from 'react-icons/bs';
import {FiExternalLink} from 'react-icons/fi'
import {FaReact,FaStripe, FaNodeJs, FaPython, FaVuejs} from "react-icons/fa"
import {SiMongodb, SiThreedotjs, SiTypescript}  from "react-icons/si"
import  {TbBrandJavascript, TbBrandSocketIo, TbBrandNextjs, TbBrandTailwind} from "react-icons/tb"

const projectList =[
    
    {
        image: "/laundryhub.png",
        title: "LAUNDRYHUB",
        description: "A fullstack laundry website built for LaundryHub to facilitate booking and payment for service, features include login system, Oauth, Scheduling, Payment Gateway integration, rating system  and admin dashboard",
        live:"https://laundryhubtest.vercel.app/",
        source: "https://github.com/Emilance",
        tech :[
            "React.JS" ,"Node.JS", "MongoDB", "Stripe"
        ]
    },
    {
        image: "/stro.png",
        title: "ASTROMUTATIO",
        description: "A learning platform built for stellar enthusiast to learn about stars with videos and interactive 3d visualization, Features include 3D interractive Visualization, video Contents",
        live:"https://astromutatio.vercel.app",
        source: "https://github.com/Emilance/Astromutatio",
        tech :[
            "Next.JS" , "Three.JS" 
        ]
    },
    
    {
        image: "/vuepage.png",
        title: "Emchat Chat Application",
        description: "Emchat is a real-time chat application built with vue and NodeJs",
        live:"https://github.com/Emilance/Emchat-frontend",
        source: "https://github.com/Emilance/Emchat-frontend",
        tech :[
            "Vue.JS" ,"Node.JS", "MongoDB",  "Socket.IO"
        ]
    },
    {
        image: "/twitahandler.png",
        title: "TwitaHandler",
        description: "A twitter management app built for twitter users to save and automate tweets, user can also look up another twitter users details ",
        live:"/",
        source: "https://github.com/Emilance/twitahandler",
        tech :[
            "React.JS" , "Typescript","Python" , "twitter API"
        ]
    },
    {
        image: "/tuchdelta.png",
        title: "TUCHDELTA",
        description: "An Ecommerce website built with ReactJS and Tailwind CSS ",
        live:"https://tuchdelta.vercel.app",
        source: "https://github.com/Emilance/tuchdelta",
        tech :[
            "React.JS" ,"TypeScript"
        ]
    
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
        
         <div className={styles.slideCon}   >
        
                    {projectList.map((data, i)=>{
                        return(
                    <div key={i}  className={styles.pCon} > 
                    <div className={(i % 2 === 0 )?  styles.projectCon  : styles.projectCon1}>

                        <div   data-aos="fade-right"  className={styles.image}>
                            <Image src={data.image} alt='' layout='fill'   className={styles.img} />
                           <div className={styles.cardBody} >
                               <h3 className={styles.cardTitle}>Technology</h3>
 
                               <div className={styles.techCon}>
                               <TechIcons tech={data.tech} />
                                </div>
                            </div>
                        </div>
                        <div   data-aos="fade-left"  className={styles.projectdetails}>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                            <div className={styles.iconCon}>

                                <a target='_blank' rel="noopener noreferrer" href={data.live}>
                                <FiExternalLink  className={styles.icon}/>
                                </a>
                                <a target='_blank' rel="noopener noreferrer" href={data.live}>
                                <BsCodeSlash   className={styles.icon}/>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                        )
                    })}

           
         </div>


               
        </div>
    )
}

const TechIcons = ({ tech }) => {
    return (
      <div className={styles.techCon}>
        {tech.map((icon, index) => (
          <div key={index}>{icon}</div>
        ))}
      </div>
    );
  };

export default Projects