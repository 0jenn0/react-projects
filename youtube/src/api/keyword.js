import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  method: "get",
  params: { key: "dd" },
});

export const apis = {
  get: () => api.get(),
};
