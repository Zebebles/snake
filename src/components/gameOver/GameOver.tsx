import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styles } from "./GameOver.styles";

export interface GameOverProps {}

export const GameOver = (props: GameOverProps): JSX.Element => {
  return (
    <Box sx={styles.container}>
      <Grid container>
        <Grid xs={12} sx={styles.headingContainer}>
          <Typography variant="h2">Game over!</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h5">
            Press <code>&apos;ENTER&apos;</code> to play again
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
