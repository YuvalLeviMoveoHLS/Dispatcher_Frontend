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
