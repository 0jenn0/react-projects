import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styles from "./VideoDetail.module.css";
import RelativeVideoCard from "../components/RelativeVideoCard";
import axios from "axios";

export default function VideoDetail() {
  const { videoId } = useParams();
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  const fetchData = async () => {
    const path1 = "/data/list_by_related.json";
    const path2 = "/data/list_by_popular.json";

    const [data1, data2] = await Promise.all([
      axios.get(path1).then((res) => res.data),
      axios.get(path2).then((res) => res.data),
    ]);

    return { data1, data2 };
  };

  const { isLoading, error, data } = useQuery(
    ["fetchData", videoId],
    fetchData
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  // console.log(
  //   data.data2.items.filter((item) => item.id === videoId)[0].snippet.title
  // );
  return (
    <section className={styles.container}>
      <div className={styles.column1}>
        <iframe
          className={styles.iframe}
          id={videoId}
          // width="840"
          // height="460"
          src={url}
          frameborder="0"
        ></iframe>
        <div className={styles.title}>
          {
            data.data2.items.filter((item) => item.id === videoId)[0].snippet
              .title
          }
        </div>
        <div className={styles.row}>
          <div className={styles.avatar}></div>
          <div className={styles.channelTitle}>
            {
              data.data2.items.filter((item) => item.id === videoId)[0].snippet
                .channelTitle
            }
          </div>
        </div>
        <div className={styles.detail}>
          {
            data.data2.items.filter((item) => item.id === videoId)[0].snippet
              .description
          }
        </div>
      </div>

      <div>
        {data.data1.items.map((item) => (
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
