const initialState = {
  name: "",
  level: {
    name: 'g',
    value: "Золотая",
    type: "level"
  },
  city: {
    name: "kobrin",
    value: "Кобрин",
    cityLat: 52.209465050000006,
    cityLng: 24.34828554,
    cityZoom: 15,
    type: "city"
  },
  activities: {
    activities: [],
    type: "activities",
  },
  tags: {
    tags: [],
    type: "tags",
  },
  selectedFilters: [],
};


let activities = [];
let tags = [];
let selectedFilters = [];


function getArrayAfterDelElement(array, element) {
  const newArray = [...array];

  const index = newArray.findIndex((item) => {

    if (typeof item === "object") {
      return item.filterKey === element;
    } else {
      return item === element;
    }
  });


  newArray.splice(index, 1);

  return newArray;
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FIND_BY_TEXT':
      return {
        ...state, name: action.filterKey
      };

    case 'CHANGE_LEVEL':
      return {
        ...state, level: {
          name: action.filterKey,
          value: action.value
        }
      };

    case 'CHANGE_CITY':
      return {
        ...state, city: {
          name: action.filterKey,
          value: action.value,
          cityLat: action.cityLat,
          cityLng: action.cityLng,
          cityZoom: action.cityZoom
        }
      };

    case 'ADD_CHANGE_ACTIVITY':
      activities = state.activities.activities;
      activities.push(action.filterKey);

      selectedFilters.push({
        value: action.value,
        filterKey: action.filterKey,
        type: state.activities.type
      });

      return {
        ...state,
        activities: {
          ...state.activities,
          activities: activities
        },
        selectedFilters: selectedFilters
      };

    case 'DELETE_ACTIVITY':
      activities = getArrayAfterDelElement(state.activities.activities, action.filterKey);
      selectedFilters = getArrayAfterDelElement(state.selectedFilters, action.filterKey);

      return {
        ...state,
        activities: {
          ...state.activities,
          activities: activities
        },
        selectedFilters: selectedFilters,
      };

    case 'ADD_CHANGE_TAG':
      tags = state.tags.tags;
      tags.push(action.filterKey);

      selectedFilters.push({
        value: action.value,
        filterKey: action.filterKey,
        type: state.tags.type,
      });

      return {
        ...state,
        tags: {
          ...state.tags,
          tags: tags,
        },
        selectedFilters: selectedFilters
      };

    case 'DELETE_TAG':
      tags = getArrayAfterDelElement(state.tags.tags, action.filterKey);
      selectedFilters = getArrayAfterDelElement(state.selectedFilters, action.filterKey);

      return {
        ...state,
        tags: {
          ...state.tags,
          tags: tags,
        },
        selectedFilters: selectedFilters
      };

    case 'DELETE_FILTERS':
      activities = [];
      tags = [];
      selectedFilters = [];

      return {
        ...state,
        activities: {
          ...state.activities,
          activities: []
        },
        tags: {
          ...state.tags,
          tags: tags
        },
        selectedFilters: []
      };

    default:
      return state;
  }
}


export default reducer;