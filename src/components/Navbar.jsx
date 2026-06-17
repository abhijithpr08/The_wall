import React from 'react'
import Logo from './ui/Logo'

const Navbar = ({ top = 40   }) => {
  return (
    <div
      className="fixed w-screen z-50 flex px-16 bg-white"
      style={{ top: `${top}px` }}
    >
      <div className="flex h-18 w-full items-center justify-between border border-white/10">
        <Logo className= "text-lg" />
        <div className="flex gap-18 text-lg">
          <a href="#about">
            About
          </a>
          <a href="#features">
            Features
          </a>
          <a href="#applications">
            Applications
          </a>
          <a href="#products">
            Products
          </a>
          <a href="#resale">
            Resale
          </a>
        </div>
        <div className="">
          <button className="bg-black px-10 py-2 rounded-4xl text-white">
            Contact
          </button> 
        </div>
      </div>
    </div>
  )
}

export default Navbar