"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>("light"); // local state for syncing

  useEffect(() => {
    setMounted(true);

    // Sync initial theme to html
    const initialTheme = theme === "system" ? "light" : theme || "light";
    setCurrentTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, [theme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme); // next-themes state
    setCurrentTheme(newTheme); // local state
    document.documentElement.setAttribute("data-theme", newTheme); // html attribute
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border bg-gray-100 dark:bg-gray-800 dark:text-white"
    >
      {currentTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
