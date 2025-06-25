import { createDateValue } from "@/api/utils/functions";
import { Match, RemoteMatch, Team } from "@/types";

import { TOURNAMENT_MAP } from "./constants";

export const matchAdapter = (
  matchA: RemoteMatch,
  matchB: RemoteMatch,
  teams: Team[]
): Match => {
  const { idPartida, campeonato, mapa, team_i } = matchA;
  const { team_j } = matchB;

  return {
    id: idPartida,
    tournament:
      TOURNAMENT_MAP[campeonato as keyof typeof TOURNAMENT_MAP] ?? campeonato,
    map: mapa,
    date: createDateValue(matchA.date),
    round: matchA.fase,
    teamA: {
      score: matchA.score_i,
      agents: [
        matchA.agente1,
        matchA.agente2,
        matchA.agente3,
        matchA.agente4,
        matchA.agente5,
      ],
      ...teams.find((team) => team.slug === team_i)!,
    },
    teamB: {
      score: matchB.score_j,
      agents: [
        matchB.agente1,
        matchB.agente2,
        matchB.agente3,
        matchB.agente4,
        matchB.agente5,
      ],
      ...teams.find((team) => team.slug === team_j)!,
    },
  };
};
