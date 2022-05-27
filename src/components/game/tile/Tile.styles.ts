import { StylesList } from "../../../mui/types";

export const TILE_SIZE = 50;

export const styles: StylesList = {
  tileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: TILE_SIZE,
    width: TILE_SIZE,
    backgroundColor: "#6f886f",
    border: `2px solid rgba(185, 237, 193, .08)`,

    "& > img:not(.snakePart)": {
      width: TILE_SIZE - 10,
      height: TILE_SIZE - 10,
    },

    "& > img.snakePart": {
      height: TILE_SIZE,
      width: TILE_SIZE,
    },
  },
};
