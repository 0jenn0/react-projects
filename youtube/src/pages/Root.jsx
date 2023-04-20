import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
}
