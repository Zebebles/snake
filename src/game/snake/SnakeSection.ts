import { Direction } from "./Snake";
import { Position } from "../map/Map";

export interface SnakeSectionConstructorProps {
  entryDirection: Direction;
  exitDirection: Direction;
  tilePosition: Position;
  isHead?: boolean;
}

export class SnakeSection {
  public entryDirection: Direction;
  public exitDirection: Direction;
  public tilePosition: Position;
  private _isHead: boolean;
  private _bodyImgSrc: string | undefined;
  private _headImgSrc: string | undefined;
  private _tailImgSrc: string | undefined;
  private _next: SnakeSection | undefined;

  constructor({
    entryDirection,
    exitDirection,
    tilePosition,
    isHead,
  }: SnakeSectionConstructorProps) {
    this.entryDirection = entryDirection;
    this.exitDirection = exitDirection;
    this.tilePosition = tilePosition;
    this._isHead = isHead ?? false;
    this._setImgSrc();
  }

  public get isTail(): boolean {
    return !Boolean(this._next);
  }

  public get isHead(): boolean {
    return this._isHead;
  }

  public set isHead(isHead: boolean) {
    this._isHead = isHead;
    this._setImgSrc();
  }

  public get next(): SnakeSection | undefined {
    return this._next;
  }

  public set next(_next: SnakeSection | undefined) {
    this._next = _next;
  }

  public get imgSrc(): string | undefined {
    if (this.isHead) {
      return this._headImgSrc;
    }
    if (this.isTail) {
      return this._tailImgSrc;
    }

    return this._bodyImgSrc;
  }

  /* remove the last tail */
  public moveTail(): void {
    if (this.next?.isTail) {
      this.next = undefined;
    } else {
      this.next?.moveTail();
    }
  }

  /*Add a new section to the snake. Will add to the tail.*/
  public addSection(newPosition?: Position) {
    if (this._next) {
      this._next.addSection();
    } else {
      this.next = new SnakeSection({
        tilePosition: newPosition ?? this.tilePosition,
        entryDirection: this.entryDirection,
        exitDirection: this.exitDirection,
      });
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
    this._headImgSrc = `/img/snake/head_${this.entryDirection.toLowerCase()}.png`;
    this._tailImgSrc = `/img/snake/tail_${this.exitDirection.toLowerCase()}.png`;

    if (this.entryDirection === this.exitDirection) {
      const direction =
        this.entryDirection === Direction.UP ||
        this.entryDirection === Direction.DOWN
          ? "vertical"
          : "horizontal";
      this._bodyImgSrc = `/img/snake/body_${direction}.png`;
    } else {
      this._bodyImgSrc = `/img/snake/corner_${this.entryDirection.toLowerCase()}_${this.exitDirection.toLowerCase()}.png`;
    }
  }
}
