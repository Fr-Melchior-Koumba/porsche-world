'use client';

import styles from '../styles';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => {
  return (
  <section className={`${styles.paddings} relative z-10`}>
    <div 
      
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| Tous savoir" textStyles="text-center"/>
      <TitleText title="Tous savoir sur nos sorties." textStyles="text-center"/>
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Insights