import { Map, Position } from "../map/Map";
import { SnakeSection } from "./SnakeSection";
const START_COL_INDEX = 5;
const START_ROW_INDEX = 2;

export class Snake {
  private _map: Map;
  private _headSection: SnakeSection;
  public isDead: boolean;
  public length: number;
  public movePerTicks: number;
  public direction: Direction;

  constructor(map: Map) {
    this._map = map;
    this.direction = Direction.RIGHT;
    this.length = 5;
    this.movePerTicks = 17;
    this.isDead = false;

    const headPosition = { x: START_ROW_INDEX, y: START_COL_INDEX };
    this._headSection = new SnakeSection({
      entryDirection: Direction.RIGHT,
      exitDirection: Direction.RIGHT,
      tilePosition: headPosition,
      isHead: true,
    });

    for (let i = 1; i < this.length; i++) {
      const tilePosition = { x: headPosition.x, y: headPosition.y - i };
      this.head.addSection(tilePosition);
    }
  }

  public get head(): SnakeSection {
    return this._headSection;
  }

  public set head(newHead: SnakeSection) {
    newHead.isHead = true;
    newHead.next = this.head;
    this.head.isHead = false;
    this._headSection = newHead;
  }

  public findSection(position?: Position): SnakeSection | undefined {
    if (!position) return;
    return this.head.find(position);
  }

  public eatApple() {
    this.grow();
    if (this.movePerTicks > 10) {
      if (this.length % 2 === 0) {
        // speed up every second apple if speed > 10
        this.speedUp();
      }
    } else if (this.movePerTicks >= 5)
      if (this.length % 4 === 0) {
        // speed up every fourth apple if speed < 10
        this.speedUp();
      }
  }

  public grow() {
    this.length = this.length + 1;
    this.head.addSection();
  }

  public speedUp() {
    this.movePerTicks = this.movePerTicks - 1;
  }

  public changeDirection(newDirection: Direction) {
    if (newDirection !== OppositeDirections[this.direction]) {
      this.direction = newDirection;
      this.head.exitDirection = newDirection;
    }
  }

  public get nextPosition(): Position {
    let newHeadX = this.head.tilePosition.x;
    let newHeadY = this.head.tilePosition.y;
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

  public willIntersect(position: Position): boolean {
    return Boolean(this.head.next?.find(position));
  }

  public move() {
    if (this.isDead) return;

    const newHead = new SnakeSection({
      entryDirection: this.head.exitDirection,
      exitDirection: this.direction,
      tilePosition: this.nextPosition,
      isHead: true,
    });

    if (
      this._map.isOutOfBounds(newHead.tilePosition) ||
      this.willIntersect(newHead.tilePosition)
    )
      return (this.isDead = true);

    this.head.moveTail();

    this.head = newHead;
  }
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
