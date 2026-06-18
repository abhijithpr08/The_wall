import React from 'react'

const Button = ({
  text = 'Buy Now',
  color = 'black',
  variant = 'outline',
  className = '',
  ...props
}) => {
  const isWhite = color === 'white'
  const base = 'inline-flex items-center justify-center rounded-xl border px-10 py-2 text-sm font-semibold transition duration-200'

  const styleClasses = variant === 'filled'
    ? isWhite
      ? 'bg-white text-black border-white hover:bg-white/90'
      : 'bg-black text-white border-black hover:bg-slate-900'
    : isWhite
      ? 'bg-transparent text-white border-white hover:bg-white/10'
      : 'bg-transparent text-black border-black hover:bg-black/10'

  return (
    <button type="button" className={`${base} ${styleClasses} ${className}`} {...props}>
      {text}
    </button>
  )
}

export default Button
