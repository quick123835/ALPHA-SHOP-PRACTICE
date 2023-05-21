import styles from './Step3.module.scss'
import { useMainContext } from '../../../../contexts/MainContext'


const Step3 = () => {
    const mainInfo = useMainContext().current

    const handleFormChange = (e) => {
        const objName = e.target.name
        mainInfo[objName] = e.target.value
    }


    return(
        <form  data-phase="credit-card">
            <h3 className={styles.formTitle}>付款資訊</h3>
            <section className={styles.formBody}>
                <div className={styles.formFirstRow}>
                    <div className={`${styles.inputGroup} ${styles.name}`}>
                        <div className={styles.inputLable}>持卡人姓名</div>
                        <input type="text" placeholder="John Doe" name='name' onChange={handleFormChange}/>
                    </div>
                </div>
                <div className={styles.formSecRow}>
                    <div className={`${styles.inputGroup} ${styles.creditNum}`}>
                        <div className={styles.inputLable}>卡號</div>
                        <input type="text" placeholder="1111 2222 3333 4444" name='creditNum' onChange={handleFormChange}/>
                    </div>
                </div>
                <div className={styles.formThrRow}>
                    <div className={`${styles.inputGroup} ${styles.timeBar}`}>
                        <div className={styles.inputLable}>有效期限</div>
                        <input type="text" placeholder="MM/YY" name='timeBar' onChange={handleFormChange}/>
                    </div>
                    <div className={`${styles.inputGroup} ${styles.cvc}`}>
                        <div className={styles.inputLable}>CVC / CCV</div>
                        <input type="text" placeholder="123" name='cvc' onChange={handleFormChange}/>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default Step3