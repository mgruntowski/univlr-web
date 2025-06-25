import { RemoteTeam, Team } from "@/types";

export const teamAdapter = (team: RemoteTeam): Team => {
  const { team_name, org, slug } = team;

  return {
    university: org,
    name: slug,
    imageUrl: `/images/team_logos/${team_name}.png`,
    slug: team_name,
  };
};
