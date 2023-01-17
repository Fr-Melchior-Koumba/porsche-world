'use client';


import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';



const WhatNews = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div 
       
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
       
        <div
          className="flex-[0.75] flex justify-center flex-col">
          <TypingText title ="| Quelles sont les news ?" />
          <TitleText title={<>À propos de Porsche World.</>} />
            <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
            {newFeatures.map((feature) => (
              <NewFeatures 
              key={feature.title}
              {...feature}
              />
            ))}
          </div>
        
        </div>
        <div
          
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img src="/getStarted2.svg" alt="getStarted" className='w-[90%] h-[90%] object-contain' />

        </div>
      </div>
    </section>
  )
}

export default WhatNews