import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useGameContext } from "../useGame/useGame";
import { Tile } from "../tile/Tile";
import { styles } from "./Map.styles";
import { AppleComponent } from "../apple/Apple";
import { SnakeComponent } from "../snake/Snake";

export interface MapProps {}

export const Map = (): JSX.Element => {
  const { map, score, hasStarted, applePosition, snake } = useGameContext();
  const tiles = map.tiles.map((tile, i) => <Tile key={i} />);

  return (
    <Box sx={styles.gameMapWrapper}>
      <Box sx={styles.scoreWrapper} zIndex={hasStarted ? 11 : 0}>
        <Typography variant={"h2"}>
          <strong>{score}</strong>
        </Typography>
      </Box>
      <Grid container sx={styles.gameMap}>
        <>
          <AppleComponent applePosition={applePosition} />
          <SnakeComponent snake={snake.snake} />
          {tiles}
        </>
      </Grid>
    </Box>
  );
};
