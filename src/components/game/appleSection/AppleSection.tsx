import React from "react";
import { Box } from "@mui/material";
import { styles } from "./AppleSection.styles";

export interface AppleSectionProps {
  hasApple: boolean;
}

export const AppleSection = ({ hasApple }: AppleSectionProps): JSX.Element => {
  return React.useMemo(
    () => (
      <Box sx={styles.apple} className={hasApple ? "show" : "hide"}>
        <img src="/img/apple.png" alt="apple" />
      </Box>
    ),
    [hasApple]
  );
};
