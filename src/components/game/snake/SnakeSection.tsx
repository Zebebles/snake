import React from "react";
import { Box } from "@mui/material";
import { styles } from "./SnakeSection.styles";
import { SnakeSection } from "../../../game/snake/SnakeSection";

export interface SnakeSectionComponentProps {
  snakeSection: SnakeSection;
}

export const SnakeSectionComponent = ({
  snakeSection,
}: SnakeSectionComponentProps): JSX.Element => {
  return (
    <Box sx={styles.snakeSection} style={{ ...snakeSection.offset }}>
      <img src={snakeSection.imgSrc} alt="snake section" />
    </Box>
  );
};
