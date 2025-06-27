import { createDateValue } from "@/api/utils/functions";
import { Match, MatchTeam, RemoteMatch, RemoteMatchTeam } from "@/types";

import { teamAdapter } from "../../teams/utils/adapters";
import { tournamentAdapter } from "../../tournaments/utils/adapters";

export const teamMatchInfoAdapter = (
  teamMatchInfo: RemoteMatchTeam
): MatchTeam => {
  const { id, score, team, agent_1, agent_2, agent_3, agent_4, agent_5 } =
    teamMatchInfo;

  return {
    id,
    score,
    agents: [agent_1, agent_2, agent_3, agent_4, agent_5],
    team: teamAdapter(team),
  };
};

export const matchAdapter = (match: RemoteMatch): Match => {
  const { id, map, round, date, tmi_a, tmi_b, tournament } = match;

  return {
    id,
    map,
    round,
    date: createDateValue(date),
    teamMatchInfoA: teamMatchInfoAdapter(tmi_a),
    teamMatchInfoB: teamMatchInfoAdapter(tmi_b),
    tournament: tournamentAdapter(tournament),
  };
};
