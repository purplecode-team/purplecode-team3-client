import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from './style';
import importedData from './dummy.json';


function Search( ) {
  const [value, setValue] = useState('');
  const onChange= (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  };
  const onSubmit = ()=> {
    setValue('');
    /* value : 찾아야하는 키워드 */
    const dataArray = importedData.data;
    const filteredData = dataArray.filter((d:any)=>
      (d.title && d.title.toLowerCase().includes(value.toLowerCase()))
    );
    /* 결과 확인용 임시 콘솔출력 */
    console.log(filteredData);

  };

  return (
    <S.SearchWrapper>
      <S.SearchInput
        placeholder="실시간 매물 정보를 검색해보세요."
        type="text"
        value={value}
        onChange={onChange}
      />
      <Link to='/'><S.SearchIcon onClick={onSubmit} type="submit"  /></Link>
    </S.SearchWrapper>
  );
}


export default Search;
