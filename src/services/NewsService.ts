import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/";

export const fetchNews = async (query: string, filters: any) => {
  const response = await axios.get(
    `${BASE_URL}everything?q=${query}&apiKey=${API_KEY}`,
    {
      params: filters,
    }
  );
  return response.data;
};
