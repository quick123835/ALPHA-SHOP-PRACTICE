import styles from './ProgressControl.module.scss'
import { ReactComponent as RightArrow } from '../../../../assests/icons/rightArrow.svg'
import { ReactComponent as LeftArrow } from '../../../../assests/icons/leftArrow.svg'


const ProgressControl = ({onNextClick , onPreClick , step}) => {
    return(
        <section className={styles.progressControlContainer}>
            <section className={styles.buttonGroup}>
                {step > 1 ? 
                    <button className={styles.prev} onClick={onPreClick}>
                        <LeftArrow />
                        上一步
                    </button> :
                    ''
                }
                {step === 3 ? 
                    <button className={styles.next} onClick={onNextClick}>
                        送出訂單
                        <RightArrow />
                    </button> :
                    <button className={styles.next} onClick={onNextClick}>
                        下一步
                        <RightArrow />
                    </button>
                }

            </section>
        </section>
    )
}


export default ProgressControl