"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const [user, setUser] = useState<any>(null)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const data = localStorage.getItem("user")
    if (data) setUser(JSON.parse(data))
  }, [])

  const logout = () => {
    localStorage.removeItem("user")
    document.cookie = "token=; Max-Age=0; path=/"
    location.reload()
  }

  const navItems = [
    { name: "Меню", href: "/menu" },
    { name: "Новости", href: "/news" },
    { name: "Бронирование", href: "/reservation" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contact" },
    { name: "оплата", href: "/oplata" },
  ]

  return (
    <div className="flex items-center justify-between py-[56px]">

      {/* Logo */}
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={136} height={72} />
      </Link>

      {/* menu */}
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

      {/* right side */}
      <div className="flex items-center gap-6">

        {/* like */}
        <Image src="/icons/like.svg" alt="like" width={33} height={33} />

        {/* cart */}
        <Image src="/icons/shopping.svg" alt="shopping" width={35} height={35} />



      </div>

    </div>
  )
}