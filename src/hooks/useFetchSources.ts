// hooks/useFetchSources.ts
import { useEffect } from "react";
import { Api } from "../services/Api"; // Adjust the path to your Api service
import { createSourcesOptions } from "../helpers/helpers";
import { SelectOption } from "../models/SelectOption"; // Adjust the path

export const useFetchSources = (
  setUniqueSources: React.Dispatch<React.SetStateAction<SelectOption[]>>
) => {
  useEffect(() => {
    const fetchSources = async () => {
      try {
        const response = await Api.get(
          `${Api.defaults.baseURL}filters/sources`
        );
        const sourcesOptions = createSourcesOptions(response.data);
        sourcesOptions.unshift({ value: "", title: "None" });
        setUniqueSources(sourcesOptions);
      } catch (error) {
        console.error("Failed to fetch sources:", error);
      }
    };

    fetchSources();
  }, []);
};
