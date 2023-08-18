import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";

export function StyledEnginesProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
