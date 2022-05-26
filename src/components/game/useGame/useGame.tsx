import React, { useEffect, useState } from "react";
import { Map } from "../../../game/map/Map";
import { useSnake } from "../snake/useSnake";
import { Snake } from "../../../game/snake/Snake";

export type GameContextType = {
  map: Map;
  snake: useSnake;
  tick: number;
  isOver: boolean;
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
  const [isOver, setIsOver] = useState(false);

  const restart = () => {
    const newMap = new Map();
    setMap(newMap);
    snake.setSnake(new Snake(newMap));
    setTick(1);
    snake.setTick(1);
    setIsOver(false);
  };

  const snake = useSnake({ map, tick, isOver, restart });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTick(tick + 1);
    }, 20);

    return () => clearInterval(intervalId);
  }, [tick]);

  useEffect(() => {
    if (snake.snake.isDead) {
      return setIsOver(true);
    }
  }, [snake.tick]);

  useEffect(() => {
    if (map.getTile(snake.snake.head.position)?.hasApple) {
      snake.snake.eatApple();
      map.placeApple();
    }
  }, [snake.tick]);

  return (
    <GameContext.Provider value={{ map, tick, snake, isOver, restart }}>
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
