import { StylesList } from "../../../mui/types";
import { TILE_SIZE } from "../tile/Tile.styles";

export const styles: StylesList = {
  apple: {
    "& > img": {
      marginTop: "7px",
      width: TILE_SIZE - 10,
      height: TILE_SIZE - 10,
    },
  },
};
