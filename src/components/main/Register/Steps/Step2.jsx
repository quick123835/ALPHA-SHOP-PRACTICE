import { useFreightContext } from '../../../../contexts/FreightContext'
import { useMainContext } from '../../../../contexts/MainContext'
import { useCartContext } from '../../../../contexts/cartContext'
import styles from './Step2.module.scss'

const Step2 = () => {
    const mainInfo = useMainContext().current
    const setFreight = useFreightContext().setFreight
    const setTotal = useCartContext().setTotal
    const total = useCartContext().total
    const freight = useFreightContext().freight

    const handleFreeChange = (e) => {
        setFreight(e.target.value)
        if(total>=500){
            setTotal(total-500)
        }
        if(mainInfo.total>500){
            mainInfo.total-=500
        }
    }

    const handleDhlChange = (e) => {
        setFreight(e.target.value)
        setTotal(total+500)
        mainInfo.total+=500
    }


    return(
        <form className={styles.col} data-phase="shipping">
            <h3 className={styles.formTitle}>運送方式</h3>
            <section className={styles.formBody}>
                <label className={styles.radioGroup} data-price="0">
                    <input id="shipping-standard" type="radio" name="shipping" value='0' defaultChecked onChange={handleFreeChange}/>
                    <div className={styles.radioInfo}>
                        <div className={styles.col}>
                            <div className={styles.text}>標準運送</div>
                            <div className={styles.price}>免費</div>
                        </div>
                        <div className={styles.period}>約 3~7 個工作天</div>
                    </div>
                    <div className={styles.radioBoxBorder}></div>
                </label>
                <label className={styles.radioGroup} data-price="500">
                    <input id="shipping-dhl" type="radio" name="shipping" value='500' onChange={handleDhlChange} />
                    <div className={styles.radioInfo}>
                        <div className={styles.col}>
                            <div className={styles.text}>DHL 貨運</div>
                            <div className={styles.price}>$500</div>
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
