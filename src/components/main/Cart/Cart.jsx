import {ReactComponent as Plus } from '../../../assests/icons/plus.svg'
import { ReactComponent as Minus } from '../../../assests/icons/minus.svg'
import ProductItem from './ProductItem/ProductItem'
import styles from './Cart.module.scss'
import {useCartContext} from '../../../contexts/cartContext'
import { useFreightContext } from '../../../contexts/FreightContext'


const Cart = () => {
    const products  = useCartContext().productsInfo
    const total = useCartContext().total
    const freight = useFreightContext().freight
    return(
        <>
            <section className={styles.cartContainer}>
                <h3 className={styles.cartTitle}>購物籃</h3>
                <section className={styles.productList} data-total-price="0">
                    {products.map(product => {
                        return <ProductItem key={product.id} info={product} price={product.price} />
                    })}
                </section>
                <section className={`${styles.cartInfo} ${styles.shipping}`}>
                    <div className={styles.text}>運費</div>
                    <div className={styles.price}>${freight}</div>
                </section>
                <section className={`${styles.cartInfo} ${styles.total}`}>
                    <div className={styles.text}>小計</div>
                    <div className={styles.price}>${total}</div>
                </section>
            </section>

        </>
    )
}

export default Cart