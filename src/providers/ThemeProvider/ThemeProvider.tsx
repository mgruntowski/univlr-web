"use client";

import * as React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider: React.FC<
  React.ComponentProps<typeof NextThemesProvider>
> = ({ children, ...props }) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);

export default ThemeProvider;
