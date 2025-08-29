import React from 'react'

function Hero() {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-auto grid place-items-center z-30'>
            <h1 className='text-white font-bold text-[35px] text-center'>Convert Text to SQL with <br/> AI <u>in seconds</u></h1>
            <p className='text-white text-center mt-7 text-bold'>Same time by letting your LLM automatic SQL generator write your SQL code for you. Effortlessly generator optimized SQL queries using plain english text</p>
            <button className="relative text-white font-bold mt-7 z-30 border border-white/20 rounded-xl backdrop-blur-lg cursor-pointer py-3 px-7">
  Try now

  {/* Ping dot */}
  <span className="absolute -top-1 -right-1 flex h-3 w-3">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-500 opacity-75"></span>
    <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500"></span>
  </span>
</button>

        </div>
    </div>
  )
}

export default Hero