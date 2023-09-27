import { useEffect, useState } from "react";
import { Api } from "../services/Api";
import { SelectOption } from "../models/SelectOption";

export const useFetchLanguages = () => {
  const [languages, setLanguages] = useState<SelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await Api.get(
          `${Api.defaults.baseURL}filters/languages`
        );
        const languagesRes = response.data;
        languagesRes.unshift({ value: "", title: "None" });
        setLanguages(languagesRes); // Adjust if the data structure is different
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  return { languages, isLoading, error };
};
