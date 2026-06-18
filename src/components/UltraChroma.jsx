import React from "react";
import UltraChromaImg from "../assets/61_group_20.png";

const UltraChroma = () => {
  return (
    <div className="py-10 bg-gradient-to-t from-white/10 to-transparent">
      <h1 className="text-white text-4xl font-bold text-center py-8">
        Ultra Chroma technology
      </h1>
      <p className="text-slate-500 text-lg text-center py-4">
        The Wall’s inherent colour qualities produce vibrant and natural colour
        for an awe-inspiring visual experience, bringing details to life like
        never before.{" "}
      </p>
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 py-8">
        <img
          src={UltraChromaImg}
          alt="Ultra Chroma"
          className="w-full m-auto"
        />
      </div>
    </div>
  );
};
export default UltraChroma;
