import { Article } from "../models/ArticleInterface";
import { SelectOption } from "../models/SelectOption"; // Import the interface
import { SourcesResponse, Source } from "../models/SourcesResponse";
import { Status } from "../utils/constants/Constants";
export const getUniqueSources = (articles: any[]): SelectOption[] => {
  const uniqueSourceMap: { [key: string]: SelectOption } = articles.reduce(
    (acc, article) => {
      const id = article.source.id;
      const name = article.source.name;
      const key = `${id}-${name}`;

      if (!acc[key]) {
        acc[key] = { value: id, title: name };
      }

      return acc;
    },
    {}
  );

  return Object.values(uniqueSourceMap);
};
export const createSourcesOptions = (
  response: SourcesResponse
): SelectOption[] => {
  if (response.status !== Status.OK || !Array.isArray(response.sources)) {
    return [];
  }

  return response.sources.map((source: Source) => ({
    value: source.id,
    title: source.name,
  }));
};

export const generateSortedData = (articles: Article[]) => {
  const monthMap: { [key: number]: number } = {};
  for (let i = 1; i <= 12; i++) {
    monthMap[i] = 0;
  }

  articles.forEach((article) => {
    const publishedAt = article.publishedAt;
    if (publishedAt) {
      const date = new Date(publishedAt);
      const month = date.getMonth() + 1; // getMonth() returns 0-11
      monthMap[month] += 1;
    }
  });

  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return monthNames
    .map((name, index) => ({ name, val: monthMap[index + 1] }))
    .slice(-6);
};


export const changeDateFormat = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};