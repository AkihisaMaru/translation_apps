import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./layout";
import { ThemeProvider, createTheme } from "@mui/material";
import { Translation } from "./pages/translation";
import { Document } from "./pages/document";
import { RecoilRoot } from "recoil";

export default function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/translations" element={<Translation />} />
              <Route path="/documents" element={<Document />} />
            </Route>
            <Route path="/*" element={<Navigate replace to="translations" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}
