import { StylesList } from "../../../mui/types";
import { MAP_HEIGHT } from "../../../game/map/Map";
import { TILE_SIZE } from "../tile/Tile.styles";
import { red } from "@mui/material/colors";

const borderSize = 8;
const mapSize = MAP_HEIGHT * TILE_SIZE + borderSize * 2;

export const styles: StylesList = {
  gameMapWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  scoreWrapper: {
    display: "flex",
    alignItems: "center",
    "& > * > strong": {
      fontSize: "1.6em",
      fontWeight: "300",
      color: red.A200,
    },
  },

  gameMap: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: mapSize,
    width: mapSize,
    borderRadius: "8px",
    marginBottom: "15px",
    border: ({ palette }) => `${borderSize}px solid ${palette.text.primary}`,
  },
};
