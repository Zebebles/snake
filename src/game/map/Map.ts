import { Tile } from "../tile/Tile";

export interface Position {
  x: number;
  y: number;
}

export class Map {
  private readonly _height: number;
  private readonly _width: number;
  private _tiles: Tile[][] = [[]];

  constructor({ height, width }: { height: number; width: number }) {
    this._height = height;
    this._width = width;
    this._generateTiles();
    this.placeApple();
  }

  private _generateTiles() {
    const tiles: Tile[][] = [];

    for (let y = 0; y < this._height; y++) {
      tiles.push([]);
      for (let x = 0; x < this._width; x++) {
        tiles[y].push(new Tile({ x, y }));
      }
    }
    this._tiles = tiles;
  }

  public placeApple() {
    let appleTile: Tile;

    do {
      appleTile = this._randomTile();
    } while (!appleTile.isEmpty);

    appleTile.hasApple = true;
  }

  private _randomTile() {
    let x = Math.floor(Math.random() * 15);
    let y = Math.floor(Math.random() * 15);
    return this._tiles[y][x];
  }

  public get tiles() {
    return this._tiles;
  }

  public getTile(position: Position) {
    return this._tiles[position.y][position.x];
  }
}
