import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    setText("");
    navigate(`/videos/${text}`);
  };
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <BsYoutube className={styles.logo} />
      </Link>
      <p>Youtube</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={handleChange}
        />
      </form>
      <button>
        <BiSearch />
      </button>
    </nav>
  );
}
