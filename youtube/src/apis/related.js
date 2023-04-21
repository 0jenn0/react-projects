import axios from "axios";

export default function fetch_related({ video_Id }) {
  const url = "https://youtube.googleapis.com/youtube/v3/search?";
  const params = {
    key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
    part: "snippet",
    relatedToVideoId: video_Id,
    type: "video",
    maxResults: 25,
  };

  const data = axios.get(url, { params }).then((res) => res.data);
  return data;
}
