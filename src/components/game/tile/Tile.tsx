import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Tile.styles";
import { Tile as GameTile } from "../../../game/tile/Tile";
import { Snake } from "../../../game/snake/Snake";

export interface TileProps {
  gameTile: GameTile;
}

export const Tile = ({ gameTile }: TileProps): JSX.Element => {
  const snakeImgSrc = Snake.getSnakePartImage(gameTile.snakePart);

  return (
    <Box sx={styles.tileContainer}>
      {gameTile.hasApple && <img src="/img/apple.png" alt="apple.png" />}
      {snakeImgSrc && (
        <img src={snakeImgSrc} alt="snake part" className="snakePart" />
      )}
    </Box>
  );
};
