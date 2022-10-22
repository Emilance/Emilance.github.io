import styles from '../../styles/Contact.module.css'
import {AiOutlineMail, AiOutlinePhone}from "react-icons/ai"
import {GrLocation}  from "react-icons/gr"


const  Contact  = ()=>{
    return(
        <div id="contact" className={styles.container}>
            <h1>Contact</h1>
            <h3> CONTACT ME HERE</h3>
            <div className={styles.contactCon}>
                 <div className={styles.info}>
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
                 <form classname={styles.form}>
                    <div className={styles.topinput}>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                    </div> 
                    <textarea placeholder="write your message here"></textarea>
                    <input type="submit"/>
                 </form>

            </div>
          
        </div>
    )
}

export default Contact