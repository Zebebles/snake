import { Map } from "./map/Map";
import { Direction, Snake } from "./snake/Snake";

export const MAP_HEIGHT = parseInt(
  process.env.NEXT_PUBLIC_GAME_MAP_HEIGHT ?? "0"
);
export const MAP_WIDTH = parseInt(
  process.env.NEXT_PUBLIC_GAME_MAP_WIDTH ?? "0"
);

export class Game {
  private readonly _map: Map;
  private readonly _snake: Snake;

  constructor() {
    this._map = new Map({
      height: MAP_HEIGHT,
      width: MAP_WIDTH,
    });

    this._snake = new Snake(this._map);
  }

  public tick() {}

  public initialise() {
    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this._snake.direction = Direction.UP;
          break;
        case "ArrowDown":
          this._snake.direction = Direction.DOWN;
          break;
        case "ArrowLeft":
          this._snake.direction = Direction.LEFT;
          break;
        case "ArrowRight":
          this._snake.direction = Direction.RIGHT;
          break;
      }
    });
  }

  public get map() {
    return this._map;
  }

  public get snake() {
    return this._snake;
  }
}
