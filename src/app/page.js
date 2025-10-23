import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import ContactSection from "@/components/home/ContactSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/home/Navbar";
import PortfolioSection from "@/components/home/PortfolioSection";
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
        {/* <FeaturesSection />
        <PortfolioSection />
        <Testimonials />
        <BlogSection />
        <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
