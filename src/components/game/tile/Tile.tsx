import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Tile.styles";
import { useGameContext } from "../useGame/useGame";
import { Tile as GameTile } from "../../../game/tile/Tile";

export interface TileProps {
  gameTile: GameTile;
}

export const Tile = ({ gameTile }: TileProps): JSX.Element => {
  const { snake: snakeContext } = useGameContext();
  const { snake } = snakeContext;

  const snakeSection = snake.findSection(gameTile.position);
  return (
    <Box sx={styles.tileContainer}>
      {gameTile.hasApple && <img src="/img/apple.png" alt="apple.png" />}

      <img
        src={snakeSection?.imgSrc}
        alt="snake part"
        className="snakePart"
        style={{ display: snakeSection?.imgSrc ? "" : "none" }}
      />
    </Box>
  );
};
