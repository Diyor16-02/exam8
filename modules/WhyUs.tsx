import Container from "@/components/Container"
import FeatureItem from "@/components/FeatureItem"

export default function WhyUs() {
  return (
    <section className="py-[70px]">
      <Container>

        {/* TITLE */}
        <h2 className="text-[48px] text-center mb-[77px]">
          Почему именно мы?
        </h2>

        {/* ROW 1 */}
        <div className="flex mb-[90px]">
          <FeatureItem icon="/images/soup.png" title="Качественные продукты" />
          <FeatureItem icon="/icons/taxi.svg" title="Быстрая доставка" />
          <FeatureItem icon="/images/pizza.png" title="Вкусные рецепты" />
        </div>

        {/* ROW 2 */}
        <div className="flex justify-between">
          <FeatureItem icon="/icons/terrace.svg" title="Уютная атмосфера" />
          <FeatureItem icon="/icons/chef.svg" title="Опытные повара" />
          <FeatureItem icon="/icons/service.svg" title="Обслуживания" />
        </div>

      </Container>
    </section>
  )
}