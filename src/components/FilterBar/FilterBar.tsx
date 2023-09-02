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
import SourcesMock from "../../mockData/SourcesMock.json";

const FilterBar: FC = () => {
  const { appHeaderFilter } = useContext(AppContext);
  const fetchedData = SourcesMock.sources;

  const sourcesOptions = fetchedData.map((source) => {
    return { value: source.id, title: source.name };
  });
  return (
    <FilterbarContainer>
      {appHeaderFilter === "Everything" && (
        <>
          <FilterDropDown selectOptions={sortByArr} placeholder={"Sort by"} />
          <FilterDropDown selectOptions={[]} placeholder={"Dates"} />
          <FilterDropDown
            selectOptions={sourcesOptions}
            placeholder={"Sources"}
          />
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
          <FilterDropDown
            selectOptions={sourcesOptions}
            placeholder={"Sources"}
          />
        </>
      )}
    </FilterbarContainer>
  );
};

export default FilterBar;
