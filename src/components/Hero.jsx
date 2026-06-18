import React from "react";
import heroImage from "../assets/4_rectangle.png";
import bottomImage from "../assets/5_rectangle_34.png";
import feature1 from "../assets/18_pexels_ekamelev_8169649_1.png";
import feature2 from "../assets/21_pexels_pixabay_163235_1.png";
import feature3 from "../assets/24_pexels_tracehudson_2896668_1.png";
import feature4 from "../assets/27_florida_map_acrylic_1125_1.png";

const features = [
  {
    title: "Micro LED Technology",
    description: "Witness an unmatched image presentation on a whole new scale",
    image: feature1,
  },
  {
    title: "One-of-a-kind Visuals",
    description:
      "Experience pure visual innovation derived from best-in-class picture technologies",
    image: feature2,
  },
  {
    title: "Infinity Design",
    description:
      "Choose what you want to see from a diverse selection of entertainment and lifestyle content",
    image: feature3,
  },
  {
    title: "Total UX",
    description:
      "Make a statement with subtle refinement in a seamless, sophisticated design",
    image: feature4,
  },
];

function HeroFeaturesInline() {
  return (
    <section className="py-6 sm:py-8 md:py-12 px-2 sm:px-4 md:px-6">
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-8">Key Features</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl border border-gray-300 h-32 sm:h-40 md:h-48 lg:h-60 xl:h-80 group">
            <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute bottom-0 left-0 w-full bg-black/45 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4">
              <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-light text-center leading-tight line-clamp-2">{feature.title}</h3>
              <p className="text-gray-200 text-center mt-0.5 sm:mt-1 md:mt-2 text-[10px] sm:text-xs md:text-sm leading-relaxed line-clamp-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Hero = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative h-[900px] md:h-[1100px] lg:h-[1700px] overflow-hidden">
      <img
        src={heroImage}
        alt="Hero"
        className="absolute h-auto w-full object-cover"
      />

      <div className="absolute inset-x-0 top-30 md:top-30 lg:top-35 z-20 px-4 text-center text-white">
        <h1 className="text-[38px] md:text-[56px] lg:text-[80px] font-bold leading-tight">
          Samsung the Wall Series
        </h1>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[22px] md:text-4xl lg:text-4xl">
          <div>110 2K</div>
          <div className="border-x-2 px-4 md:px-8">146 2K</div>
          <div>146 4K</div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-70 md:top-65 lg:top-150 z-20 flex flex-col gap-6 md:gap-8 px-4 text-center text-white">
        <h1 className="text-[26px] md:text-[34px] lg:text-[42px] font-light">
          Offer Price :{" "}
          <span className="text-[32px] md:text-[46px] lg:text-[55px] font-bold">
            34399 AED
          </span>
        </h1>
        <div>
          <button className="text-[16px] md:text-2xl rounded-3xl border-2 border-white px-6 py-3 md:px-12 md:py-3 font-light transition hover:bg-white/10">
            Buy Now
          </button>
        </div>
        <p className="mt-6 text-[20px] md:text-[28px] lg:text-[38px] font-light">
          World's first MICROLED technology
        </p>
      </div>

      <div className="relative lg:top-0 w-full">
        <img
          src={bottomImage}
          alt="bottom decoration"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 md:bottom-0 lg:bottom-70 z-30 mx-auto w-full">
        <HeroFeaturesInline />
      </div>
    </div>
  );
});

export default Hero;
