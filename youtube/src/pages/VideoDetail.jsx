import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";
import RelativeVideoCard from "../components/RelativeVideoCard";
import axios from "axios";
import fetch_channel from "../apis/getChannelbyId";
import fetch_related from "../apis/related";
import { useDarkMode } from "../context/DarkModeContext";

export default function VideoDetail() {
  const { videoId } = useParams();
  const { API_KEY } = useDarkMode();
  const channelQuery = useQuery(["channel", videoId], () =>
    fetch_channel(videoId, API_KEY)
  );

  return (
    <section className={styles.container}>
      <div className={styles.column1}>
        {/* <iframe
          className={styles.iframe}
          id={videoId}
          // width="840"
          // height="460"
          src={videoId}
          frameborder="0"
        ></iframe> */}
        <div className={styles.title}>
          {channelQuery.data.items[0].snippet.title}
        </div>
        <div className={styles.row}>
          <div className={styles.avatar}></div>
          <div className={styles.channelTitle}>
            {channelQuery.data.items[0].snippet.channelTitle}
          </div>
        </div>
        <div className={styles.detail}>
          {channelQuery.data.items[0].snippet.description}
        </div>
      </div>
      {/* 
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
      </div>  */}
    </section>
  );
}
