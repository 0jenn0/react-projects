import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";

export default function VideoDetail() {
  const { videoId } = useParams();
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  const { isLoading, error, data } = useQuery(
    ["related_videos", videoId],
    async () => {
      console.log("related videos fetching...", "videoId : ", videoId);
      return fetch(`/data/list_by_related.json`).then((res) => res.json());
    }
    // {
    //   staleTime: 1000 * 60 * 5,
    // }
  );
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

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
      <div>
        {data.items.map((item) => (
          <VideoCard
            key={item.id.videoId}
            id={item.id.videoId}
            thumUrl={item.snippet.thumbnails.default.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
          />
        ))}
      </div>
    </div>
  );
}
