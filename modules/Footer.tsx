import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 bg-white/40 backdrop-blur-lg mt-20">

      <div>

        <div className="grid grid-cols-4 gap-10">

          {/* logo */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              LOGO
            </h2>

            <div className="flex gap-3">
              <Link href="/"><Image src="" alt="telegram" width={20} height={20}/></Link>
              <Link href="/"><Image src="" alt="whatsup" width={22} height={20}/></Link>
              <Link href="/"><Image src="" alt="facebook" width={20} height={19}/></Link>
              <Link href="/"><Image src="" alt="instagram" width={29} height={20}/></Link>
            </div>
          </div>

          {/* services */}
          <div>
            <h3 className="font-semibold mb-4">
              Наши услуги
            </h3>

            <ul className="space-y-2 text-sm">
              <li>Цены</li>
              <li>Отслеживание</li>
              <li>Сообщить об ошибке</li>
              <li>Условия услуг</li>
            </ul>
          </div>

          {/* company */}
          <div>
            <h3 className="font-semibold mb-4">
              Наша компания
            </h3>

            <ul className="space-y-2 text-sm">
              <li>Отчетность</li>
              <li>Свяжитесь с нами</li>
              <li>Управление</li>
            </ul>
          </div>

          {/* address */}
          <div>
            <h3 className="font-semibold mb-4">
              Адрес
            </h3>

            <p className="text-sm">
              Узбекистан, Ташкент
            </p>

            <p className="text-sm">
              Улица, 24
            </p>

            <p className="text-sm mt-2">
              +998 94 888 44 48
            </p>

            <p className="text-sm">
              info@bmgsoft.com
            </p>
          </div>

        </div>

      </div>

    </footer>
  )
}