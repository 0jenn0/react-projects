import axios from "axios";

export default function fetch_related(video_Id, API_KEY) {
  const url = "https://youtube.googleapis.com/youtube/v3/search?";
  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=mWqjFQ-nUuY&type=video&maxResults=25&key={{key}}
  const params = {
    part: "snippet",
    relatedToVideoId: video_Id,
    type: "video",
    maxResults: 25,
    // key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
    key: API_KEY,
  };

  const data = axios.get(url, { params }).then((res) => res.data);
  return data;
}
