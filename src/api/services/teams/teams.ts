import { BASE_URL } from "@/api";
import endpoints from "@/api/utils/endpoints";
import { RemoteTeam } from "@/types";

import { teamAdapter } from "./utils/adapters";

export const getTeams = async () => {
  const res = await fetch(`${BASE_URL}${endpoints.teams}`);
  const data = (await res.json()) as RemoteTeam[];

  return data.map(teamAdapter);
};
