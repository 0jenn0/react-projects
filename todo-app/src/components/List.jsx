import React, { useContext, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import styles from "./List.module.css";
import { TfiTrash } from "react-icons/tfi";

export default function List({ id, text, checked }) {
  const { state, dispatch, isDarkMode, darkModeReducer, handleDarkMode } =
    useContext(StateContext);

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const handleRemove = () => {
    dispatch({ type: "remove", id });
  };

  const handleCheck = () => {
    dispatch({ type: "check", id });
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        onChange={() => handleCheck()}
        checked={checked}
      />
      <div className={styles.todo_text}>{text}</div>
      <button className={styles.button} onClick={() => handleRemove()}>
        <TfiTrash />
      </button>
    </div>
  );
}
