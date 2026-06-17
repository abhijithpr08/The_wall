import React from 'react'

const Logo = ({ className = '', style = {} }) => {
  return (
    <div className={className} style={{ color: className ? undefined : 'black', fontWeight: 'bold', fontFamily: 'var(--font-montserrat)', ...style }}>
      The Wall
    </div>
  )
}

export default Logo