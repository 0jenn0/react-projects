import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import styles from "./Home.module.css";

export default function Home() {
  const { isLoading, error, data } = useQuery(
    ["videos"],
    async () => {
      console.log("fetching...");
      return fetch(`data/list_by_popular.json`).then((res) => res.json());
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  //   const handleClick = (e) => {
  //     setVideoID(e.target.id);
  //     console.log(videoID);
  //     navigate(`/videos/${videoID}`);
  //   };

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <section className={styles.container}>
      {data.items.map((item) => (
        // <div>{item.snippet.title}</div>
        <VideoCard
          key={item.id}
          id={item.id}
          thumUrl={item.snippet.thumbnails.medium.url}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
        />
      ))}
    </section>
  );
}
