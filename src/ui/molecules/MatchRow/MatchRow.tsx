import Image from "next/image";

import { Card, Row, Text } from "@/ui/atoms";

import { AgentsRow } from "./components";
import { MatchRowProps } from "./types";

const MatchRow: React.FC<MatchRowProps> = ({
  id,
  date,
  round,
  tournament,
  map,
  teamMatchInfoA,
  teamMatchInfoB,
  isVictory,
}) => (
  <Card>
    <div className="grid grid-cols-[200px_200px_1fr_200px_200px] justify-between items-center w-full">
      <Row className="flex-1/8 items-left gap-1">
        <div
          className="relative h-6 w-[60px] rounded-tl-md rounded-bl-md"
          style={{
            backgroundImage: `url(${tournament.logo})`,
            backgroundSize: "200%",
            backgroundPosition: "right",
          }}
        />

        <div className="flex flex-col justify-center items-start">
          <Text size="bodySmall" weight="bold">
            {date.formatted}
          </Text>

          <Text size="bodyXSmall" color="gray">
            {tournament.name} - {round.toUpperCase()}
          </Text>
        </div>
      </Row>

      <Row gap="1" alignItems="center" justifyContent="end" className="h-3">
        <AgentsRow
          agents={teamMatchInfoA.agents}
          matchId={id}
          teamSlug={teamMatchInfoA.team.slug}
        />
      </Row>

      <div className="grid grid-cols-[1fr_40px_80px_40px_1fr] items-center justify-center gap-1 h-6 xl:gap-2">
        <Text
          size="bodySmall"
          weight="bold"
          align="right"
          title={`${teamMatchInfoA.team.name} - ${teamMatchInfoA.team.universityTag}`}
        >
          {teamMatchInfoA.team.tag}
        </Text>

        <div className="w-4 h-4 flex items-center justify-center xl:w-5 xl:h-5">
          <Image
            src={teamMatchInfoA.team.imageUrl}
            alt={teamMatchInfoA.team.name}
            title={`${teamMatchInfoA.team.name} - ${teamMatchInfoA.team.universityTag}`}
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
            <Text size="bodySmall" weight="bold" color="white">
              {teamMatchInfoA.score}
            </Text>
          </div>

          <Text size="bodySmall">:</Text>

          <div className="flex items-center justify-left w-2">
            <Text size="bodySmall" weight="bold" color="white">
              {teamMatchInfoB.score}
            </Text>
          </div>
        </div>

        <div className="w-4 h-4 flex items-center justify-center xl:w-5 xl:h-5">
          <Image
            src={teamMatchInfoB.team.imageUrl}
            alt={teamMatchInfoB.team.name}
            title={`${teamMatchInfoB.team.name} - ${teamMatchInfoB.team.universityTag}`}
            width={40}
            height={40}
            className="object-contain w-5 h-5"
          />
        </div>

        <Text
          size="bodySmall"
          weight="bold"
          title={`${teamMatchInfoB.team.name} - ${teamMatchInfoB.team.universityTag}`}
        >
          {teamMatchInfoB.team.tag}
        </Text>
      </div>

      <Row className="gap-1 h-3 items-center justify-start">
        <AgentsRow
          agents={teamMatchInfoB.agents}
          matchId={id}
          teamSlug={teamMatchInfoB.team.slug}
        />
      </Row>

      <div className="flex flex-1/8 justify-end items-center">
        {map && (
          <div className="relative h-6 w-[120px] rounded-r-md">
            <Image
              src={`/images/maps/miniature/${map}.webp`}
              alt={map}
              title={map.toUpperCase()}
              fill
              className="object-cover rounded-r-md"
            />

            <div className="absolute bottom-1/2 right-0 w-full translate-y-1/2 flex items-center justify-center bg-gray-800/60 py-0.25">
              <Text size="bodySmall" weight="bold" color="white">
                {map.toUpperCase()}
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  </Card>
);

export default MatchRow;
