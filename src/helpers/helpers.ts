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
