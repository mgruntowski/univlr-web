import { AdvancedScores } from "@/types";

export type TeamCardRowProps = {
  index: number;
  name: string;
  universityTag: string;
  points: number;
  imageUrl: string;
  matchesCount: number;
  shouldDisplayAdvancedScores?: boolean;
  advancedScores?: AdvancedScores;
};
