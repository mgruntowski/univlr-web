import mainApi from "@/api";
import { Page } from "@/ui/atoms";
import { RankingPlacementsList } from "@/ui/organisms";

import { HomeHeader } from "./components";

const Home: React.FC = async () => {
  const ranking = await mainApi.getRanking();

  return (
    <div className="min-h-screen px-2 font-[family-name:var(--font-geist-sans)] sm:px-4 lg:px-8">
      <Page>
        <HomeHeader lastUpdate={ranking.lastUpdate.formatted} />

        <main>
          <RankingPlacementsList placements={ranking.placements} />
        </main>
      </Page>
    </div>
  );
};

export default Home;
