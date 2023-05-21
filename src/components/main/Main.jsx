
import Resgister from './Register/Resgister'
import styles from './Main.module.scss'
import  '../../assests/styles/reset.module.scss'
import Cart from './Cart/Cart'
import  { CartProvider } from '../../contexts/cartContext'
import { MainProvider } from '../../contexts/MainContext'
import { FreightProvider } from '../../contexts/FreightContext'


const Main = () => {
    return(
        <MainProvider>
            <main className={styles.siteMain} >
                <div className={styles.mainContainer}>
                    <FreightProvider>
                    <CartProvider >
                        <Resgister />
                        <Cart />
                        </CartProvider>                        
                    </FreightProvider>

                </div>
            </main>
        </MainProvider>

        
    )
}

export default Main