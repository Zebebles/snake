import React from "react";
import { Box } from "@mui/material";
import { styles } from "./SnakeSection.styles";
import { SnakeSection as SnakeGameSection } from "../../../game/snake/SnakeSection";

export interface SnakeSectionProps {
  snakeSection: SnakeGameSection | undefined;
}

export const SnakeSection = ({
  snakeSection,
}: SnakeSectionProps): JSX.Element => {
  const show = Boolean(snakeSection);
  return React.useMemo(
    () => (
      <Box sx={styles.snake} className={show ? "show" : "hide"}>
        <img src={snakeSection?.imgSrc} alt="snake section" />
      </Box>
    ),
    [show, snakeSection?.isHead, snakeSection?.isTail]
  );
};
