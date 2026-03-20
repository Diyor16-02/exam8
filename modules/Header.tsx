import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-[56px]">

      {/* Logo */}
      <Image src="/icons/logo.svg" alt="logo" width={136} height={72} />

      {/* MENU */}
      <nav className="flex gap-11 text-[18px]">
        <Link href="/menu">Меню</Link>
        <Link href="/news">Новости</Link>
        <Link href="/reservation">Бронирование</Link>
        <Link href="/about">О нас</Link>
        <Link href="/contact">Контакты</Link>
      </nav>

      {/* ICONS */}
      <div className="flex items-center gap-6">
        <Image src="/icons/like.svg" alt="like" width={33} height={33}/>
        <Image src="/icons/shopping.svg" alt="shopping" width={35} height={35}/>
      </div>

    </div>
  );
}