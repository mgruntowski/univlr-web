import Link from "next/link";

import { TeamCardRow } from "@/ui/molecules";

import { RankingPlacementItemProps } from "./types";

const RankingPlacementItem: React.FC<RankingPlacementItemProps> = ({
  index,
  points,
  matchesCount,
  team,
  scores,
  isAdvancedScoresEnabled,
  isNew,
  variation,
}) => (
  <Link href={`/team/${team.slug}`}>
    <TeamCardRow
      index={index}
      name={team.name}
      universityTag={team.universityTag}
      points={points}
      imageUrl={team.imageUrl}
      matchesCount={matchesCount}
      shouldDisplayAdvancedScores={isAdvancedScoresEnabled}
      advancedScores={scores}
      isNew={isNew}
      variation={variation}
    />
  </Link>
);

export default RankingPlacementItem;
