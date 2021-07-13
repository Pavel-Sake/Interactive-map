import React from "react";

import SearchInput from "../SearchInput";
import SelectSearch from "../SelectSearch";
import SelectItemRadio from "../SelectItemRadio/SelectItemRadio";
import SelectItemCheckbox from "../SelectItemCheckbox/SelectItemCheckbox";
import ResetButton from "../ResetButton";

import {changeLevel, changeCity, changeActivity, changeTag, deleteFilters} from "../../redux/actions";

import iconBasket from '../../assets/basket.svg';
import './FilterBlock.css';


const TYPE_ELEMENT_FILTER_BY_KEY = {
  LEVEL: "level",
  CITY: "city",
  ACTIVITIES: "activities",
  TAGS: "tags"
};


function FilterBlock({data}) {
  const {level, city, activity, tag} = data.dictionary;

  const cityZoom = data.filters.zoom.city;
  const cityLocation = data.filters.location.city;

  return (
    <div className="filter-block">
      <div className="cell cell--empty-title">
        <SearchInput/>
      </div>

      <div className="cell">
        <SelectSearch
          title="Выберите подписку"
          buttonTitle="Тип пописки"
          typeElementFilterByKey={TYPE_ELEMENT_FILTER_BY_KEY.LEVEL}
          filterDataTitle={level}
          ElementFilter={SelectItemRadio}
          getAction={changeLevel}
        />
      </div>

      <div className="cell">
        <SelectSearch
          title="Выберите свой город"
          buttonTitle="Город/Район"
          typeElementFilterByKey={TYPE_ELEMENT_FILTER_BY_KEY.CITY}
          filterDataTitle={city}
          ElementFilter={SelectItemRadio}
          getAction={changeCity}
          additionalOptionsPart1={cityZoom} // only for city filter
          additionalOptionsPart2={cityLocation} // only for city filter
        />
      </div>

      <div className="cell">
        <SelectSearch
          title="Выберите тип активности"
          buttonTitle="Активности"
          typeElementFilterByKey={TYPE_ELEMENT_FILTER_BY_KEY.ACTIVITIES}
          filterDataTitle={activity}
          ElementFilter={SelectItemCheckbox}
          getAction={changeActivity}
        />
      </div>

      <div className="cell cell--empty-title">
        <SelectSearch
          buttonTitle="Доп. возможности"
          typeElementFilterByKey={TYPE_ELEMENT_FILTER_BY_KEY.TAGS}
          filterDataTitle={tag}
          ElementFilter={SelectItemCheckbox}
          getAction={changeTag}
        />
      </div>

      <div className="cell cell--empty-title">
        <ResetButton
          iconBasket={iconBasket}
          getAction={deleteFilters}
        />
      </div>

    </div>
  );
}

export default FilterBlock;