import React from 'react'
import heroImage from '../assets/4_rectangle.png'
import bottomImage from '../assets/5_rectangle_34.png'

const Hero = () => {
  return (
    <div>
        <img src={heroImage} alt="Hero" className="w-full h-auto absolute" />
        <div className="absolute w-full z-20 top-55 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className='text-[80px] font-bold'>Samsung the Wall Series</h1>
            <div className="flex items-center text-4xl justify-center gap-5 mt-4">
                <div>110 2K</div>
                <div className='border-x-2 px-8'>146 2K</div>
                <div>146 4K</div>
            </div>
        </div>
        <div className='absolute flex flex-col gap-10 justify-center w-full z-20 text-white top-267 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-[42px] font-light'>Offer Price : <span className='text-[55px] font-bold'>34399 AED</span></h1>
            <div>
                <button className='text-2xl px-15 py-2 border-2 rounded-4xl font-light'>Buy Now</button>
            </div>
            <p className='mt-10 text-[38px] font-light'>World's first MICROLED technology</p>
        </div>
        <img src={bottomImage} alt="bottom decoration" className="w-full h-auto relative bottom-0" />
    </div>
  )
}

export default Hero