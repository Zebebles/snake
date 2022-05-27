import { MAP_HEIGHT, MAP_WIDTH, Position } from "../map/Map";

export class Tile {
  public position: Position;
  public isWall: boolean;
  public border: Border | undefined;

  constructor(position: Position) {
    this.position = position;
    this.isWall =
      this.position.x === 0 ||
      this.position.x === MAP_WIDTH - 1 ||
      this.position.y === 0 ||
      this.position.y === MAP_HEIGHT - 1;
    this._setBorder();
  }

  private _setBorder() {
    this.border = {
      borderTop: this.position.x === 0 ? "1px solid white" : "",
      borderRight: this.position.y === MAP_WIDTH - 1 ? "1px solid white" : "",
      borderBottom: this.position.x === MAP_HEIGHT - 1 ? "1px solid white" : "",
      borderLeft: this.position.y === 0 ? "1px solid white" : "",
    };
  }

  public areYou(position?: Position): boolean {
    if (!position) return false;
    return this.position.x === position.x && this.position.y === position.y;
  }
}

export type Border = {
  borderTop: string;
  borderRight: string;
  borderBottom: string;
  borderLeft: string;
};
