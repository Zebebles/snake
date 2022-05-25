import { NextPage } from "next";
import { Typography } from "@mui/material";

export interface TitleBarProps {
  title: string;
}

export const TitleBar: NextPage<TitleBarProps> = ({ title }) => {
  return (
    <>
      <Typography variant="h3">{title}</Typography>
    </>
  );
};
