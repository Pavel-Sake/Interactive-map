import React from "react";
import FilterBlock from "./components/FilterBlock";
import SearchResult from "./components/SearchResult/SearchResult";


function MainPage({data, filter}) {


  return (
    <div
      className="main-page"
    >
      <h2>Интерактивная карта</h2>
      <section className="main-screen">
        <FilterBlock
          data={data.suppliers_with_filters}
          currentFilterKey={filter}
        />
        <SearchResult/>
      </section>
    </div>
  );
}


export default MainPage;