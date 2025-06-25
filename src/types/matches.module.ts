import { DateValue } from "./general.module";
import { Team } from "./teams.module";

export type MatchTeam = Team & {
  score: number;
  agents: [string, string, string, string, string];
};

export interface RemoteMatch {
  agente1: string;
  agente2: string;
  agente3: string;
  agente4: string;
  agente5: string;
  campeonato: string;
  date: string;
  equipe_referente: string;
  fase: string;
  idPartida: string;
  mapa: string;
  score_i: number;
  score_j: number;
  team_i: string;
  team_j: string;
  time: string;
}

export interface Match {
  id: string;
  tournament: string;
  date: DateValue;
  map: string;
  round: string;
  teamA: MatchTeam;
  teamB: MatchTeam;
}
