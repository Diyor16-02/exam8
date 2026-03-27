import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";
import NewsCard from "@/components/NewsCard";
import Header from "@/modules/Header";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <section className="py-[45px]">
      <GlassCard className="h-[2107px] mx-[70px]">
        <Container>
          <Header />

          <p className="text-[18px] text-[#626464] mt-[107px]">
          <Link href="/">Главная</Link> → <span className="text-black">Новости</span>
          </p>

          {/* TITLE */}
          <h1 className="text-[48px] text-center mb-[143px]">Новости</h1>

          {/* NEWS GRID */}
          <div className="grid grid-cols-3 gap-[47px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div className="mb-[107px]">
                <NewsCard
                  key={i}
                  img={`/images/news${(i % 3) + 1}.png`}
                  text="Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня."
                  author="Сергей"
                />
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex text-[20px] justify-center items-center gap-[15px]">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className="w-[40px] h-[40px] border-1 border-black rounded-full bg-white/60 hover:bg-[#47474766] hover:text-black transition"
              >
                {n}
              </button>
            ))}

            <button className="w-[40px] h-[40px] border-1 border-black rounded-full bg-white/60 hover:bg-[#47474766] hover:text-black transition">
              ...
            </button>

            <button className="text-[24px]">›</button>
          </div>

          {/* GALLERY */}

          <h2 className="text-[48px] text-center mt-[54px] mb-[75px]">
            Галерея
          </h2>

          <div className="grid grid-cols-4 gap-[25px]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative w-full h-[185px]">
                <Image
                  src={`/images/picture${i + 1}.png`}
                  alt={`gallery-${i}`}
                  fill
                  className="rounded-[20px] object-cover"
                />
              </div>
            ))}
          </div>
          {/* PAGINATION 2 */}
          <div className="flex justify-center items-center gap-3 mt-[50px]">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className="w-[40px] h-[40px] border-1 border-black rounded-full bg-white/60 hover:bg-[#47474766] hover:text-black transition">
                {n}
              </button>
            ))}

            <button className="w-[40px] h-[40px] border-1 border-black rounded-full bg-white/60 hover:bg-[#47474766] hover:text-black transition">
              ...
            </button>

            <button className="text-[24px]">›</button>
          </div>
        </Container>
      </GlassCard>
    </section>
  );
}
