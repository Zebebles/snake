import { StylesList } from "../../mui/types";

export const styles: StylesList = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  headingContainer: {
    marginBottom: ({ spacing }) => spacing(3),
  },
};
