import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { styles } from "./PageFooter.styles";

export interface PageFooterProps {
  author: string;
}

export const PageFooter: NextPage<PageFooterProps> = ({ author }) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="body2">
        <em>By</em> {author}
      </Typography>
    </Box>
  );
};
