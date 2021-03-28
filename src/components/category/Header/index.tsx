import React from "react";
import { Link } from "react-router-dom";
import dummy from "../../main/Category/dummy.json";
import * as S from "./style";
import { CategoryProps } from "../../main/Category/index";

function CategoryHeader( {match} : any ) {
  const cat = match.params.category;
  return (
    <S.CategoryHeader>
       <h3>{cat}</h3>
      {dummy.data &&
      dummy.data.map(({ id, categoryName }: CategoryProps) => (
       <S.Category key={id}>
         {categoryName===cat?
             <h3>{categoryName}</h3>:
           <Link to={`/category/${categoryName}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
             <h2>{categoryName}</h2></Link>}
       </S.Category>
      ))}
    </S.CategoryHeader>
  );
}

export default CategoryHeader;
