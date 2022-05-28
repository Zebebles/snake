import React, { useEffect, useRef } from "react";
import { Direction } from "../../../game/snake/Snake";
import { GameContextType } from "../useGame/useGame";
import { useSnake } from "../useSnake/useSnake";

export type useController = {};

export interface useControllerProps {
  game: Omit<GameContextType, "snake" | "score">;
  snakeContext: useSnake;
}

type GameMove = () => void;

export const useController = ({ snakeContext, game }: useControllerProps) => {
  const { snake, tick: snakeTick } = snakeContext;
  const moves = useRef<GameMove[]>([]);
  const haveMovedThisTick = useRef(false);

  const addMove = (move: GameMove) => {
    moves.current.push(move);
  };

  useEffect(() => {
    if (haveMovedThisTick.current) return;

    const move = moves.current.pop();
    if (move) {
      haveMovedThisTick.current = true;
      move();
    }
  }, [game.tick]);

  useEffect(() => {
    haveMovedThisTick.current = false;
  }, [snakeTick]);

  useEffect(() => {
    const controlListener = (event: KeyboardEvent) => {
      if (event.key === "Enter")
        return game.hasStarted ? game.restart() : game.setHasStarted(true);

      if (game.isOver) return;

      switch (event.key) {
        case "ArrowUp":
          return addMove(() => snake.changeDirection(Direction.UP));
        case "ArrowRight":
          return addMove(() => snake.changeDirection(Direction.RIGHT));
        case "ArrowDown":
          return addMove(() => snake.changeDirection(Direction.DOWN));
        case "ArrowLeft":
          return addMove(() => snake.changeDirection(Direction.LEFT));
      }
    };

    document.addEventListener("keydown", controlListener);

    return () => document.removeEventListener("keydown", controlListener);
  }, [game.isOver]);
};
