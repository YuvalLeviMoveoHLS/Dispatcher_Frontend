import React, { FC, useContext, useState } from "react";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import { FilterbarContainer } from "./FilterBar.style";
import AppContext from "../../context/AppContext";
import {
  countriesOptions,
  //languages,
  sortByArr,
  categories,
} from "../../utils/constants/Constants";
import { SelectOption } from "../../models/SelectOption";

interface FilterBarProps {
  sourceOptions: SelectOption[];
  dateRange: [Date | null, Date | null];
  setDateRange: React.Dispatch<
    React.SetStateAction<[Date | null, Date | null]>
  >;
}
import DatePickerComponent from "../DatePicker/DatePickerComponent";
import { useFetchLanguages } from "../../hooks/useFetchLanguages";
const FilterBar: FC<FilterBarProps> = ({
  sourceOptions,
  dateRange,
  setDateRange,
}) => {
  const {
    articlesType,
    selectedSource,
    selectedCountry,
    selectedCategory,
    searchInput,
    setSelectedSortBy,
    setSelectedSource,
    setSelectedLanguage,
    setSelectedCountry,
    setSelectedCategory,
  } = useContext(AppContext);
  const disableAdditionalFilters =
    articlesType === "Everything" && !selectedSource;
  const disableSource = Boolean(
    articlesType === "Top Headlines" && (selectedCountry || selectedCategory)
  );
  const disableCountryAndCategory = Boolean(
    articlesType === "Top Headlines" && selectedSource
  );
  const { languages } = useFetchLanguages();
  return (
    <FilterbarContainer>
      {articlesType === "Everything" && (
        <>
          <FilterDropDown
            selectOptions={sortByArr}
            placeholder="Sort by"
            onChange={setSelectedSortBy}
            disabled={disableAdditionalFilters && !searchInput}
          />
          <DatePickerComponent
            dateRange={dateRange}
            setDateRange={setDateRange}
            disabled={!selectedSource && !searchInput}
          />

          <FilterDropDown
            selectOptions={sourceOptions}
            placeholder="Sources"
            onChange={setSelectedSource}
          />
          <FilterDropDown
            selectOptions={languages}
            placeholder="Language"
            onChange={setSelectedLanguage}
            disabled={disableAdditionalFilters && !searchInput}
          />
        </>
      )}
      {articlesType === "Top Headlines" && (
        <>
          <FilterDropDown
            selectOptions={countriesOptions}
            placeholder="Country"
            onChange={setSelectedCountry}
            disabled={disableCountryAndCategory}
          />
          <FilterDropDown
            selectOptions={categories}
            placeholder="Category"
            onChange={setSelectedCategory}
            disabled={disableCountryAndCategory}
          />
          <FilterDropDown
            selectOptions={sourceOptions}
            placeholder="Sources"
            onChange={setSelectedSource}
            disabled={disableSource}
          />
        </>
      )}
    </FilterbarContainer>
  );
};

export default FilterBar;
