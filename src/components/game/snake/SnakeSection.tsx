import React from "react";
import { Box } from "@mui/material";
import { styles } from "./SnakeSection.styles";
import { SnakeSection } from "../../../game/snake/SnakeSection";

export interface SnakeSectionComponentProps {
  section: SnakeSection;
  index: number;
}

export const SnakeSectionComponent = ({
  section,
  index,
}: SnakeSectionComponentProps): JSX.Element => {
  return (
    <>
      <Box sx={styles.snakeSection} style={{ ...section.offset }}>
        <img src={section.imgSrc} alt="snake section" />
      </Box>
      {section.next && (
        <SnakeSectionComponent
          section={section.next}
          index={index + 1}
          key={index + 1}
        />
      )}
    </>
  );
};
