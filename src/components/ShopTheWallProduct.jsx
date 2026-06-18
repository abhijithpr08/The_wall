import React from 'react'
import Button from './ui/Button'

const ShopTheWallProduct = ({ image, title, text, buttonText = 'Buy Now', buttonColor = 'white', buttonVariant = 'outline', className = '' }) => {
  return (
    <div className={`group overflow-hidden p-4 transition hover:-translate-y-1 lg:p-6 ${className}`}>
      <div className='overflow-hidden'>
        <img src={image} alt={title} className='h-[140px] w-80 transition duration-500 group-hover:scale-105' />
      </div>
      <div className='mt-6 text-center'>
        <h3 className='w-[70%] m-auto text-sm font-semibold text-black'>{title}</h3>
      </div>
      <div className='mt-6 flex justify-center'>
        <Button text={buttonText} color={buttonColor} variant={buttonVariant} />
      </div>
    </div>
  )
}

export default ShopTheWallProduct
