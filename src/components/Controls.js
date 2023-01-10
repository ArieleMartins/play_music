import styles from './css-modules/Controls.module.css'

function Controls(){
    return(
        <div className={styles.container}>
            <button><i className="fa-solid fa-backward-step"></i></button>
            <button><i className="fa-solid fa-play"></i></button>
            <button><i className="fa-solid fa-forward-step"></i></button>
        </div>
    )
}

export default Controls