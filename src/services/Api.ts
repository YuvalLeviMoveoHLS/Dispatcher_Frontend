import axios from "axios";

const Api = axios.create({
  baseURL: "https://newsapi.org/v2/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_NEWS_API_KEY}`,
  },
});

export default Api;
