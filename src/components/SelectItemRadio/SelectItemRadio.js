import React from "react";
import {useDispatch, useSelector} from 'react-redux';

import './SelectItemRadio.css';


function SelectItemRadio({
                           value,
                           filterKey,
                           typeElementFilterByKey,
                           listElement,
                           iconElement,
                           getAction,
                           additionalOptionsPart1 = {},
                           additionalOptionsPart2 = {},
                         }) {

  const payload = {
    value: value,
    filterKey: filterKey,
    cityLat: additionalOptionsPart2.lat,
    cityLng: additionalOptionsPart2.lng,
    cityZoom: additionalOptionsPart1.zoom,
  };

  const filter = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  let checked = false;


  if (filterKey === filter[typeElementFilterByKey].name) {
    checked = true;
  }

  function handleOnchange() {
    dispatch(getAction(payload));

    listElement.current.classList.toggle("show");
    iconElement.current.classList.toggle("show");
  }


  return (
    <li
      className="select-search__element"
    >
      <input
        id={filterKey}
        className="select-search__input"
        type="radio"
        checked={checked}
        onChange={() => {
          handleOnchange();
        }}
      />
      <label htmlFor={filterKey}>{value}</label>
    </li>
  );
}


export default SelectItemRadio;