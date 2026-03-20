import Button from "@/components/Button"
import NewsCard from "@/components/NewsCard"

export default function NewsGallery() {
  return (
    <section className="py-24">

      <div>

        {/* title */}
        <h2 className="text-center text-3xl font-bold mb-16">
          Новости/Галерея
        </h2>

        {/* cards */}
        <div className="flex justify-center gap-8">

          <NewsCard
            image="/images/news1.png"
            text="Используйте гибкие структуры, чтобы предоставить надежный обзор."
          />

          <NewsCard
            image="/images/news2.png"
            text="Используйте гибкие структуры, чтобы предоставить надежный обзор."
          />

          <NewsCard
            image="/images/news3.png"
            text="Используйте гибкие структуры, чтобы предоставить надежный обзор."
          />

        </div>

        {/* button */}
        <div className="flex justify-end mt-12">
          <Button>
            Посмотреть все →
          </Button>
        </div>

      </div>

    </section>
  )
}