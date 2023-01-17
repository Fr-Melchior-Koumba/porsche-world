'use client';


import styles from '../styles';
import { TitleText, TypingText } from '../components';

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div 
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="| Partout dans le monde" textStyles="text-center" />
        <TitleText title={(<>Plusieurs clients à travers le monde</>)} textStyles="text-center" />
        <div
          className='relative mt-[68px] flex w-full h0[550px]'>
          <img src="/map.png" alt="map" className='w-full h-full object-contain' />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-01.png" alt="people" className='w-full h-full' />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-02.png" alt="people" className='w-full h-full' />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-03.png" alt="people" className='w-full h-full' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default World