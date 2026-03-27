import Image from "next/image"

interface Props {
  img: string
  name: string
  role: string
}

export default function TeamCard({ img, name, role }: Props) {
  return (
    <div className="flex flex-col items-center text-center">

      {/* circle */}
      <div className="w-[266px] h-[266px] rounded-full border border-black flex items-center justify-center">

        {/* Inner Image */}
        <div className="relative w-[230px] h-[230px]">
          <Image
            src={img}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>

      </div>

      {/* Name */}
      <p className="mt-[20px] text-[24px] font-semibold">
        {name}
      </p>

      {/* Role */}
      <p className="text-[#464646] text-[20px] mt-[5px]">
        {role}
      </p>

    </div>
  )
}