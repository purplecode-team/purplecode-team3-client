import React from "react";
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
          <S.CategoryItem key={id}>
            <h3>{categoryName}</h3>
          </S.CategoryItem>
        ))}
    </S.CategoryWrapper>
  );
}

export default Category;
