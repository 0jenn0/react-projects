import axios from "axios";

export default function fetch_keywordTitle(keyworkd, API_KEY) {
  const url = "https://youtube.googleapis.com/youtube/v3/search?";
  const params = {
    // key: "AIzaSyC1QIexEUANcjc2NkzLt_ap4UKbqYbuvcU",
    key: API_KEY,
    part: "snippet",
    maxResults: 25,
    q: keyworkd,
  };
  const config = {
    responseType: "arraybuffer",
  };

  //   const data = axios
  //     .get(url, { params, ...config })
  //     .then((res) => new TextDecoder("utf-8").decode(new Uint8Array(res.data)));

  //   const data = axios.get(url, { params, ...config }).then(
  //     (res) =>
  //       res.data.item.map((item) => ({
  //         ...item,
  //         snippet: {
  //           ...item.snippet,
  //           title: new TextDecoder("utf-8").decode(
  //             new Uint8Array(item.snippet.title)
  //           ),
  //         },
  //       }))
  //   );

  //   const data = axios.get(url, { params }).then((res) =>
  //     res.data.items.map((item) => ({
  //       ...item,
  //       snippet: {
  //         ...item.snippet,
  //         title: "응가",
  //       },
  //     }))
  //   );
  const data = axios.get(url, { params }).then((res) =>
    res.data.map((item) => ({
      ...item,
      snippet: {
        ...item.snippet,
        // title: TextDecoder("utf-8").decode(Uint8Array(item.snippet.title)),
        title: "ㅅㅂ왜안돼",
      },
    }))
  );

  return data;
}
