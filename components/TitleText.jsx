'use client';

import { motion } from 'framer-motion';


const TitleText = ({ title, textStyles}) => {
  return (
    <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount : 0.5}}
        transition={{  type: 'tween', ease: 'easeIn'}}
        variants={{
          hidden: { opacity: 0, y: 20},
          visible: { opacity: 1, y: 0}
        }}
        className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
        {title}
    </motion.h2>
  )
}

export default TitleText