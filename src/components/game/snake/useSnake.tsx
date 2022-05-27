import React, { useEffect, useState } from "react";
import { Snake } from "../../../game/snake/Snake";
import { GameContextType } from "../useGame/useGame";
import { useController } from "../controller/useController";

export type useSnake = {
  snake: Snake;
  setSnake: React.Dispatch<React.SetStateAction<Snake>>;
  tick: number;
  setTick: React.Dispatch<React.SetStateAction<number>>;
};

export interface useSnakeProps extends Omit<GameContextType, "snake"> {}

export const useSnake = (game: useSnakeProps) => {
  const [snake, setSnake] = useState<Snake>(new Snake(game.map));
  const [tick, setTick] = useState(1);
  const snakeContext = { snake, setSnake, tick, setTick };

  useController({ snakeContext, game });

  useEffect(() => {
    if (game.tick % snake.movePerTicks === 0) {
      snake.move();
      setTick(tick + 1);
    }
  }, [game.tick]);

  useEffect(() => {
    if (snake.head.isAtPosition(game.map.appleTile?.position)) {
      snake.eatApple();
      game.map.placeApple();
    }
  }, [tick]);

  return snakeContext;
};
