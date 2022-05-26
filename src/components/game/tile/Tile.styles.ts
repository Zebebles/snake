import { StylesList } from "../../../mui/types";

const size = "50px";

export const styles: StylesList = {
  tileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: size,
    width: size,
    backgroundColor: "#6f886f",
    border: `1px solid rgba(185, 237, 193, .2)`,

    "& > img:not(.snakePart)": {
      width: "40px",
      height: "40px",
    },

    "& > img.snakePart": {
      height: "calc(100% + 4px)",
    },
  },
};
