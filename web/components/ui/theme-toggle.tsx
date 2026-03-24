"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="fixed bottom-6 right-6 z-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={16} weight="regular" aria-hidden="true" />
      ) : (
        <Moon size={16} weight="regular" aria-hidden="true" />
      )}
    </Button>
  );
}
