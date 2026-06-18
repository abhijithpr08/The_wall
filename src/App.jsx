import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FrameImg from './assets/38_frame_17.png'
import BlackSeal from './components/BlackSeal'
import UltraChroma from './components/UltraChroma'
import AiUpscaling from './components/AiUpscaling'
import QuantumHdr from './components/QuantumHdr'
import Download from './components/ui/Download'
import FeaturedContent from './components/FeaturedContent'
import { featuredContentData } from './data/contentData'

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
    <div className='bg-black'>
      <Navbar top={navTop} blur={navBlur} />
      <Hero ref={heroRef} />
      <img src={FrameImg} alt="Decoration" className='w-full'/>
      <BlackSeal/>
      <UltraChroma/>
      <AiUpscaling/>
      <QuantumHdr/>
      <FeaturedContent items={featuredContentData} />
      {/* <div className="flex justify-center py-8">
        <Download color="white" variant="outline" />
      </div> */}
    </div>
  )
}

export default App