import { useState, useEffect } from "react";

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchInput]);

  useEffect(() => {
    if (debouncedSearchInput) {
      setRecentSearches((prevSearches) => [
        ...prevSearches,
        debouncedSearchInput,
      ]);
    }
  }, [debouncedSearchInput]);

  return {
    searchInput,
    setSearchInput,
    debouncedSearchInput,
    setDebouncedSearchInput,
    recentSearches,
    setRecentSearches,
  };
};
