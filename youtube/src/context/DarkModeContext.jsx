import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  // 여기서 key 바꿀것
  // const API_KEY = "AIzaSyD4fG1h33liAkLH-DMcUChgOjYP2bf2vPs";
  const API_KEY = "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU";

  useEffect(() => {
    // const isDark =
    //   localStorage.theme === "dark" ||
    //   (!("them" in localStorage) &&
    //     window.matchMedia("(prefers-color-scheme: dark)").matches);

    const isDark = localStorage.theme === "dark";
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, API_KEY }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

export const useDarkMode = () => useContext(DarkModeContext);
