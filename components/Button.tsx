import Image from "next/image"

type Props = {
    children: React.ReactNode
  }
  
  export default function Button({ children }: Props) {
    return (
      <button className="px-4 py-4 bg-black text-white rounded-[13px] rounded-br-none flex items-center text-[18px] gap-2.5">
        {children}
        <Image src="/icons/arrow.svg" alt="arrow" height={18} width={18}/>
      </button>
    )
  }
