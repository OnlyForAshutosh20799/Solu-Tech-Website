"use client";

import React, { useState } from "react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

export default function Testimonials() {
  // ✅ Separated Data
  const sectionData = {
    title: "Client Review",
    heading: "Customized Solutions to Meet Client Needs.",
    description:
      "Solution is a long established fact that a reader will be distracted the reada content of a page when looking at layout the point.",
    client: {
      name: "Brandon A. Velo",
      role: "UI Designer",
      image:
        "https://solutek-html.netlify.app/assets/images/home-3/test-thumb.png",
    },
    reviews: [
      {
        rating: "★★★★★",
        source: "From 200+ Reviews",
        feedback:
          "Excellent design sense and quick turnaround. The UI improvements increased our conversion rate by 20%.",
      },
      {
        rating: "★★★★★",
        source: "From 200+ Reviews",
        feedback:
          "A very professional and creative team! They delivered exactly what we needed for our web app.",
      },
      {
        rating: "★★★★★",
        source: "From 200+ Reviews",
        feedback:
          "Working with them was smooth and efficient. They understood our requirements perfectly.",
      },
      {
        rating: "★★★★★",
        source: "From 200+ Reviews",
        feedback:
          "Our new site looks amazing! The attention to detail and UI polish were top-notch.",
      },
      {
        rating: "★★★★★",
        source: "From 200+ Reviews",
        feedback:
          "Highly recommend! The design is clean, modern, and responsive on all devices.",
      },
    ],
  };

  // ✅ State for controlling visible testimonials
  const [startIndex, setStartIndex] = useState(0);

  // ✅ Handle arrow clicks
  const handleUpClick = () => {
    if (startIndex > 0) setStartIndex((prev) => prev - 1);
  };

  const handleDownClick = () => {
    if (startIndex < sectionData.reviews.length - 2)
      setStartIndex((prev) => prev + 1);
  };

  // ✅ Get visible 2 testimonials
  const visibleReviews = sectionData.reviews.slice(startIndex, startIndex + 2);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 px-10">
          <h2 className="text-sm text-orange-500 uppercase mb-2">
            {sectionData.title}
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {sectionData.heading}
          </h1>
          <p className="text-gray-600 mb-6">{sectionData.description}</p>

          {/* Client Card + Arrows */}
          <div className="flex flex-row items-center justify-between">
            <div className="relative text-black rounded-lg shadow-lg max-w-xs mx-auto">
              <div className="relative w-full">
                <img
                  src={sectionData.client.image}
                  alt={sectionData.client.name}
                  className="w-full rounded-md object-cover"
                />
                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 w-full  text-white py-2 text-center rounded-b-md">
                  <h3 className="text-lg font-semibold">
                    {sectionData.client.name}
                  </h3>
                  <p className="text-sm">{sectionData.client.role}</p>
                </div>
              </div>
            </div>

            {/* Arrows + Line */}
            <div className="flex flex-col items-center justify-center gap-1 bg-[#F3F3F3] p-1 rounded-full">
              <button
                onClick={handleUpClick}
                disabled={startIndex === 0}
                className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${
                  startIndex === 0
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700"
                }`}
              >
                <MdArrowUpward size={20} />
              </button>

              <div className="h-36 w-1 rounded-full bg-gradient-to-b from-gray-200 via-orange-600 to-gray-200 animate-pulse"></div>

              <button
                onClick={handleDownClick}
                disabled={startIndex >= sectionData.reviews.length - 2}
                className={`h-10 w-10 rounded-full flex items-center justify-center text-white ${
                  startIndex >= sectionData.reviews.length - 2
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700"
                }`}
              >
                <MdArrowDownward size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 md:pl-12 h-[500px] overflow-hidden relative">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(-${startIndex * 50}%)`,
            }}
          >
            {sectionData.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg mb-6"
                style={{ minHeight: "230px" }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-yellow-400">{review.rating}</span>
                  <span className="ml-2 text-orange-500">{review.source}</span>
                </div>
                <p className="text-gray-600 mb-4">{review.feedback}</p>
                <div className="flex items-center">
                  <span className="text-2xl">“</span>
                  <span className="text-orange-500 ml-2">“</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
