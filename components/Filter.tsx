"use client"
import { useState } from "react"

const categories = ["Первые", "Вторые", "Салаты", "Напитки", "Фаст-фуд"]

export default function Filter() {
  const [active, setActive] = useState("Первые")

  return (
    <div className="flex justify-center mb-[156px]">
      <div className="bg-white/ backdrop-blur-md rounded-[27px] px-6 py-2 flex gap-6">

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`
              px-4 py-1 rounded-full transition
              ${active === item ? "bg-white/40 text-black" : "hover:bg-white/40"}
            `}
          >
            {item}
          </button>
        ))}

      </div>
    </div>
  )
}