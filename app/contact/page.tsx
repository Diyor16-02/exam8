import Container from "@/components/Container"
import GlassCard from "@/components/GlassCard"
import Header from "@/modules/Header"
import NewsGallery from "@/modules/NewsGallery"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  return (
    <section className="py-[45px]">

      <GlassCard className="mx-[70px] mb-[65px]">
        <Container>
          <Header />

          <p className="text-[18px] text-[#626464] mt-[107px]">
          <Link href="/">Главная</Link> → <span className="text-black">Контакты</span>
          </p>

          {/* title */}
          <h1 className="text-[48px] text-center mt-[31px] font-bold">
            Контакты
          </h1>

          {/* contact info */}
          <div className="grid grid-cols-3 gap-[155px] w-[804px] mx-auto justify-center mt-[60px]">

            {/* Item1 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/icons/write.svg"
                alt="write"
                width={60}
                height={60}
                className="mb-[27px]"
              />
              <p className="font-semibold text-[24px]">
                Напишите нам
              </p>
              <p className="text-[16px] text-[#585858]">
                info@bmqsoft.com
              </p>
              <p className="text-[16px] text-[#585858]">
                t.me/bmqsoft.com
              </p>
            </div>

            {/* Item2 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/icons/call.svg"
                alt="phone"
                width={60}
                height={60}
                className="mb-[27px]"
              />
              <p className="font-semibold text-[24px]">
                Позвоните нам
              </p>
              <p className="text-[16px] text-[#585858]">
                +998907678888
              </p>
              <p className="text-[16px] text-[#585858]">
                +9989865332322
              </p>
            </div>

            {/* Item3 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src="/icons/map.svg"
                alt="location"
                width={60}
                height={60}
                className="mb-[27px]"
              />
              <p className="font-semibold text-[24px]">
                Посетите нас
              </p>
              <p className="text-[16px] text-[#585858]">
                Узбекистан, Ташкент <br />
                Улица, 24
              </p>
            </div>

          </div>

          {/* form */}
          <div className="mt-[76px] max-w-[804px] mx-auto">

            <h2 className="text-[48px] text-center mb-[60px] font-bold">
              Написать нам
            </h2>

            <div className="flex flex-col gap-[20px]">

              <input
                type="text"
                placeholder="Ваше имя"
                className="border border-black bg-transparent outline-none text-[18px] px-[20px] py-[14px]"
              />

              <input
                type="email"
                placeholder="Ваш E-mail"
                className="border border-black bg-transparent outline-none text-[18px] px-[20px] py-[14px]"
              />

              <input
                type="tel"
                placeholder="Ваш номер телефона"
                className="border border-black bg-transparent outline-none text-[18px] px-[20px] py-[14px]"
              />

              <textarea
                placeholder="Ваше сообщение"
                className="border border-black bg-transparent outline-none text-[18px] px-[20px] py-[14px] resize-none"
              />

              <div className="flex justify-end mt-[31px] mb-[71px]">
                <button className="bg-black text-white px-[40px] py-[14px] rounded-[12px]">
                  Отправить
                </button>
              </div>

            </div>

          </div>

        </Container>
      </GlassCard>

      {/* news */}
      <NewsGallery />

    </section>
  )
}