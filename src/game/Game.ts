import { Map } from "./map/Map";

export class Game {
  private _map: Map;

  constructor() {
    this._map = new Map({
      height: parseInt(process.env.GAME_MAP_HEIGHT ?? "0"),
      width: parseInt(process.env.GAME_MAP_WIDTH ?? "0"),
    });
  }
}
