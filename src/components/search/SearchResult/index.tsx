import React from "react";
import queryString from 'query-string';
import importedData from "./dummy.json";

function SearchResult( {location} : any ) {
  const { query }  = queryString.parse(location.search);
  const value = typeof query=== 'string' ? query.toLowerCase() : '' ;

  const dataArray = importedData.data;
  const filteredData = dataArray.filter((d)=>
    (d.title && d.title.toLowerCase().includes(value))
  );
  /* 결과 확인용 임시 콘솔출력 */
  console.log(filteredData); /* eslint-disable-line no-console */


  return (
    /* 상품 목록 와이어 프레임 받으면 이어서 제작 */
    <h2>SearchResult</h2>
  );
}


export default SearchResult;