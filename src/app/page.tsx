import mainApi from "@/api";
import { Text } from "@/ui/atoms";
import { RankingPlacementsList } from "@/ui/organisms";

const Home: React.FC = async () => {
  const ranking = await mainApi.getRanking();

  return (
    <div className="min-h-screen px-2 font-[family-name:var(--font-geist-sans)] sm:px-4 lg:px-8">
      <header className="flex flex-col items-center justify-center py-4 sm:py-8 lg:py-10">
        <Text variant="titleLarge" bold className="text-center">
          Ranking Universitário de Valorant
        </Text>
      </header>

      <main>
        <RankingPlacementsList placements={ranking.placements} />
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
