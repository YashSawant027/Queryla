import React from 'react'
import './App.css'
import Nav from './nav bar/Nav'
import Hero from './hero';
import C from './assets/C';
import logo from './nav bar/navAssets/QLogo.png'
import P from './nav bar/P';

function App() {
  const stars = Array.from({ length: 50 });

  return (
    <div className='w-full h-screen bg-[#08080f]'>
      
      <img src={logo} alt="Logo" className="h-25 w-auto cursor-pointer absolute top-0 left-5 z-30" />
      <div className="relative flex flex-col w-full h-screen bg-[#08080f] overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          {stars.map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <div className="z-20">
          <Nav />
        </div>

        <div className="flex flex-1 items-center justify-center z-10">

          <div className="relative w-[420px] h-[350px]">
            <div className="absolute inset-0 rounded-full bg-fuchsia-900/60 blur-[95px] animate-move1"></div>
            <div className="absolute inset-0 rounded-full bg-emerald-950/60 blur-[75px] animate-move2"></div>
            <div className="absolute inset-0 rounded-full bg-blue-950/60 blur-[95px] animate-move3"></div>
            <Hero />
            <div className="relative z-10 flex items-center justify-center h-full text-white text-2xl font-bold">

            </div>
          </div>
        </div>
      </div>
      <C />
    </div>
  )
}

export default App
