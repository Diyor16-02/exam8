import Image from "next/image"

type Props = {
  img: string
  title: string
  price: string
}

export default function DishCard({ img, title, price }: Props) {
  return (
    <div className="relative w-[263px] h-[395px]">

      {/* IMG */}
      <div className="absolute -top-[90px] left-1/2 -translate-x-1/2 z-10 w-[239px] h-[239px]">
        <Image
          src={img}
          alt={title}
          width={260}
          height={260}
          className="object-cover"
        />
      </div>

      {/* CARD */}
      <div className=" h-[310px] p-[20px] pt-[142px]  bg-white/40 rounded-[38px]">

        <h3 className="text-[24px] leading-[150%] flex gap-[70px]">
          {title}
          <Image src="/icons/card-like.svg" alt="like" width={17} height={17}/>
        </h3>

        <p className="text-black mt-1">
          Spicy with garlic
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px] pt-[20px] font-bold">{price}</span>

          <button className="w-[49px] h-[45px] bg-black rounded-lg flex items-center justify-center">
            <Image src="/icons/korzina.svg" alt="cart" width={23} height={21} />
          </button>
        </div>

      </div>
    </div>
  )
}