import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";

export type Styles = SxProps<Theme>;

export type StylesList = Record<string, Styles>;
