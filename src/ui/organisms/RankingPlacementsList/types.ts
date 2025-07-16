import { DateValue, RankingPlacement, Snapshot } from "@/types";

export type RankingPlacementsListProps = {
  placements?: RankingPlacement[];
  lastUpdate: DateValue;
  snapshots: Snapshot[];
};
