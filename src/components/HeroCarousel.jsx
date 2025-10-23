// src/components/sections/HeroCarousel.jsx
"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import heroGeo from "../../public/assest/hero-geo.png";
import heroRs from "../../public/assest/hero-rs.png";
import heroThum1 from "../../public/assest/hero-thum.png";
import heroThum2 from "../../public/assest/hero-thum2.png";


export default function HeroCarousel() {
  const slides = [
    {
      title: "Elevate Your",
      subtitle: "Business",
      description: "with IT Excellence",
      buttonText: "Get Started",
      heroGeo,
      heroRs,
      heroThum: heroThum1,
    },
    {
      title: "Empower Your",
      subtitle: "Team",
      description: "with Smart IT Solutions",
      buttonText: "Explore Now",
      heroGeo,
      heroRs,
      heroThum: heroThum2,
    },
    {
      title: "Accelerate Your",
      subtitle: "Growth",
      description: "with Digital Innovation",
      buttonText: "Contact Us",
      heroGeo,
      heroRs,
      heroThum: heroThum1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full">
            <HeroSection {...slide} />
          </div>
        ))}
      </div>
    </div>
  );
}
