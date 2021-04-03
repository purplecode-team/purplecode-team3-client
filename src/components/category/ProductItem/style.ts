import styled from "styled-components";
import media from "../../../util/media";

export const Wrapper = styled.div`
  width: 50%;
  margin:0 auto;

`;

export const Description = styled.p`
  width:300px;
  margin:0 auto;
  font-size:13px;
  line-height:20px;

  h3{
  font-weight: bold;
  font-size:15px;
  line-height:28px;
  } 
  
  span {
  display:block;
  font-size:10px;
  color: grey;
  }
  
   @media (max-width: ${media.mobileL}px) {
      width:40vw;
  }
`;

export const ImageWrapper = styled.div`
  display:grid;
  margin:0 auto;
  margin-bottom:10px;
  
  img{
    margin:0 auto;
    height: 300px;
    width:300px;
    object-fit: cover;
    border-radius:5px;
  }
  
   
  @media (max-width: ${media.mobileL}px) {
  
  img{
      height: 42vw;
      width:42vw;
  }
  }
`;

export const StartTimeLabel = styled.div`
  width:300px;
  margin: 8px 0px 25px 0px;
  font-size: 10px;
  line-height:23px;
  font-weight: bold;
  text-align: center;
  border: 1px solid lightgrey;
  
   @media (max-width: ${media.mobileL}px) {
      width:40vw;
  }
`;
