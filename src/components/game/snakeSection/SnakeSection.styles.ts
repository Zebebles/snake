import { StylesList } from "../../../mui/types";
import { TILE_SIZE } from "../tile/Tile.styles";

export const styles: StylesList = {
  snake: {
    position: "relative",
    height: TILE_SIZE + 2,
    width: TILE_SIZE + 2,

    "& > img": {
      width: TILE_SIZE + 2,
      height: TILE_SIZE + 2,
    },
  },
};
