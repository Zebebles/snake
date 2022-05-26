import { Direction, SnakePart } from "../snake/Snake";
import { Position } from "../map/Map";

export class Tile {
  public position: Position;
  public hasApple: boolean;
  public snakePartDirection: Direction;
  public snakePart: SnakePart;
  public snakeImgSrc: string | undefined;

  constructor(position: Position) {
    this.position = position;
    this.hasApple = false;
    this.snakePartDirection = Direction.NONE;
    this.snakePart = SnakePart.NONE;
  }

  public areYou(position: Position): boolean {
    return this.position.x === position.x && this.position.y === position.y;
  }

  public get isEmpty() {
    return !this.hasApple && this.snakePart === SnakePart.NONE;
  }
}
