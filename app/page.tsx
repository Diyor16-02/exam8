import Hero from "@/modules/Hero";
import Reservation from "@/modules/Reservation";
import WhyUs from "@/modules/WhyUs";
import NewsGallery from "@/modules/NewsGallery";
import "./globals.css"
import { CarouselSize } from "@/modules/Carusel";

export default function Home() {
  return (
    <>
      {/* Asosiy UIni sectionlari moduledan chaqiriladi */}
      <Hero />
      <CarouselSize/>
      <Reservation />
      <WhyUs />
      <NewsGallery />
    </>
  );
}
