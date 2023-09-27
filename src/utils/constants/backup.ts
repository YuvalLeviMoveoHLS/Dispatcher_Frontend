// useEffect(() => {
//   const fetchSources = async () => {
//     try {
//       const response = await Api.get(
//         `${Api.defaults.baseURL}filters/sources`
//       );
//       const sourcesOptions = createSourcesOptions(response.data); // Adjust if your data is nested differently
//       console.log(response);
//       sourcesOptions.unshift({ value: "", title: "None" });
//       setUniqueSources(sourcesOptions);
//     } catch (error) {
//       console.error("Failed to fetch sources:", error);
//     }
//   };

//   fetchSources();
// }, []);

// import "./App.css";
// import StyledButton from "./components/Button/StyledButton";
// import FilterDropDown from "./components/FilterDropDown/FilterDropDown";
// import ArticleCard from "./components/Article/ArticleCard";
// import SearchInput from "./components/Input/SearchInput";
// import { selectOptions } from "./mockData/SelectOptionsDropDown";
// //import { articles } from "./mockData/Article";
// import { CssBaseline } from "@mui/material";
// import AppContext from "./context/AppContext";

// import AppHeader from "./components/AppHeader/AppHeader";
// import {
//   AppContainer,
//   ArticleContainer,
//   DashboardContainer,
//   TempDashboard,
//   FilterContainer,
//   MainContainer,
//   MainContent,
//   TitleHeadLines,
// } from "./App.styles";
// import DropdownBody from "./components/DropdownBody/DropdownBody";
// import x from "./assets/fonts/Roboto/Roboto-Regular.ttf";
// import ArticelsList from "./components/ArticelsList/ArticelsList";
// import { useEffect, useState } from "react";
// import FilterBar from "./components/FilterBar/FilterBar";
// import { ArticlesType } from "./models/ArticlesType";
// import { SelectOption } from "./models/SelectOption";
// import ArticelsMock from "./mockData/Articles.json";
// import { countArticlesBySource, createSourcesOptions } from "./helpers/helpers";
// import SourcesMock from "./mockData/SourcesMock.json";
// import TopHeadlinesMock from "./mockData/TopHeadlinesMock.json";
// import PieGraph from "./components/DashBoard/PieGraph";
// import Dashboard from "./components/DashBoard/Dashboard";
// import { SourcesArray } from "./mockData/DashboardMockData";
// import { Api, buildApiQuery } from "./services/Api";
// import { DEFAULT_COUNTRY, PAGE_SIZE } from "./utils/constants/Constants";
// import { Article } from "./models/ArticleInterface";

// function App() {
//   const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
//     null,
//     null,
//   ]);
//   const [uniqueSources, setUniqueSources] = useState<SelectOption[]>([]);
//   const [articlesType, setArticlesType] =
//     useState<ArticlesType>("Top Headlines");
//   const [searchInput, setSearchInput] = useState<string>("");
//   const [selectedSortBy, setSelectedSortBy] = useState<string>("");
//   const [selectedSource, setSelectedSource] = useState<string>("");
//   const [selectedLanguage, setSelectedLanguage] = useState<string>("");
//   const [selectedCountry, setSelectedCountry] = useState<string>("");
//   const [selectedCategory, setSelectedCategory] = useState<string>("");
//   const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
//   const [recentSearches, setRecentSearches] = useState<string[]>([]);
//   const [articles, setArticles] = useState<Article[]>([]);
//   //const articles = ArticelsMock.articles;
//   const [currentPage, setCurrentPage] = useState(1);
//   const articlesBySource = countArticlesBySource(articles);
//   const [firstRender, setFirstrender] = useState<boolean>(true);
//   useEffect(() => {
//     const sources: SelectOption[] = createSourcesOptions(SourcesMock);
//     setUniqueSources(sources);
//   }, []);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setDebouncedSearchInput(searchInput);
//     }, 500);

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [searchInput]);
//   // useEffect(() => {
//   //   const fetchDefaultData = async () => {
//   //     try {
//   //       const response = await Api.get("top-headlines", {
//   //         params: {
//   //           country: DEFAULT_COUNTRY,
//   //           pageSize: PAGE_SIZE,
//   //         },
//   //       });
//   //       setArticles(response.data.articles);

//   //       // Reset state to initial values
//   //       //setArticlesType("Top Headlines");
//   //       //setSelectedCountry("");
//   //       //setSelectedCategory("");
//   //     } catch (error) {
//   //       console.error("Error fetching default data:", error);
//   //     }
//   //   };

//   //   fetchDefaultData();
//   // }, []);

