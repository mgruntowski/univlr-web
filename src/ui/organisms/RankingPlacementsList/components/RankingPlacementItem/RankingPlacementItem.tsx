"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";

import Lottie from "lottie-react";

import mainApi from "@/api";
import loadingDotsJumping from "@/assets/animations/loading-dots-jumping.json";
import { MatchRow, TeamCardRow } from "@/ui/molecules";

import { RankingPlacementItemProps } from "./types";

const RankingPlacementItem: React.FC<RankingPlacementItemProps> = ({
  index,
  points,
  matchesCount,
  team,
  scores,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCollapse = () => {
    setIsOpen((open) => !open);
  };

  const { data: matches, isLoading: isLoadingMatches } =
    mainApi.useGetMatchesByTeamIdQuery({
      teamId: team.id.toString(),
      skip: !isOpen,
    });

  const shouldDisplayAdvancedScores =
    useSearchParams().get("advanced") === "true";

  return (
    <>
      <li onClick={handleCollapse} className="cursor-pointer">
        <TeamCardRow
          index={index}
          name={team.name}
          universityTag={team.universityTag}
          points={points}
          imageUrl={team.imageUrl}
          matchesCount={matchesCount}
          isCollapsible
          isOpen={isOpen}
          shouldDisplayAdvancedScores={shouldDisplayAdvancedScores}
          advancedScores={scores}
        />
      </li>

      {isOpen && (
        <ul className="bg-slate-800 py-1 w-full flex flex-col gap-0.5 overflow-x-auto">
          <>
            {isLoadingMatches && (
              <Lottie
                animationData={loadingDotsJumping}
                loop
                className="h-[100px] w-full"
              />
            )}

            {matches?.map((match) => (
              <MatchRow
                key={match.id}
                {...match}
                isVictory={match.teamMatchInfoA.team.id === team.id}
              />
            ))}
          </>
        </ul>
      )}
    </>
  );
};

export default RankingPlacementItem;
