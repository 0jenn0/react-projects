import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import styles from "./Videos.module.css";
import { useParams } from "react-router-dom";
import LoadingVideoCard from "../components/loading/LoadingVideoCard";

export default function Videos() {
  const [state, setState] = useState({ title: "", channelTitle: "" });
  const { keyword } = useParams();
  const { isLoading, error, data } = useQuery(
    ["videos", keyword],
    async () => {
      console.log("keyword fetching...", "keyword : ", keyword);
      return fetch(
        `/data/list_by_${keyword ? "keyword" : "popular"}.json`
      ).then((res) => res.json());
    }
    // {
    //   staleTime: 1000 * 60 * 5,
    // }
  );

  const onClick = (e) => {
    setState((prev) => ({
      title: e.target.title,
      channelTitle: e.target.channelTitle,
    }));
  };

  if (isLoading)
    return (
      <section className={styles.container}>
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
      </section>
    );

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
          onClick={(e) => onClick(e)}
        />
      ))}
    </section>
  );
}
