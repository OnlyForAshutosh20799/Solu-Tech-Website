import Image from "next/image";
import React from "react";
import herothum2 from "../../../public/assest/hero-thum2.png";
import heroRs from "../../../public/assest/hero-rs.png";
import heroGeo from "../../../public/assest/hero-geo.png";
import Button from "./reusable/Button";

export default function HeroSection() {
  return (
    <main className="bg-[#050A1E] flex flex-col md:flex-row items-start lg:items-center justify-between  overflow-hidden bg-dark mt-14">
      {/* Left Side */}
      <div>
      <div className=" absolute w-full lg:w-1/2 z-10 circle-bg p-6 md:p-12 flex items-center lg:items-start justify-start flex-col lg:ml-15 lg:mt-5">
        <p className="text-[#FF3C00] uppercase tracking-wide text-sm font-semibold mb-3 flex items-center gap-2">
          <span className="w-3 h-[5px] mt-1 rounded-full bg-[#FF3C00] inline-block"></span>
          <span className="w-5 h-[5px] mt-1 rounded-full bg-[#FF3C00] inline-block"></span>
          Best IT Solution Provider
        </p>

        <h1 className=" text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
          Elevate Your <span className="text-[#FF3C00]">Business</span> with{" "}
          <br />
          IT Excellence
        </h1>

        <p className="text-gray-400 mb-10 ">
          We have been operating for over a decade prvid have been.
        </p>

        <div className=" flex itmes-start md:items-center justify-center md:flex-row flex-col gap-5">
         <Button name="Get Started" />


          <div className="flex flex-row items-center  gap-3">
            <div
              className="rounded-full border-2 h-10 w-10 border-[#FF3C00]"
            ></div>
            <p className="text-white">
              <span className="text-[#FF3C00] font-semibold">Meet</span> Our
              Experts
            </p>
          </div>
        </div>
      </div>
        <div className="relative ">
            <Image
                src={heroGeo}
                alt="animation"
          
               className="rotate-continuous w-[400px] md:w-[600px] lg:w-[1050px]"
                />
        </div>
      </div>

      {/* Right Side */}
      <div className="relative w-full h-full  justify-center items-center block  sm:hidden lg:block mt-15">
        <div className=" bg-primary  opacity-90 hidden md:block"></div>
        <Image
          src={herothum2}
          alt="Professional"
        
          className="h-full  object-cover"
        />
        <Image 
        src={heroRs}
        alt="y image"
        className="absolute z-50 top-0  h-full w-80  lg:right-123 lg:block hidden "
        />
      </div>
    </main>
  );
}
