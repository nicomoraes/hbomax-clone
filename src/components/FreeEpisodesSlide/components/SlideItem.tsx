import Image from "next/image";
import type { FreeEpisodes } from "@/utils/free-episodes";

const SlideItem: React.FC<FreeEpisodes> = ({ cover, title }) => {
  return (
    <div className="relative h-[383px] w-[260px]">
      <Image src={cover} alt={title} fill />
      <div className="absolute bottom-0 flex w-full flex-col text-center">
        <h3 className="text-2xl font-light text-white">{title}</h3>
        <p className="text-base font-semibold text-pink-500">ASSISTIR GRÁTIS</p>
      </div>
    </div>
  );
};

export default SlideItem;
