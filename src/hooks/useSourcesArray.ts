import { useState, useEffect } from "react";
import { SelectOption } from "../models/SelectOption";
import { createSourcesOptions } from "../helpers/helpers";
import SourcesMock from "../mockData/SourcesMock.json";

export const useSourcesArray = () => {
  const [uniqueSources, setUniqueSources] = useState<SelectOption[]>([]);

  useEffect(() => {
    const sources: SelectOption[] = createSourcesOptions(SourcesMock);
    setUniqueSources(sources);
  }, []);

  return {
    uniqueSources,
    setUniqueSources,
  };
};
