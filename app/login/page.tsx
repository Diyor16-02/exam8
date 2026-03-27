"use client";

import GlassCard from "@/components/GlassCard";
import { useState } from "react";
import { signIn } from "../../services/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await signIn(form);

      localStorage.setItem("user", JSON.stringify(res.user));
      document.cookie = `token=${res.token}`;

      router.push("/");
    } catch {
      alert("Ошибка входа ❌");
    }
  };

  return (
    <section className="fixed top-0 left-0 w-full h-[80px] bg-black z-[999] min-h-screen flex items-center justify-center login-page">
      <GlassCard className="w-[463px] px-[53px] h-[529px] pt-[27px] relative">
        {/* logo circle */}
        <div className="relative flex">
          <div className="absolute -top-[55px] w-[111px] h-[111px] bg-black rounded-full flex items-center justify-center border-[10px] border-white/80">
            <Image
              src="/icons/bronicon.svg"
              alt="icon"
              width={50}
              height={50}
            />
          </div>
        </div>

        <h1 className="text-[32px] font-semibold mb-[34px] mt-[100px]">
          Вход в аккаунт
        </h1>

        {/* inputs */}
        <div className="flex flex-col gap-[25px]">
          <input
            name="username"
            placeholder="Ваше имя пользователя"
            onChange={handleChange}
            className="bg-transparent border-b border-black outline-none py-[10px]"
          />

          <div>
            <input
              name="password"
              type="password"
              placeholder="Пароль"
              onChange={handleChange}
              className="bg-transparent border-b border-black outline-none py-[10px] w-full"
            />
            <p className="text-[12px] mt-[8px]">
              Забыли пароль?
            </p>
          </div>
        </div>

        {/* button */}
        <button
          onClick={handleSubmit}
          className="ml-[95px] w-[169px] h-[59px] bg-black text-white py-[18px] rounded-[13px] mt-[27px]"
        >
          Вход в аккаунт
        </button>

        {/* link */}
        <p className="text-center text-[12px] mt-[7px]">
          <Link href="/register" className="text-[#06004C]">
            Еще нет учетной записи?
          </Link>
        </p>
      </GlassCard>
    </section>
  );
}
