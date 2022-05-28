import { StylesList } from "../../../mui/types";
import { TILE_SIZE } from "../tile/Tile.styles";

export const styles: StylesList = {
  snake: {
    "& > img": {
      marginTop: "7px",
      width: TILE_SIZE,
      height: TILE_SIZE,
    },
  },
};
