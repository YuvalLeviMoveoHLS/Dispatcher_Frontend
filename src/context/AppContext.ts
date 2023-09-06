import { createContext } from "react";
import { ArticlesType } from "../models/ArticlesType";

interface AppContextType {
  articlesType: ArticlesType;
  setArticlesType: (filter: ArticlesType) => void;
}

const initialAppContextValue: AppContextType = {
  articlesType: "Top Headlines",
  setArticlesType: () => {},
};
const AppContext = createContext<AppContextType>(initialAppContextValue);

export default AppContext;
