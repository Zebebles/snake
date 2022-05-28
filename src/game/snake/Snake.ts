import { Map, Position } from "../map/Map";
import { SnakeSection } from "./SnakeSection";

const START_COL_INDEX = 3;
const START_ROW_INDEX = 2;

export class Snake {
  private _map: Map;
  private readonly _headSection: SnakeSection;
  public isDead: boolean;
  public length: number;
  public movePerTicks: number;
  public direction: Direction;

  constructor(map: Map) {
    this._map = map;
    this.direction = Direction.RIGHT;
    this.length = 5;
    this.movePerTicks = 12;
    this.isDead = false;

    const headPosition = { x: START_ROW_INDEX, y: START_COL_INDEX };
    this._headSection = new SnakeSection({
      entryDirection: Direction.RIGHT,
      exitDirection: Direction.RIGHT,
      tilePosition: headPosition,
      isHead: true,
    });

    for (let i = 1; i < this.length; i++) {
      this.head.addSection();
    }
  }

  public get head(): SnakeSection {
    return this._headSection;
  }

  public findSection(position?: Position): SnakeSection | undefined {
    if (!position) return;
    return this.head.find(position);
  }

  public eatApple() {
    this.grow();
    if (this.movePerTicks > 7) {
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
    }
  }

  public willIntersect(position: Position): boolean {
    return Boolean(this.head.next?.find(position));
  }

  public move() {
    this.head.entryDirection = this.direction;

    const nextPosition = this.head.frontTilePosition;

    if (
      this._map.isOutOfBounds(nextPosition) ||
      this.willIntersect(nextPosition)
    )
      return (this.isDead = true);

    this.head.tilePosition = nextPosition;
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
