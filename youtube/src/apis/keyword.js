import axios from "axios";
import App from "../App";

export default function fetch_keyword(keyworkd, API_KEY) {
  const url = "https://youtube.googleapis.com/youtube/v3/search?";
  const params = {
    //  key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
    key: API_KEY,
    part: "snippet",
    maxResults: 25,
    q: keyworkd,
  };

  const data = axios.get(url, { params }).then((res) => res.data);
  return data;
}
