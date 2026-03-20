import Card from "@/components/Card"

export default function PopularDishes() {
  return (
    <section className="py-40">

      <h2 className="text-3xl text-center font-bold">
        Популярные блюда
      </h2>

      <div className="flex gap-6 justify-center mt-10">

        <Card
          image="/food1.png"
          title="Chicken soup"
          price="$10"
        />

        <Card
          image="/food2.png"
          title="Chicken soup"
          price="$10"
        />

      </div>

    </section>
  )
}