import Image from "next/image";

import { Row, Text } from "@/ui/atoms";

import { MatchRowProps } from "./types";

const MatchRow: React.FC<MatchRowProps> = ({
  id,
  teamA,
  teamB,
  isVictory,
  date,
  round,
  tournament,
  map,
}) => {
  return (
    <li className="grid grid-cols-[200px_1fr_200px] justify-between w-full bg-slate-800 px-2">
      <div className="flex flex-1/8 flex-col justify-center items-start">
        <Text variant="bodyMedium">
          {tournament} - {round.toUpperCase()}
        </Text>

        <Text variant="bodySmall" bold className="text-slate-400">
          {date.formatted}
        </Text>
      </div>

      <div className="grid grid-cols-[1fr_40px_80px_40px_1fr] items-center justify-center gap-2 h-8">
        <Row className="gap-2 items-center justify-end">
          <Row className="gap-1 h-3">
            {teamA.agents.map((agent) => (
              <Image
                key={`${id}-${teamA.name}-${agent}`}
                src={`/images/agents/${agent}.png`}
                alt={agent}
                width={24}
                height={24}
                className="object-contain w-3 h-3"
              />
            ))}
          </Row>

          <div className="flex flex-col items-end">
            <Text variant="bodySmall" bold>
              {teamA.name}
            </Text>
            <Text variant="bodyXSmall" className="text-slate-400">
              {teamA.university.toUpperCase()}
            </Text>
          </div>
        </Row>

        <div className="min-w-5 min-h-5 flex items-center justify-center">
          <Image
            src={teamA.imageUrl}
            alt={teamA.name}
            width={40}
            height={40}
            className="object-contain w-5 h-5"
          />
        </div>

        <div
          className={`h-full w-10 flex items-center justify-center gap-1 ${
            isVictory ? "bg-green-700" : "bg-red-700"
          }`}
        >
          <div className="flex items-center justify-right w-2">
            <Text variant="bodySmall" bold>
              {teamA.score}
            </Text>
          </div>

          <Text variant="bodySmall">:</Text>

          <div className="flex items-center justify-left w-2">
            <Text variant="bodySmall" bold>
              {teamB.score}
            </Text>
          </div>
        </div>

        <div className="min-w-5 min-h-5 flex items-center justify-center">
          <Image
            src={teamB.imageUrl}
            alt={teamB.name}
            width={40}
            height={40}
            className="object-contain w-5 h-5"
          />
        </div>

        <Row className="gap-2 items-center">
          <div className="flex flex-col items-start">
            <Text variant="bodySmall" bold>
              {teamB.name}
            </Text>
            <Text variant="bodyXSmall" className="text-slate-400">
              {teamB.university.toUpperCase()}
            </Text>
          </div>

          <Row className="gap-1 h-3">
            {teamB.agents.map((agent) => (
              <Image
                key={`${id}-${teamB.name}-${agent}`}
                src={`/images/agents/${agent}.png`}
                alt={agent}
                width={24}
                height={24}
                className="object-contain w-3 h-3"
              />
            ))}
          </Row>
        </Row>
      </div>

      <div className="flex flex-1/8 justify-end items-center">
        <div className="flex items-center justify-center px-1.5 py-1 rounded-sm bg-sky-700">
          <Text variant="bodySmall" bold>
            {map.toUpperCase()}
          </Text>
        </div>
      </div>
    </li>
  );
};

export default MatchRow;
