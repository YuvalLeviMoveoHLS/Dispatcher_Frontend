import { Article } from "../models/ArticleInterface";
import { SelectOption } from "../models/SelectOption"; // Import the interface
import { ISourceNameAndValue } from "../models/SourceNameAndValueInterface";
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

const findRelevantMonths = (monthData: { name: string; val: number }[]) => {
  // Find the month with the max value
  const maxMonth = monthData.reduce(
    (acc, curr) => (curr.val > acc.val ? curr : acc),
    { name: "", val: 0 }
  );

  // Find the index of the max month
  const maxMonthIndex = monthData.findIndex(
    (month) => month.name === maxMonth.name
  );

  // Take 3 months before and 2 months after the max month
  const start = Math.max(0, maxMonthIndex - 3);
  const end = Math.min(monthData.length, maxMonthIndex + 3); // Add 1 for inclusive slice

  return monthData.slice(start, end);
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
  // return monthNames
  //   .map((name, index) => ({ name, val: monthMap[index + 1] }))
  //   .slice(-6);

  const monthData = monthNames.map((name, index) => ({
    name,
    val: monthMap[index + 1],
  }));

  return findRelevantMonths(monthData);
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

export const countArticlesBySource = (
  articles: Article[]
): ISourceNameAndValue[] => {
  const sourceArticleCountsDict: { [sourceName: string]: number } = {};

  articles.forEach((article) => {
    const sourceName = article.source.name;
    if (sourceName) {
      sourceArticleCountsDict[sourceName] =
        (sourceArticleCountsDict[sourceName] || 0) + 1;
    }
  });
  const sortedSourceData: ISourceNameAndValue[] = Object.keys(
    sourceArticleCountsDict
  )
    .map((sourceName) => ({
      name: sourceName,
      value: sourceArticleCountsDict[sourceName],
    }))
    .sort((a, b) => b.value - a.value);
  //.slice(0, 4);

  return sortedSourceData;
};
