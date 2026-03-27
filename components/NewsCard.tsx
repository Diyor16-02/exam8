import Image from "next/image"

type Props = {
  img: string
  text: string
  author: string
}

export default function NewsCard({ img, text, author }: Props) {
  return (
    <div className="relative w-[360px]">

      {/* Image */}
      <div className="absolute -top-[70px] left-[20px] z-10">
        <Image
          src={img}
          alt="news"
          width={213}
          height={157}
          className="rounded-[30px] object-cover"
        />
      </div>

      {/* Card */}
      <div className="pt-[100px] pl-6 bg-white/40 backdrop-blur-xl rounded-[30px] shadow-xl w-[360px] h-[277px]">

        {/* Text */}
        <p className="text-[16px] text-black leading-[160%]">
          {text}
        </p>

        {/* author */}
        <div className="flex items-center gap-[13px] mt-[9px]">
          <Image
            src="/images/user.png"
            alt="user"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-[18px] leading-[160%]">
            {author}
          </span>
        </div>

      </div>
    </div>
  )
}