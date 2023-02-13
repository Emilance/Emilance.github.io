import Image from 'next/image'
import styles from '../styles/SideNav.module.css'
import {BsTwitter, BsInstagram } from 'react-icons/bs'
import {RiFacebookFill, RiLinkedinFill, RiGithubLine}  from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';

const MobileSideNav = ({toggleSideBar}) => {
    useEffect(() => {
        AOS.init( {duration:"800"});
      }, [])
    return ( 
        <div data-aos="fade-right" className={styles.mcontainer}>
            
            <div className={styles.top}>
         
               <div className={styles.imageContainer}>
                   <Image src="/dp-min.jpg"   alt="Alabi Damilola Daniel" className={styles.img}  layout='fill'/>
               </div>
            </div>
            <div className={styles.bottom}>
                 <div className={styles.nameContainer}>
                        <h1 >DAMILOLA DANIEL</h1>
                        <div className={styles.socialIcon}>
                        <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/EminenceX3' className ={styles.IconCon}>
                                <BsTwitter size="15"/>
                            </a>
                            <a  target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/eminencedd/" className ={styles.IconCon}>
                                <BsInstagram size="15"/>
                            </a>
                            <a   target='_blank' rel="noopener noreferrer" href="https://web.facebook.com/damiloladaniel.alabi/" className ={styles.IconCon}>
                                <RiFacebookFill size="15"/>
                            </a>
                            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/damilola-daniel-alabi-120036218/'  className ={styles.IconCon}>
                                <RiLinkedinFill size="20"/>
                            </a>
                            <a target='_blank' rel="noopener noreferrer" href='https://github.com/emilance'  className ={styles.IconCon}>
                                <RiGithubLine size="20"/>
                            </a>
                        </div>
            </div>
                        <div className={styles.NavCon}>
                            <a  href="#home"  onClick={toggleSideBar}   > HOME </a>
                            <a  href="#about"  onClick={toggleSideBar} > ABOUT </a>
                            <a  href="#experience" onClick={toggleSideBar} >EXPERIENCE  </a>
                            <a  href="#project"   onClick={toggleSideBar}> PROJECT </a>
                            <a  href="#contact"   onClick={toggleSideBar}> CONTACT </a>
                        </div>
                        <div className={styles.space}>

                        </div>
        </div>
        </div>
     );
}
 
export default MobileSideNav;