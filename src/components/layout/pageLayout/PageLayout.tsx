import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { TitleBar } from "../titleBar/TitleBar";
import { PageFooter } from "../pageFooter/PageFooter";
import { styles } from "./PageLayout.styles";

export interface PageLayoutProps {
  children: JSX.Element;
  title: string;
}

export const PageLayout = ({
  children,
  title,
}: PageLayoutProps): JSX.Element => {
  return (
    <Stack sx={styles.container}>
      <Box sx={styles.header}>
        <TitleBar title={title} />
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
