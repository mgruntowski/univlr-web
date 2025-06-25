import { BASE_URL } from "@/api/utils/constants";
import endpoints from "@/api/utils/endpoints";
import { Match, RemoteMatch } from "@/types";

import { getTeams } from "../teams";

import { matchAdapter } from "./utils/adapters";

export const getMatches = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.matches}`);
  const data = (await res.json()) as RemoteMatch[];

  const teams = await getTeams();

  const matches: Match[] = [];

  for (let i = 0; i < data.length; i += 2) {
    const matchA = data[i];
    const matchB = data[i + 1];
    matches.push(matchAdapter(matchA, matchB, teams));
  }

  return matches;
};
