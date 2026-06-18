import React from 'react'
import Button from './ui/Button'
import resaleImage from '../assets/237_group_18.png'
import bulletIcon from '../assets/262_polygon_7.png'

const ResaleSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-t from-white/10 to-transparent text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl">For Resale</h2>
        </div>

        <div className="mt-14 flex flex-col items-center gap-12">
          <div className="relative overflow-hidden lg:max-w-5xl">
            <img
              src={resaleImage}
              alt="For Resale"
              className="h-105 w-full object-cover transition-transform duration-700 ease-out hover:scale-y-105"
            />
          </div>

          <div className="rounded-4xl w-full flex flex-col justify-center items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white">Benefits</h3>
              <ul className="grid gap-4 space-x-20 text-sm text-slate-300 sm:grid-cols-1 lg:grid-cols-2">
                {[
                  'Tailored Solutions And Support Services',
                  'Strategic Marketing And Branding Opportunities',
                  'Best Discounted Price',
                  'Exclusive Access To Cutting-Edge Technology'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <img src={bulletIcon} alt="bullet" className="mt-1 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <Button text="Contact us" color="white" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResaleSection
