import styles from './css-modules/Image.module.css'
import Text from './Text.js'

function Image({image, alt}){
    return (
        <div className={styles.container}>
            <img src={image} alt={alt} className={styles.image} />
            <Text music='Losing My Mind' banda='NEFFEX'/>
        </div>
    )
}

export default Image