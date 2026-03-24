import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";
import Header from "@/modules/Header";
import NewsGallery from "@/modules/NewsGallery";
import Image from "next/image";

export default function ReservationPage() {
  return (
    <section className="py-[45px]">
      <GlassCard className="mx-[70px] mb-[68px]">
        <Container>
          <Header />

          {/* BREADCRUMB */}
          <p className="text-[18px] text-[#626464] mt-[107px]">
            Главная → Бронирование
          </p>

          {/* TITLE */}
          <h1 className="text-[48px] text-center mt-[31px]">Бронирование</h1>

          {/* TOP BLOCK */}
          <div className="grid grid-cols-2 gap-[118px] mt-[60px] items-center">
            {/* LEFT - WORK TIME */}
            <div>
              <h3 className="text-[32px] mb-[36px]">Часы работы</h3>

              {[
                "Понедельник",
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Воскресенье",
              ].map((day, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-black py-[12px] text-[20px]"
                >
                  <span>{day}</span>
                  <span>
                    {day === "Воскресенье" ? "11:00–22:00" : "10:00–23:00"}
                  </span>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative w-full h-[676px]">
              <Image
                src="/images/reservation.png"
                alt="reservation"
                fill
                className="rounded-[30px] object-cover"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="mt-[71px] max-w-[902px] mx-auto">
            <h2 className="text-[48px] text-center mb-[54px]">
              Хотите забронировать стол?
            </h2>

            <div className="flex flex-col gap-[20px]">
              <input
                type="text"
                placeholder="Ваш номер"
                className="border-b border-black bg-transparent outline-none text-[19px] py-[10px] text-[#585858]"
              />

              <select className="border-b border-black bg-transparent outline-none text-[19px] text-[#585858] py-[10px]">
                <option>На сколько человек?</option>
                <option>1</option>
                <option>2</option>
                <option>4</option>
              </select>

              <input
                type="date"
                className="border-b border-black text-[19px] text-[#585858] bg-transparent outline-none py-[10px]"
              />

              <input
                type="time"
                className="border-b border-black text-[19px] text-[#585858] bg-transparent outline-none py-[10px]"
              />

              <select className="border-b border-black text-[19px] text-[#585858] bg-transparent outline-none py-[10px]">
                <option>Выберите место</option>
                <option>Зал</option>
                <option>Терраса</option>
              </select>

              <div className="pl-184">
                <button className="bg-black text-white w-[169px] h-[59px] rounded-[13px] mt-[52px]">
                  Забронировать
                </button>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-[80px] text-center">
            {/* Title */}
            <h2 className="text-[40px] font-semibold mb-[60px]">
              Связаться с нами
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-3 gap-[155px] justify-center w-[804] mx-auto pb-[98px]">
              {/* Item1 */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/icons/write.svg"
                  alt="write"
                  width={50}
                  height={50}
                  className="mb-[27px]" />
                <p className="font-semibold text-[24px]">Напишите нам</p>
                <p className="text-[16px]">info@bmqsoft.com</p>
                <p className="text-[16px]">t.me/bmqsoft.com</p>
              </div>

              {/* Item2 */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/icons/call.svg"
                  alt="phone"
                  width={50}
                  height={50}
                  className="mb-[27px]"/>
                <p className="font-semibold text-[24px] ">Позвоните нам</p>
                <p className="text-[16px]">+9998908767888</p>
                <p className="text-[16px]">+9989865332322</p>
              </div>

              {/* Item3 */}
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/icons/map.svg"
                  alt="location"
                  width={50}
                  height={50}
                  className="mb-[27px]"/>
                <p className="font-semibold text-[24px]">Посетите нас</p>
                <p className="text-[16px]">
                  Узбекистан, Ташкент <br />
                  Улица, 24
                </p>
              </div>
            </div>
          </div>
        </Container>
      </GlassCard>

      {/* NEWS */}
      <NewsGallery />
    </section>
  );
}
