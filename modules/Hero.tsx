import Button from "@/components/Button"
import Header from "./Header"
import TopBar from "./TopBar"
import Container from "@/components/Container"
import GlassCard from "@/components/GlassCard"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="mt-4 ">

        <div className="px-[70px]">
        <GlassCard>
        <Container>

          {/* Headerim */}
          <Header />

          {/* Hero */}
          <div className="flex items-center justify-between">

            <div className="pt-[182px] ">
              <h1 className="text-[64px] leading-[150%] w-[350px] h-[300px] font-bold leading-[70px]">
                ВКУСНАЯ ЕДА ЖДЕТ ТЕБЯ!
              </h1>

              <Link href="/menu">
              <Button>
                Посмотреть меню
              </Button>
              </Link>
            </div>

            <div className="">
              <Image src="/images/luxury.png" alt="food" width={800} height={800}/>
            </div>

          </div>
        </Container>

        </GlassCard>
        </div>
      

    </section>
  )
}