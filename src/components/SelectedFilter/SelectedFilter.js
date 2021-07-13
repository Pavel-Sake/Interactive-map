import React from "react";
import {useSelector} from "react-redux";
import {changeActivity, changeTag} from "../../redux/actions";

import SelectedFilterItem from "../SelectedFilterItem";

import './SelectedFilter.css';


function SelectedFilter() {
  const {v4: uuidv4} = require('uuid');

  const filter = useSelector((state) => {
    return state;
  });

  const {selectedFilters} = filter;

  const FilterItems = () => {
    return (
      selectedFilters.map((item) => {

        switch (item.type) {
          case ("activities"):
            return (
              <SelectedFilterItem
                key={uuidv4()}
                value={item.value}
                active={true}
                getAction={changeActivity.deleteFilterKey}
                filterKey={item.filterKey}
              />
            );

          case ("tags"):
            return (
              <SelectedFilterItem
                key={uuidv4()}
                value={item.value}
                active={true}
                getAction={changeTag.deleteFilterKey}
                filterKey={item.filterKey}
              />
            );
          default:
            return null;
        }
      })
    );
  };


  return (
    <div
      className="selected-filter"
    >
      <SelectedFilterItem
        value={filter.level.value}
        active={false}
      />
      <SelectedFilterItem
        value={filter.city.value}
        active={false}
      />
      <FilterItems/>
    </div>
  );
}

export default SelectedFilter;