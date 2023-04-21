import React from "react";
import styles from "./ChannelCard.module.css";
export default function ChannelCard({ imgUrl, channelTitle, subscribeNum }) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imgUrl} alt="" />
      <div>
        <p className={styles.title}>{channelTitle}</p>
        <p>{subscribeNum}</p>
      </div>
    </div>
  );
}
