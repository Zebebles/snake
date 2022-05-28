import { StylesList } from "../../../mui/types";
import { TILE_SIZE } from "../tile/Tile.styles";

export const styles: StylesList = {
  apple: {
    position: "absolute",
    width: TILE_SIZE,
    height: TILE_SIZE,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > img": {
      width: TILE_SIZE - 10,
      height: TILE_SIZE - 10,
    },
  },
};
