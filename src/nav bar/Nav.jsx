import React, { useRef, useState } from 'react'
import Lottie from 'lottie-react'
import logo from './navAssets/QLogo.png'
import arrowAnim from './arrow.json' // Purple arrow JSON

let nav_items = [
  { title: 'Home' },
  { title: 'Docs' },
  { title: 'Support' },
]

function Nav() {
  const arrowRef = useRef();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 py-3">
      <div className="relative flex items-center justify-between px-5 h-16">
        {/* Logo on the left */}
        <div className="flex-shrink-0">

        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 py-2 px-4 border-white/20 border rounded-xl backdrop-blur-lg">
          <ul className="z-30 flex gap-10 items-center backdrop-blur-md">
            {nav_items.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-white font-semibold cursor-pointer hover:text-purple-300 transition"
                onMouseEnter={() => {
                  if (item.title === 'Support') {
                    arrowRef.current?.play();
                  }
                }}
                onMouseLeave={() => {
                  if (item.title === 'Support') {
                    arrowRef.current?.stop();
                  }
                }}
              >
                {item.title}
                {item.title === 'Support' && (
                  <div className="w-6 h-6 ml-2">
                    <Lottie
                      lottieRef={arrowRef}
                      animationData={arrowAnim}
                      loop={true}
                      autoplay={false}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-5 flex flex-col justify-between items-center"
        >
          <span
            className={`h-1 w-5 bg-white rounded-lg transform transition-all duration-300 ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`h-1 w-5 bg-white rounded-lg transition-all duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-1 w-5 bg-white rounded-lg transform transition-all duration-300 ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-3 absolute top-16 right-0 w-full bg-white/10 backdrop-blur-lg border-t border-white/20 shadow-lg p-5">
          <ul className="flex flex-col gap-4">
            {nav_items.map((item, index) => (
              <li
                key={index}
                className="flex items-center text-white font-semibold cursor-pointer hover:text-purple-300 transition"
                onClick={() => setOpen(false)}
              >
                {item.title}
                {item.title === 'Support' && (
                  <div className="w-6 h-6 ml-2">
                    <Lottie
                      lottieRef={arrowRef}
                      animationData={arrowAnim}
                      loop={true}
                      autoplay={false}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nav
