'use client';

import styles from '../styles';


const FeedBack = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div
           
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}>

      <div
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >

        <div className='feedback-gradient' />
          <div>
            <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[48px] leading-[36px] text-white'>Spyder</h4>
            <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>Founder Porsche World</p>
          </div>

          <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>

      </div>

      <div
        className='relative flex-1 flex justify-center items-center'>

        <img src="/car-11.jpg" alt="car" className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'/>

        <div
          className='lg:block hidden absolute -left-[10%] top-[3%]'>
          <img src="/stamp.png" alt="stamp" className='w-[155px] h-[155px] object-contain' />
        </div>
      </div>

      </div>
    </section>
  )
}

export default FeedBack