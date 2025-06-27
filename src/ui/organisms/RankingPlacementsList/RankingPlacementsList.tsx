import { RankingPlacement } from "@/types";

import { RankingPlacementItem } from "./components";
import { RankingPlacementsListProps } from "./types";

const RankingPlacementsList: React.FC<RankingPlacementsListProps> = ({
  placements,
}) => (
  <ul className="flex flex-col gap-1 w-full">
    {placements?.map((placement: RankingPlacement) => (
      <RankingPlacementItem
        key={placement.team.id}
        index={placement.position}
        points={placement.score}
        matchesCount={placement.matchesCount}
        team={placement.team}
        scores={placement.scores}
      />
    ))}
  </ul>
);

export default RankingPlacementsList;
