import React, { useEffect, useState } from "react";
import { Snake } from "../../../game/snake/Snake";
import { GameContextType } from "../useGame/useGame";
import { useController } from "../useController/useController";

export type useSnake = {
  snake: Snake;
  setSnake: React.Dispatch<React.SetStateAction<Snake>>;
  tick: number;
  setTick: React.Dispatch<React.SetStateAction<number>>;
};

export interface useSnakeProps
  extends Omit<GameContextType, "snake" | "score"> {}

export const useSnake = (game: useSnakeProps) => {
  const [snake, setSnake] = useState<Snake>(new Snake(game.map));
  const [tick, setTick] = useState(1);
  const snakeContext = { snake, setSnake, tick, setTick };

  useController({ snakeContext, game });

  useEffect(() => {
    if (game.tick % snake.movePerTicks === 0) {
      if (!snake.isDead) {
        snake.move();
        setTick(tick + 1);
      }
    }
  }, [game.tick]);

  /* Detect snake head / apple intersection */
  useEffect(() => {
    if (snake.head.isAtPosition(game.applePosition)) {
      snake.eatApple();
      game.placeApple();
    }
  }, [game.tick]);

  return snakeContext;
};
