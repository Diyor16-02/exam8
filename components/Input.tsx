type Props = {
    placeholder: string
  }
  
  export default function Input({ placeholder }: Props) {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-b py-2 outline-none"
      />
    )
  }