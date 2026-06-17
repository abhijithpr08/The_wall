import React from 'react'
import Logo from './ui/Logo'

const Navbar = () => {
  return (
    <div
      className="fixed w-screen z-50 flex px-4 bg-white top-10"
    >
      <div className="flex h-16 w-full items-center justify-between border border-white/10">
        <Logo className= "text-lg" />
        <div className="flex gap-5 text-sm">
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
          <button className="bg-black px-7 py-2 rounded-4xl text-white">
            Contact
          </button> 
        </div>
      </div>
    </div>
  )
}

export default Navbar