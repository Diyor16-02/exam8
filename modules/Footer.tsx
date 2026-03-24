import Container from "@/components/Container"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative mt-[193px] pt-[76px] pb-[71px] bg-[url('/images/footer-bg.png')]">

      <div className="" />

      <Container>
        <div className="flex justify-between">

          {/* LEFT */}
          <div>
            <div className="pb-[20px]">
            <Link href="/"><Image src="/icons/logo.svg" alt="logo" width={136} height={72} /></Link>
            </div>
            {/* SOCIALS */}
            <div className="flex gap-3">
              <Link href="https://web.telegram.org/"><Image src="/icons/telegram.svg" alt="telegram" width={20} height={20}/></Link>
              <Link href="https://www.whatsapp.com/"><Image src="/icons/whatsapp.svg" alt="whatsapp" width={22} height={20}/></Link>
              <Link href="https://www.facebook.com/"><Image src="/icons/facebook.svg" alt="facebook" width={20} height={19}/></Link>
              <Link href="https://www.instagram.com/"><Image src="/icons/instagram.svg" alt="instagram" width={19} height={20}/></Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[25px] mb-3">Наши услуги</h3>

            <ul className="space-y-2 text-[16px] text-[#080808]">
              <li>Цены</li>
              <li>Отслеживание</li>
              <li>Сообщить об ошибке</li>
              <li>Условия услуг</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-[25px] mb-3">Наша компания</h3>

            <ul className="space-y-2 text-[16px] text-[#080808]">
              <li>Отчетность</li>
              <li>Свяжитесь с нами</li>
              <li>Управление</li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div>
            <h3 className="text-[25px] mb-3">Адрес</h3>

            <ul className="space-y-2 text-[16px] text-[#080808]">
              <li>Узбекистан, Ташкент</li>
              <li>Улица, 24</li>
              <li className="mt-2">+998948844848</li>
              <li>info@bmgsoft.com</li>
            </ul>
          </div>

        </div>
      </Container>

    </footer>
  )
}