import styled from "styled-components";
import { FiSearch } from "react-icons/all";
import media from "../../../util/media";

export const SearchWrapper = styled.div`
height: 70px;
margin: 0 ;
position:relative;
`;


export const SearchInput = styled.input`
height: 40px;
width: 70%;
margin-left: 8%;
margin-top:30px;
border:0;
outline:0;
background-color: #eff0f4;
border-radius:50px;
padding-left:20px;

@media (max-width: ${media.mobileL}px) {
  margin-left: 9%;
    width: 63%;
}

`;

export const SearchIcon = styled(FiSearch)`
width: 35px;
height: 35px;
position:absolute;
top:32.5px;
right:9%;
color: orange;
cursor: pointer;

@media (max-width: ${media.mobileL}px) {
    width: 35px;
    height: 35px;
    top:32.5px;
    right:9%;
}
`;
