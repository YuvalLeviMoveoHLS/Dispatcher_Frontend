import { createContext } from "react";
import { ArticlesType } from "../models/ArticlesType";

interface AppContextType {
  articlesType: ArticlesType;
  setArticlesType: (filter: ArticlesType) => void;

  searchInput: string;
  setSearchInput: (input: string) => void;
}

const initialAppContextValue: AppContextType = {
  articlesType: "Top Headlines",
  setArticlesType: () => {},

  searchInput: "",
  setSearchInput: () => {},
};
const AppContext = createContext<AppContextType>(initialAppContextValue);

export default AppContext;
