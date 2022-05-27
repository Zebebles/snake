import { Position } from "../map/Map";

export class Tile {
  public position: Position;

  constructor(position: Position) {
    this.position = position;
  }

  public areYou(position?: Position): boolean {
    if (!position) return false;
    return this.position.x === position.x && this.position.y === position.y;
  }
}
