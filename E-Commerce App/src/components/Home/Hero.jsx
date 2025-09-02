import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero Left Side */}
      <div className="flex w-full items-center justify-center py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="h-[2px] w-8 bg-[#414141] md:w-10"></p>
            <p className="text-sm font-medium md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="font-prata text-3xl leading-relaxed sm:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold md:text-base">SHOP NOW</p>
            <p className="h-[2px] w-8 bg-[#414141] md:w-10"></p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img className="w-full sm:w-1/2" src={assets.hero_img} alt="hero" />
    </div>
  );
};

export default Hero;
