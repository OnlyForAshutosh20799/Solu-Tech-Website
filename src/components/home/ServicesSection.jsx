import React from 'react';

export default function ServicesSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-4">
  {/* Left gradient line (dark → light) */}
  <div className="h-[2px] w-16 bg-gradient-to-r from-orange-800 to-orange-100 rounded-full"></div>

  {/* Center text */}
  <h2 className="text-sm text-orange-600 uppercase mb-2">Our Services</h2>

  {/* Right gradient line (light → dark) */}
  <div className="h-[2px] w-16 bg-gradient-to-l from-orange-800 to-orange-100 rounded-full"></div>
</div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">EXCLUSIVE IT SERVICES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-start mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <img src='https://solutek-html.netlify.app/assets/images/home-3/ser-icon.png' alt='image' />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-start">Web Development</h3>
             <div className="h-[2px] w-16 bg-gradient-to-r from-orange-800 to-orange-100 rounded-full mb-3"></div>
            <p className="text-gray-600 text-start">Success professionals development our solutions sapien maximu creative services.</p>
            <div className="mt-4">
              <img src="https://solutek-html.netlify.app/assets/images/home-3/ser-thumb.png" alt="Web Development" className="rounded-lg" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-start mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <img src='https://solutek-html.netlify.app/assets/images/home-3/ser-icon2.png' alt='image' />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-start">Digital Marketing</h3>
             <div className="h-[2px] w-16 bg-gradient-to-r from-orange-800 to-orange-100 rounded-full mb-3"></div>
            <p className="text-gray-600 text-start">Success professionals development our solutions sapien maximu creative services.</p>
            <div className="mt-4">
              <img src="https://solutek-html.netlify.app/assets/images/home-3/ser-thumb2.png" alt="Digital Marketing" className="rounded-lg" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-start mb-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
               <img src='https://solutek-html.netlify.app/assets/images/home-3/ser-icon3.png' alt='image' />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-start">App Development</h3>
             <div className="h-[2px] w-16 bg-gradient-to-r from-orange-800 to-orange-100 rounded-full mb-3"></div>
            <p className="text-gray-600 text-start">Success professionals development our solutions sapien maximu creative services.</p>
            <div className="mt-4">
              <img src="https://solutek-html.netlify.app/assets/images/home-3/ser-thumb3.png" alt="App Development" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}