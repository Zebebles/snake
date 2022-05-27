import { Tile } from "../tile/Tile";
export const MAP_HEIGHT = parseInt(
  process.env.NEXT_PUBLIC_GAME_MAP_HEIGHT ?? "0"
);
export const MAP_WIDTH = parseInt(
  process.env.NEXT_PUBLIC_GAME_MAP_WIDTH ?? "0"
);

export interface Position {
  x: number;
  y: number;
}

export class Map {
  private readonly _height: number;
  private readonly _width: number;
  public tiles: Tile[] = [];

  constructor() {
    this._height = MAP_HEIGHT;
    this._width = MAP_WIDTH;
    this._generateTiles();
  }

  private _generateTiles() {
    const tiles: Tile[] = [];

    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        tiles.push(new Tile({ x, y }));
      }
    }
    this.tiles = tiles;
  }

  public randomTile() {
    const randomIndex = (): number => {
      const min = 1;
      const max = MAP_HEIGHT - 2;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return this.getTile({ x: randomIndex(), y: randomIndex() });
  }

  public isOutOfBounds(position: Position) {
    return (
      position.x < 0 ||
      position.x >= MAP_WIDTH ||
      position.y < 0 ||
      position.y >= MAP_HEIGHT
    );
  }

  public getTile(position: Position): Tile | undefined {
    const index = position.x * position.y;
    return this.tiles[index];
  }
}
