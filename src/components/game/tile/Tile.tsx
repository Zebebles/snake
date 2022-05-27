import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Tile.styles";
import { Border } from "../../../game/tile/Tile";

export interface TileProps {
  hasApple: boolean;
  hasSnake: boolean;
  isWall: boolean;
  snakeImgSrc?: string;
  border: Border | undefined;
}

export const Tile = ({
  hasApple,
  hasSnake,
  isWall,
  snakeImgSrc,
  border,
}: TileProps): JSX.Element => {
  return React.useMemo(
    () => (
      <Box
        sx={styles.tileContainer}
        className={isWall ? "wall" : ""}
        style={border}
      >
        <img
          src="/img/apple.png"
          alt="apple.png"
          style={{ display: hasApple ? "" : "none" }}
        />

        <img
          src={snakeImgSrc}
          alt="snake part"
          className="snakePart"
          style={{ display: hasSnake ? "" : "none" }}
        />
      </Box>
    ),
    [hasApple, hasSnake, snakeImgSrc]
  );
};
