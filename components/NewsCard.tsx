import Image from "next/image"

type Props = {
  image: string
  text: string
}

export default function NewsCard({ image, text }: Props) {
  return (
    <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 w-75 shadow">

      {/* image */}
      <Image
        src={image}
        alt="news"
        width={260}
        height={160}
        className="rounded-xl"
      />

      {/* text */}
      <p className="text-sm mt-4 text-gray-700">
        {text}
      </p>

      {/* author */}
      <div className="flex items-center gap-2 mt-4">
        <Image
          src="/images/avatar.png"
          alt="author"
          width={30}
          height={30}
          className="rounded-full"
        />

        <span className="text-sm font-semibold">
          Сергей
        </span>
      </div>

    </div>
  )
}