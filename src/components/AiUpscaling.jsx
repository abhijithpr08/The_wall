import React from "react";
import AiUpscalingImg from "../assets/74_group_21.png";

const AiUpscaling = () => {
  return (
    <div className="py-10 bg-gradient-to-t from-white/10 to-transparent">
      <h1 className="text-white text-4xl font-bold text-center py-8">
        AI Upscaling technology
      </h1>
      <p className="text-slate-500 text-lg text-center py-4">
        An intuitive resolution-to-screen size adaption powered by the Quantum
        Processor Flex, delivers a perfect view of reality in any size for a
        truly immersive experience.{" "}
      </p>
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 py-8">
        <img
          src={AiUpscalingImg}
          alt="Ai Upscaling"
          className="w-full m-auto"
        />
      </div>
    </div>
  );
};

export default AiUpscaling;
