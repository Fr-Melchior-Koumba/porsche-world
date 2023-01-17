'use client';


import styles from '../styles';
import { StartSteps, TitleText, TypingText } from '../components';
import { startingFeatures } from '../constants';


const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
        <div
          className={`flex-1 ${styles.flexCenter}`}>
          <img src="/getStarted1.svg" alt="getStarted" className='w-[90%] h-[90%] object-contain' />

        </div>
        <div
          className="flex-[0.75] flex justify-center flex-col">
          <TypingText title ="| travail" />
          <TitleText title={<>Commander votre véhicule en un click</>} />
          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
            {startingFeatures.map((feature, index) => (
              <StartSteps 
              key={feature}
              number={index + 1}
              text={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted