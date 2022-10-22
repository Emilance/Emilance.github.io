import Image from 'next/image'
import styles from '../styles/SideNav.module.css'
import {BsTwitter, BsInstagram } from 'react-icons/bs'
import {RiFacebookFill, RiLinkedinFill, RiGithubLine}  from 'react-icons/ri'

const SideNav = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.top}>

               <div className={styles.imageContainer}>
                   <Image src="/dp.jpg"   alt="Alabi Damilola Daniel" className={styles.img}  layout='fill'/>
               </div>
            </div>
            <div className={styles.bottom}>
                 <div className={styles.nameContainer}>
                        <h1 >DAMILOLA DANIEL</h1>
                        <div className={styles.socialIcon}>
                            <div className ={styles.IconCon}>
                                <BsTwitter size="15"/>
                            </div>
                            <div className ={styles.IconCon}>
                                <BsInstagram size="15"/>
                            </div>
                            <div className ={styles.IconCon}>
                                <RiFacebookFill size="15"/>
                            </div>
                            <div className ={styles.IconCon}>
                                <RiLinkedinFill size="20"/>
                            </div>
                            <div className ={styles.IconCon}>
                                <RiGithubLine size="20"/>
                            </div>
                        </div>
            </div>
                        <div className={styles.NavCon}>
                            <a  href="#home"> HOME </a>
                            <a  href="#about"> ABOUT </a>
                            <a  href="#experience">EXPERIENCE  </a>
                            <a  href="#project"> PROJECT </a>
                            <a  href="#"> CONTACT </a>
                        </div>
                        <div className={styles.space}>

                        </div>
        </div>
        </div>
     );
}
 
export default SideNav;