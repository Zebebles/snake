export class Map {
  private readonly _height: number;
  private readonly _width: number;

  constructor({ height, width }: { height: number; width: number }) {
    this._height = height;
    this._width = width;
    this._generate();
  }

  private _generate() {}
}
