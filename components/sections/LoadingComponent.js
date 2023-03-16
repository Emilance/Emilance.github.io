import styles from '../../styles/Loading.module.css'



const Loading = ()=>{
    return(
        <div className={styles.loading_section}>
            <div className={styles.loading_text}>
            <span className={styles.glowing_text}>E</span>
            <span className={styles.glowing_text}>M</span>
            <span className={styles.glowing_text}>I</span>
            <span className={styles.glowing_text}>N</span>
            <span className={styles.glowing_text}>E</span>
            <span className={styles.glowing_text}>N</span>
            <span className={styles.glowing_text}>C</span>
            <span className={styles.glowing_text}>E</span>

        </div>
            <div className={styles.car}>
                <div className={styles.car_body}>
            <div className={styles.headlight}></div>

                </div>
                <div className={styles.wheel1 }>|</div>
                <div className={styles.wheel2}>|</div>
            </div>
            
        </div>
    )
}


export default Loading