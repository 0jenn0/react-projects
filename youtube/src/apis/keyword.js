import axios from "axios";

export default function fetch_keyword({ keyworkd }) {
  const url = "https://youtube.googleapis.com/youtube/v3/search?";
  const params = {
    key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
    part: "snippet",
    maxResults: 25,
    q: keyworkd,
  };

  const data = axios.get(url, { params }).then((res) => res.data);
  return data;
}
