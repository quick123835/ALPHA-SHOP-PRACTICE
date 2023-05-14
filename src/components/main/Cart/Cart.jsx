import {ReactComponent as Plus } from '../../../assests/icons/plus.svg'
import { ReactComponent as Minus } from '../../../assests/icons/minus.svg'
import ProductItem from './ProductItem/ProductItem'
import styles from './Cart.module.scss'

const products = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ]

const Cart = () => {
    return(
        <>
            <section className={styles.cartContainer}>
                <h3 className={styles.cartTitle}>購物籃</h3>
                <section className={styles.productList} data-total-price="0">
                    {products.map(product => {
                        return <ProductItem key={product.id} info={product} />
                    })}
                </section>
                <section className={`${styles.cartInfo} ${styles.shipping}`}>
                    <div className={styles.text}>運費</div>
                    <div className={styles.price}></div>
                </section>
                <section className={`${styles.cartInfo} ${styles.total}`}>
                    <div className={styles.text}>小計</div>
                    <div className={styles.price}></div>
                </section>
            </section>

        </>
    )
}

export default Cart