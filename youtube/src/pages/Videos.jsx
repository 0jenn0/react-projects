import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import styles from "./Home.module.css";
import { useParams } from "react-router-dom";

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data } = useQuery(
    ["videos", keyword],
    async () => {
      console.log("keyword fetching...", "keyword : ", keyword);
      console.log(`/data/list_by_${keyword ? "keyword" : "popular"}.json`);
      return fetch(
        `/data/list_by_${keyword ? "keyword" : "popular"}.json`
      ).then((res) => res.json());
    }
    // {
    //   staleTime: 1000 * 60 * 5,
    // }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <section className={styles.container}>
      {data.items.map((item) => (
        <VideoCard
          key={keyword ? item.id.videoId : item.id}
          id={keyword ? item.id.videoId : item.id}
          thumUrl={item.snippet.thumbnails.medium.url}
          title={item.snippet.title}
          channelTitle={item.snippet.channelTitle}
        />
      ))}
    </section>
  );
}
