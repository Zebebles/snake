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
  public appleTile: Tile | undefined;
  public tiles: Tile[] = [];

  constructor() {
    this._height = MAP_HEIGHT;
    this._width = MAP_WIDTH;
    this._generateTiles();
    this.placeApple();
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

  public placeApple() {
    let appleTile = this._randomTile();

    while (!appleTile || !appleTile.isEmpty) {
      appleTile = this._randomTile();
    }

    appleTile.hasApple = true;
    this.appleTile = appleTile;
  }

  private _randomTile() {
    let x = Math.floor(Math.random() * 15);
    let y = Math.floor(Math.random() * 15);
    return this.getTile({ x, y });
  }

  public getTile(position: Position): Tile | undefined {
    return this.tiles.find((tile) => tile.areYou(position));
  }
}
