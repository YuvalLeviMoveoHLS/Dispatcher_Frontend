/////// first

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await Api.get("top-headlines", {
//         params: {
//           country: DEFAULT_COUNTRY,
//           pageSize: PAGE_SIZE,
//         },
//       });
//       // setArticles(response.data.articles);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, []);

///// with states

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Initialize an empty options object
//       const options: any = {};

//       // Populate the options object based on the states
//       if (articlesType === "Top Headlines") {
//         if (selectedCountry) options.country = selectedCountry;
//         if (selectedCategory) options.category = selectedCategory;
//         if (selectedSource) options.sources = selectedSource;
//         if (searchInput) options.q = searchInput;
//       } else if (articlesType === "Everything") {
//         if (selectedLanguage) options.language = selectedLanguage;
//         if (selectedSortBy) options.sortBy = selectedSortBy;
//         if (selectedSource) options.sources = selectedSource;
//         if (searchInput) options.q = searchInput;
//       }

//       // Use buildApiQuery to get the query parameters
//       const params = buildApiQuery(articlesType, options);

//       // Make the API call using the query parameters
//       const response = await Api.get(articlesType.toLowerCase(), { params });

//       // Uncomment the line below to set the articles in your state
//       // setArticles(response.data.articles);

//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, [
//   articlesType,
//   selectedCountry,
//   selectedCategory,
//   selectedSource,
//   searchInput,
//   selectedLanguage,
//   selectedSortBy,
// ]); // Add all relevant states to the dependency array
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       // Define the options based on your requirements
//       const options: any = {
//         // category: "sports",
//         //sources: ["bbc-news"],
//         //q: "עומר",
//         // Add other options here if needed
//       };
//       const effectiveCountry = selectedCountry || "il";
//       if (effectiveCountry) options.country = effectiveCountry;
//       // Use buildApiQuery to get the query parameters
//       const params = buildApiQuery(articlesType, options);
//       params.pageSize = PAGE_SIZE;
//       console.log(params);
//       // Make the API call using the query parameters
//       const response = await Api.get(
//         articlesType === "Top Headlines"
//           ? articlesType.toLowerCase().split(" ").join("-")
//           : articlesType.toLowerCase(),
//         { params }
//       );

//       // Uncomment the line below to set the articles in your state
//       // setArticles(response.data.articles);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   fetchData();
// }, [articlesType]); // Dependency array, re-run the effect if articlesType changes

// export const generateSortedData = (articles: any[]) => {
//   const monthMap: { [key: string]: number } = {
//     JAN: 0,
//     FEB: 0,
//     MAR: 0,
//     APR: 0,
//     MAY: 0,
//     JUN: 0,
//     JUL: 0,
//     AUG: 0,
//     SEP: 0,
//     OCT: 0,
//     NOV: 0,
//     DEC: 0,
//   };

//   articles.forEach((article) => {
//     const date = new Date(article.publishedAt);
//     const month = date
//       .toLocaleString("default", { month: "short" })
//       .toUpperCase();
//     monthMap[month] = (monthMap[month] || 0) + 1;
//   });

//   return Object.keys(monthMap)
//     .sort(
//       (a, b) =>
//         new Date(`2023-${a}-01`).getTime() - new Date(`2023-${b}-01`).getTime()
//     )
//     .slice(-6)
//     .map((month) => ({ name: month, val: monthMap[month] }));
// };

// styledButton.style

// export const StyledButton = styled(Button)` // styled.button
//   background-color: ${COLORS.primary};
//   color: white;

//   &:hover {
//     background-color: ${COLORS.primary};
//   }
// `;

// export const StyledButton = styled.button`
//   width: 500px;
// `;
// export const StyledButton = styled(Button)`
//   width: "330px";
// `;
// const buttonSx = {
//   width: "330px",
// };

//article.style -----------------
//cardSx
//overflow: "auto", scroll option
//minWidth: 275, affect the responsive
//paddingRight: "16px",
//paddingLeft: "16px",
//paddingBottom: "16px",
//marginBottom: "0px",
//display: "flex",
//padding: "8px 0px",
//flexDirection: "column",
//   //justifyContent: "space-between",
//   alignItems: "flex-start",
//   flex: "1 0 0",
//   alignSelf: "stretch",
// display: "flex",
// flexDirection: "column",
// alignItems: "flex-start",
// justifyContent: "space-between",
// alignSelf: "stretch",
//flex: "1 0 0",
//padding: "0px, 16px, 0px, 16px",

//filterDropDownStyle -----------------

//import { COLORS } from "../../utils/colors";

// export const formControlSxDefault = {
//   maxWidth: "175px",
//   width: "100%",
// };
// export const formControlSxAppHeader = {
//   maxWidth: "148px",
//   //paddingRight: "10px",
//   width: "100%",
// };
// export const menuItemSx = {
//   //paddingLeft: "24px",
//   //width: "190px",

//   height: "28px",
//   fontSize: "12px",
//   "&:hover": {
//     backgroundColor: COLORS.hoverMenuItem,
//   },
// };
// // export const filterDropDownSxDefault = {
// //   fontSize: "14px",
// //   height: "47px",
// //   display: "inline-flex",
// //   padding: "15px",
// //   flexDirection: "column",
// //   justifyContent: "center",
// //   alignItems: "center",
// //   borderRadius: "10px",
// //   backgroundColor: "white",
// //   "& .MuiInputBase-root": {
// //     // Target the internal select element
// //     paddingLeft: "15px",
// //     fontSize: "14px",
// //   },
// //   "& .MuiOutlinedInput-notchedOutline": {
// //     border: "none",
// //     outline: "none",
// //   },
// //   "& .MuiSelect-icon": {
// //     right: "15px", // adjust as needed
// //     top: "20px",
// //   },

// //   "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
// //     {
// //       paddingRight: "10px",
// //     },
// //   "& .MuiMenu-paper": {
// //     maxHeight: "calc(28px * 4 + 24px * 4)", // 28px is the height of each item, times 4 for four items. 24px is the padding (12px for top and 12px for bottom by default) for each item, times 4.
// //     overflowY: "auto", // enables vertical scrolling
// //   },

// //   color: COLORS.purple,
// //   fontFeatureSettings: "clig",
// //   fontStyle: "normal",
// //   fontWeight: "400",
// //   lineHeight: "22px",
// //   letterSpacing: "0.25px",
// //   //borderLeft: `0.5px solid ${COLORS.darkPurple}`,
// //   //maxHeight: "100%",
// // };

// export const filterDropDownSharedSx = {
//   fontSize: "14px",
//   height: "47px",
//   display: "inline-flex",
//   padding: "15px",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",

//   backgroundColor: "white",
//   "& .MuiInputBase-root": {
//     // Target the internal select element
//     paddingLeft: "15px",
//     fontSize: "14px",
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     border: "none",
//     outline: "none",
//   },
//   "& .MuiSelect-icon": {
//     right: "15px", // adjust as needed
//     top: "20px",
//   },

//   "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
//     {
//       paddingRight: "10px",
//     },
//   "& .MuiMenu-paper": {
//     maxHeight: "calc(28px * 4 + 24px * 4)", // 28px is the height of each item, times 4 for four items. 24px is the padding (12px for top and 12px for bottom by default) for each item, times 4.
//     overflowY: "auto", // enables vertical scrolling
//   },

//   color: COLORS.purple,
//   fontFeatureSettings: "clig",
//   fontStyle: "normal",
//   fontWeight: "400",
//   lineHeight: "22px",
//   letterSpacing: "0.25px",
//   //borderLeft: `1px solid ${COLORS.darkPurple}`,
//   //borderRadius: "10px",
//   //maxHeight: "100%",
// };

// // export const filterDropDownSxAppHeader = {
// //   backgroundColor: "blue", // Or any other styles specific to AppHeader
// // };

// export const filterDropDownSxDefault = {
//   borderRadius: "10px",
// };
// export const filterDropDownSxAppHeader = {
//   borderLeft: `0.5px solid ${COLORS.secondary}`,
//   "& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input ":
//     {
//       paddingRight: "16px",
//     },
// };
// const ITEM_HEIGHT = 28; // Based on your menuItemSx height
// const ITEM_PADDING_TOP = 4.5; // Based on your menuItemSx padding
// export const MenuPropsDefault = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP * 2, // Display 4 items fully
//       width: "175px", // Adjust as per your requirement
//       marginTop: "8px",
//       left: "8px",
//     },
//   },
// };

// export const MenuPropsAppHeader = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP * 2, // Display 4 items fully
//       width: "114px", // Adjust as per your requirement
//       marginTop: "8px",
//     },
//   },
// };

// index.css -------------------------------------------
/* :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
} */

//app.css
/* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
} */

//styledbutton.stories -------------------------------------------
// type: "primary",
// url: ""
// onClick: () => console.log("Clicked"),

//styledbutton.tsx
// <Stack spacing={2} direction="row">
// </Stack>
