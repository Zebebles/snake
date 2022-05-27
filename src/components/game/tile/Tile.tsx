import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Tile.styles";

export interface TileProps {
  hasApple: boolean;
  hasSnake: boolean;
  snakeImgSrc?: string;
}

export const Tile = ({
  hasApple,
  hasSnake,
  snakeImgSrc,
}: TileProps): JSX.Element => {
  return React.useMemo(
    () => (
      <Box sx={styles.tileContainer}>
        {hasApple && <img src="/img/apple.png" alt="apple.png" />}
        {hasSnake && (
          <img src={snakeImgSrc} alt="snake part" className="snakePart" />
        )}
      </Box>
    ),
    [hasApple, snakeImgSrc]
  );
};
