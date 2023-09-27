import { useState, useEffect } from "react";
import { Api } from "../services/Api";
import { SelectOption } from "../models/SelectOption";

export const useFetchCountries = (): { countriesOptions: SelectOption[] } => {
  const [countriesOptions, setCountries] = useState<SelectOption[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await Api.get(
          `${Api.defaults.baseURL}filters/countries`
        );
        const countriesRes = response.data;
        countriesRes.unshift({ value: "", title: "None" });
        setCountries(response.data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return { countriesOptions };
};
