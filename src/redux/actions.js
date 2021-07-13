import {
  CHANGE_CITY,
  CHANGE_LEVEL,
  ADD_CHANGE_ACTIVITY,
  DELETE_ACTIVITY,
  ADD_CHANGE_TAG,
  DELETE_TAG,
  DELETE_FILTERS,
  FIND_BY_TEXT,
} from "./types";

export function findByText(filterKey) {
  return {
    type: FIND_BY_TEXT,
    filterKey: filterKey
  };
}


export function changeLevel(payload) {

  return {
    type: CHANGE_LEVEL,
    filterKey: payload.filterKey,
    value: payload.value
  };
}

export function changeCity(payload) {
  return {
    type: CHANGE_CITY,
    filterKey: payload.filterKey,
    cityLat: payload.cityLat,
    cityLng: payload.cityLng,
    cityZoom: payload.cityZoom,
    value: payload.value
  };
}


export const changeActivity = {
  addChangeFilterKey: (payload) => {
    return {
      type: ADD_CHANGE_ACTIVITY,
      filterKey: payload.filterKey,
      value: payload.value
    };
  },
  deleteFilterKey: (payload) => {
    return {
      type: DELETE_ACTIVITY,
      filterKey: payload.filterKey,
      value: payload.value
    };
  },

};

export const changeTag = {
  addChangeFilterKey: (payload) => {
    return {
      type: ADD_CHANGE_TAG,
      filterKey: payload.filterKey,
      value: payload.value
    };
  },
  deleteFilterKey: (payload) => {
    return {
      type: DELETE_TAG,
      filterKey: payload.filterKey,
      value: payload.value
    };
  },

};


export function deleteFilters() {
  return {
    type: DELETE_FILTERS,
  };
}

