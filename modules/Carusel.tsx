"use client"

import * as React from "react"
import DishCard from "@/components/DishCard"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "@/components/Container"
import Button from "@/components/Button"
import Link from "next/link"

const foods = [
  { img: "/images/food1.png", title: "Chicken soup", price: "$10.00" },
  { img: "/images/food2.png", title: "Chicken soup", price: "$10.00" },
  { img: "/images/food3.png", title: "Chicken soup", price: "$10.00" },
  { img: "/images/food1.png", title: "Chicken soup", price: "$10.00" },
]

export function CarouselSize() {
  return (
    <div className="pt-[60px] relative">
    <span className="text-[48px] py-60 leading-[150%] px-[500px] font-bold"> Популярные блюда </span>
    <Container>
    <Carousel
      opts={{ align: "start" }}
      className=""
    >
      <CarouselContent className="gap-[70px]">

        {foods.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="p-4  mt-[120px]">
              <DishCard
                img={item.img}
                title={item.title}
                price={item.price}
              />
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>

      {/* arrows */}
      <CarouselPrevious className="text-black border-none  bg-transparent text-[31px] [&>svg]:w-[31px!important] [&>svg]:h-[31px!important]" />
      <CarouselNext className="text-black border-none  bg-transparent text-[31px] [&>svg]:w-[31px!important] [&>svg]:h-[31px!important]" />

    </Carousel>
    <Link href="/menu">
    <div className="absolute right-[120px]">
      <Button>
        Посмотреть меню
      </Button>
    </div>
    </Link>
    </Container>
    </div>
  )
}