import type { NextPage } from "next";
import { PageLayout } from "../src/components/layout/pageLayout/PageLayout";
import { Map } from "../src/components/game/map/Map";
import { GameContextProvider } from "../src/components/game/useGame/useGame";

const Home: NextPage<{ title: string }> = ({ title }) => {
  return (
    <GameContextProvider>
      <PageLayout title={title}>
        <Map />
      </PageLayout>
    </GameContextProvider>
  );
};

export const getStaticProps = async () => {
  return { props: { title: "Snek" } };
};

export default Home;
