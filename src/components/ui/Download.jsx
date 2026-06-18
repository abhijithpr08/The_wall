import React from 'react'

const Download = ({
  children = 'Download Brochure',
  color = 'white',
  variant = 'outline', // 'outline' | 'filled'
  className = '',
  ...props
}) => {
  const isWhite = color === 'white'
  const base = 'inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium transition duration-200 gap-3'

  const variantClasses =
    variant === 'filled'
      ? isWhite
        ? 'bg-white text-black border-white hover:bg-white/90'
        : 'bg-black text-white border-black hover:bg-slate-900'
      : isWhite
      ? 'bg-transparent text-white border-white hover:bg-white/10'
      : 'bg-transparent text-black border-black hover:bg-black/10'

  return (
    <button
      type="button"
      className={`${base} ${variantClasses} ${className}`}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span>{children}</span>
    </button>
  )
}

export default Download
