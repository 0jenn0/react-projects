import axios from "axios";
import { useDarkMode } from "../context/DarkModeContext";

// export default function fetch_channelImg(channel_id) {
//   const url = "https://youtube.googleapis.com/youtube/v3/channels?";
//   const params = {
//     part: "snippet",
//     id: channel_id,
//     key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
//   };

//   const data = axios.get(url, { params }).then((res) => res.data);
//   return data;
// }

export default async function fetchChannelImage(videoId, API_KEY) {
  // 비디오 정보 가져오기
  //const key = "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU";
  const key = API_KEY;
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${key}`;
  const videoResponse = await axios.get(videoUrl);
  const { channelId } = videoResponse.data.items[0].snippet;

  // 채널 정보 가져오기
  const channelUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&key=${key}`;
  const channelResponse = await axios.get(channelUrl);
  const channelImageUrl =
    channelResponse.data.items[0].snippet.thumbnails.default.url;

  return channelImageUrl;
}
