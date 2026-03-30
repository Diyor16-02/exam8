"use client";

import GlassCard from "@/components/GlassCard";
import { SubmitEvent, useState } from "react";
import { signUp } from "../../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

 async function handleSubmit(e:SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    const data = {
      username: `${e.target.firstName} ${e.target.lastName}`,
      email: e.target.email.value,
      password: e.target.password.value
    }
    signUp(data).then(res => {
      setTimeout(()=>{
        router.push("/login")
      },1000)
    })
    
 }
  return (
    <section className="fixed top-0 left-0 w-full h-[80px] bg-black z-[999] min-h-screen flex items-center justify-center login-page">
      <GlassCard className="w-[463px] px-[50px] pt-[40px] pb-[30px]">
        <h1 className="text-[28px] font-semibold text-center mb-[30px]">
          Регистрация
        </h1>

       <form onSubmit={handleSubmit}>
       <div className="flex flex-col gap-[20px]">
          <input
            name="firstName"
            placeholder="Ваше имя"
            className="border-b py-[10px] outline-none"
          />

          <input
            name="lastName"
            placeholder="Фамилия"
            className="border-b py-[10px] outline-none"
          />

          <input
            name="email"
            placeholder="Email"
            className="border-b py-[10px] outline-none"
          />

          <input
            name="username"
            placeholder="Ваше имя пользователя"
            className="border-b py-[10px] outline-none"
          />

          {/* password */}
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            className="border-b py-[10px] outline-none"
          />

          <label className="flex items-start gap-[10px] text-[12px]">
            <input type="checkbox" required />
            Я принимаю условия
          </label>

          <button
          type="submit"
            className="w-[169px] h-[59px] bg-black text-white ml-[100px] rounded-[10px] mt-[10px]"
          >
            Вход в аккаунт
          </button>

          <p className="text-center text-[12px]">
            <Link href="/login" className="text-[#06004C]">
            Уже есть аккаунт?
            </Link>
          </p>
        </div>
       </form>
      </GlassCard>
    </section>
  );
}