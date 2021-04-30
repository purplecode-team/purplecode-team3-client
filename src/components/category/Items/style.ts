import styled from "styled-components";

export const Container = styled.div`
  padding: 0rem 0.7rem 0rem 0.7rem;
`;

export const Title = styled.div`
  font-size: 0.4em;
  height:40px;
  padding: 5px 5px 5px 15px;
  line-height:30px;
  font-weight: bold;
  display:inline-block;
  
`;

export const ItemsContainer = styled.div`
  weight:100%;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  
`;
export const DropDown = styled.select`
  width: 21vw;
  float: right;
  height:20px;
  margin:10px;
  display: inline-block;
  font-size:9px;
  color: grey;
  line-height:20px;
  border:0px;
  background: white;
  
  h3{
  font-weight: bold;
  font-size:15px;
  } 
  
 
 `;

export const CategoryHeader = styled.div`
  text-align: center;
  width: 100%;
  height: 50px;
  line-height:50px;
  background: white;
  h3 {
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const Category = styled.ul`
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  background:white;
  width: 12.5%;
  height: 25px;
  line-height:25px;
  text-decoration:none;
  border-bottom:1px solid #e5e5e5;
  margin-bottom:10px;
  h3 {
    font-weight:bold;
    font-size: 0.7rem;
    border-bottom: 3.5px solid black;

  }
  
  h2 {
      font-size: 0.5rem;
  }
  
  
`;


