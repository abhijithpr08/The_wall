import React from 'react'
import img5 from '../assets/280_frame_50.png'
import img1 from '../assets/272_frame_46.png'
import img2 from '../assets/274_frame_47.png'
import img3 from '../assets/276_frame_48.png'
import img4 from '../assets/278_frame_49.png'
// import mainImg from '../assets/237_group_18.png'
import mainImg from '../assets/270_frame_45.png'

const GreatnessSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Greatness In Any Space</h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Sophisticated Both Inside And Out, The Wall Is A Visual Complement For Your Space.
          </p>
        </div>

        <div className="grid gap-3 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="grid gap-4">
            <div className="overflow-hidden bg-slate-900 shadow-2xl shadow-white/5 transition-transform duration-500 hover:-translate-y-1">
              <img src={img1} alt="Greatness 1" className="h-56 w-full object-cover" />
            </div>
            <div className="overflow-hidden bg-slate-900 shadow-2xl shadow-white/5 transition-transform duration-500 hover:-translate-y-1">
              <img src={img2} alt="Greatness 2" className="h-56 w-full object-cover" />
            </div>
          </div>

          <div className="overflow-hidden bg-slate-900 shadow-2xl shadow-white/10 transition-transform duration-700 hover:-translate-y-1">
            <img src={mainImg} alt="Greatness Main" className="h-115 w-full object-cover" />
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="overflow-hidden bg-slate-900 shadow-2xl shadow-white/5 transition-transform duration-500 hover:-translate-y-1">
            <img src={img3} alt="Greatness 3" className="h-40 w-full object-cover" />
          </div>
          <div className="overflow-hidden bg-slate-900 shadow-2xl shadow-white/5 transition-transform duration-500 hover:-translate-y-1">
            <img src={img4} alt="Greatness 4" className="h-40 w-full object-cover" />
          </div>
          <div className="overflow-hidden bg-slate-900 shadow-2xl shadow-white/5 transition-transform duration-500 hover:-translate-y-1">
            <img src={img5} alt="Greatness 5" className="h-40 w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreatnessSection
