import React from "react";
import { Box, Grid } from "@mui/material";
import { useGameContext } from "../useGame/useGame";
import { Tile } from "../tile/Tile";
import { styles } from "./Map.styles";

export interface MapProps {}

export const Map = (): JSX.Element => {
  const { map } = useGameContext();

  return (
    <Box sx={styles.gameMapWrapper}>
      <Grid container sx={styles.gameMap}>
        {map?.tiles.map((tile, i) => {
          return <Tile gameTile={tile} key={i} />;
        })}
      </Grid>
    </Box>
  );
};
