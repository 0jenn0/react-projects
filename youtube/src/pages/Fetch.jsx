import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";
import RelativeVideoCard from "../components/RelativeVideoCard";
import axios from "axios";
import fetch_channel from "../apis/getChannelbyId";
import fetch_related from "../apis/related";
import fetchChannelImage from "../apis/channelImg";
import { useDarkMode } from "../context/DarkModeContext";
export default function Fetch() {
  const { videoId } = useParams();
  const { API_KEY } = useDarkMode();

  const channelQuery = useQuery(
    ["channel", videoId],
    () => fetch_channel(videoId, API_KEY),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  const relatedQuery = useQuery(
    ["related", videoId],
    () => fetch_related(videoId, API_KEY),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  //   const channelImgQuery = useQuery(
  //     ["channelImg", videoId],
  //     async () => {
  //       const channel_id = await fetch_channelImg(
  //         channelQuery.data.items[0].snippet.channelId
  //       );
  //       fetch_channelImg(channel_id);
  //     },
  //     {
  //       staleTime: 1000 * 60 * 5,
  //     }
  //   );

  const channelImgQuery = useQuery(
    ["channelImg", videoId],
    () => fetchChannelImage(videoId, API_KEY),
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (
    channelQuery.isLoading ||
    relatedQuery.isLoading ||
    channelImgQuery.isLoading
  )
    return <p>Loading</p>;

  return (
    <section className={styles.container}>
      <div className={styles.column1}>
        <iframe
          className={styles.iframe}
          id={videoId}
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${videoId}`}
          frameborder="0"
        ></iframe>
        <div className={styles.title}>
          {channelQuery.data.items[0].snippet.title}
        </div>
        <div className={styles.row}>
          <img className={styles.avatar} src={channelImgQuery.data}></img>
          <div className={styles.channelTitle}>
            {channelQuery.data.items[0].snippet.channelTitle}
          </div>
        </div>
        <div className={styles.detail}>
          {channelQuery.data.items[0].snippet.description
            .split("\n")
            .map((line) => (
              <span>
                {line}
                <br />
              </span>
            ))}
        </div>
      </div>
      <div>
        {relatedQuery.data.items.map((item) => (
          <RelativeVideoCard
            isRelated={true}
            key={item.id.videoId}
            id={item.id.videoId}
            thumUrl={item.snippet.thumbnails.medium.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
          />
        ))}
      </div>
    </section>
  );
}
