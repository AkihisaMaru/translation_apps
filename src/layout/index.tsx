import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { Box } from "@mui/material";

export function Layout() {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      height="100vh"
      minHeight='700px'
      bgcolor="#a5a5cf28"
    >
      <Box
        display="flex"
        sx={{
          width: "100%",
          [theme.breakpoints.up("sm")]: {
            width: theme.breakpoints.values.sm,
          },
        }}
        bgcolor={theme.palette.background.default}
      >
        <Outlet />
      </Box>
    </Box>
  );
}