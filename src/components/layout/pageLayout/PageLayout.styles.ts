import { StylesList } from "../../../mui/types";

export const styles: StylesList = {
  container: {
    height: "100vh",
  },

  header: {
    flexBasis: "15%",
    padding: "5px 10px",
    borderBottom: ({ palette }) => `1px solid ${palette.divider}`,
  },

  content: {
    flex: 1,
  },

  contentContainer: {
    height: "100%",
  },

  footer: {
    flexBasis: "7.5%",
    borderTop: ({ palette }) => `1px solid ${palette.divider}`,
  },
};
