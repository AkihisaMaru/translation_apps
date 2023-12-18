import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  children: string;
  widht?: string;
};

export function Title({ children, widht }: Props) {
  return (
    <Box position="relative">
      <Typography variant="h4">{children}</Typography>
      <Box
        height="10px"
        bgcolor="#6969696b"
        width="350px"
        // left="20px"
        bottom="5px"
        position="absolute"
      />
    </Box>
  );
}