import { RankingMatch } from "@/types";

export type TeamCardRowProps = {
  index: number;
  name: string;
  university: string;
  points: number;
  imageUrl: string;
  matches: RankingMatch[];
  matchesCount: number;
};
