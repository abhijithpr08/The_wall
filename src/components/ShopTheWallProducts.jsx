import React from 'react'
import ShopTheWallProduct from './ShopTheWallProduct'

const ShopTheWallProducts = ({ products = [] }) => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>Shop The Wall Products</h2>
        </div>

        <div className='mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map((product, index) => (
            <ShopTheWallProduct
              key={index}
              className={index % 3 !== 0 ? 'lg:border-l lg:border-slate-300/40 lg:pl-6' : ''}
              image={product.image}
              title={product.title}
              buttonText={product.buttonText}
              buttonColor={product.buttonColor}
              buttonVariant={product.buttonVariant}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopTheWallProducts
