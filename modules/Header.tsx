"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: "Меню", href: "/menu" },
    { name: "Новости", href: "/news" },
    { name: "Бронирование", href: "/reservation" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contact" },
  ]

  return (
    <div className="flex items-center justify-between py-[56px]">

      {/* Logo */}
      <Link href="/"><Image src="/icons/logo.svg" alt="logo" width={136} height={72} /></Link>

      {/* MENU */}
      <nav className="flex gap-11 text-[18px]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              transition
              ${pathname === item.href ? "text-[#FF0000]" : "text-black"}
              hover:text-[#FF0000]
            `}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* ICONS */}
      <div className="flex items-center gap-6">
        <Image src="/icons/like.svg" alt="like" width={33} height={33} />
        <Image src="/icons/shopping.svg" alt="shopping" width={35} height={35} />
      </div>

    </div>
  )
}