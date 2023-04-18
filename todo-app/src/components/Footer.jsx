import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../context/StateProvider";
import styles from "./Footer.module.css";

export default function Footer() {
  const { state, dispatch } = useContext(StateContext);
  const [form, setForm] = useState("");

  useEffect(() => {
    window.localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", form });
    setForm("");
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={styles.form}
    >
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        name="value"
        value={form}
        autoFocus
        className={styles.input}
      />
      <button>Add + </button>
    </form>
  );
}
