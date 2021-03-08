import styled from "styled-components";
import media from "../../../util/media";

export const CategoryWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 340px;
  background: #e5e5e5;
  padding: 0.5rem 0;
  @media (max-width: ${media.mobileL}px) {
    height: 25vh;
  }
`;

export const CategoryItem = styled.li`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 142px;
  height: 142px;
  border-radius: 50%;
  margin: 0 0.5rem;
  background: #c4c4c4;
  h3 {
    font-weight: bold;
    font-size: 1rem;
  }
  @media (max-width: ${media.mobileL}px) {
    width: 20vw;
    height: 20vw;
    h3 {
      font-size: 0.5rem;
    }
  }
  /* galaxy fold*/
  @media (max-width: 280px) {
    width: 19vw;
    height: 19vw;
    h3 {
      font-size: 0.5rem;
    }
  }
`;
