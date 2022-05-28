import React, { useEffect, useState } from "react";
import { Map, Position } from "../../../game/map/Map";
import { useSnake } from "../useSnake/useSnake";
import { Snake } from "../../../game/snake/Snake";
import { Tile } from "../../../game/tile/Tile";
import useInterval from "use-interval";

export type GameContextType = {
  map: Map;
  snake: useSnake;
  applePosition: Position | undefined;
  placeApple: () => void;
  score: number;
  tick: number;
  isOver: boolean;
  setIsOver: React.Dispatch<React.SetStateAction<boolean>>;
  hasStarted: boolean;
  setHasStarted: React.Dispatch<React.SetStateAction<boolean>>;
  restart: () => void;
};

export const GameContext = React.createContext<GameContextType | null>(null);

export const GameContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [map, setMap] = useState<Map>(new Map());
  const [tick, setTick] = useState(1);
  const [applePosition, setApplePosition] = useState<Position>();
  const [isOver, setIsOver] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const restart = () => {
    const newMap = new Map();
    setMap(newMap);
    snake.setSnake(new Snake(newMap));
    setTick(1);
    snake.setTick(1);
    setIsOver(false);
  };

  const placeApple = () => {
    const isTileEmpty = (tile?: Tile): boolean => {
      if (!tile) return false;
      return !Boolean(snake.snake.findSection(tile.position));
    };

    let nextAppleTile: Tile | undefined = map.randomTile();

    while (!nextAppleTile || !isTileEmpty(nextAppleTile)) {
      nextAppleTile = map.randomTile();
    }

    setApplePosition(nextAppleTile.position);
  };

  useInterval(() => {
    if (!isOver && hasStarted) {
      setTick(tick + 1);
    }
  }, 10);

  useEffect(() => {
    if (!isOver) {
      placeApple();
    }
  }, [isOver]);

  useEffect(() => {
    if (snake.snake.isDead && !isOver) {
      setIsOver(true);
    }
  }, [tick]);

  const snake = useSnake({
    map,
    tick,
    applePosition,
    placeApple,
    isOver,
    setIsOver,
    hasStarted,
    setHasStarted,
    restart,
  });

  const score = (snake.snake.length - 5) * 5;

  return (
    <GameContext.Provider
      value={{
        map,
        tick,
        snake,
        score,
        applePosition,
        placeApple,
        isOver,
        setIsOver,
        hasStarted,
        setHasStarted,
        restart,
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
