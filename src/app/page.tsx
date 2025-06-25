import { getRanking } from "@/api/services";
import { Ranking } from "@/types";
import { Text } from "@/ui/atoms";
import { TeamCardRow } from "@/ui/molecules";

const Home: React.FC = async () => {
  const ranking = await getRanking();

  return (
    <div className="min-h-screen px-8 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col items-center justify-center py-10">
        <Text variant="titleLarge" bold className="text-center">
          Ranking Universitário de Valorant
        </Text>
      </header>

      <main>
        <ul className="flex flex-col gap-1 w-full">
          {ranking.map((item: Ranking, index: number) => (
            <TeamCardRow
              key={index}
              index={index + 1}
              name={item.team.name}
              university={item.team.university}
              points={item.score}
              imageUrl={item.team.imageUrl}
              matches={item.matches}
              matchesCount={item.matchesCount}
            />
          ))}
        </ul>
      </main>

      <footer className="flex flex-col items-center justify-center py-8">
        <Text variant="bodySmall" className="text-slate-400">
          calculations, api, and data collection by kmyzth
        </Text>

        <Text variant="bodySmall" className="text-slate-400">
          website by kick
        </Text>

        <Text variant="bodySmall" className="text-slate-400">
          (:
        </Text>
      </footer>
    </div>
  );
};

export default Home;
