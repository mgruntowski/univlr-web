import { RemoteTeam, Team } from "@/types";

export const teamAdapter = (team: RemoteTeam): Team => {
  const { id, name, tag, university } = team;

  return {
    id,
    name: tag,
    imageUrl: `/images/team_logos/${name}.png`,
    slug: name,
    university: university.toUpperCase(),
    tag,
  };
};
