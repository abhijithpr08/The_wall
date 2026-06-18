import React, { useEffect, useState } from 'react'
import Logo from './ui/Logo'

const Navbar = ({ top = 40, blur = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
      <div
        className={`fixed inset-x-0 z-50 transition-all duration-200 ease-out ${blur ? 'bg-white/70 backdrop-blur-xl shadow-xl shadow-slate-950/20' : 'bg-white'} px-4 md:px-8 lg:px-16`}
        style={{ top: `${top}px` }}
      >
        <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between gap-4 b px-4 md:px-6 lg:px-0">
          <Logo className="text-base md:text-lg lg:text-xl" />

          <div className="hidden md:flex items-center gap-8 text-lg">
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#applications" className="transition hover:text-slate-900">Applications</a>
            <a href="#products" className="transition hover:text-slate-900">Products</a>
            <a href="#resale" className="transition hover:text-slate-900">Resale</a>
          </div>

          <div className="hidden md:flex">
            <button className="rounded-full bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-slate-900">
              Contact
            </button>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-slate-300/20 bg-white/95 px-3 py-2 text-sm font-medium text-slate-900 shadow-sm shadow-slate-950/10 transition hover:bg-slate-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        <div className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm transition-transform duration-400 ease-out ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="flex w-full max-w-md flex-col items-center gap-6 px-6">
            <a href="#about" className="w-full rounded-3xl bg-white/0 px-6 py-4 text-center text-2xl font-medium text-slate-900 transition hover:bg-slate-100">About</a>
            <a href="#features" className="w-full rounded-3xl bg-white/0 px-6 py-4 text-center text-2xl font-medium text-slate-900 transition hover:bg-slate-100">Features</a>
            <a href="#applications" className="w-full rounded-3xl bg-white/0 px-6 py-4 text-center text-2xl font-medium text-slate-900 transition hover:bg-slate-100">Applications</a>
            <a href="#products" className="w-full rounded-3xl bg-white/0 px-6 py-4 text-center text-2xl font-medium text-slate-900 transition hover:bg-slate-100">Products</a>
            <a href="#resale" className="w-full rounded-3xl bg-white/0 px-6 py-4 text-center text-2xl font-medium text-slate-900 transition hover:bg-slate-100">Resale</a>
            <button className="w-full rounded-3xl bg-black px-6 py-4 text-lg font-medium text-white transition hover:bg-slate-900">Contact</button>
            <button className="mt-4 text-sm text-slate-600" onClick={() => setMenuOpen(false)}>Close</button>
          </div>
        </div>
      </div>
  )
}

export default Navbar