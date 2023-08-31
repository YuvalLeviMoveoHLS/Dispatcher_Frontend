import { createContext } from "react";

interface AppContextType {
  appHeaderFilter: string;
  setAppHeaderFilter: (filter: string) => void;
}

const initialAppContextValue: AppContextType = {
  appHeaderFilter: "Top Headlines",
  setAppHeaderFilter: () => {},
};
const AppContext = createContext<AppContextType>(initialAppContextValue);

export default AppContext;
