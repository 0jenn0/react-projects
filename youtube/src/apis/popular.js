import axios from "axios";

export default function fetch_popular(API_KEY) {
  const url = "https://youtube.googleapis.com/youtube/v3/videos?";
  const params = {
    // key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
    key: API_KEY,
    part: "snippet",
    chart: "mostPopular",
    maxResults: 25,
    regionCode: "KR",
  };

  const data = axios.get(url, { params }).then((res) => res.data);
  return data;
}
