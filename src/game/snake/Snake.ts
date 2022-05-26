import { Tile } from "../tile/Tile";
import { Map, Position } from "../map/Map";
const START_COL_INDEX = 5;
const START_ROW_INDEX = 2;

export class Snake {
  private _map: Map;
  public tiles: Tile[];
  public length: number;
  public movePerTicks: number;
  public direction: Direction;
  public isDead: boolean;

  constructor(map: Map) {
    this._map = map;
    this.direction = Direction.RIGHT;
    this.length = 5;
    this.movePerTicks = 4;
    this.isDead = false;
    this.tiles = [];

    for (let i = 0; i < this.length; i++) {
      let tilePosition = { x: START_ROW_INDEX, y: START_COL_INDEX - i };
      const tile = new Tile(tilePosition);
      tile.snakePart = SnakePart.BODY;
      tile.snakePartDirection = Direction.RIGHT;
      this.tiles.push(tile);
    }
    this.tiles[0].snakePart = SnakePart.HEAD;
    this.tiles[this.tiles.length - 1].snakePart = SnakePart.TAIL;
  }

  public get head(): Tile {
    return this.tiles[0];
  }

  public getTile(position: Position): Tile | undefined {
    return this.tiles.find((tile) => tile.areYou(position));
  }

  public eatApple() {
    const mapTile = this._map.getTile(this.head.position);
    if (!mapTile) return;
    mapTile.hasApple = false;
    this.grow();
    if (this.length % 2 === 0 && this.movePerTicks > 1) {
      this.speedUp();
    }
  }

  public grow() {
    this.length = this.length + 1;
    this.tiles.push(new Tile({ x: 0, y: 0 })); // will get popped in the next move.
  }

  public speedUp() {
    this.movePerTicks = this.movePerTicks - 1;
  }

  public changeDirection(newDirection: Direction) {
    if (newDirection !== OppositeDirections[this.direction]) {
      this.direction = newDirection;
    }
  }

  public get position(): Position {
    return this.tiles[0].position;
  }

  public get nextPosition(): Position {
    const currentHead = this.tiles[0];
    let newHeadX = currentHead.position.x;
    let newHeadY = currentHead.position.y;
    switch (this.direction) {
      case Direction.UP:
        newHeadX = newHeadX - 1;
        break;
      case Direction.DOWN:
        newHeadX = newHeadX + 1;
        break;
      case Direction.LEFT:
        newHeadY = newHeadY - 1;
        break;
      case Direction.RIGHT:
        newHeadY = newHeadY + 1;
    }
    return { x: newHeadX, y: newHeadY };
  }

  public move() {
    if (this.isDead) return;

    const nextPosition = this.nextPosition;
    if (!this._map.getTile(nextPosition)) return (this.isDead = true);
    const isDead = Boolean(this.getTile(nextPosition));

    this.tiles.pop(); //remove the tail.

    const newHead = new Tile(nextPosition);
    newHead.snakePartDirection = this.direction;
    this.tiles.unshift(newHead); // move the snakes head to the next tile.

    for (let i = 1; i < this.tiles.length - 1; i++) {
      if (
        this.tiles[i - 1].snakePartDirection !==
        this.tiles[i].snakePartDirection
      ) {
        console.log("Make this a corner");
      }
      this.tiles[i].snakePart = SnakePart.BODY;
      Snake._setTileImage(this.tiles[i]);
    }

    this.tiles[0].snakePart = SnakePart.HEAD;
    Snake._setTileImage(this.tiles[0]);
    this.tiles[this.tiles.length - 1].snakePart = SnakePart.TAIL;
    Snake._setTileImage(this.tiles[this.tiles.length - 1]);

    this.isDead = isDead;
  }

  private static _setTileImage(tile: Tile) {
    if (tile.snakePart === SnakePart.NONE)
      return (tile.snakeImgSrc = undefined);

    if (tile.snakePart.includes("CORNER"))
      return (tile.snakeImgSrc = `/img/snake/${tile.snakePart.toLowerCase()}`);

    return (tile.snakeImgSrc = `/img/snake/${tile.snakePart.toLowerCase()}_${tile.snakePartDirection.toLowerCase()}.png`);
  }
}

export enum SnakePart {
  HEAD = "HEAD",
  BODY = "BODY",
  TAIL = "TAIL",
  CORNER_DOWN_LEFT = "CORNER_DOWN_LEFT",
  CORNER_DOWN_RIGHT = "CORNER_DOWN_RIGHT",
  CORNER_UP_RIGHT = "CORNER_UP_LEFT",
  CORNER_UP_LEFT = "CORNER_UP_RIGHT",
  NONE = "NONE",
}

export enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  NONE = "NONE",
}

export const OppositeDirections = {
  UP: Direction.DOWN,
  DOWN: Direction.UP,
  LEFT: Direction.RIGHT,
  RIGHT: Direction.LEFT,
  NONE: Direction.NONE,
};
