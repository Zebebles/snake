import { SnakePart } from "../snake/Snake";
import { Position } from "../map/Map";

export class Tile {
  public position: Position;
  public hasApple: boolean;
  public snakePart: SnakePart;

  constructor(position: Position) {
    this.position = position;
    this.hasApple = false;
    this.snakePart = SnakePart.NONE;
  }

  public get isEmpty() {
    return !this.hasApple && this.snakePart === SnakePart.NONE;
  }

  public get hasSnake() {
    return this.snakePart === SnakePart.NONE;
  }
}
