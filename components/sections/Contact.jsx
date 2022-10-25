import styles from '../../styles/Contact.module.css'
import {AiOutlineMail, AiOutlinePhone}from "react-icons/ai"
import {GrLocation}  from "react-icons/gr"
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const  Contact  = ()=>{
    useEffect(() => {
        AOS.init( {duration:"500"});
      }, [])
    const sendData = (e ) => {
        e.preventDefault();

        emailjs.sendForm('service_0j9qlv9', 'template_mrwk62n', e.target, '1DW4hN_RXe2eopdg_')
          .then((result) => {
              console.log(result.text);
              togglePopUp()
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
        
    }
    return(
        <div id="contact" className={styles.container}>
            <h1>Contact</h1>
            <h3> CONTACT ME HERE</h3>
            <div data-aos="zoom-in" className={styles.contactCon}>
                 <div  data-aos="fade-right" className={styles.info}>
                    <div className={styles.sinfo}>
                       <AiOutlineMail  size="30"/>
                       <p>Alabidamilolad@gmail.com  </p>
                    </div>
                    <div className={styles.sinfo}>
                    <AiOutlinePhone size="30"/>
                    <p>08140711202  </p>
                    </div>
                    <div className={styles.sinfo}>
                     <GrLocation size="30"/>
                    <p>23 Damico Est, Ile Ife, Osun State</p>
                    </div>
                 </div>
                 <form  data-aos="fade-left" classname={styles.form}  onSubmit={sendData}>
                    <div className={styles.topinput}>
                        <input id="name" name="name" type="text" placeholder="Name"/>
                        <input id="email" name="email" type="Email" placeholder="Email"/>
                    </div> 
                    <textarea name="message" placeholder="write your message here"></textarea>
                    <input  type="submit"  value = "Submit"/>
                 </form>

            </div>
          
        </div>
    )
}

export default Contact