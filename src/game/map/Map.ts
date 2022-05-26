import { Tile } from "../tile/Tile";

export class Map {
  private readonly _height: number;
  private readonly _width: number;
  private _tiles: Tile[][] = [[]];

  constructor({ height, width }: { height: number; width: number }) {
    this._height = height;
    this._width = width;
    this._generateTiles();
  }

  private _generateTiles() {
    const tiles: Tile[][] = [[]];

    for (let y = 0; y < this._height; y++) {
      for (let x = 0; x < this._width; x++) {
        tiles[y][x] = new Tile();
      }
    }
    this._tiles = tiles;
  }

  public get tiles() {
    return this._tiles;
  }
}
