import { NextPage } from "next";
import { Box, Container, Stack } from "@mui/material";
import { TitleBar } from "../titleBar/TitleBar";
import { PageFooter } from "../pageFooter/PageFooter";
import { styles } from "./PageLayout.styles";

export interface PageLayoutProps {
  children: JSX.Element;
}

export const PageLayout: NextPage<PageLayoutProps> = ({ children }) => {
  return (
    <Stack sx={styles.container}>
      <Box sx={styles.header}>
        <TitleBar title="Snake" />
      </Box>
      <Box sx={styles.content}>
        <Container sx={styles.contentContainer}>{children}</Container>
      </Box>
      <Box sx={styles.footer}>
        <PageFooter author="Zeb Muller" />
      </Box>
    </Stack>
  );
};
