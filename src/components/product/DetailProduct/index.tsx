import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../../lib/graphql/product";
import * as S from "./style";
import { GET_CATEGORIES } from "../../../lib/graphql/category";
import { CategoryProps } from "../../main/Category";

export interface Product {
  id: number;
  title: string;
  description: string;
  startPrice: number;
  startDate: string;
  images: Image[];
  idCategory: number;
}
export interface Image {
  id: number;
  imagePath: string;
}

function DetailProduct ( {match}: any ) {


  const image:Image[] =[
    {
      id:1,
      imagePath:"http://the-edit.co.kr/wp-content/uploads/2019/05/ipadmini5-14-1024x682.jpg"
    },
    {
      id:2,
      imagePath:"http://the-edit.co.kr/wp-content/uploads/2019/05/ipadmini5-31-768x512.jpg"
    }];
  console.log(image);

  const [ item, setItem ] = useState({
    id: 0,
    title: '',
    description: '',
    startPrice: 0,
    startDate: "",
    images: image,
    idCategory: +match.params.category,
    productNum: 0,
    usedDate: 0,
    bidPrice: 0,
    user: ''
  })
  const { error } = useQuery(GET_PRODUCT,{
    variables : {id:+match.params.id},onCompleted: (data)=>{
      setItem({...item,
        id: data.seeDetailProduct.id,
        title:data.seeDetailProduct.title,
        description: data.seeDetailProduct.description,
        startPrice: data.seeDetailProduct.startPrice,
        startDate: data.seeDetailProduct.startDate,
        images: image,
        usedDate: data.seeDetailProduct.usedDate,
        productNum:data.seeDetailProduct.productNum,
        bidPrice: data.seeDetailProduct.bidPrice,
        user:data.seeDetailProduct.user.nickname
      })
    }});
  if(error) console.log(error);


  console.log(item);
  console.log(match);
  const start = new Date(+item.startDate);

  const a :CategoryProps ={id:0,categoryName:''};
  const [ cate, setcate ] = useState([a]);
  useQuery(GET_CATEGORIES,{onCompleted:(data)=>
      setcate(data.seeCategory) });

  return(

  <S.ContainerOutSide>
    <S.Image>
      <img src={item.images[0].imagePath} alt={item.title} />
    </S.Image>
      <S.Container>

        <S.Title>
        {item.title}</S.Title>
        <S.Info>
          <h1>제품 상세 정보</h1>
          <h2>제품 카테고리</h2>{cate &&
        cate.map(({ id, categoryName }:CategoryProps) => (id===item.idCategory?
              <span>{categoryName}</span>:null))}
          <h2>제품 사용 기간</h2><span>약 {item.usedDate}개월</span>
          <h2>출품자</h2><span> {item.user} 님</span>

        </S.Info>
        <S.Info>
          <h1>경매 상세 정보</h1>
          <h4>판매 시작가</h4> <h5>\ {item.startPrice}</h5>
          <h4>경매 호가</h4> <h5>\ {item.bidPrice}</h5>
        </S.Info>
        <S.Des>
          {item.description}
        </S.Des>
      </S.Container>
       <S.BottomBar>
         <S.Button>시작시간
           <h2>{start.getMonth()+1}/{start.getDate()}{
           start.getHours()>=12?
           <h1>오후 {start.getHours()-12}:{start.getMinutes()}</h1>
             :<h1>오전 {start.getHours()}:{start.getMinutes()}</h1>}</h2>

         </S.Button>
         <S.Like/>
       </S.BottomBar>
  </S.ContainerOutSide>
)
};


export default DetailProduct;
