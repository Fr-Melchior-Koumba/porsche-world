'use client';


import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from '../styles';
import { fadeIn, staggerContainer } from "../util/motion";

const About = () => {
  return (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Porsche World" textStyles="text-center" />
    
  
      <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
      className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        <span className="font-extrabold text-white">Porsche World</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
      </motion.p>

      <motion.img variants={fadeIn('up', 'tween', 0.3, 1)}
      src="/arrow-down.svg" alt="arrow down" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </motion.div>
  </section>
  )
}

export default About