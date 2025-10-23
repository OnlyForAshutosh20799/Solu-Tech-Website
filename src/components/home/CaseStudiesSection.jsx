import React from 'react';

export default function CaseStudiesSection() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className='flex items-center justify-center gap-3 mb-4'>
         <div className="h-[2px] w-13 bg-gradient-to-r from-[#FF3C00]  to-gray-800 "></div>
        <h2 className="text-sm text-orange-500 uppercase ">Case Studies</h2>
         <div className="h-[2px] w-13 bg-gradient-to-l from-[#FF3C00]  to-gray-800 "></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-12">OUR LATEST CASE STUDIES</h1>
        <div >
          <div className="bg-gray-800 bg-gradient-to-b from-gray-800  to-gray-900 flex flex-col  md:flex-row rounded-4xl p-10 itmes-center justify-between">
             <div className='flex flex-col items-start'>
            <h3 className="text-2xl font-semibold mb-2">Travel & Tour Mobile Apps Design</h3>
            <div className='flex flex-row gap-3 items-center mt-5 md:mt-10'>
             <div className="h-[2px] w-13 bg-gradient-to-r from-[#FF3C00]  to-gray-800 "></div>
            <p className="text-[#FF3C00] text-md ">MOBILE APP DESIGN</p>
            </div>
            <button className="bg-[#FF3C00] font-semibold text-sm md:text-md text-white md:px-5 px-4 md:py-3 py-2 rounded-full hover:bg-orange-600 transition mt-10 md:mt-30">
              VIEW MORE DETAILS
            </button>
            </div>
            <div className='mt-15 md:mt-0'>
              <img src="https://solutek-html.netlify.app/assets/images/home-3/case-studies.png" alt="Travel & Tour Mobile Apps Design" className="rounded-lg mb-4" />
            </div>
           
          </div>      
        </div>
      </div>
    </section>
  );
}