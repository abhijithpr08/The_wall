import React from 'react'
import ContentCard from './ContentCard'

const FeaturedContent = ({ items = [] }) => {
  if (!items || items.length === 0) {
    return null
  }

  return (
    <div className='bg-white'>
      {items.map((item, index) => (
        <ContentCard
          key={index}
          image={item.image}
          title={item.title}
          content={item.content}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  )
}

export default FeaturedContent
