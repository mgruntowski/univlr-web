import { Match } from "./matches.module";
import { Team } from "./teams.module";

export interface RemoteRanking {
  NOTA_FINAL: number;
  anomaly_score: number;
  borda_score: number;
  ci_lower: number;
  ci_upper: number;
  consistency: number;
  games_count: number;
  incerteza: number;
  is_anomaly: boolean;
  pca_score: number;
  pos_r_bt_pois: number;
  pos_r_colley: number;
  pos_r_elo_final: number;
  pos_r_elo_mov: 1;
  pos_r_massey: number;
  pos_r_pagerank: number;
  pos_ts_score: number;
  r_bt_pois: number;
  r_bt_pois_z: number;
  r_colley: number;
  r_colley_z: number;
  r_elo_final: number;
  r_elo_final_z: number;
  r_elo_mov: number;
  r_elo_mov_z: number;
  r_massey: number;
  r_massey_z: number;
  r_pagerank: number;
  r_pagerank_z: number;
  rating_ajustado: number;
  rating_integrado: number;
  sos_score: number;
  team: string;
  ts_score: number;
  ts_score_z: number;
}

export interface RankingMatch extends Match {
  isVictory: boolean;
}

export interface Ranking {
  score: number;
  team: Team;
  matches: RankingMatch[];
  matchesCount: number;
}
