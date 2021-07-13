import React, {useState} from "react";

import {gql, useQuery} from "@apollo/client";

import MainPage from "./MainPage";


function App() {

  const [filter, setFilter] = useState({
    level: 'g',
    city: "kobrin"
  });


  const JYM = gql`
  query {
     suppliers_with_filters (level: ${filter.level}, city: \"${filter.city}\")  {
    filters {
      level
      city
      zoom {
        city {
          city
          zoom
        }
      }
      location {
        city {
          city
          lat
          lng
        }
      }
    }
    suppliers {
      id
      name
      lat
      lng
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


  return (
    <div className="app">
      <MainPage
        data={data}
        filter={filter}
      />
    </div>
  );
}


export default App;
