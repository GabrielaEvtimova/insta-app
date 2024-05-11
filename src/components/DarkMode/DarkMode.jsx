"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function DarkMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {mounted &&
        (currTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer "
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-xl cursor-pointer "
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}
