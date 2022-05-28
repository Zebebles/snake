import { StylesList } from "../../../mui/types";
import { TILE_SIZE } from "../tile/Tile.styles";

export const styles: StylesList = {
  snakeSection: {
    position: "absolute",
    width: TILE_SIZE + 2,
    height: TILE_SIZE + 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& > img": {
      width: TILE_SIZE + 2,
      height: TILE_SIZE + 2,
    },
  },
};
