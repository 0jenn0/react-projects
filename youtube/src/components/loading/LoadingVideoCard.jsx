import React from "react";
import styles from "./LoadingVideoCard.module.css";

export default function LoadingVideoCard() {
  return (
    <div className={styles.container}>
      <div className={styles.img} />

      <div className={styles.title} />
      <div className={styles.row}>
        <div className={styles.avatar} />
        <div className={styles.channel} />
      </div>
    </div>
  );
}
