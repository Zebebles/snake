import { StylesList } from "../../../mui/types";
const mapSize = `${15 * 50 + 12}px`;

export const styles: StylesList = {
  gameMapWrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  gameMap: {
    display: "flex",
    flexDirection: "column",
    height: mapSize,
    width: mapSize,
    border: "6px solid white",
    borderRadius: "6px",
  },
};
