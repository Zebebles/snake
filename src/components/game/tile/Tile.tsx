import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Tile.styles";

export const Tile = (): JSX.Element => {
  return React.useMemo(() => <Box sx={styles.tileContainer} />, []);
};
