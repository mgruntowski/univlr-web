import { RemoteTeam, Team } from "@/types";

export const teamAdapter = (team: RemoteTeam): Team => {
  const {
    id,
    name,
    tag,
    slug,
    university,
    university_tag,
    instagram,
    twitch,
    estado,
    logo,
  } = team;

  return {
    id,
    name,
    imageUrl: logo,
    slug,
    university,
    tag,
    universityTag: university_tag,
    uf: estado,
    instagram,
    twitch,
  };
};
