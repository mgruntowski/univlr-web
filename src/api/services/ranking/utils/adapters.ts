import { Match, Ranking, RemoteRanking, Team } from "@/types";

export const rankingAdapter = (
  ranking: RemoteRanking,
  teams: Team[],
  matches: Match[]
): Ranking => {
  const { team, NOTA_FINAL, games_count } = ranking;

  return {
    score: NOTA_FINAL,
    team: teams.find((t) => t.slug === team)!,
    matches: matches
      .filter((match) => match.teamA.slug === team || match.teamB.slug === team)
      .sort(
        (a, b) =>
          new Date(b.date.iso).getTime() - new Date(a.date.iso).getTime()
      )
      .map((match) => ({
        ...match,
        teamA: match.teamA.slug === team ? match.teamA : match.teamB,
        teamB: match.teamA.slug === team ? match.teamB : match.teamA,
        isVictory:
          (match.teamA.slug === team &&
            match.teamA.score > match.teamB.score) ||
          (match.teamB.slug === team && match.teamB.score > match.teamA.score),
      })),
    matchesCount: games_count,
  };
};
