import React from "react";
import { Box } from "@mui/material";
import { styles } from "./Apple.styles";
import { Map, Position } from "../../../game/map/Map";

export interface AppleComponentProps {
  applePosition: Position | undefined;
}

export const AppleComponent = ({
  applePosition,
}: AppleComponentProps): JSX.Element => {
  const offset = Map.getOffsetPx(applePosition);

  return React.useMemo(
    () => (
      <Box sx={styles.apple} style={{ ...offset }}>
        <img src="/img/apple.png" alt="apple" />
      </Box>
    ),
    [applePosition]
  );
};
