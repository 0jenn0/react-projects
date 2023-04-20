import React from "react";
import styles from "./Toggle.module.css";
import { FaMoon } from "react-icons/fa";
import { TbSun } from "react-icons/tb";

export default function Toggle({ label, handleDarkMode, darkMode }) {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        onClick={handleDarkMode}
      />
      <div className={styles.span}>
        {/* {!darkMode ? (
          <FaMoon className={styles.icon} />
        ) : (
          <BsSunFill className={styles.icon} />
        )} */}
        <FaMoon className={styles.moon} />
        <TbSun className={styles.sun} />
      </div>
      <strong className={styles.strong}>{label}</strong>
    </label>
  );
}
