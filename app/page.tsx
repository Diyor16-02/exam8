import Hero from "@/modules/Hero"
import PopularDishes from "@/modules/PopularDishes"
import Reservation from "@/modules/Reservation"
import WhyUs from "@/modules/WhyUs"
import NewsGallery from "@/modules/NewsGallery"


export default function Home() {
  return (
    <>      
       {/* Asosiy UIni sectionlari moduledan chaqiriladi */}
      <Hero/>
      <PopularDishes/>
      <Reservation/>
      <WhyUs/>
      <NewsGallery/>
    </>
  );
}
