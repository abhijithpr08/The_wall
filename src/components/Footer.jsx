import React from 'react'
import InstaIcon from '../assets/299_vector.png'
import Fb from '../assets/300_vector.png'
import LinkedIn from '../assets/301_vector.png'

const Footer = () => {
  return (
    <div className='h-80 flex flex-col items-center justify-center gap-20'>
        <div className='flex items-end justify-end w-full text-white pr-10'>
            <div className='flex gap-4'>
                <img src={InstaIcon} alt="Instagram" />
                <img src={Fb} alt="Facebook" />
                <img src={LinkedIn} alt="LinkedIn" />
            </div>
        </div>
        <div className='text-center text-5xl text-white font-bold'>The wall</div>
        <div className='flex items-center space-y-2 text-sm text-white'>
            <ul className='flex text-3xl font-semibold space-x-25'>
                <li>Home</li>
                <li>Features</li>
                <li>Products</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer