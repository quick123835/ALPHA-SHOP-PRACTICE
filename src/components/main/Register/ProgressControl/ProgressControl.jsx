import styles from './ProgressControl.module.scss'
import { ReactComponent as RightArrow } from '../../../../assests/icons/rightArrow.svg'
import { ReactComponent as LeftArrow } from '../../../../assests/icons/leftArrow.svg'


const ProgressControl = () => {
    return(
        <section className={styles.progressControlContainer}>
            <section className={styles.buttonGroup}>
                <button className={styles.prev}>
                    <LeftArrow />
                    上一步
                </button>
                <button className={styles.next}>
                    下一步
                    <RightArrow />
                </button>
            </section>
        </section>
    )
}


export default ProgressControl