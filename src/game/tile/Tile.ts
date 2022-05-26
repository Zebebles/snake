export class Tile {
  public hasApple: boolean;
  public hasSnake: boolean;

  constructor() {
    this.hasApple = true;
    this.hasSnake = false;
  }

  public get isEmpty() {
    return !this.hasSnake && !this.hasApple;
  }
}
