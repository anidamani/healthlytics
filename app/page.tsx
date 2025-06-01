import BrandsSection from "./components/Home/BrandsSection";
import HeroSection from "./components/Home/HeroSection";
import Image from "next/image";
import Services from "./components/Home/Services";
import Posts from "./components/Home/Posts";
import CallToAction from "./components/Home/CallToAction";
import OurSolutions from "./components/Home/OurSolutions";
import Testimonials from "./components/Home/Testimonials";
import CoreServices from "./components/Home/CoreServices";
import WhyUs from "./components/Home/WhyUs";

export default function Home() {
  return (
    <>

        <HeroSection/>
        
         
         <OurSolutions/>
         <CoreServices/> 
         <Testimonials/>
         <WhyUs/>
         <BrandsSection/>
         <Posts/>
       
    </>
  );
}
