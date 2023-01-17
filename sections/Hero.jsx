'use client';

import { motion } from "framer-motion";
import styles from '../styles';


const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <div className={`${styles.innerWidth} mx-auto flex flex-col`}>

      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount : 0.5}}
           transition={{  type: 'tween', ease: 'easeIn'}}
           variants={{
             hidden: { opacity: 0, y: 20},
             visible: { opacity: 1, y: 0}
           }}
          className={styles.heroHeading}>
          PorscheWorld
        </motion.h1>
      </div>

      <div
        className="relative w-full md:mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img src="/cover.jpg" alt="cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"/>
          <a href="explore">
            <div className="w-full flex justify-end sm:mt-[-80px] -mt-[50px] pr-[40px] relative z-10">
              <img src="/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"/>
            </div>
          </a>

      </div>

      </div>
    </section>
  )
}

export default Hero