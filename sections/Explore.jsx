'use client';

import { useState } from "react";
import styles from '../styles';
import { ExploreCard, TitleText, TypingText } from "../components";
import { exploreCar } from "../constants";


const Explore = () => {

  const [active, setActive] = useState('car-2');

  return (
    <section className={`${styles.paddings} `} id="explore">
      <div 
  
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
        
      <TypingText title="| Le Stock" textStyles="text-center" />
      <TitleText title={<>Choisissez le modèle  <br className="md:block hidden" /> vous convient.</>} textStyles="text-center" />

      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {exploreCar.map((car, index) => (
          <ExploreCard key={car.id} {...car} index={index} active={active} handleClick={setActive} />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Explore