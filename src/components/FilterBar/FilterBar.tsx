import React, { FC, useContext } from "react";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { FilterbarContainer } from "./FilterBar.stories";
import AppContext from "../../context/AppContext";
import {
  countriesOptions,
  languages,
  sortByArr,
  categories,
} from "../../utils/constants/Constants";

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
      {appHeaderFilter === "Everything" && (
        <>
          <FilterDropDown selectOptions={sortByArr} placeholder={"Sort by"} />
          <FilterDropDown selectOptions={[]} placeholder={"Dates"} />
          <FilterDropDown selectOptions={[]} placeholder={"Sources"} />
          <FilterDropDown selectOptions={languages} placeholder={"Language"} />
        </>
      )}
      {appHeaderFilter === "Top Headlines" && (
        <>
          <FilterDropDown
            selectOptions={countriesOptions}
            placeholder={"Country"}
          />
          <FilterDropDown selectOptions={categories} placeholder={"Category"} />
          <FilterDropDown selectOptions={[]} placeholder={"Sources"} />
        </>
      )}
    </FilterbarContainer>
  );
};

export default FilterBar;
