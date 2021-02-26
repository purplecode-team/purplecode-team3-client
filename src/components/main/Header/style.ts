import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: black;
  height: 47px;
  width: 100%;
`;
export const HeaderContents = styled.div`
  padding: 0px 1rem;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const Logo = styled(Link)`
  color: white;
  font-size: 22px;
  font-weight: 800;
  font-family: Gilroy;
  text-decoration: none;
`;
export const IconContainer = styled.div`
  vertical-align: middle;
  display: flex;
  width: 60px;
  justify-content: space-around;
`;
export const HamburgerContainer = styled.div`
  padding:0px;
   min-width: 300px;
  width: 100%;
  max-width: 45%;
  height: 100%;
  background-color: yellow;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
`;
