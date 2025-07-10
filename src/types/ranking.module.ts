import { DateValue } from "./general.module";
import { Team } from "./teams.module";

export interface AdvancedScores {
  borda: number;
  bradley_terry: number;
  colley: number;
  consistency: number;
  elo: number;
  elo_mov: number;
  integrado: number;
  massey: number;
  pagerank: number;
  pca: number;
  sos: number;
  trueskill: number;
}

export interface RemoteRanking {
  cached: boolean;
  last_update: string;
  limit?: number;
  ranking: {
    anomaly: {
      is_anomaly: boolean;
      score: number;
    };
    ci_lower: number;
    ci_upper: number;
    games_count: number;
    incerteza: number;
    nota_final: number;
    posicao: 1;
    scores: AdvancedScores;
    tag: string;
    team: string;
    team_id: number;
    university: string;
    variacao: number;
    is_new: boolean;
  }[];
}

export interface RankingPlacement {
  anomaly: {
    isAnomaly: boolean;
    score: number;
  };
  ciLower: number;
  ciUpper: number;
  matchesCount: number;
  score: number;
  position: number;
  scores: AdvancedScores;
  team: Team;
  isNew: boolean;
  variation: number;
}

export interface Ranking {
  lastUpdate: DateValue;
  placements: RankingPlacement[];
}
