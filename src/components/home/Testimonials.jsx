'use client'

import React from "react";

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
      image: "https://via.placeholder.com/100x100",
    },
    reviews: [
      {
        rating: "★★★★★",
        source: "From 200+ Reviews",
        feedback:
          "Proactively whiteboard one-to-one total linkage for multimedia based ideae synergistically evolve equity invested web services is vis performance bass total linkage for multimedia based evolve equity invested web predominate B2B scenarios for prospective solute agency.",
      },
      {
        rating: "★★★★★",
        source: "From 200+ Reviews",
        feedback:
          "Proactively whiteboard one-to-one total linkage for multimedia based ideae synergistically evolve equity invested web services is vis performance bass total linkage for multimedia based evolve equity invested web predominate B2B scenarios for prospective solute agency.",
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-sm text-orange-500 uppercase mb-2">
            {sectionData.title}
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {sectionData.heading}
          </h1>
          <p className="text-gray-600 mb-6">{sectionData.description}</p>

          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-2">
              <img
                src={sectionData.client.image}
                alt={sectionData.client.name}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  {sectionData.client.name}
                </h3>
                <p className="text-sm">{sectionData.client.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 md:pl-12">
          {sectionData.reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg ${
                index !== 0 ? "mt-6" : ""
              }`}
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
    </section>
  );
}
