import axios from "axios";

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

export default async function fetch_view(video_id, API_KEY) {
  const url = `https://www.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=${video_id}&key=${API_KEY}`;

  const view = await axios.get(url).then((res) => res.data);
  const viewCount = view.items[0].statistics.viewCount;
  return formatView(`${viewCount}`);
}

// 목데이타로
// export default async function fetch_view() {
//   const data = await axios.get("/data/view.json").then((res) => res.data);
//   return data.items[0].statistics.viewCount;
// }
