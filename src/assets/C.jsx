import React from 'react'

function C() {
  return (
    <div className="relative h-screen w-full bg-[#08080f]">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-[#08080f] to-transparent"></div>
      <h1 className="text-white relative z-10">hello world</h1>
    </div>
  )
}

export default C