"use client";

import { useMemo, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { RankingPlacement } from "@/types";
import { Button, Row, Text } from "@/ui/atoms";

import { RankingPlacementItem } from "./components";
import { RankingPlacementsListProps } from "./types";

const RankingPlacementsList: React.FC<RankingPlacementsListProps> = ({
  placements,
  lastUpdate,
  snapshots,
}) => {
  const [currentSnapshot, setCurrentSnapshot] = useState(-1);

  const currentPlacements = useMemo(() => {
    if (currentSnapshot === -1) return placements;
    return snapshots[currentSnapshot].ranking;
  }, [currentSnapshot, snapshots, placements]);

  const currentLastUpdate = useMemo(() => {
    if (currentSnapshot === -1) return lastUpdate;
    return snapshots[currentSnapshot].createdAt;
  }, [currentSnapshot, snapshots, lastUpdate]);

  const goToOlderSnapshot = () => {
    setCurrentSnapshot((prev) => prev + 1);
  };

  const goToNewerSnapshot = () => {
    setCurrentSnapshot((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <Row justifyContent="between">
        <Text size="bodyMedium" weight="bold">
          Ranking calculado em: {currentLastUpdate.formatted}
        </Text>

        <Row gap="1">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToOlderSnapshot}
            disabled={currentSnapshot === snapshots.length - 1}
          >
            <ChevronLeft size={12} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNewerSnapshot}
            disabled={currentSnapshot === -1}
          >
            <ChevronRight size={12} />
          </Button>
        </Row>
      </Row>

      {currentPlacements?.map((placement: RankingPlacement) => (
        <RankingPlacementItem
          key={placement.team.id}
          index={placement.position}
          points={placement.score}
          matchesCount={placement.matchesCount}
          team={placement.team}
          scores={placement.scores}
          isNew={placement.isNew}
          variation={placement.variation}
          scoreVariation={placement.scoreVariation}
        />
      ))}
    </div>
  );
};

export default RankingPlacementsList;
