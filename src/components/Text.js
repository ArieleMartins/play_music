import styles from './css-modules/Text.module.css'

function Text({ music, banda}){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{music}</h1>
            <p className={styles.subtitle}>{banda}</p>
        </div>
    )
}

export default Text