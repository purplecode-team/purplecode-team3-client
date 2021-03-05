import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from './style';


function Search( ) {
  const [value, setValue] = useState('');
  const onChange= (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  };


  return (
    <S.SearchWrapper>
      <S.SearchInput
        placeholder="실시간 매물 정보를 검색해보세요."
        type="text"
        value={value}
        onChange={onChange}
      />
      <Link to={`/search?query=${value}`}><S.SearchIcon type="submit"  /></Link>
    </S.SearchWrapper>
  );
}


export default Search;
