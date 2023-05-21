import {ReactComponent as Plus } from '../../../../assests/icons/plus.svg'
import { ReactComponent as Minus } from '../../../../assests/icons/minus.svg'
import styles from './ProductItem.module.scss'
import {useState} from 'react'
import { useCartContext } from '../../../../contexts/cartContext'
import { useMainContext } from '../../../../contexts/MainContext'


const ProductItem = ({info , price}) => {
    const mainInfo = useMainContext().current
    const total = useCartContext().total
    const setTotal = useCartContext().setTotal
    const [count , setCount] = useState(0)

    const handlePlusClick = () => {
        setCount(count+1)
        setTotal(total + price)
        mainInfo.total+=(price)
    }

    const handleMinusClick = () => {
        if(count>0){
            setCount(count - 1)
            setTotal(total - price)
            mainInfo.total-=(price)
        }
    }


    return(
        <div className={styles.productContainer} data-count="0" data-price="3999">
            <img className={styles.imgContainer} src={info.img} />
            <div className={styles.productInfo}>
                <div className={styles.productName}>{info.name}</div>
                <div className={styles.productControlContainer}>
                    <div className={styles.productControl}>
                        <Minus onClick={handleMinusClick}/>
                        <span className={styles.productCount}>{count}</span>
                        <Plus onClick={handlePlusClick} />
                    </div>
                </div>
                <div className={styles.price}>${info.price}</div>
            </div>
        </div>
    )
}

export default ProductItem