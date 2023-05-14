
import Resgister from './Register/Resgister'
import styles from './Main.module.scss'
import  '../../assests/styles/reset.module.scss'
import Cart from './Cart/Cart'


const Main = () => {
    return(
        <main className={styles.siteMain} >
            <div className={styles.mainContainer}>
                <Resgister />
                <Cart />
            </div>
        </main>
        
    )
}

export default Main