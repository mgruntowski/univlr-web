import { BASE_URL } from "@/api";
import endpoints from "@/api/utils/endpoints";
import { RemoteRanking } from "@/types";

import { getTeams } from "../teams";

import { rankingAdapter } from "./utils/adapters";

export const getRanking = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.ranking}`, {
    next: {
      revalidate: 60 * 60 * 2, // 2 hours
    },
  });
  const data = (await res.json()) as RemoteRanking;

  const teams = await getTeams();

  return rankingAdapter(data, teams);
};
