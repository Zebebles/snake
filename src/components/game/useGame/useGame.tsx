import React, { useState } from "react";
import { Game } from "../../../game/Game";
import useInterval from "use-interval";

export type GameContextType = {
  game: Game;
  restart: () => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

export const GameContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [game, setGame] = useState(new Game());

  useInterval(() => {
    game.tick();
  }, 300);

  return (
    <GameContext.Provider
      value={{
        game,
        restart: () => setGame(new Game()),
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = React.useContext(GameContext);
  if (!context) {
    throw new Error("useCameContext must be used within a GameContextProvider");
  }
  return context;
};
