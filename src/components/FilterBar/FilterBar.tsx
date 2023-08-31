import React, { FC, useContext } from "react";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { FilterbarContainer } from "./FilterBar.stories";
import AppContext from "../../context/AppContext";

const FilterBar: FC = () => {
  const { appHeaderFilter } = useContext(AppContext);
  const everythingOptions = [
    { value: "sort", title: "Sort By" },
    { value: "dates", title: "Dates" },
    { value: "sources", title: "Sources" },
    { value: "languages", title: "Languages" },
  ];

  const topHeadlinesOptions = [
    { value: "country", title: "Country" },
    { value: "category", title: "Category" },
    { value: "sources", title: "Sources" },
  ];
  return (
    <FilterbarContainer>
      {appHeaderFilter === "Everything" &&
        everythingOptions.map((option, index) => (
          <FilterDropDown
            key={index}
            selectOptions={[option]}
            placeholder={option.title}
          />
        ))}
      {appHeaderFilter === "Top Headlines" &&
        topHeadlinesOptions.map((option, index) => (
          <FilterDropDown
            key={index}
            selectOptions={[option]}
            placeholder={option.title}
          />
        ))}
    </FilterbarContainer>
  );
};

export default FilterBar;
