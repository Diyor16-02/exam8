import Image from "next/image";

type Props = {
  icon: string;
  title: string;
};

export default function FeatureItem({ icon, title }: Props) {
  return (
    <div className="">
      {/* Icons */}
      <div className="w-[70px] h-[70px]">
        <Image src={icon} alt={title} width={50} height={50}/>
      </div>

      {/* title */}
      <h3 className="text-[32px] mb-[10px] leading-[150%]">{title}</h3>

      {/* description */}
      <p className="text-[16px] text-black">
        Входные билеты в музей, для посещения достопримечательностей, памятников
      </p>
    </div>
  );
}
