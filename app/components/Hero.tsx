import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex justify-center mt-8">
      <div className="bg-blue-600 rounded-md w-[90%] max-w-7xl flex flex-col md:flex-row justify-between items-center p-5 md:p-8 text-white">
        {/* Left Side */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Best Platform for
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
            Rental Cars
          </h1>
          <button className="bg-blue-500 hover:bg-blue-700 transition py-2 px-6 rounded-md mt-4">
            Shop Now
          </button>
        </div>

        {/* Right Side */}
        <div className="mt-5 md:mt-0">
          <Image
            src="/images/car.png"
            width={350}
            height={200}
            alt="hero image"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
