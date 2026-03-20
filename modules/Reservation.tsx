import Input from "@/components/Input"
import Button from "@/components/Button"

export default function Reservation() {
  return (
    <section className="py-20">

      <h2>Забронировать стол</h2>

      <div className="max-w-100">

        <Input placeholder="Ваш номер" />

        <Input placeholder="Сколько человек?" />

        <Input placeholder="Дата" />

        <Button>
          Забронировать
        </Button>

      </div>

    </section>
  )
}