import axios from "axios";

export default async function fetch_view(video_id, API_KEY) {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=${video_id}&key=${API_KEY}`;

  const view = await axios.get(url).then((res) => res.data);
  return view.items[0].statistics.viewCount;
}

// export default async function fetch_view() {
//   const data = await axios.get("/data/view.json").then((res) => res.data);
//   return data.items[0].statistics.viewCount;
// }
