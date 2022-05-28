import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Tile.styles";
import { SnakeSection } from "../snakeSection/SnakeSection";
import { SnakeSection as SnakeGameSection } from "../../../game/snake/SnakeSection";
import { AppleSection } from "../appleSection/AppleSection";

export interface TileProps {
  hasApple: boolean;
  snakeSection?: SnakeGameSection;
}

export const Tile = ({ hasApple, snakeSection }: TileProps): JSX.Element => {
  return React.useMemo(
    () => (
      <Box sx={styles.tileContainer}>
        <AppleSection hasApple={hasApple} />
        <SnakeSection snakeSection={snakeSection} />
      </Box>
    ),
    [hasApple, snakeSection?.isHead, snakeSection?.isTail]
  );
};
