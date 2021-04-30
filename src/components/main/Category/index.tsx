import React from "react";
import { Link } from "react-router-dom";
import {useQuery} from "@apollo/client";
import { GET_CATEGORIES } from "../../../lib/graphql/category"
import * as S from "./style";

export interface CategoryProps {
  id: number;
  categoryName: string;
}

function Category() {
  const { error, data } = useQuery(GET_CATEGORIES);
  if (error) console.log(error);
  return (
    <S.CategoryWrapper>
      {data.seeCategory &&
        data.seeCategory.map(({ id, categoryName }: CategoryProps) => (
          <Link to={`/category/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} >
            <S.CategoryItem key={id}>
               <h3>{categoryName}</h3>
            </S.CategoryItem>
          </Link>
        ))}
    </S.CategoryWrapper>
  );
}

export default Category;
