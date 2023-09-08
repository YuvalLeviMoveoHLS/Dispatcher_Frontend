// helpers.ts
import { SelectOption } from "../models/SelectOption"; // Import the interface

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


export const generateSortedData = (articles: any[]) => {
  const monthMap: { [key: number]: number } = {};
  for (let i = 1; i <= 12; i++) {
    monthMap[i] = 0;
  }

  articles.forEach((article) => {
    const date = new Date(article.publishedAt);
    const month = date.getMonth() + 1; // getMonth() returns 0-11
    monthMap[month] += 1;
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
