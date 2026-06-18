import React from 'react'
import Download from './ui/Download'

const ContentCard = ({ image, title, content, reversed = false }) => {
  return (
    <div className='py-12 px-4 md:px-8 lg:px-16'>
      <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center max-w-6xl mx-auto`}>
        {/* Image Section */}
        <div className='flex-1'>
          <img 
            src={image} 
            alt={title}
            className='w-full rounded-lg object-cover'
          />
        </div>

        {/* Content Section */}
        <div className='flex-1'>
          <h2 className='text-black text-3xl md:text-4xl font-bold mb-4'>
            {title}
          </h2>
          <p className='text-black text-base md:text-lg mb-6 leading-relaxed'>
            {content}
          </p>
          <Download color="black" variant="outline" />
        </div>
      </div>
    </div>
  )
}

export default ContentCard
