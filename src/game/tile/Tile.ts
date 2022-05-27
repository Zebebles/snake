import { Position } from "../map/Map";

export class Tile {
  public position: Position;
  public hasApple: boolean;

  constructor(position: Position) {
    this.position = position;
    this.hasApple = false;
  }

  public areYou(position: Position): boolean {
    return this.position.x === position.x && this.position.y === position.y;
  }

  public get isEmpty() {
    return !this.hasApple;
  }
}
