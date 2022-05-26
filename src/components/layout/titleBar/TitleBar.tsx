import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { styles } from "./TitleBar.styles";

export interface TitleBarProps {
  title: string;
}

export const TitleBar: NextPage<TitleBarProps> = ({ title }) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
};
