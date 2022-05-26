import { Tile } from "../tile/Tile";
import { Map, Position } from "../map/Map";
const START_COL_INDEX = 5;
const START_ROW_INDEX = 2;

export class Snake {
  private _map: Map;
  private _tiles: Tile[];
  private _length: number;
  public direction: Direction;

  constructor(map: Map) {
    this._map = map;
    this.direction = Direction.RIGHT;
    this._length = 5;
    this._tiles = [];

    for (let i = 0; i < this._length; i++) {
      let tilePos = { x: START_ROW_INDEX, y: START_COL_INDEX - i };
      if (i === 0) {
        this._addTile(tilePos, SnakePart.HEAD_RIGHT);
      } else if (i === this._length - 1) {
        this._addTile(tilePos, SnakePart.TAIL_RIGHT);
      } else {
        this._addTile(tilePos, SnakePart.BODY_HORIZONTAL);
      }
    }
  }

  private _addTile(tilePosition: Position, snakePart: SnakePart) {
    const tile = this._map.getTile(tilePosition);
    tile.snakePart = snakePart;
    this._tiles.push(tile);
  }

  private _removeTile(tile: Tile) {
    tile.snakePart = SnakePart.NONE;
    this._tiles = this._tiles.filter((t) => t !== tile);
  }

  public grow() {
    this._length = this._length + 1;
  }

  public move() {}

  public static getSnakePartImage(snakePart: SnakePart): string | undefined {
    switch (snakePart) {
      case SnakePart.HEAD_UP:
        return "/img/snake/head_up.png";
      case SnakePart.HEAD_DOWN:
        return "/img/snake/head_down.png";
      case SnakePart.HEAD_RIGHT:
        return "/img/snake/head_right.png";
      case SnakePart.HEAD_LEFT:
        return "/img/snake/head_right.png";

      case SnakePart.BODY_HORIZONTAL:
        return "/img/snake/body_horizontal.png";
      case SnakePart.BODY_VERTICAL:
        return "/img/snake/body_vertical.png";

      case SnakePart.CORNER_BL:
        return "/img/snake/corner_BL.png";
      case SnakePart.CORNER_BR:
        return "/img/snake/corner_BR.png";
      case SnakePart.CORNER_TL:
        return "/img/snake/corner_TL.png";
      case SnakePart.CORNER_TR:
        return "/img/snake/corner_TR.png";

      case SnakePart.TAIL_UP:
        return "/img/snake/tail_up.png";
      case SnakePart.TAIL_DOWN:
        return "/img/snake/tail_down.png";
      case SnakePart.TAIL_RIGHT:
        return "/img/snake/tail_right.png";
      case SnakePart.TAIL_LEFT:
        return "/img/snake/tail_left.png";

      default:
        return undefined;
    }
  }
}

export enum SnakePart {
  HEAD_UP,
  HEAD_DOWN,
  HEAD_RIGHT,
  HEAD_LEFT,
  BODY_HORIZONTAL,
  BODY_VERTICAL,
  CORNER_BL,
  CORNER_BR,
  CORNER_TL,
  CORNER_TR,
  TAIL_UP,
  TAIL_DOWN,
  TAIL_RIGHT,
  TAIL_LEFT,
  NONE,
}

export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
