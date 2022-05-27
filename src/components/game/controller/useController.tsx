import React, { useEffect, useRef } from "react";
import { Direction } from "../../../game/snake/Snake";
import { GameContextType } from "../useGame/useGame";
import { useSnake } from "../snake/useSnake";

export type useController = {};

export interface useControllerProps {
  game: Omit<GameContextType, "snake" | "score">;
  snakeContext: useSnake;
}

type GameMove = () => void;

export const useController = ({ snakeContext, game }: useControllerProps) => {
  const { snake, tick: snakeTick } = snakeContext;
  const moves = useRef<GameMove[]>([]);

  const addMove = (move: GameMove) => {
    moves.current.push(move);
  };

  useEffect(() => {
    const move = moves.current.pop();
    if (move) {
      move();
    }
  }, [snakeTick]);

  useEffect(() => {
    const controlListener = (event: KeyboardEvent) => {
      if (!game.isOver) {
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
      } else {
        if (event.key === "Enter") return game.restart();
      }
    };

    document.addEventListener("keydown", controlListener);

    return () => document.removeEventListener("keydown", controlListener);
  }, [game.isOver]);
};
