import mainApi from "@/api";
import { Page, Row, Text } from "@/ui/atoms";
import { MatchRow, PlayerCard, TeamHeader } from "@/ui/molecules";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ team: string }>;
}) => {
  const { team } = await params;
  const teamData = await mainApi.getTeamBySlug(team);

  return {
    title: `${teamData.name} | UniVLR`,
  };
};

export const generateStaticParams = async () => {
  const teams = await mainApi.getTeams();

  return teams.map((team) => ({
    id: team.id,
    team: team.slug,
  }));
};

const TeamsPage: React.FC<{
  params: Promise<{ id: string; team: string }>;
}> = async ({ params }) => {
  const { team } = await params;
  const teamData = await mainApi.getTeamBySlug(team);

  const players = await mainApi.getPlayers(teamData.id);
  const matches = await mainApi.getMatchesByTeamId(teamData.id.toString());

  const matchesWithVictory = matches.map((match) => ({
    ...match,
    isVictory: match.teamMatchInfoA.team.id === teamData.id,
  }));

  return (
    <Page className="flex flex-col gap-2">
      <TeamHeader
        name={teamData.name}
        tag={teamData.tag}
        imageUrl={teamData.imageUrl}
        universityTag={teamData.universityTag}
        university={teamData.university}
      />

      <div className="flex flex-col gap-2">
        <Row className="gap-2 flex-wrap">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              name={player.nick}
              imageUrl={teamData.imageUrl}
            />
          ))}
        </Row>
      </div>

      <div className="flex flex-col gap-2">
        <Row className="gap-2 items-center">
          <Text variant="titleSmall" bold>
            Partidas
          </Text>

          <Row className="gap-0.5">
            {matchesWithVictory.slice(0, 5).map(({ id, isVictory }) => (
              <div
                key={id}
                className={`p-0.5 rounded-full w-1 h-1 ${
                  isVictory ? "bg-green-600" : "bg-red-600"
                }`}
              />
            ))}
          </Row>
        </Row>

        <ul className="flex flex-col gap-1">
          {matchesWithVictory.map((match) => (
            <MatchRow
              key={match.id}
              id={match.id}
              date={match.date}
              round={match.round}
              tournament={match.tournament}
              map={match.map}
              teamMatchInfoA={match.teamMatchInfoA}
              teamMatchInfoB={match.teamMatchInfoB}
              isVictory={match.isVictory}
            />
          ))}
        </ul>
      </div>
    </Page>
  );
};

export default TeamsPage;
