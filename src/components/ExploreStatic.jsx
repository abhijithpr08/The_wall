import React from 'react'
import Button from './ui/Button'
import imgLeft from '../assets/270_frame_45.png'
import imgRight from '../assets/272_frame_46.png'

const ExploreStatic = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-800 mb-10">Explore Our Other Options</h2>

        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="flex flex-col items-center">
            <div className="explore-image-wrapper hover:scale-110 w-full max-w-3xl overflow-hidden shadow-lg">
              <img src={imgLeft} alt="The Wall (All-In-One-Series)" className="explore-image w-full object-cover" />
            </div>

            <div className="mt-6 text-center max-w-3xl">
              <h3 className="text-2xl font-bold text-slate-800 leading-snug">
                The Wall
                <span className="block">(All-In-One-Series)</span>
              </h3>
              <p className="mt-4 text-sm text-slate-500">Speaker And Control Unit In-Built</p>

              <ul className="mt-4 text-sm text-slate-500 space-y-1">
                <li>Variants Available:</li>
                <li>A) 110 And 146 Inches In 2K Resolution</li>
                <li>B) 110 And 146 Inches In 4K Resolution</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="explore-image-wrapper hover:scale-110 w-full max-w-3xl overflow-hidden shadow-lg">
              <img src={imgRight} alt="The Wall (Custom-In Wall Series)" className="explore-image w-full object-cover" />
            </div>

            <div className="mt-6 text-center max-w-3xl">
              <h3 className="text-2xl font-bold text-slate-800 leading-snug">
                The Wall
                <span className="block">(Custom-In Wall Series)</span>
              </h3>
              <p className="mt-4 text-sm text-slate-500">Speaker And Control Unit Sold Separately</p>
              <p className="mt-3 text-sm text-slate-500">Started With 250" Can Be Expanded To Your Imagination</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button text="Get Quote" color="black" variant="outline" />
        </div>
      </div>
    </section>
  )
}

export default ExploreStatic
