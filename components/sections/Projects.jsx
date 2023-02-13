import Image from 'next/image'
import styles from '../../styles/Project.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"

const projectList =[
    {
        image: "/tuchdelta.png",
        title: "TUCHDELTA",
        description: "I collaborated with a two other developers to build  TuchDelta platform, An Ecommerce website built with ReactJS at the frontend and PHP for the backend  ",
        live:"https://tuchdelta.vercel.app",
        source: "https://github.com/Emilance/tuchdelta"
    },
    {
        image: "/dyen.png",
        title: "DYEN",
        description: "A fullstack Ecommerce website built with NextJS and MongoDB as database, It allows user to login add products to cart and checkout, admin can also logIn with unique login detail to view the admin dashboard",
        live:"https://dyen.vercel.app",
        source: "https://github.com/Emilance/Dyenwebsite"
    },
    {
        image: "/befunded.png",
        title: "BEFUNDED",
        description:"I collaborated with 2 developers to build  beFunded a web app that connects entrepreneurs with angel investors and Venture capitalists who are ready to invest in companies and scalable ideas in exchange for equity"  ,
        live:"https://be-funded.vercel.app",
        source:"https://github.com/Emilance"
    },
    {
        image: "/vuepage.png",
        title: "Emchat Chat Application",
        description: "Emchat is a real-time chat application built with vue and Django",
        live:"https://github.com/Emilance/Emchat-frontend",
        source: "https://github.com/Emilance/Emchat-frontend"
    },
    {
        image: "/twitahandler.png",
        title: "TwitaHandler",
        description: "A twitter management app built with React, typeScript and Flask",
        live:"/",
        source: "https://github.com/Emilance/twitahandler"
    }
]
const  Projects  = ()=>{
    const [pindex, setPIndex ] = useState(0)
    const handleArrowClick = (button)=> {
        if(button == 1) {
            if(pindex === projectList.length - 1){
               setPIndex(0)
            }else{

                setPIndex(pindex + 1)
            }
        }
        else if(button == 2){
           if(pindex === 0){
                setPIndex(projectList.length - 1)
           }else{
             setPIndex(pindex - 1)
           }
        }
    }
    useEffect(() => {
        AOS.init( {duration:"800"});
      }, [])
    return(
        <div id="project" className={styles.container}>
         <h1  data-aos="fade-up" >Project</h1>
         <h3   data-aos="fade-up" > My Projects</h3>
         <div className={styles.flexCon}>
       
         <div className={styles.arrow}   style={{left: '1%'}}    onClick={()=> handleArrowClick(2)}>
                <MdArrowBackIos size="100%"/>
            </div>
            <div className={styles.arrow}     style={{right: '1%'}}  onClick={()=> handleArrowClick(1)}>
                <MdArrowForwardIos size="100%"/>
            </div>
         <div className={styles.slideCon}   style={{ transform : `translateX(${-70 * pindex}vw)`}}>
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
         </div>

               
        </div>
    )
}

export default Projects