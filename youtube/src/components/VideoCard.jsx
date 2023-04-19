import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css";

export default function VideoCard({
  id,
  thumUrl,
  title,
  channelTitle,
  onClick,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    onClick();
    navigate(`/videos/watch/${id}`);
  };
  return (
    <div onClick={handleClick} className={styles.container}>
      <img src={thumUrl} className={styles.img} />

      <p className={styles.title}>{title}</p>
      <div className={styles.row}>
        <div className={styles.avatar}></div>
        <p className={styles.channel}>{channelTitle}</p>
      </div>
    </div>
  );
}
