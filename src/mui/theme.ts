import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: "#EFEFEF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#464F46",
    },
    divider: "#2F2F2F",
  },
});

export default theme;
