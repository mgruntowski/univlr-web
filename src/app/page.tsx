import mainApi from "@/api";
import { RankingPlacementsList } from "@/ui/organisms";

import { HomeFooter, HomeHeader } from "./components";

const Home: React.FC = async () => {
  const ranking = await mainApi.getRanking();

  return (
    <div className="min-h-screen px-2 font-[family-name:var(--font-geist-sans)] sm:px-4 lg:px-8">
      <HomeHeader lastUpdate={ranking.lastUpdate.formatted} />

      <main>
        <RankingPlacementsList placements={ranking.placements} />
      </main>

      <HomeFooter />
    </div>
  );
};

export default Home;
