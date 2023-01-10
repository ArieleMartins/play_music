import styles from './css-modules/Image.module.css'
import Text from './Text.js'

function Image({image, alt}){
    return (
        <div className={styles.container}>
            <img src={image} alt={alt} className={styles.image} />
            <Text music='Acorda Devinho' banda='Banda Rocketseat'/>
        </div>
    )
}

export default Image