import React, {useState} from "react";
import {useDispatch} from 'react-redux';

import {findByText} from '../../redux/actions';

import "./SearchInput.css";


function SearchInput() {

  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");

  const onHandleChangeText = (event) => {
    dispatch(findByText(event.target.value));

    setValueInput(event.target.value);
  };

  const onHandleResetText = () => {
    setValueInput("");
  };


  return (
    <div className="cell-active">
      <input
        className="input-search"
        type="input"
        placeholder="Название заведения"
        value={valueInput}
        onChange={onHandleChangeText}
      />
      <button
        className="input-search__button-reset"
        onClick={onHandleResetText}
      >
        &times;
      </button>
    </div>
  );
}


export default SearchInput;