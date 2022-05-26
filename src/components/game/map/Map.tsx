import React from "react";
import { Box, Grid } from "@mui/material";
import { useGameContext } from "../useGame/useGame";
import { Tile } from "../tile/Tile";
import { styles } from "./Map.styles";

export interface MapProps {}

export const Map = (): JSX.Element => {
  const { game } = useGameContext();
  const { tiles } = game.map;

  return (
    <Box sx={styles.gameMapWrapper}>
      <Grid container sx={styles.gameMap}>
        {tiles.map((tileRow, i) => {
          return (
            <Grid item xs={12} key={i}>
              {tileRow.map((tile, j) => {
                return <Tile gameTile={tile} key={`row ${i} tile ${j}`} />;
              })}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
