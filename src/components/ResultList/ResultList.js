import React from "react";
import ListResultItem from "../ListResultItem";

import './ResultList.css';


function ResultList({results, resultsForLevel}) {

  return (
    <div className="list-result-block">
      <ul className="list-result">
        {
          results.map((item) => {
            return (
              <ListResultItem
                name={item.name}
                key={item.id}
                data={item}
                district={item.district}
                resultsForLevel={resultsForLevel}
              />
            );
          })
        }
      </ul>
    </div>
  );
}

export default ResultList;