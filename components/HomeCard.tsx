import Image from "next/image";
import React from "react";

const HomeCard = ({
  img,
  color,
  header,
  paragraph,
  label,
  handleClick,
}: {
  img: string;
  color: string;
  header: string;
  paragraph: string;
  label: string;
  handleClick?: () => void;
}) => {
  return (
    <div
      className={`${color} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={img} height={27} width={27} alt={label} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{header}</h1>
        <p className="text-lg font-normal">{paragraph}</p>
      </div>
    </div>
  );
};

export default HomeCard;
