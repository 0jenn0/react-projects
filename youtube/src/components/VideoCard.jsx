import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VideoCard({ id, thumUrl, title, channelTitle }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${id}`);
  };
  return (
    <div onClick={handleClick}>
      <img src={thumUrl} />
      <p>{title}</p>
      <p>{channelTitle}</p>
    </div>
  );
}
