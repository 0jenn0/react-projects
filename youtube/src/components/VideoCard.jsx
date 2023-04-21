import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./VideoCard.module.css";
import { useQueryClient } from "@tanstack/react-query";
import fetchChannelImage from "../apis/channelImg";
import fetch_channel from "../apis/getChannelbyId";
import { useDarkMode } from "../context/DarkModeContext";
import { useQuery } from "@tanstack/react-query";
import fetch_view from "../apis/getView";

export default function VideoCard({ id, thumUrl, title, channelTitle }) {
  const { API_KEY } = useDarkMode();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/videos/watch/${id}`);
  };

  const { isLoading, error, data } = useQuery(["channelImg", id], () =>
    fetchChannelImage(id, API_KEY)
  );

  const viewQuery = useQuery(["viewCount", id], () => fetch_view(id, API_KEY));
  // const viewQuery = useQuery(["viewCount", id], () => fetch_view());

  if (isLoading | viewQuery.isLoading) <p>Loading</p>;
  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles.imgBox}>
        <img src={thumUrl} className={styles.img} />
        <span className={styles.time}>3:19</span>
      </div>

      <div className={styles.row}>
        <div className={styles.imgBox}>
          <img src={data} className={styles.avatar} alt="채널프로필" />
        </div>

        <div className={styles.column}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
          <span className={styles.view}>
            조회수 {formatView(`${viewQuery.data}`)}회 • 2일 전
          </span>

          {/* <span className={styles.view}>
            조회수
            {viewQuery.data}회 • 2일 전
          </span> */}
        </div>
      </div>
    </div>
  );
}
const formatView = (view) => {
  if (view.length >= 6) {
    const new_view = view.slice(0, view.length - 4) + "만"; // 뒤에 4개 날리기
    return new_view;
  } else if ((view.length = 5)) {
    return view[0].concat(".", view[1], "만");
  } else if (view.length <= 4) {
    return view;
  }
};
