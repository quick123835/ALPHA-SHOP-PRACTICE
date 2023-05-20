// import { ReactComponent as Num1 } from '../../../assests/icons/num1.svg'
import Num2 from '../../../assests/icons/num2.svg'
import Num3 from '../../../assests/icons/num3.svg'
import styles from './register.module.scss'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import Progress from './Progresses/Progress'
import Num1 from '../../../assests/icons/num1.svg'
import ProgressControl from './ProgressControl/ProgressControl'
import {useState} from 'react'


const Resgister = () => {
  const [step , setStep] = useState(1)

  const handleProgressNextClick = () => {
    setStep(step + 1)
  }

  const handleProgressPreClick = () => {
    if(step > 1){
      setStep(step - 1)
    }
  }

    return(
      <section  className={styles.registerContainer} data-phase="1" data-total-price="0">
        <h2 className={styles.registerTitle}>結帳</h2>
        <section className={styles.progressContainer}>
          <Progress 
            label='寄送地址'
            text='1'
            src={Num1}
          />
          <span  className={styles.progressBar} data-order="1"></span>
          <Progress 
            label='運送方式'
            text='2'
            src={Num2}
          />
          <span  className={styles.progressBar} data-order="2"></span>
          <Progress 
            label='付款資訊'
            text='3'
            src={Num3}
          />
        </section>
        <section className={styles.formContainer}>
          { step === 1 ? <Step1 /> : step === 2 ? <Step2/> : <Step3/>}
        </section>
        <ProgressControl 
          onNextClick={handleProgressNextClick}
          onPreClick={handleProgressPreClick}
          step={step}
        />
      </section>

    )
}



export default Resgister