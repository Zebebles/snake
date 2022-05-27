import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useGameContext } from "../useGame/useGame";
import { Tile } from "../tile/Tile";
import { styles } from "./Map.styles";

export interface MapProps {}

export const Map = (): JSX.Element => {
  const { map, score, applePosition, snake } = useGameContext();

  return (
    <Box sx={styles.gameMapWrapper}>
      <Box sx={styles.scoreWrapper}>
        <Typography variant={"h2"}>
          <strong>{score}</strong>
        </Typography>
      </Box>
      <Grid container sx={styles.gameMap}>
        {map.tiles.map((tile, i) => {
          const hasApple = tile.areYou(applePosition);
          const snakeSection = snake.snake.findSection(tile.position);

          return (
            <Tile
              key={i}
              hasApple={hasApple}
              hasSnake={Boolean(snakeSection)}
              snakeImgSrc={snakeSection?.imgSrc}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
