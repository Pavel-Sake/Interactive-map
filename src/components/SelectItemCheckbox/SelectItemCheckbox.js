import React from "react";
import {useDispatch, useSelector} from 'react-redux';

import './SelectItemCheckbox.css';


function SelectItemCheckbox({
                              value,
                              filterKey,
                              typeElementFilterByKey,
                              getAction
                            }) {

  const payload = {
    filterKey: filterKey,
    value: value
  };

  const filter = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  let checked = false;

  const filtersArray = filter[typeElementFilterByKey][typeElementFilterByKey];

  if (filtersArray.includes(filterKey)) {
    checked = true;
  }


  function handleOnChange(event) {

    if (event.target.checked) {
      dispatch(getAction.addChangeFilterKey(payload));
    } else {
      dispatch(getAction.deleteFilterKey(payload));
    }
  }


  return (
    <li
      className="select-search__element"
    >
      <input
        id={filterKey}
        className="select-search__input"
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          handleOnChange(event);
        }}
      />
      <label htmlFor={filterKey}>{value}</label>
    </li>
  );
}


export default SelectItemCheckbox;