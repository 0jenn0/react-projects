import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const { videoId } = useParams();
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  return (
    <div>
      <iframe
        id="existing-iframe-example"
        width="640"
        height="360"
        src={url}
        frameborder="0"
        autoplay
      ></iframe>
    </div>
  );
}
