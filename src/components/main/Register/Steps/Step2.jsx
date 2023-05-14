import styles from './Step2.module.scss'

const Step2 = () => {
    return(
        <form className={styles.col} data-phase="shipping">
            <h3 className={styles.formTitle}>運送方式</h3>
            <section className={styles.formBody}>
                <label className={styles.radioGroup} data-price="0">
                    <input id="shipping-standard" type="radio" name="shipping"  checked/>
                    <div className={styles.radioInfo}>
                        <div className={styles.col}>
                            <div className={styles.text}>標準運送</div>
                            <div className={styles.price}></div>
                        </div>
                        <div className={styles.period}>約 3~7 個工作天</div>
                    </div>
                    <div className={styles.radioBoxBorder}></div>
                </label>
                <label className={styles.radioGroup} data-price="500">
                    <input id="shipping-dhl" type="radio" name="shipping" />
                    <div className={styles.radioInfo}>
                        <div className={styles.col}>
                            <div className={styles.text}>DHL 貨運</div>
                            <div className={styles.price}></div>
                        </div>
                        <div className={styles.period}>48 小時內送達</div>
                    </div>
                    <div className={styles.radioBoxBorder}></div>
                </label>
            </section>
        </form>
    )
}

export default Step2
