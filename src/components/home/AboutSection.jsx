import React from "react";
import Button from "./reusable/Button";

export default function AboutSection() {
  return (
    <section className="pt-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <img
              src="https://solutek-html.netlify.app/assets/images/home-3/about-thu3.png"
              alt="Team Working"
              className="md:h-100"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <div className="flex flex-row items-center justify-start gap-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-orange-600 to-orange-100 rounded-full mb-2"></div>
            <h2 className="text-md text-orange-600 uppercase mb-2 font-bold">
              About Company
            </h2>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Customized Solutions to Meet Client Needs.
          </h1>
          <p className="text-gray-600 mb-6">
            Solution is a long established fact that a reader will be distracted
            the reada content of a page when looking at layout the point.
          </p>
          <ul className="space-y-2 mb-4 flex flex-row items-center gap-5">
            <li className="flex items-center">
              <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                <img
                  src="https://solutek-html.netlify.app/assets/images/about4.png"
                  alt="image"
                />
              </span>
              Cloud Based Solution
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                <img
                  src="https://solutek-html.netlify.app/assets/images/about4.png"
                  alt="image"
                />
              </span>
              Best Services
            </li>
          </ul>
          <div className="mb-4">
            <div className="flex flex-row items-center justify-start gap-3 mb-5">
                <div className="h-[2px] w-13 bg-gradient-to-r from-orange-600 to-orange-100 rounded-full"></div>
              <div className="text-gray-500">
                Sed non odio non elit porttitor tinc
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
                <div className="h-[2px] w-13 bg-gradient-to-r from-orange-600 to-orange-100 rounded-full"></div>
              <div className="text-gray-500">               
                Sed non odio non elit porttitor tincidunt donec
              </div>
            </div>
          </div>
          <Button name="Explore More"/>
        </div>
      </div>
      <div className="mt-12 bg-orange-500 text-white p-6 flex justify-around items-center rounded-t-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold">120k</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">700k</h3>
          <p>Project Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">100%</h3>
          <p>Result Guaranteed</p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">280+</h3>
          <p>Expert Members</p>
        </div>
      </div>
    </section>
  );
}
