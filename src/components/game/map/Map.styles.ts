import { StylesList } from "../../../mui/types";
import { MAP_HEIGHT } from "../../../game/Game";

const mapSize = `${MAP_HEIGHT * 50 + 16}px`;

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
    border: ({ palette }) => `8px solid ${palette.text.primary}`,
    borderRadius: "8px",
  },
};
