import React from 'react'
import logo from './navAssets/QLogo.png'


let nav_items = [
    {title:'Home'},
    {title:'Docs'},
    {title:'Contact'}
]

function P() {
  return (
    <div className='fixed top-0 left-0 w-full backdrop-blur-md h-[70px]'>
        <div className='relative flex justify-between items-center px-4'>
            <div>
                <img src={logo} alt="logo" className='h-25 w-auto cursor-pointer'/>
            </div>
            <div>
                <ul className='flex gap-10 items-center'>
                    {nav_items.map((i,n)=>{
                        <li className='text-white cursor-pointer hover:text-purple-200'>{i.title}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default P