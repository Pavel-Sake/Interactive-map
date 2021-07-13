import React from "react";
import {useSelector} from 'react-redux';
import {gql, useQuery} from "@apollo/client";

import ResultList from "../ResultList";
import Map from "../Map/Map";
import SelectedFilter from "../SelectedFilter";

import "./SearchResult.css";


function SearchResult() {

  const filter = useSelector((state) => {
    return state;
  });

  function arrayToString(arr) {
    const newArr = arr.map((item) => {

      return `\"${item}\"`;
    });

    return `${newArr}`;
  }

  const activities = arrayToString(filter.activities.activities);
  const tags = arrayToString(filter.tags.tags);

  const JYM = gql`
  query {
     suppliers_with_filters (name: \"${filter.name}\", level: ${filter.level.name}, city: \"${filter.city.name}\", activities: [${activities}], tags: [${tags}])  {
    filters {
      level
      city
       zoom {
        city {
          city
          zoom
        }
      }
    }
    suppliers {
      id
      name
      info
      conditions {
        R
        S
        G
        P
      }
       rules
      gallery
      district
      phone
      address
      url
      lat
      lng
       tags
        attraction_objects {
        id
        list
        has_copayment
        copayment
        levels
      }
      created_at
      updated_at
      mon
      tue
      wed
      thu
      fri
      sat
      sun
      week
      last_changed_at
      sh_message
      sh_url
    }
    dictionary {
      level {
        key
        value
      }
      city {
        value
        key
      }
      activity {
        key
        value
      }
      tag {
        key
        value
      }
    }
  }
  }
`;

  const {loading, error, data} = useQuery(JYM);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;


  const results = data.suppliers_with_filters.suppliers;

  const resultsForLevel = data.suppliers_with_filters.dictionary.level;


  return (
    <div className="search-result">
      <ResultList
        results={results}
        resultsForLevel={resultsForLevel}
      />
      <div className="result-map-selected-filter">
        <Map
          results={results}
          resultsForLevel={resultsForLevel}
        />
        <SelectedFilter/>
      </div>
    </div>

  );
}


export default SearchResult;

