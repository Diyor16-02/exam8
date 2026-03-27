import Button from "@/components/Button";
import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";
import Header from "@/modules/Header";
import NewsGallery from "@/modules/NewsGallery";
import Image from "next/image";
import TeamCard from "@/components/TeamCard";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    { img: "/images/team1.png", name: "Александр Петро",role: "главный повар" },
    { img: "/images/team2.png", name: "Александр Петро", role: "помощник повара" },
    { img: "/images/team3.png", name: "Александр Петро", role: "бургер кинг" },
    { img: "/images/team4.png", name: "Жулия Виллиам", role: "официантка" },
    { img: "/images/team5.png", name: "Жулия Виллиам", role: "официантка" },
    { img: "/images/team6.png", name: "Жулия Виллиам", role: "официантка" },
  ];
  return (
    <section className="py-[45px]">
      <GlassCard className="mx-[70px] mb-[65px] pb-[71px]">
        <Container>
          <Header />

          <p className="text-[18px] text-[#626464] mt-[107px]">
          <Link href="/">Главная</Link> → <span className="text-black">О нас</span>
          </p>

          {/* Title */}
          <h1 className="text-[48px] text-center mt-[31px] font-bold">О нас</h1>

          {/* description */}
          <div className="max-w-[1176px] mt-[42px] text-[20px] leading-[150%]">
            <p className="mb-[20px]">
              С 1995 года наша миссия в ресторане — питать и вдохновлять каждого
              члена команды, гостя и сообщество, которому мы служим. Спустя все
              эти годы эти основные ценности остаются в основе всего, что мы
              делаем. От нашего меню до наших услуг и способов ведения бизнеса —
              наш свежий, неожиданный и человечный взгляд отличает нас. Мы
              называем это Необыкновенной Добротой. И это во всем, что мы
              делаем.
            </p>
            <p>
              Имея более 450 ресторанов в 26 штатах и ​​более 8000 членов
              команды, мы два года подряд были названы Forbes одним из лучших
              работодателей Америки в области разнообразия. Денверский деловой
              журнал признал нас одним из лучших мест для работы. Мы считаем,
              что эти успехи основаны на нашей уникальной и заботливой культуре,
              благодаря которой каждый, кто входит в наши двери, чувствует себя
              желанным гостем и оцененным по достоинству.
            </p>
          </div>

          {/* section1 */}
          <div className="grid grid-cols-2 gap-[107px] items-center">
            <div>
              <h2 className="text-[40px] font-semibold mb-[44px]">Наша еда</h2>

              <p className="text-[20px] leading-[150%] mb-[20px]">
                Наша страсть — создавать исключительные впечатления от еды по
                отличной цене. От традиционных и современных блюд до наших
                собственных кулинарных творений, таких как фаршированные
                тортеллони премиум-класса, наши свежеприготовленные рецепты
                отличаются индивидуальностью, креативностью и ярким вкусом
                кухонь всего мира.
              </p>
              <p className="text-[20px] leading-[150%]">
                От «Пенне Роза» до японской лапши, салата «Мед» и всемирно
                известных макарон с сыром «Висконсин» — мы используем только
                самые лучшие и полезные ингредиенты. Каждое блюдо готовится
                свежим и делается на заказ. Наше богатое меню наполнено яркими,
                яркими и приятными вкусами.
              </p>

              <div className="pt-[49px]">
                <Button>Посмотреть меню</Button>
              </div>
            </div>

            <div className="relative pt-[95px]">
              <Image
                src="/images/food-about1.png"
                alt="food"
                width={503}
                height={676}
                className="rounded-[30px] object-cover"
              />
            </div>
          </div>

          {/* section2 */}
          <div className="grid grid-cols-2 gap-[60px] mt-[80px] items-center">
            <div className="relative h-[676px] mt-[105px]">
              <Image
                src="/images/food-about2.png"
                alt="food"
                fill
                className="rounded-[30px] object-cover"
              />
            </div>

            <div>
              <h2 className="text-[40px] font-semibold mt-[30px]">Наш путь</h2>

              <p className="text-[20px] leading-[150%] pt-[44px]">
                С самого начала мы взяли на себя обязательство предлагать свежие
                продукты, свежие ингредиенты и новый взгляд на заботу о наших
                гостях, членах нашей команды и наших сообществах. Мы искренне
                верим, что нет ничего, что могло бы объединить людей или сделать
                мир лучше, чем тарелка лапши. <br /> <br /> Продолжая расти, мы
                реализуем ключевые инициативы во всей нашей компании, чтобы
                поддержать светлое будущее. В нашем отчете о влиянии
                рассматриваются некоторые из этих областей, такие как создание
                меню, наполненного свежими и захватывающими новыми вкусами;
                активация лучших в отрасли льгот для людей; и некоторые способы
                лучше заботиться о наших сообществах – и о нашей планете –
                которую мы называем домом.
              </p>
            </div>
          </div>

          {/* team */}
          <div className="mt-[57px] text-center font-bold">
            <h2 className="text-[48px] mb-[49px] ">Наша команда</h2>

            <div className="grid grid-cols-3 gap-x-[125px] gap-y-[81px] justify-center">
              {team.map((item, i) => (
                <TeamCard key={i} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </GlassCard>

      {/* news */}
      <NewsGallery />
    </section>
  );
}
