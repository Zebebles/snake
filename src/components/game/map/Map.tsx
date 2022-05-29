import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useGameContext } from "../useGame/useGame";
import { Tile } from "../tile/Tile";
import { styles } from "./Map.styles";
import { AppleComponent } from "../apple/Apple";
import { SnakeSectionComponent } from "../snake/SnakeSection";

export const Map = (): JSX.Element => {
  const { map, score, hasStarted, applePosition, snake, tick } =
    useGameContext();
  const tiles = map.tiles.map((tile, i) => <Tile key={i} />);

  return React.useMemo(
    () => (
      <Box sx={styles.gameMapWrapper}>
        <Box sx={styles.scoreWrapper} zIndex={hasStarted ? 11 : 0}>
          <Typography variant={"h2"}>
            <strong>{score}</strong>
          </Typography>
        </Box>
        <Grid container sx={styles.gameMap}>
          <>
            <AppleComponent applePosition={applePosition} />
            <SnakeSectionComponent
              section={snake.snake.head}
              key={0}
              index={0}
            />
            {tiles}
          </>
        </Grid>
      </Box>
    ),
    [tick]
  );
};
