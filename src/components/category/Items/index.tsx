import React, {  useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/index";
import { GET_SORTEDPRODUCTS } from "../../../lib/graphql/product";
import * as S from "./style";
import { GET_CATEGORIES } from "../../../lib/graphql/category";
import { CategoryProps } from "../../main/Category";


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
  idCategory: number;
}

function CategoryItems  ( {match}:any ) {

  const cate = useQuery(GET_CATEGORIES);
  const cat :number = +match.params.id;


  const image:Image[] =[
    {
      id:1,
      imagePath:"http://the-edit.co.kr/wp-content/uploads/2019/05/ipadmini5-14-1024x682.jpg"
    },
    {
      id:2,
      imagePath:"http://the-edit.co.kr/wp-content/uploads/2019/05/ipadmini5-31-768x512.jpg"
    }];

  const init:Product[] =[
    {
      id:0,
      title: '',
      description: '',
      startPrice:0,
      startDate: '',
      images: image,
      idCategory: 0}];



  // const [category, setCate] = useState(cat);

  const [state, setState] =  useState({
    choice: 'NEW',
    category : cat,
    products: init
  });

  const [all, setAll] = useState(init);
  // init
  useQuery(GET_SORTEDPRODUCTS,{
    variables : {action: 'NEW'},onCompleted:(data)=>{

      setState({...state,products:data.sortProduct.filter((aa:Product)=>(aa.idCategory === state.category))});
      setAll(data.sortProduct);}});

  const [ onSort ] = useLazyQuery(GET_SORTEDPRODUCTS,{
    variables : {action: state.choice},
    onCompleted: (newData) =>{
      setState({...state, products: newData.sortProduct})
      ;
    }});


  /* sort 변경 event */
  const onChange= (e:React.ChangeEvent<HTMLSelectElement>) =>{
    setState({...state,
      choice:e.target.value });
    onSort();
  };



  return (
    <S.Container>
      <S.CategoryHeader>
        {cate.data.seeCategory.map(({ id, categoryName }: CategoryProps) => (
          id===cat ? <h3>{categoryName}</h3> :null))}
        {cate.data &&
        cate.data.seeCategory.map(({ id, categoryName }: CategoryProps) => (
          <S.Category key={id}>
            { id === cat ?
              <h3>{categoryName}</h3>:
              <Link to={`/category/${id}`}
                    onClick={()=>setState(
                      {...state,
                        category:id,
                        products: all.filter((aa:Product)=>(aa.idCategory ===id))
                      }

                    )} style={{ color: 'inherit', textDecoration: 'inherit'} }
              ><h2>{categoryName}</h2></Link>}
          </S.Category>
        ))}
      </S.CategoryHeader>

      <S.Title>
        총 {state.products.length}개
      </S.Title>
      <S.DropDown value={state.choice} onChange = {onChange}>
        <option value='NEW'>신상품 순</option>
        <option value='FAST' selected>빠른 시작 순</option>
        <option value='HOT'>인기 순</option>
        <option value='LOWPRICE'>낮은 가격 순</option>
        <option value='HIGHPRICE'>높은 가격 순</option>
      </S.DropDown>
      <S.ItemsContainer>
        {state.products &&
        state.products.map(
          ({
             id,
             title,
             description,
             startPrice,
             startDate,
             idCategory
           }: Product) => (
            <ProductItem
              key={id}
              id = {id}
              title={title}
              description={description}
              startPrice={startPrice}
              startDate={startDate}
              idCategory={idCategory}
              thumbnail="http://the-edit.co.kr/wp-content/uploads/2019/05/ipadmini5-14-1024x682.jpg"
            />
          ))}
      </S.ItemsContainer>
    </S.Container>
  );
}

export default CategoryItems;