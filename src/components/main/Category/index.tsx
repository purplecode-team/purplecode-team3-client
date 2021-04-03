import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import dummy from "./dummy.json";

export interface CategoryProps {
  id: number;
  categoryName: string;
}

function Category() {
  return (
    <S.CategoryWrapper>
      {dummy.data &&
        dummy.data.map(({ id, categoryName }: CategoryProps) => (
          <Link to={`/category/${categoryName}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
            <S.CategoryItem key={id}>
               <h3>{categoryName}</h3>
            </S.CategoryItem>
          </Link>
        ))}
    </S.CategoryWrapper>
  );
}

export default Category;
