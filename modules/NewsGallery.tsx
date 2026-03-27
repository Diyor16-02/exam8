import Button from "@/components/Button";
import Container from "@/components/Container";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";

export default function NewsGallery() {
  return (
    <section className="relative">
      <Container>
        {/* title */}
        <h2 className="text-[48px] text-center mb-[143px]">Новости/Галерея</h2>

        {/* cards */}
        <div className="flex justify-between">
          <NewsCard
            img="/images/News1.png"
            text="Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной."
            author="Сергей"
          />

          <NewsCard
            img="/images/News2.png"
            text="Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной."
            author="Сергей"
          />

          <NewsCard
            img="/images/News3.png"
            text="Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной."
            author="Сергей"
          />
        </div>
      </Container>
      {/* button */}
      <Link href="/news">
      <div className="absolute right-[170px] pt-[71px]">
          <Button>Посмотреть все</Button>
      </div>
      </Link>
    </section>
  );
}
