import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";

export default function DarkmodeButton() {
  const { isDarkMode, setIsDarkMode } = useContext(StateContext);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };
  return <button onClick={() => handleDarkMode()}>Toggle</button>;
}
