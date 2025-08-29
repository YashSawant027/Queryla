import React from 'react'
import no1 from './assets/no1.png'

function Hero() {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-auto grid place-items-center z-30'>
        <img src={no1} alt="no1" className='md:w-50 w-60 h-auto mb-8' />
        <h1 className='text-white font-bold text-[35px] text-center'>Convert Text to SQL with <br /> AI <u>in seconds</u></h1>
        <p className='text-white text-center mt-7 '>Transform Natural Language into Powerful Database Queries. Our AI-powered tool converts your plain English instructions into precise SQL and NoSQL queries.</p>
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