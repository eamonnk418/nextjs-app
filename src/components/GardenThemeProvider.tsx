"use client";

import { ThemeProvider } from "@zendeskgarden/react-theming";
import { StyledComponentsRegistry } from "./StyledComponentsRegistry";

export const GardenThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
};
