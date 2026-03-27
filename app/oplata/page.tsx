import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";
import Header from "@/modules/Header";
import NewsGallery from "@/modules/NewsGallery";
import Image from "next/image";

export default function OrderPage() {
  return (
    <section className="py-[45px]">
      <GlassCard className="mx-[70px] mb-[68px]">
        <Container>
          <Header />

          {/* title */}
          <h1 className="text-[48px] text-center mt-[60px] mb-[60px]">
            Оформление заказа
          </h1>

          <div className="grid grid-cols-2 gap-[120px]">

            {/* left */}
            <div>

              {/* delivery */}
              <h2 className="text-[32px] mb-[30px]">
                Способ получения:
              </h2>

              <div className="flex flex-col gap-[18px]">

                <label className="flex items-center gap-[12px] text-[20px]">
                  <input type="radio" name="delivery" />
                  Заказ с собой
                </label>

                <label className="flex items-center gap-[12px] text-[20px]">
                  <input type="radio" name="delivery" defaultChecked />
                  Доставка до двери
                </label>

                {/* addres */}
                <div className="flex items-center gap-[12px] mt-[10px] text-[20px]">
                  <Image src="/icons/home.svg" alt="" width={22} height={22}/>
                  Доставка по адресу:
                </div>

                <p className="text-[14px] text-[#6B6B6B] mt-[5px]">
                  Укажите адрес доставки на карте:
                </p>

                <button className="w-[200px] h-[45px] bg-black text-white rounded-[10px] mt-[10px]">
                  Выбрать
                </button>

              </div>

              {/* payment */}
              <h2 className="text-[32px] mt-[60px] mb-[25px]">
                Способ оплаты:
              </h2>

              <div className="flex flex-col gap-[20px]">

                <label className="flex items-center gap-[12px] text-[20px]">
                  <input type="radio" name="payment" defaultChecked />
                  Картой онлайн
                </label>

                {/* cards */}
                <div className="flex gap-[10px] ml-[30px]">
                  <Image src="/icons/humo.svg" alt="" width={40} height={25}/>
                  <Image src="/icons/uzcard.svg" alt="" width={40} height={25}/>
                  <Image src="/icons/visa.svg" alt="" width={40} height={25}/>
                  <Image src="/icons/mastercard.svg" alt="" width={40} height={25}/>
                  <Image src="/icons/applepay.svg" alt="" width={40} height={25}/>
                </div>

                <label className="flex items-center gap-[12px] text-[20px]">
                  <input type="radio" name="payment" />
                  Оплата при получении
                </label>

              </div>

            </div>

            {/* right */}
            <div className="flex justify-center">

              <div className="w-[420px] bg-white/70 backdrop-blur-md rounded-[25px] px-[35px] py-[40px]">

                <h3 className="text-[24px] font-semibold text-center mb-[30px]">
                  Ваш заказ
                </h3>

                {/* items */}
                <div className="space-y-[20px] text-[18px]">

                  <div className="flex justify-between border-b pb-[10px]">
                    <span>Бургер(2)</span>
                    <span>50000сум</span>
                  </div>

                  <div className="flex justify-between border-b pb-[10px]">
                    <span>Кола (1.5л)</span>
                    <span>15000сум</span>
                  </div>

                  <div className="flex justify-between border-b pb-[10px]">
                    <span>Доставка</span>
                    <span>Бесплатно</span>
                  </div>

                </div>

                {/* total */}
                <div className="flex justify-between mt-[30px] text-[22px] font-semibold">
                  <span>Итого:</span>
                  <span>55000сум</span>
                </div>

                {/* button */}
                <div className="flex justify-center mt-[35px]">
                  <button className="w-[170px] h-[55px] bg-black text-white rounded-[13px]">
                    Заказать
                  </button>
                </div>

              </div>

            </div>

          </div>

        </Container>
      </GlassCard>

      <NewsGallery />
    </section>
  );
}