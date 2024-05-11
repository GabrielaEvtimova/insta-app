"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-neutral-700 dark:text-netral-200 bg-neutral-700 min-h-screen transition duration-300 select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
