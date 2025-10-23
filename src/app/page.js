import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <AboutSection />
        <CaseStudiesSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
