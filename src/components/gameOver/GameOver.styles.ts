import { StylesList } from "../../mui/types";
import { red } from "@mui/material/colors";

export const styles: StylesList = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    "& > div > div": {
      marginBottom: ({ spacing }) => spacing(3),
      "& svg,& code": {
        color: red.A200,
        margin: "0 0 -10px 0",
        height: "40px",
        width: "40px",
      },
    },
  },
};
