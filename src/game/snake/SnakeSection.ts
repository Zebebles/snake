import { Direction } from "./Snake";
import { Position, Map } from "../map/Map";

export interface SnakeSectionConstructorProps {
  entryDirection: Direction;
  exitDirection: Direction;
  tilePosition: Position;
  isHead?: boolean;
}

export class SnakeSection {
  private _entryDirection: Direction;
  private _exitDirection: Direction;
  public imgSrc: string;
  private _tilePosition: Position;
  public readonly isHead: boolean;
  public next: SnakeSection | undefined;

  constructor({
    entryDirection,
    exitDirection,
    tilePosition,
    isHead,
  }: SnakeSectionConstructorProps) {
    this._entryDirection = entryDirection;
    this._exitDirection = exitDirection;
    this._tilePosition = tilePosition;
    this.isHead = isHead ?? false;
    this.imgSrc = "";
    this._setImgSrc();
  }

  public get tilePosition() {
    return this._tilePosition;
  }

  public set tilePosition(newPosition) {
    this.exitDirection = this.entryDirection;

    if (this.next) {
      this.next.tilePosition = this._tilePosition;
      this.next.entryDirection = this.exitDirection;
    }

    this._tilePosition = newPosition;
  }

  public get entryDirection() {
    return this._entryDirection;
  }

  public set entryDirection(newDirection: Direction) {
    this._entryDirection = newDirection;
    this._setImgSrc();
  }

  public get exitDirection() {
    return this._exitDirection;
  }

  public set exitDirection(newDirection: Direction) {
    this._exitDirection = newDirection;
    this._setImgSrc();
  }

  public get isTail(): boolean {
    return !Boolean(this.next);
  }

  public get offset(): { top: number; left: number } {
    return Map.getOffsetPx(this.tilePosition);
  }

  /*Add a new section to the snake. Will add to the tail.*/
  public addSection() {
    if (!this.next) {
      this.next = new SnakeSection({
        tilePosition: this.tilePosition,
        entryDirection: this.entryDirection,
        exitDirection: this.exitDirection,
      });
    } else {
      this.next.addSection();
    }
  }

  public isAtPosition(tilePosition?: Position): boolean {
    return (
      tilePosition?.x === this.tilePosition.x &&
      tilePosition?.y === this.tilePosition.y
    );
  }

  public find(tilePosition?: Position): SnakeSection | undefined {
    if (!tilePosition) return;
    if (this.isAtPosition(tilePosition)) {
      return this;
    }
    return this.next?.find(tilePosition);
  }

  private _setImgSrc() {
    if (this.isHead)
      return (this.imgSrc = `/img/snake/head_${this._entryDirection.toLowerCase()}.png`);
    if (this.isTail)
      return (this.imgSrc = `/img/snake/tail_${this._entryDirection.toLowerCase()}.png`);

    if (this._entryDirection === this._exitDirection) {
      const direction =
        this._entryDirection === Direction.UP ||
        this._entryDirection === Direction.DOWN
          ? "vertical"
          : "horizontal";
      return (this.imgSrc = `/img/snake/body_${direction}.png`);
    } else {
      return (this.imgSrc = `/img/snake/corner_${this._exitDirection.toLowerCase()}_${this._entryDirection.toLowerCase()}.png`);
    }
  }

  public get frontTilePosition(): Position {
    switch (this.entryDirection) {
      case Direction.UP:
        return { ...this.tilePosition, x: this.tilePosition.x - 1 };
      case Direction.DOWN:
        return { ...this.tilePosition, x: this.tilePosition.x + 1 };
      case Direction.LEFT:
        return { ...this.tilePosition, y: this.tilePosition.y - 1 };
      case Direction.RIGHT:
        return { ...this.tilePosition, y: this.tilePosition.y + 1 };
      default:
        return { ...this.tilePosition };
    }
  }
}
