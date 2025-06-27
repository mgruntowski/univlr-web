import Image from "next/image";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Row, Text } from "@/ui/atoms";

import { TeamCardRowProps } from "./types";

const TeamCardRow: React.FC<TeamCardRowProps> = ({
  index,
  name,
  universityTag,
  points,
  imageUrl,
  matchesCount,
  isOpen,
  isCollapsible,
}) => (
  <Row className="items-center justify-between gap-4 bg-slate-900 px-2 py-1 w-full">
    <Row className="items-center gap-2">
      <div className="w-3 py-0.25 bg-sky-700 rounded-sm flex items-center justify-center sm:w-4">
        <Text variant="bodySmall" bold>
          {index}
        </Text>
      </div>

      <div className="w-4 h-4 flex items-center justify-center sm:w-6 sm:h-6">
        <Image
          src={imageUrl}
          alt={name}
          width={48}
          height={48}
          className="object-contain w-4 h-4 sm:w-6 sm:h-6"
        />
      </div>

      <div>
        <Text variant="bodyLarge">{name}</Text>
        <Text variant="bodySmall" className="text-slate-400">
          {universityTag}
        </Text>
      </div>

      <Text variant="bodySmall" className="text-slate-400 hidden sm:block">
        ({matchesCount} {matchesCount === 1 ? "partida" : "partidas"})
      </Text>
    </Row>

    <Row className="gap-2 items-center">
      <Text variant="bodyLarge">{points.toFixed(2)}</Text>

      {isCollapsible && (
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      )}
    </Row>
  </Row>
);

export default TeamCardRow;
