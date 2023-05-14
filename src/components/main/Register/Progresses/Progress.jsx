import styles from './Progress.module.scss'

const Progress = ({label , text , src}) => {
    return(
        <span className={styles.progressGroup} data-phase="address">
            <span class="progress-icon">
              <img src={src} />
            </span>
            <span class="progress-label">{label}</span>
        </span>
    )
}


export default Progress