import mainApi from "@/api";
import { Page, Row, Tabs } from "@/ui/atoms";
import { TabsContent, TabsList, TabsTrigger } from "@/ui/atoms/Tabs/components";
import { MatchRow, PlayerCard, TeamHeader } from "@/ui/molecules";

import { TEAM_TABS } from "./utils/constants";
// FIX: use composition instead of importing components directly

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
        state={teamData.state}
      />

      <Tabs defaultValue="players">
        <TabsList>
          {TEAM_TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="players">
          <Row gap="1">
            {players.map((player) => (
              <PlayerCard key={player.id} name={player.nick} />
            ))}
          </Row>
        </TabsContent>

        <TabsContent value="matches">
          <div className="flex flex-col gap-2">
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
        </TabsContent>
      </Tabs>

      {/* <div className="flex flex-col gap-2">
        <Row className="gap-2 flex-wrap">
          {players.map((player) => (
            <PlayerCard key={player.id} name={player.nick} />
          ))}
        </Row>
      </div> */}

      {/* <div className="flex flex-col gap-2">
        <Row className="gap-2 items-center">
          <Text size="titleSmall" weight="bold">
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
      </div> */}
    </Page>
  );
};

export default TeamsPage;