//   useEffect(() => {
//     if (debouncedSearchInput) {
//       setRecentSearches((prevSearches) => [
//         ...prevSearches,
//         debouncedSearchInput,
//       ]);
//     }
//   }, [debouncedSearchInput]);
//   useEffect(() => {
//     resetArticlesAndPage();
//   }, [
//     debouncedSearchInput,
//     selectedSortBy,
//     selectedSource,
//     selectedLanguage,
//     selectedCountry,
//     selectedCategory,
//     dateRange,
//   ]);
//   useEffect(() => {
//     if (firstRender) {
//       const fetchDefaultData = async () => {
//         try {
//           const response = await Api.get("top-headlines", {
//             params: {
//               country: DEFAULT_COUNTRY,
//               pageSize: PAGE_SIZE,
//             },
//           });
//           setArticles(response.data.articles);

//           // Reset state to initial values
//           //setArticlesType("Top Headlines");
//           //setSelectedCountry("");
//           //setSelectedCategory("");
//         } catch (error) {
//           console.error("Error fetching default data:", error);
//         }
//       };
//       setFirstrender(false);
//       fetchDefaultData();
//     } else {
//       const fetchData = async () => {
//         try {
//           const options: any = {};

//           if (articlesType === "Top Headlines") {
//             if (selectedCountry) options.country = selectedCountry;
//             if (selectedCategory) options.category = selectedCategory;
//             if (selectedSource) options.sources = [selectedSource];
//             if (searchInput) options.q = searchInput;
//           } else if (articlesType === "Everything") {
//             const [startDate, endDate] = dateRange;

//             if (startDate) options.from = startDate.toISOString();
//             if (endDate) {
//               const adjustedEndDate = new Date(endDate);
//               adjustedEndDate.setDate(endDate.getDate() + 1);
//               options.to = adjustedEndDate.toISOString();
//             }
//             if (selectedLanguage) options.language = selectedLanguage;
//             if (selectedSortBy) options.sortBy = selectedSortBy;
//             if (selectedSource) options.sources = [selectedSource];
//             if (searchInput) options.q = searchInput;
//           }

//           const params = buildApiQuery(articlesType, options, currentPage);
//           params.pageSize = PAGE_SIZE;

//           const response = await Api.get(
//             articlesType === "Top Headlines" ? "top-headlines" : "everything",
//             { params }
//           );
//           console.log(params);

//           console.log(response.data);
//           setArticles((prevArticles) => [
//             ...prevArticles,
//             ...response.data.articles,
//           ]);
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };

//       fetchData();
//     }
//   }, [
//     debouncedSearchInput,
//     selectedSortBy,
//     selectedSource,
//     selectedLanguage,
//     selectedCountry,
//     selectedCategory,
//     dateRange,
//     currentPage,
//   ]);
//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//   //       setCurrentPage((prevPage) => prevPage + 1);
//   //     }
//   //   };

//   //   window.addEventListener("scroll", handleScroll);

//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);
//   let timerId: NodeJS.Timeout;
//   let isAtBottom = false;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         isAtBottom = true;
//       } else {
//         isAtBottom = false;
//       }

//       if (isAtBottom) {
//         clearTimeout(timerId);
//         timerId = setTimeout(() => {
//           setCurrentPage((prevPage) => prevPage + 1);
//         }, 3000); // 300ms debounce
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       clearTimeout(timerId);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   //// make 1 sec of 0 articels
//   const resetArticlesAndPage = () => {
//     setArticles([]);
//     setCurrentPage(1);
//   };

//   return (
//     <>
//       <AppContext.Provider
//         value={{
//           articlesType,
//           setArticlesType,
//           searchInput,
//           setSearchInput,
//           selectedSortBy,
//           setSelectedSortBy,
//           selectedSource,
//           setSelectedSource,
//           selectedLanguage,
//           setSelectedLanguage,
//           selectedCountry,
//           setSelectedCountry,
//           selectedCategory,
//           setSelectedCategory,
//           recentSearches,
//           setRecentSearches,
//           debouncedSearchInput,
//           setDebouncedSearchInput,
//         }}
//       >
//         <AppContainer>
//           <AppHeader />
//           <MainContainer>
//             <FilterBar
//               sourceOptions={uniqueSources}
//               dateRange={dateRange}
//               setDateRange={setDateRange}
//             />
//             {/* {articlesType === "Top Headlines" ? (
//               <TitleHeadLines>Top Headlines in </TitleHeadLines>
//             ) : ( */}
//             <p> {articles.length} seraches</p>
//             {/* )} */}
//             <MainContent>
//               <ArticelsList atricleList={articles} />
//               <Dashboard
//                 data={{
//                   totalArticles: articles.length,
//                   sources: articlesBySource,
//                 }}
//                 articles={articles}
//               />
//             </MainContent>
//           </MainContainer>
//         </AppContainer>
//       </AppContext.Provider>
//     </>
//   );
// }

// export default App;
