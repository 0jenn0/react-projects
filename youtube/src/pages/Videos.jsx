import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import styles from "./Videos.module.css";
import { useParams } from "react-router-dom";
import LoadingVideoCard from "../components/loading/LoadingVideoCard";
import fetch_popular from "../apis/popular";
import fetch_keyword from "../apis/keyword";
import fetch_keywordTitle from "../apis/keywordTitles";
import { useDarkMode } from "../context/DarkModeContext";
import ChannelCard from "../components/ChannelCard";

export default function Videos() {
  const { keyword } = useParams();
  const { API_KEY } = useDarkMode();

  const fetchData = async () => {
    if (keyword) {
      return fetch_keyword(keyword, API_KEY);
    } else {
      return fetch_popular(API_KEY);
    }
  };

  const { isLoading, error, data } = useQuery(["videos", keyword], fetchData, {
    staleTime: 1000 * 60 * 5,
  });

  const keywordTitleQuery = useQuery(
    ["videos_", keyword],
    () => fetch_keywordTitle(keyword, API_KEY),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

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
      <div className="channelContainer"></div>
      {/* {data.items.map((item) =>
        item.id.kind === "youtube#channel" ? (
          <ChannelCard
            className={styles.ChannelCard}
            imgUrl={item.snippet.thumbnails.default.url}
            channelTitle={item.snippet.title}
          />
       
        ) : (
          <VideoCard
            key={keyword ? item.id.videoId : item.id}
            id={keyword ? item.id.videoId : item.id}
            thumUrl={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            channelImg={item.snippet.channelImg}
          />
        )
      )} */}
      {data.items.map((item) => (
        <>
          {item.id.kind === "youtube#channel" && (
            <ChannelCard
              className={styles.ChannelCard}
              imgUrl={item.snippet.thumbnails.default.url}
              channelTitle={item.snippet.title}
            />
          )}
          {/* {item.id.kind === "youtube#video" && (
            <VideoCard
              key={keyword ? item.id.videoId : item.id}
              id={keyword ? item.id.videoId : item.id}
              thumUrl={item.snippet.thumbnails.medium.url}
              title={item.snippet.title}
              channelTitle={item.snippet.channelTitle}
              channelImg={item.snippet.channelImg}
            />
          )} */}
          <div>siasiarnt</div>
        </>
      ))}
    </section>
  );
}
