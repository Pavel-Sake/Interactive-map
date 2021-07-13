import React from "react";
import {useDispatch} from "react-redux";

import './SelectedFilterItem.css';


function SelectedFilterItem({value, filterKey, active, getAction}) {

  const dispatch = useDispatch();

  const payload = {
    filterKey: filterKey,
    value: value
  };

  function handleOnClickDispatch() {
    dispatch(getAction(payload));
  }


  return (
    <div
      className="selected-filter__item"
    >
      <span>{value}</span>
      {active ?
        <button
          className="selected-filter__button"
          onClick={() => {
            handleOnClickDispatch();
          }}
        >
          x
        </button>
        :
        null
      }
    </div>
  );
}

export default SelectedFilterItem;