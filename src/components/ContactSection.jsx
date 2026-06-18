import React from 'react'
import Button from './ui/Button'
import MailIcon from '../assets/289_tabler_mail.png'
import PhoneIcon from '../assets/286_clarity_mobile_solid.png'
import LocationIcon from '../assets/283_ep_location.png'

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold">Get In Touch</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Get In Touch With Our Sales Team To Discuss Tailored Solutions For Your Business. You Can Call (866) 726-4249 To Talk To An Expert Now, Or Use The Form Below To Submit Your Requests.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src={MailIcon} alt="Email" className="h-6 w-6" />
                <span className="text-sm text-slate-300">lorem ipsum @ gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <img src={PhoneIcon} alt="Phone" className="h-6 w-6" />
                <span className="text-sm text-slate-300">888 55 6 11 23</span>
              </div>
              <div className="flex items-center gap-4">
                <img src={LocationIcon} alt="Location" className="h-6 w-6" />
                <span className="text-sm text-slate-300">Lorem Ipsum</span>
              </div>
            </div>
          </div>

          <div className=" border border-white p-8 text-slate-900 shadow-2xl shadow-black/20"> 
            <h3 className="text-4xl text-white font-bold">Messege</h3>
            <div className="mt-8 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Your Mail"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 outline-none focus:border-black"
              />
              <textarea
                rows={8}
                placeholder="Messege"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-sm text-slate-900 outline-none focus:border-black"
              />
            </div>
            <div className="mt-8">
              <Button text="Submit" color="white" variant="filled" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
