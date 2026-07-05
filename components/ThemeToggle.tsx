"use client";

import { useEffect } from "react";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

const STORAGE_KEY = "km-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Manual light/dark override on top of the `prefers-color-scheme` default
 * baked into `app/tokens.css`. Talks to the DOM directly (no React state)
 * so there is nothing to resync in an effect -- the current theme always
 * lives on `<html data-theme>` and in localStorage, and the icon swap is
 * pure CSS keyed off that attribute (see ThemeToggle.module.css).
 */
export function ThemeToggle() {
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    document.documentElement.setAttribute("data-theme", stored ?? systemTheme());
  }, []);

  function toggle() {
    const current = document.documentElement.getAttribute("data-theme");
    const next: Theme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label="다크/라이트 모드 전환"
    >
      <span className={styles.sun} aria-hidden="true">
        ☀️
      </span>
      <span className={styles.moon} aria-hidden="true">
        🌙
      </span>
    </button>
  );
}
