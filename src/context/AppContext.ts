import { createContext } from "react";
import { ArticlesType } from "../models/ArticlesType";
import { IMonthlyArticleCount } from "../models/MonthlyArticleCountInterface";
interface AppContextType {
  articlesType: ArticlesType;
  setArticlesType: (filter: ArticlesType) => void;
  monthlyArticleCounts: IMonthlyArticleCount[];
  setMonthlyArticleCounts: (data: IMonthlyArticleCount[]) => void;
}

const initialAppContextValue: AppContextType = {
  articlesType: "Top Headlines",
  setArticlesType: () => {},
  monthlyArticleCounts: [],
  setMonthlyArticleCounts: () => {},
};
const AppContext = createContext<AppContextType>(initialAppContextValue);

export default AppContext;
