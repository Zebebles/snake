import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styles } from "./Tile.styles";
import { useGameContext } from "../useGame/useGame";
import { Tile as GameTile } from "../../../game/tile/Tile";

export interface TileProps {
  gameTile: GameTile;
}

export const Tile = ({ gameTile }: TileProps): JSX.Element => {
  const { snake } = useGameContext();
  const [snakeTile, setSnakeTile] = useState<GameTile>();

  useEffect(() => {
    setSnakeTile(snake.snake.getTile(gameTile.position));
  }, [snake.tick]);

  return (
    <Box sx={styles.tileContainer}>
      {gameTile.hasApple && <img src="/img/apple.png" alt="apple.png" />}

      <img
        src={snakeTile?.snakeImgSrc}
        alt="snake part"
        className="snakePart"
        style={{ display: snakeTile?.snakeImgSrc ? "" : "none" }}
      />
    </Box>
  );
};
