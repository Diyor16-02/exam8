import Image from "next/image";

export default function TopBar() {
  return (
    <div className="flex justify-between py-3 px-[70px]">

      <div className="flex gap-7">
        <span className="flex items-center gap-3 text-[16px]">
          <Image src="/icons/phone.svg" alt="phone" width={18} height={18}/>
          +998(90)7583833
        </span>

        <span className="flex items-center gap-3 text-[16px]">
          <Image src="/icons/mail.svg" alt="mail" width={18} height={18}/>
          info@bmgsoft.com
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="flex items-center gap-3 text-[16px]">
          <Image src="/icons/russia.svg" alt="flag" width={19} height={12}/>
          Русский
        </span>

        <button className="bg-black text-white text-[10px] px-3 py-1 flex gap-1.5 rounded">
        <Image src="/icons/user.svg" alt="user" width={10} height={10} />
          Вход в аккаунт
        </button>
      </div>

    </div>
  )
}