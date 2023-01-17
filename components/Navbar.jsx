'use client';

import { motion } from "framer-motion";
import styles from '../styles';


const Navbar = () => {
  return (
    <motion.nav 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount : 0.5}}
      transition={{ delay: 0.2, duration: 0.5}}
      variants={{
        hidden: { opacity: 0, x: -50},
        visible: { opacity: 1, x: 0}
      }}
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain"/>
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">PorscheWorld</h2>
      </div>
    </motion.nav>
  )
}

export default Navbar