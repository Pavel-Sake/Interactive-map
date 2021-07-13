import React from "react";
import {useDispatch} from 'react-redux';

import './ResetButton.css';


function ResetButton({iconBasket, getAction}) {
  const dispatch = useDispatch();

  function resetFilters() {
    dispatch(getAction());
  }

  return (
    <div className="cell-active">
      <button
        className="button button-active"
        onClick={resetFilters}
      >
        <img src={iconBasket} alt="reset button"/>
      </button>
    </div>
  );
}


export default ResetButton;