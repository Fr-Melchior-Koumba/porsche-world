'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, carVariants } from '../util/motion';
import { NewFeatures, TitleText, TypingText } from '../components';
import { newFeatures } from '../constants';



const WhatNews = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
       
        <motion.div 
          variants={fadeIn('right', 'tween', 0.2, 0.6)}
          className="flex-[0.75] flex justify-center flex-col"
        >
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
        
        </motion.div>
        <motion.div
          variants={carVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img src="/getStarted2.svg" alt="getStarted" className='w-[90%] h-[90%] object-contain' />

        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatNews