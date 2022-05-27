import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./GameOver.styles";
import { useGameContext } from "../game/useGame/useGame";
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
  KeyboardReturn,
} from "@mui/icons-material";

export interface GameOverProps {
  title: string;
}

export const GameOver = ({ title }: GameOverProps): JSX.Element => {
  const { hasStarted } = useGameContext();

  return (
    <Box sx={styles.container}>
      <Grid container>
        <Grid item xs={12} sx={styles.headingContainer}>
          <Typography variant="h2">
            {hasStarted ? "Game over!" : `Welcome to ${title}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">
            Press <KeyboardReturn /> to play {hasStarted ? "again." : ""}
          </Typography>
        </Grid>
        {!hasStarted && (
          <Grid item xs={12}>
            <Typography variant="h5">
              Use <KeyboardArrowLeft />
              <KeyboardArrowUp />
              <KeyboardArrowDown />
              <KeyboardArrowRight /> to move
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
