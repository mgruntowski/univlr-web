"use client";

import { useState } from "react";

import { RankingPlacement } from "@/types";
import { Button, Row } from "@/ui/atoms";

import { RankingPlacementItem } from "./components";
import { RankingPlacementsListProps } from "./types";

const RankingPlacementsList: React.FC<RankingPlacementsListProps> = ({
  placements,
}) => {
  const [isAdvancedScoresEnabled, setIsAdvancedScoresEnabled] = useState(false);

  const toggleAdvancedScores = () => {
    setIsAdvancedScoresEnabled((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <Row justifyContent="end" className="hidden xl:flex">
        <Button variant="ghost" onClick={toggleAdvancedScores}>
          {isAdvancedScoresEnabled ? "Desativar" : "Ativar"} scores detalhados
        </Button>
      </Row>

      {placements?.map((placement: RankingPlacement) => (
        <RankingPlacementItem
          key={placement.team.id}
          index={placement.position}
          points={placement.score}
          matchesCount={placement.matchesCount}
          team={placement.team}
          scores={placement.scores}
          isAdvancedScoresEnabled={isAdvancedScoresEnabled}
          isNew={placement.isNew}
          variation={placement.variation}
        />
      ))}
    </div>
  );
};

export default RankingPlacementsList;
