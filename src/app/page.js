import AboveNavbar from "@/components/AboveNavbar";
import AllProductslider from "@/components/AllProductslider";
import BeforeTesimonial from "@/components/BeforeTesimonial";
import BlogCard from "@/components/Blog/BlogCard";
import BlogSlider from "@/components/Blog/BlogSlider";
import FinalBlog from "@/components/Blog/FinalBlog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroAfter from "@/components/HeroAfter";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import OurSuitsInTravels from "@/components/OurSuitsInTravels";
import FinalProductCard from "@/components/Product/FinalProductCard";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (

    <div className="overflow-hidden">
      <AboveNavbar />
      <Navbar />
      <Hero />
      <HeroAfter />
      <AllProductslider />
      <BeforeTesimonial />
      <TestimonialSlider />
      <OurSuitsInTravels />
      <FinalBlog />
      <NewsLetter />
      <Footer />
    </div>
  );
}
