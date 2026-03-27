"use client";

import GlassCard from "@/components/GlassCard";
import { useState } from "react";
import { signUp } from "../../services/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (form.password !== form.confirm) {
      alert("Пароли не совпадают ❌");
      return;
    }

    try {
      await signUp(form);
      router.push("/login");
    } catch {
      alert("Ошибка регистрации ❌");
    }
  };

  return (
    <section className="fixed top-0 left-0 w-full h-[80px] bg-black z-[999] min-h-screen flex items-center justify-center login-page">

      <GlassCard className="w-[463px] h-[764px] px-[50px] pt-[63px]">
        <h1 className="text-[32px] font-semibold text-center mb-[37px]">
          Зарегистрироваться
        </h1>

        <div className="flex flex-col gap-[20px]">
          <input
            name="firstName"
            placeholder="Ваше имя"
            onChange={handleChange}
            className="bg-transparent border-b border-black outline-none py-[10px] input-line"          />
          <input
            name="lastName"
            placeholder="Фамилия"
            onChange={handleChange}
            className="bg-transparent border-b border-black outline-none py-[10px] input-line"
          />
          <input
            name="phone"
            placeholder="Ваш номер телефона"
            onChange={handleChange}
            className="bg-transparent border-b border-black outline-none py-[10px] input-line"
          />
          <input
            name="username"
            placeholder="Ваше имя пользователя"
            onChange={handleChange}
            className="bg-transparent border-b border-black outline-none py-[10px] input-line"
          />
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            onChange={handleChange}
            className="bg-transparent border-b border-black outline-none py-[10px] input-line"
          />
          <input
            name="confirm"
            type="password"
            placeholder="Подтвердите пароль"
            onChange={handleChange}
            className="bg-transparent border-b border-black outline-none py-[10px] input-line"
          />

          {/* CHECKBOX */}
          <label className="flex items-start gap-[10px] text-[12px] text-[#454545]">
            <input type="checkbox" className=""/>Я прочитал и принял Политику
            конфиденциальности <br /> и Условия*
          </label>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-[169px] h-[59px] ml-[100px] bg-black text-white py-[14px] rounded-[13px] mt-[27px]"
          >
            Вход в аккаунт
          </button>

          <p className="text-center text-[#06004C] text-[12px]">
            <Link href="/login" className="">
              Уже есть аккаунт?
            </Link>
          </p>
        </div>
      </GlassCard>
    </section>
  );
}
