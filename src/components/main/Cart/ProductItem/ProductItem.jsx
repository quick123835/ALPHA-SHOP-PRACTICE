import {ReactComponent as Plus } from '../../../../assests/icons/plus.svg'
import { ReactComponent as Minus } from '../../../../assests/icons/minus.svg'
import styles from './ProductItem.module.scss'



const ProductItem = ({info}) => {
    return(
        <div className={styles.productContainer} data-count="0" data-price="3999">
            <img className={styles.imgContainer} src={info.img} />
            <div className={styles.productInfo}>
                <div className={styles.productName}>{info.name}</div>
                <div className={styles.productControlContainer}>
                    <div className={styles.productControl}>
                        <Minus />
                        <span className={styles.productCount}></span>
                        <Plus />
                    </div>
                </div>
                <div className={styles.price}></div>
            </div>
        </div>
    )
}

export default ProductItem