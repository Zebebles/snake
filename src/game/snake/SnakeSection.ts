import { Direction } from "./Snake";
import { Position, Map } from "../map/Map";

export interface SnakeSectionConstructorProps {
  entryDirection: Direction;
  exitDirection: Direction;
  tilePosition: Position;
  isHead?: boolean;
}

export class SnakeSection {
  public entryDirection: Direction;
  public exitDirection: Direction;
  private _tilePosition: Position;
  public readonly isHead: boolean;
  public next: SnakeSection | undefined;

  constructor({
    entryDirection,
    exitDirection,
    tilePosition,
    isHead,
  }: SnakeSectionConstructorProps) {
    this.entryDirection = entryDirection;
    this.exitDirection = exitDirection;
    this._tilePosition = tilePosition;
    this.isHead = isHead ?? false;
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

  public get isTail(): boolean {
    return !Boolean(this.next);
  }

  public get offset(): { top: number; left: number } {
    return Map.getOffsetPx(this.tilePosition);
  }

  /*Add a new section to the snake. Will add to the tail.*/
  public addSection() {
    if (!this.next)
      this.next = new SnakeSection({
        tilePosition: this.backTilePosition,
        entryDirection: this.entryDirection,
        exitDirection: this.exitDirection,
      });
    else this.next.addSection();
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

  public get imgSrc(): string {
    if (this.isHead)
      return `/img/snake/head_${this.entryDirection.toLowerCase()}.png`;
    if (this.isTail)
      return `/img/snake/tail_${this.entryDirection.toLowerCase()}.png`;

    if (this.entryDirection === this.exitDirection) {
      const direction =
        this.entryDirection === Direction.UP ||
        this.entryDirection === Direction.DOWN
          ? "vertical"
          : "horizontal";
      return `/img/snake/body_${direction}.png`;
    } else {
      return `/img/snake/corner_${this.exitDirection.toLowerCase()}_${this.entryDirection.toLowerCase()}.png`;
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

  public get backTilePosition(): Position {
    switch (this.entryDirection) {
      case Direction.UP:
        return { ...this.tilePosition, x: this.tilePosition.x + 1 };
      case Direction.DOWN:
        return { ...this.tilePosition, x: this.tilePosition.x - 1 };
      case Direction.LEFT:
        return { ...this.tilePosition, y: this.tilePosition.y + 1 };
      case Direction.RIGHT:
        return { ...this.tilePosition, y: this.tilePosition.y - 1 };
      default:
        return { ...this.tilePosition };
    }
  }
}
