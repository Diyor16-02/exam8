import Container from "@/components/Container"
import DishCard from "@/components/DishCard"
import Filter from "@/components/Filter"
import GlassCard from "@/components/GlassCard"
import Header from "@/modules/Header"
import NewsGallery from "@/modules/NewsGallery"
import Link from "next/link"

const categories = ["Первые", "Вторые", "Салаты", "Напитки", "Фаст-фуд"]

export default function MenuPage() {
  return (
    <section className="py-[45px]">
      
      <GlassCard className="h-[2352px] mx-[70px]">
      <Container>
        <Header/>

        <p className="text-[18px] text-[#626464] mt-[107px]">
          <Link href="/">Главная</Link> → <span className="text-black">Меню</span>
        </p>

        {/* title */}
        <h1 className="text-[40px] text-center mb-8">
          Меню
        </h1>

        {/* filter */}
        <Filter/>

        {/* grid */}
        <div className="grid grid-cols-4 gap-[71px] gap-[45px]">

          {Array.from({ length: 16 }).map((_, i) => (
            <DishCard
              key={i}
              img="/images/food2.png"
              title="Chicken soup"
              price="$10.00"
            />
          ))}

        </div>

      </Container>
      </GlassCard>

      {/* news */}
      <NewsGallery />

    </section>
  )
}