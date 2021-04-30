import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../../lib/graphql/product";
import * as S from "./style";


function DetailProduct ( {match}: any ) {

  const { error, data } = useQuery(GET_PRODUCT,{
    variables : {id:10}});
  if(error) console.log(error);
  if(data) console.log(data);

  return (

    <S.Container>
      {match.params.id}
    </S.Container>

  )
};

export default DetailProduct;
