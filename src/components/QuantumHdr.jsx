import React from 'react'
import QuantumHdrImg from '../assets/103_frame_29.png'

const QuantumHdr = () => {
  return (
    <div className="py-10 bg-gradient-to-t from-white/10 to-transparent">
          <h1 className="text-white text-4xl font-bold text-center py-8">
            Quantum HDR technology
          </h1>
          <p className="text-slate-500 text-lg text-center py-4">
            Boasting the industry’s best picture quality engine, The Wall utilises advanced HDR picture refinement technologies to render optimum peak brightness and
contrast in every single scene.
          </p>
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 py-8">
            <img
              src={QuantumHdrImg}
              alt="Quantum HDR"
              className="w-full m-auto"
            />
          </div>
        </div>
  )
}

export default QuantumHdr