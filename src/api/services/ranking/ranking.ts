import { BASE_URL } from "@/api";
import endpoints from "@/api/utils/endpoints";
import { RemoteRanking } from "@/types";

import { getMatches } from "../matches";
import { getTeams } from "../teams";

import { rankingAdapter } from "./utils/adapters";

export const getRanking = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.ranking}`);
  const data = (await res.json()) as RemoteRanking[];

  const teams = await getTeams();
  const matches = await getMatches();

  return data.map((item) => rankingAdapter(item, teams, matches));
};
