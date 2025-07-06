import Image from "next/image";
import Link from "next/link";

import { Text } from "@/ui/atoms";

import { PlayerCardProps } from "./types";

const PlayerCard: React.FC<PlayerCardProps> = ({ name, imageUrl }) => (
  <Link
    href={`https://tracker.gg/valorant/profile/riot/${encodeURIComponent(
      name
    )}`}
    target="_blank"
  >
    <div className="w-[120px] relative rounded-lg bg-slate-800 group cursor-pointer hover:bg-slate-700 transition-colors duration-300">
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-120"
        />
      </div>

      <div className="p-2">
        <Text
          variant="bodyXSmall"
          className="text-slate-200 text-center line-clamp-1"
        >
          {name.split("#")[0]}
        </Text>
      </div>
    </div>
  </Link>
);

export default PlayerCard;
