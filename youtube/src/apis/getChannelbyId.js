import axios from "axios";
const customAxios = axios.create({});

export default function fetch_channel(video_id, API_KEY) {
  const url = "https://youtube.googleapis.com/youtube/v3/videos?";
  const params = {
    part: "snippet",
    id: video_id,
    // key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
    key: API_KEY,
  };

  const data = customAxios.get(url, { params }).then((res) => res.data);
  return data;
}
