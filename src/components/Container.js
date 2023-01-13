import styles from './css-modules/Container.module.css'
import Image from './Image.js'
import Random from '../images/random.png'
import Controls from './Controls.js'


function Container(){
    return (
        <div className={styles.container}>
            <Image image={Random} alt='random'/>
            <Controls/>
            
        </div>
    )
}


export default Container