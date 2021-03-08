import styled from "styled-components";
import media from "../../../util/media";

export const ButtonWrapper = styled.div`
position: fixed;
z-index:999;
bottom: 40px;
 @media (max-width: ${media.mobileL}px) {
    width: 100vw;
  }
  width: 500px;
`

export const AddButton = styled.button`
font-size:25px;
color:white;

width:50px;
height: 50px;
cursor:pointer;
background-color:orange;
border-radius:100%;
outline:none;
position:relative;
border:0px;
box-shadow: rgb(0 0 0 / 9%) 0px 3px 10px;

@media (max-width: ${media.mobileL}px) {
left:80vw;
}
left:420px;

:hover, :active{
background-color:#f57c00;
}
`