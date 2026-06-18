import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  const heroRef = useRef(null)
  const [navTop, setNavTop] = useState(40)
  const [navBlur, setNavBlur] = useState(false)
  const initialGap = 40

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    let frameId = 0
    const onScroll = () => {
      if (frameId) return
      frameId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const heroHeight = rect.height || window.innerHeight
        const scrolled = Math.min(1, Math.max(0, (heroHeight - rect.bottom) / heroHeight))
        const clamped = Math.max(0, 1 - scrolled * 2)
        setNavTop(initialGap * clamped)
        setNavBlur(scrolled >= 0.5)
        frameId = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className='bg-slate-950'>
      <Navbar top={navTop} blur={navBlur} />
      <Hero ref={heroRef} />
    </div>
  )
}

export default App