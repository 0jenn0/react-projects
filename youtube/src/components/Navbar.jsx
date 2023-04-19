import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { BsYoutube } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //setText("");
    navigate(`/videos/${text}`);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logos}>
        <BsYoutube className={styles.logo} />

        <p className={styles.font}>Youtube</p>
      </Link>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
        <button className={styles.button}>
          <BiSearch />
        </button>
      </form>
    </nav>
  );
}
