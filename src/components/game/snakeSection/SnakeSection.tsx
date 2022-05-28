import React from "react";
import { Box } from "@mui/material";
import { styles } from "./SnakeSection.styles";
import { SnakeSection as SnakeGameSection } from "../../../game/snake/SnakeSection";

export interface SnakeSectionProps {
  snakeSection: SnakeGameSection;
}

export const SnakeSection = ({
  snakeSection,
}: SnakeSectionProps): JSX.Element => {
  return React.useMemo(
    () => (
      <Box sx={styles.snake}>
        <img src={snakeSection.imgSrc} alt="snake section" />
      </Box>
    ),
    [snakeSection.isHead, snakeSection.isTail]
  );
};
