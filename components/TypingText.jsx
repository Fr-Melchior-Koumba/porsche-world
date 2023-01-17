'use client';


const TypingText = ({ title, textStyles }) => {
  return (
    <p
        className={`font-normal text-[14px] text-secondary-white ${textStyles}`}>
        {title}
    </p>

  )
}

export default TypingText