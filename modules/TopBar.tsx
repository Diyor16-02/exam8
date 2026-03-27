"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function TopBar() {
  const [user, setUser] = useState<any>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem("user")
    if (data) setUser(JSON.parse(data))
  }, [])

  const logout = () => {
    localStorage.removeItem("user")
    document.cookie = "token=; Max-Age=0; path=/"
    location.reload()
  }

  return (
    <div className="flex justify-between py-3 px-[70px] topbar">

      {/* left */}
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

      {/* right */}
      <div className="flex items-center gap-4">

        <span className="flex items-center gap-3 text-[16px]">
          <Image src="/icons/russia.svg" alt="flag" width={19} height={12}/>
          Русский
        </span>

        {/* login / user */}
        {!user ? (
          <Link
            href="/login"
            className="bg-black text-white text-[10px] px-3 py-1 flex gap-1.5 rounded"
          >
            <Image src="/icons/user.svg" alt="user" width={10} height={10} />
            Вход в аккаунт
          </Link>
        ) : (
          <div className="relative">

            <button
              onClick={() => setOpen(!open)}
              className="bg-black text-white text-[10px] px-3 py-1 rounded"
            >
              {user.username}
            </button>

            {open && (
              <div className="absolute right-0 top-[35px] bg-white shadow rounded px-[10px] py-[5px]">
                <button onClick={logout}>Logout</button>
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  )
}