import axios from "axios";
import { TopHeadlinesOptions, EverythingOptions } from "../models/ApiTypes";
import { ArticlesType } from "../models/ArticlesType";

const Api = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  // headers: {
  //   Authorization: `Bearer ${import.meta.env.VITE_APP_NEWS_API_KEY}`,
  // },
});

const buildApiQuery = (
  articlesType: ArticlesType,
  options: TopHeadlinesOptions | EverythingOptions,
  page: number // Add this line
) => {
  // Initialize with required parameters
  let params: any = { page };

  // Logic for "Top Headlines"
  if (articlesType === "Top Headlines") {
    const topHeadlinesOptions = options as TopHeadlinesOptions;

    if (
      (topHeadlinesOptions.country || topHeadlinesOptions.category) &&
      topHeadlinesOptions.sources
    ) {
      console.error("You can't mix country or category with sources.");
      return;
    }
    if (topHeadlinesOptions.country) {
      params.country = topHeadlinesOptions.country;
    }

    if (topHeadlinesOptions.category) {
      params.category = topHeadlinesOptions.category;
    }

    if (topHeadlinesOptions.sources) {
      params.sources = topHeadlinesOptions.sources.join(",");
    }

    if (topHeadlinesOptions.q) {
      params.q = topHeadlinesOptions.q;
    }
  }

  // Logic for "Everything"
  else if (articlesType === "Everything") {
    const everythingOptions = options as EverythingOptions;

    if (everythingOptions.q) {
      params.q = everythingOptions.q;
    }
    if (everythingOptions.from) {
      params.from = everythingOptions.from;
    }

    if (everythingOptions.to) {
      params.to = everythingOptions.to;
    }

    if (everythingOptions.language) {
      params.language = everythingOptions.language;
    }

    if (everythingOptions.sortBy) {
      params.sortBy = everythingOptions.sortBy;
    }

    if (everythingOptions.sources) {
      params.sources = everythingOptions.sources.join(",");
    }
  }

  return params;
};

// Exporting Axios instance and utility function
export { Api, buildApiQuery };
