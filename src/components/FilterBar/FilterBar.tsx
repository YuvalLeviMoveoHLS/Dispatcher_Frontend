import React, { FC, useContext } from "react";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { FilterbarContainer } from "./FilterBar.style";
import AppContext from "../../context/AppContext";
import {
  countriesOptions,
  languages,
  sortByArr,
  categories,
} from "../../utils/constants/Constants";
import { SelectOption } from "../../models/SelectOption";

interface FilterBarProps {
  sourceOptions: SelectOption[];
}

const FilterBar: FC<FilterBarProps> = ({ sourceOptions }) => {
  const {
    articlesType,
    setSelectedSortBy,
    setSelectedSource,
    setSelectedLanguage,
    setSelectedCountry,
    setSelectedCategory,
  } = useContext(AppContext);
  return (
    <FilterbarContainer>
      {articlesType === "Everything" && (
        <>
          <FilterDropDown
            selectOptions={sortByArr}
            placeholder={"Sort by"}
            onChange={setSelectedSortBy}
          />
          <FilterDropDown selectOptions={[]} placeholder={"Dates"} />
          <FilterDropDown
            selectOptions={sourceOptions}
            placeholder={"Sources"}
            onChange={setSelectedSource}
          />
          <FilterDropDown
            selectOptions={languages}
            placeholder={"Language"}
            onChange={setSelectedLanguage}
          />
        </>
      )}
      {articlesType === "Top Headlines" && (
        <>
          <FilterDropDown
            selectOptions={countriesOptions}
            placeholder={"Country"}
            onChange={setSelectedCountry}
          />
          <FilterDropDown
            selectOptions={categories}
            placeholder={"Category"}
            onChange={setSelectedCategory}
          />
          <FilterDropDown
            selectOptions={sourceOptions}
            placeholder={"Sources"}
            onChange={setSelectedSource}
          />
        </>
      )}
    </FilterbarContainer>
  );
};

export default FilterBar;
