import React, { useEffect, useState } from "react";
import { Direction, Snake } from "../../../game/snake/Snake";
import { GameContextType } from "../useGame/useGame";

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

  useEffect(() => {
    if (tick % snake.movePerTicks === 0) {
      snake.move();
    }
    setTick(tick + 1);
  }, [game.tick]);

  useEffect(() => {
    const controlListener = (event: KeyboardEvent) => {
      if (!game.isOver) {
        switch (event.key) {
          case "ArrowUp":
            return snake.changeDirection(Direction.UP);
          case "ArrowRight":
            return snake.changeDirection(Direction.RIGHT);
          case "ArrowDown":
            return snake.changeDirection(Direction.DOWN);
          case "ArrowLeft":
            return snake.changeDirection(Direction.LEFT);
        }
      } else {
        if (event.key === "Enter") return game.restart();
      }
    };

    document.addEventListener("keydown", controlListener);

    return () => document.removeEventListener("keydown", controlListener);
  }, [game.isOver]);

  return {
    snake,
    setSnake,
    tick,
    setTick,
  };
};
