import Image from "next/image"
import GlassCard from "@/components/GlassCard"
import Button from "@/components/Button"
import Container from "@/components/Container"
import Link from "next/link"

export default function ReservationCard() {
  return (
      <div className="flex ">
        <Container>
        <GlassCard className="w-[463px] h-[720px] mt-[300px]">
        
        {/* icon */}
        <div className=" w-[111px] h-[111px] bg-black rounded-full flex items-center justify-center border-[10px] border-white/70">
          <Image src="/icons/bronicon.svg" alt="icon" width={50} height={50} />
        </div>
      
        <div className="px-[54px] py-[41px]">
        

        {/* title */}
        <h2 className="text-[24px] text-[32px] mb-[34px]">
          Забронировать стол
        </h2>

        {/* inputs */}
        <div className="space-y-5">

          {/* phone */}
          <div className="border-b border-black pb-2">
            <input
              placeholder="Ваш номер"
              className="w-full bg-transparent outline-none text-sm"
              type="tel"
            />
          </div>

          {/* people */}
          <div className="border-b border-black pb-2 flex items-center justify-between">
            <input
              placeholder="На сколько человек?"
              className="w-full bg-transparent outline-none text-sm"
              type="number"
            />
          </div>

          {/* date */}
          <div className="border-b border-black pb-2 flex items-center justify-between">
            <input
              placeholder="Выберите дату"
              className="w-full bg-transparent outline-none text-sm text-[#585858]"
              type="date"
            />
          </div>

          {/* time */}
          <div className="border-b border-black pb-2 flex items-center justify-between">
            <input
              placeholder="Выберите время"
              className="w-full bg-transparent outline-none text-sm text-[#585858]"
              type="time"
            />
          </div>

          {/* place */}
          <div className="border-b border-black pb-2 flex items-center justify-between">
            <input
              placeholder="Выберите место"
              className="w-full bg-transparent outline-none text-sm text-[#585858]"
              type="number"
            />
          </div>

        </div>

        {/* link */}
        <p className="text-[#06004C] text-sm mt-2 cursor-pointer pt-2 pb-[41px]">
          Выбрать места на карте
        </p>

        {/* button */}
        <Link href="/reservation">
        <button className="w-[169px] h-[59px] rounded-[13px] bg-black text-white">
          Забронировать
        </button>
        </Link>
        </div>
        </GlassCard>
        </Container>
        <Image src="/images/bron-img.png" alt="pizza" width={1025} height={936} className="pt-[94px]"/>



      </div>
  )
}