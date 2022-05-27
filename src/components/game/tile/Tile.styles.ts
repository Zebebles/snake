import { StylesList } from "../../../mui/types";

export const TILE_SIZE = 45;

export const styles: StylesList = {
  tileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: TILE_SIZE,
    width: TILE_SIZE,
    backgroundColor: "#6f886f",

    "& > img:not(.snakePart)": {
      width: TILE_SIZE - 10,
      height: TILE_SIZE - 10,
    },

    "& > img.snakePart": {
      height: "calc(100% + 4px)",
    },

    "&:not(.wall)": {
      border: `1px solid rgba(185, 237, 193, .2)`,
    },

    "&.wall": {
      borderWidth: `${TILE_SIZE / 3}px !important`,
      borderColor: ({ palette }) => `${palette.text.primary}`,
      boxShadow: "5px 5px 5px #000",
    },
  },
};
