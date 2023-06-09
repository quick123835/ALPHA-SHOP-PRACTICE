import styles from './Progress.module.scss'
import Check from '../../../../assests/icons/check.svg'

const Progress = ({label , text , src , step}) => {
    return(
        <span className={styles.progressGroup} data-phase="address">
            <span className={styles.progressIcon}>
              <img src={src} />
            </span>
            <span className={styles.progressLabel}>{label}</span>
        </span>
    )
}


export default Progress