import React, {useState} from "react";
import dummy from "./dummy.json";
import * as S from "./style";
import ProductItem from "../ProductItem/index";

export interface Image {
  id: number;
  imagePath: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  startPrice: number;
  startDate: string;
  images: Image[];
}

function CategoryItems  ( ) {

  const d = dummy.data;
  const [state, setState] =  useState({
    choice: "0",
    data:d
  });
  /* 빠른 시작순으로 데이터 받아옴 */

  const sortByLowPrices = d.map(a=>a).sort((a,b)=>a.startPrice-b.startPrice);
  const sortByHighPrices =d.map(a=>a).sort((a,b)=>b.startPrice-a.startPrice);
  ;

  const obj:{[index:string]:any} = {
    "0" : d ,
    "1" : sortByLowPrices,
    "2" : sortByHighPrices
  };

  const onChange= (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setState({
      choice:e.target.value,
      data:obj[e.target.value]
  });
  };

  return (
  <S.Container>
    <S.Title>
      총 {state.data.length}개
    </S.Title>
    <S.DropDown value={state.choice} onChange = {onChange}>
      <option value="0" selected>빠른 시작 순</option>
      <option value="1">낮은 가격 순</option>
      <option value="2">높은 가격 순</option>
    </S.DropDown>
    <S.ItemsContainer>
       {state.data &&
       state.data.map(
         ({
            id,
            title,
            description,
            startPrice,
            startDate,
            images,
          }: Product) => (
           <ProductItem
             key={id}
             title={title}
             description={description}
             startPrice={startPrice}
             startDate={startDate}
             thumbnail={images[0].imagePath}
           />
         ))}
    </S.ItemsContainer>
  </S.Container>
)
}
;

export default CategoryItems;
