import { AdvancedScores, Team } from "@/types";

export type RankingPlacementItemProps = {
  index: number;
  points: number;
  matchesCount: number;
  team: Team;
  scores: AdvancedScores;
};
