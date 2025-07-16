import Image from "next/image";
import Link from "next/link";

import { Card, Text } from "@/ui/atoms";

import { PlayerCardProps } from "./types";

const PlayerCard: React.FC<PlayerCardProps> = ({ name, imageUrl }) => (
  <Link
    href={`https://tracker.gg/valorant/profile/riot/${encodeURIComponent(
      name
    )}`}
    target="_blank"
  >
    <Card className="w-[120px] relative group" isClickable>
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image
          src={imageUrl ?? "/images/user-silhouette.png"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-120"
        />
      </div>

      <div className="p-2">
        <Text
          size="bodyXSmall"
          color="gray"
          align="center"
          className="line-clamp-1"
        >
          {name.split("#")[0]}
        </Text>
      </div>
    </Card>
  </Link>
);

export default PlayerCard;
