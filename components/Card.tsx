type Props = {
    title: string
    price: string
    image: string
  }
  
  export default function Card({ title, price, image }: Props) {
    return (
      <div className="bg-white p-4 rounded-xl w-55">
  
        <img src={image} />
  
        <h3>{title}</h3>
  
        <p>{price}</p>
  
      </div>
    )
  }