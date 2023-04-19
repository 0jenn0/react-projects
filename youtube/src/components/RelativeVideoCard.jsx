import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./RelativeVideoCard.module.css";

export default function RelativeVideoCard({
  isRelated,
  id,
  thumUrl,
  title,
  channelTitle,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${id}`);
  };
  return (
    <div onClick={handleClick} className={styles.container}>
      <img className={styles.thum} src={thumUrl} />
      <div className={styles.column2}>
        <div className={styles.title}>{title}</div>
        <p className={styles.channel}>{channelTitle}</p>
      </div>
    </div>
  );
}
