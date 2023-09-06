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
import DatePickerComponent from "../DatePicker/DatePickerComponent";
const FilterBar: FC<FilterBarProps> = ({ sourceOptions }) => {
  const { articlesType } = useContext(AppContext);
  return (
    <FilterbarContainer>
      {articlesType === "Everything" && (
        <>
          <FilterDropDown selectOptions={sortByArr} placeholder={"Sort by"} />
          <FilterDropDown selectOptions={[]} placeholder={"Dates"} />
          <FilterDropDown
            selectOptions={sourceOptions}
            placeholder={"Sources"}
          />
          <FilterDropDown selectOptions={languages} placeholder={"Language"} />
        </>
      )}
      {articlesType === "Top Headlines" && (
        <>
          <FilterDropDown
            selectOptions={countriesOptions}
            placeholder={"Country"}
          />
          <DatePickerComponent />
          <FilterDropDown selectOptions={categories} placeholder={"Category"} />
          <FilterDropDown
            selectOptions={sourceOptions}
            placeholder={"Sources"}
          />
        </>
      )}
    </FilterbarContainer>
  );
};

export default FilterBar;
