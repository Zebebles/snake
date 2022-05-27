import React from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./PageFooter.styles";

export interface PageFooterProps {
  author: string;
}

export const PageFooter = ({ author }: PageFooterProps): JSX.Element => {
  return (
    <Box sx={styles.container}>
      <Typography variant="body2">
        <em>By</em> {author}
      </Typography>
    </Box>
  );
};
