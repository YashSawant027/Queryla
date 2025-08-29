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
    <div className='w-full h-auto bg-[#08080f]'>
      
      {/* Logo */}
      <img 
        src={logo} 
        alt="Logo" 
        className="h-25 w-auto cursor-pointer absolute top-0 left-5 z-30" 
      />

      {/* Hero Section with Stars */}
      <div className="relative flex flex-col w-full h-screen bg-[#08080f] overflow-x-hidden">
        
        {/* Stars Background */}
        <div className="absolute inset-0 z-0">
          {stars.map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 50}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Navbar */}
        <div className="z-20">
          <Nav />
        </div>

        {/* Hero Content */}
        <div className="flex flex-1 items-center justify-center z-10 relative">
          <div className="relative md:w-[420px] w-[300px] h-[350px] grid place-items-center">
            <div className="absolute inset-0 rounded-full md:w-[420px] w-[200px] bg-fuchsia-600/60 blur-[95px] animate-move1"></div>
            <div className="absolute inset-0 rounded-full md:w-[420px] w-[200px] bg-blue-600/60 blur-[95px] animate-move3"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <Hero />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#08080f] z-20"></div>
        </div>
      </div>

      {/* Next Section */}
      <C />
    </div>
  )
}

export default App
