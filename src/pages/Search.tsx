import React from "react";
import BasicTemplate from "../components/common/BasicTemplate";
import SearchResult from "../components/search/SearchResult";

function Search( {location} : any ) {
  return (
    <BasicTemplate>
      <SearchResult location={location}/>
    </BasicTemplate>
  );
}

export default Search;