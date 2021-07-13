import React, {useRef, useContext} from "react";
import OutsideClickHandler from 'react-outside-click-handler';

import arrowIcon from '../../assets/down-arrow.svg'


import './SelectSearch.css';


function SelectSearch({
                        title = null,
                        buttonTitle,
                        typeElementFilterByKey,
                        filterDataTitle,
                        ElementFilter,
                        getAction,
                        additionalOptionsPart1 = [],
                        additionalOptionsPart2 = [],

                      }) {

  const listElement = useRef(null);
  const buttonElement = useRef(null);
  const iconElement = useRef(null);


  const handleClickButton = (event) => (event) => {
    event.preventDefault();
    listElement.current.classList.toggle("show");
    iconElement.current.classList.toggle("rotate");
  };


  const handleClickOutside = (event) => {
    listElement.current.classList.remove("show");
    iconElement.current.classList.remove("rotate");
  };

  return (
    <div className="select-search">
      <p className="title">{title}</p>
      <div className="cell-active">
        <OutsideClickHandler
          onOutsideClick={handleClickOutside}
        >
            <button
              ref={buttonElement}
              data-select="open-close-button"
              className="select-search__button button-active"
              onClick={handleClickButton()}
            >{buttonTitle}
              <img
                className="select-search__icon"
                ref={iconElement}
                src={arrowIcon}/>
            </button>
          <ul ref={listElement} className="select-search__list">
            {
              filterDataTitle.map((item, index) => {
                return (
                  <ElementFilter
                    key={index}
                    value={item.value}
                    typeElementFilterByKey={typeElementFilterByKey}
                    filterKey={item.key}
                    listElement={listElement}
                    iconElement={iconElement}
                    getAction={getAction}

                    additionalOptionsPart1={additionalOptionsPart1[index]} //only for city
                    additionalOptionsPart2={additionalOptionsPart2[index]} //only for city
                  />
                );
              })
            }
          </ul>
        </OutsideClickHandler>
      </div>

    </div>
  );
}


export default SelectSearch;