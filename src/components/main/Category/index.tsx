import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useQuery} from "@apollo/client";
import { GET_CATEGORIES } from "../../../lib/graphql/category"
import * as S from "./style";

export interface CategoryProps {
  id: number;
  categoryName: string;
}

function Category() {
    const a:CategoryProps[] =[{id:0,categoryName:''}];

  const [cat, setCat] = useState(a);

    useQuery(GET_CATEGORIES,{onCompleted:(data)=>
        setCat(data.seeCategory)
    });

  return (
    <S.CategoryWrapper>
      {cat &&
        cat.map(({ id, categoryName }: CategoryProps) => (
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
