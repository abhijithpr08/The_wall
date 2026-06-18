import React from 'react'
import BlackSealImage from '../assets/48_group_19.png' 

const BlackSeal = () => {
  return (
    <div className='py-10 bg-gradient-to-t from-white/10 to-transparent'>
        <h1 className='text-white text-4xl font-bold text-center py-8'>Black Seal technology</h1>
        <p className='text-slate-500 text-lg text-center py-4'>
            The fusion of an exceptionally black base with specialised Black Seal Technology, delivers deep black levels for intense contrast and immaculate detail.
        </p>
        <div className='w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 py-8'>
            <img
                src={BlackSealImage}
                alt="Black Seal"
                className='w-full m-auto'
            />
        </div>
    </div>
  )
}

export default BlackSeal