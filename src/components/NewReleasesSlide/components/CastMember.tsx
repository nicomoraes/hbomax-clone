import Image from "next/image";
import { Cast } from "@/utils/releases";

const CastMember: React.FC<Cast> = ({ character, characterImage, name }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center max-sm:text-xs">
      <Image src={characterImage} width={85} height={85} alt={name} />
      <h4>{name}</h4>
      <p className="mt-1 font-semibold">É {character}</p>
    </div>
  );
};

export default CastMember;
