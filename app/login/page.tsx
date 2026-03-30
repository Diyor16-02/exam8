"use client";

import GlassCard from "@/components/GlassCard";
import { SubmitEvent, useState } from "react";
import { signIn, signUp } from "../../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export default function RegisterPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);

 async function handleSubmit(e:SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    const data = {
      username: e.target.username.value,
      password: e.target.password.value

    }
    signIn(data).then(res => {
      setTimeout(()=>{
        router.push("/")
      },1000)
    // SetCookie("username",res.data.username)
    })
    
 }

  return (
    <section className="fixed top-0 left-0 w-full h-[80px] bg-black z-[999] min-h-screen flex items-center justify-center login-page">
      <GlassCard className="w-[463px] px-[53px] h-[529px] pt-[27px] relative">
        
        {/* logo */}
        <div className="relative flex justify-center">
          <div className="absolute -top-[55px] w-[111px] h-[111px] bg-black rounded-full flex items-center justify-center border-[10px] border-white/80">
            <Image src="/icons/bronicon.svg" alt="icon" width={50} height={50} />
          </div>
        </div>

        <h1 className="text-[32px] font-semibold mb-[34px] mt-[100px] text-center">
          Вход в аккаунт
        </h1>

        <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[25px]">
          <input
            name="username"
            placeholder="Ваше имя пользователя"
            className="bg-transparent border-b border-black outline-none py-[10px]"
          />

          <div className="relative">
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Пароль"
              className="bg-transparent border-b border-black outline-none py-[10px] w-full"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-2 top-1/2 -translate-y-1/2 pb-[10px]"
            >
              {show ? "🙈" : "👁️"}
            </button>

            <p className="text-[12px] mt-[8px]">Забыли пароль?</p>
          </div>
        </div>
        <button
          type="submit"
          className="w-[169px] h-[59px] ml-[95px] bg-black text-white rounded-[10px] mt-[30px]"
        >
          Вход в аккаунт
        </button>
        </form>

        

        <p className="text-center text-[12px] mt-[10px]">
          <Link href="/register" className="text-[#06004C]">
            Еще нет учетной записи?
          </Link>
        </p>
      </GlassCard>
    </section>
  );
}