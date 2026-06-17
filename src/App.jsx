import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='bg-slate-950 h-screen'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default App