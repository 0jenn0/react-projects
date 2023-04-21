import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import styles from "./Videos.module.css";
import { useParams } from "react-router-dom";
import LoadingVideoCard from "../components/loading/LoadingVideoCard";
import ChannelCard from "../components/ChannelCard";

export default function Videos() {
  const [state, setState] = useState({ title: "", channelTitle: "" });
  const { keyword } = useParams();

  // const mappingData = (data) => {
  //   const new_data = data.items.map((item) => ({
  //     ...item,
  //     snippet: {
  //       ...item.snippet,
  //       channelImg:
  //         "https://yt3.ggpht.com/NDWZM_aZQZJ81KRMyctZ5WYJbMIeDXLXBbAYfudK9idNpn7jIiamnj4-_3XIvCvKr1fEU7551A=s88-c-k-c0x00ffffff-no-nd-rj",
  //     },
  //   }));
  //   return new_data;
  // };

  const fetctData = async () => {
    console.log("keyword fetching...", "keyword : ", keyword);
    const data = await fetch(
      `/data/list_by_${keyword ? "keyword" : "popular"}.json`
    ).then((res) => res.json());
    return data;
  };

  const { isLoading, error, data } = useQuery(["videos", keyword], fetctData, {
    staleTime: 1000 * 60 * 5,
  });

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

  // console.log("mapping한 데이타: ", data);
  // console.log("타입", typeof data);
  // count++;
  // console.log(count);
  // console.log("뭐야");

  return (
    <section className={styles.container}>
      {/* 
      {[
        ...data.items.filter((item) => item.id.kind === "youtube#channel"),
        ...data.items.filter((item) => item.id.kind === "youtube#video"),
      ].map((item) => (
        <>
          {item.id.kind === "youtube#channel" && (
            <ChannelCard
              className={styles.channelCard}
              imgUrl={item.snippet.thumbnails.default.url}
              channelTitle={item.snippet.title}
            />
          )}
          {item.id.kind === "youtube#video" && (
            <VideoCard
              key={keyword ? item.id.videoId : item.id}
              id={keyword ? item.id.videoId : item.id}
              thumUrl={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
              channelImg={item.snippet.channelImg}
            />
          )}
        </>
      ))} */}

      <div className={styles.channelCards}>
        {data.items
          .filter((item) => item.id.kind === "youtube#channel")
          .map((item) => (
            <ChannelCard
              className={styles.channelCard}
              imgUrl={item.snippet.thumbnails.default.url}
              channelTitle={item.snippet.title}
            />
          ))}
      </div>

      <div className={styles.videoCards}>
        {data.items
          .filter((item) => item.id.kind === "youtube#video" || item.kind)
          .map((item) => (
            <VideoCard
              key={keyword ? item.id.videoId : item.id}
              id={keyword ? item.id.videoId : item.id}
              thumUrl={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
            />
          ))}
      </div>
    </section>
  );
}
