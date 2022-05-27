import { StylesList } from "../../../mui/types";
import { MAP_HEIGHT } from "../../../game/map/Map";
import { TILE_SIZE } from "../tile/Tile.styles";
import { red } from "@mui/material/colors";

const mapSize = MAP_HEIGHT * TILE_SIZE;

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
    zIndex: 1,
    "& > * > strong": {
      fontSize: "1.6em",
      fontWeight: "300",
      color: red.A200,
    },
  },

  gameMap: {
    display: "flex",
    flexDirection: "column",
    height: mapSize,
    width: mapSize,
    borderRadius: "8px",
    marginBottom: "15px",
  },
};
