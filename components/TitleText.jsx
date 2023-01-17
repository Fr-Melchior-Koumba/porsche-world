'use client';


import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from "../util/motion";


const TitleText = ({ title, textStyles}) => {
  return (
    <motion.h2 variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
        {title}
    </motion.h2>
  )
}

export default TitleText