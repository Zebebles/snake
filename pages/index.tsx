import type { NextPage } from "next";
import { PageLayout } from "../src/components/layout/pageLayout/PageLayout";
import { Map } from "../src/components/game/map/Map";
import { useGameContext } from "../src/components/game/useGame/useGame";
import { Backdrop } from "@mui/material";
import { GameOver } from "../src/components/gameOver/GameOver";

const Home: NextPage<{ title: string }> = ({ title }) => {
  const { isOver, hasStarted } = useGameContext();

  return (
    <>
      <Backdrop open={isOver || !hasStarted} style={{ zIndex: 10 }}>
        <GameOver title={title} />
      </Backdrop>
      <PageLayout title={title}>
        <Map />
      </PageLayout>
    </>
  );
};

export const getStaticProps = async () => {
  return { props: { title: "Le Snek" } };
};

export default Home;
