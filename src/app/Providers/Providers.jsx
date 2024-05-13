"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-neutral-800 dark:text-neutral-300 bg-neutral-100 min-h-screen transition duration-300 select-none dark:bg-neutral-900">
        {children}
      </div>
    </ThemeProvider>
  );
}
