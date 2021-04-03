import styled from "styled-components";
/* import media from "../../util/media"; */

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

  h3 {
    font-weight:bold;
    font-size: 0.7rem;
    border-bottom: 3.5px solid black;

  }
  h2 {
      font-size: 0.5rem;
  }
  
  
`;
