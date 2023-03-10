'use client';


import { TypingText } from "../components";
import styles from '../styles';


const About = () => {
  return (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <div 
        
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
        <TypingText title="| About Porsche World" textStyles="text-center" />
    
  
      <p
      className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'>
        <span className="font-extrabold text-white">Porsche World</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
      </p>

      <img
      src="/arrow-down.svg" alt="arrow down" className="w-[18px] h-[28px] object-contain mt-[28px]" />
    </div>
  </section>
  )
}

export default About