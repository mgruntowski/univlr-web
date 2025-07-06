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
}) => (
  <Link href={`/team/${team.slug}`}>
    <li className="cursor-pointer">
      <TeamCardRow
        index={index}
        name={team.name}
        universityTag={team.universityTag}
        points={points}
        imageUrl={team.imageUrl}
        matchesCount={matchesCount}
        shouldDisplayAdvancedScores={isAdvancedScoresEnabled}
        advancedScores={scores}
      />
    </li>
  </Link>
);

export default RankingPlacementItem;
