import React from "react";
import { Box } from "@mui/material";
import { styles } from "./AppleSection.styles";

export const AppleSection = (): JSX.Element => {
  return (
    <Box sx={styles.apple}>
      <img src="/img/apple.png" alt="apple" />
    </Box>
  );
};
