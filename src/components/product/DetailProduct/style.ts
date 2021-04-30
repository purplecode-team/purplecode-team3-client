import styled from "styled-components";
import { RiHeart2Line,RiHeart2Fill } from "react-icons/all";
import media from "../../../util/media";

export const ContainerOutSide = styled.div`
  padding: 0;
  width:100%;
  position:fixed;

`
export const Container = styled.div`
  padding-top:5px;
  width:95%;
  background: white;
  margin:auto;
`;

export const Title = styled.div`
  text-align: left;
  height: 55px;
  padding-left:20px;
  line-height:55px;
  font-weight: bold;
  font-size: 20px; 
  border-bottom:1px solid #e5e5e5;
`;

export const Info = styled.div`
  
  font-size: 14px;
  padding-top:15px;
  padding-left: 20px;
  padding-bottom:15px;
  line-height:35px;
  font-weight: normal;
  display:inline-block;
  text-align: left;
  border-bottom:1px solid #e5e5e5;

  h1{
    font-size:16px;
    font-weight: bold;
    display:block;
    line-height:40px;
    }
  h2{
  display:inline;
  float:left;
  width:60vw;     
  line-height:30px; 
  }
  
  h3{
      font-size:14px;
  }
  
  h4{
    display:inline;
    float:left;
    width:60vw;     
    line-height:30px; 
  }
  h5{
    display:inline;
    text-align: right;
    float:right;
    margin-right:20px;
    line-height:30px; 
  }
  span{
    display:inline;
    text-align: right;
    float:right;
    margin-right:20px;
    line-height:30px; 
  }

`

export const Des = styled.div`

font-size:14px;
 width:90%;
  padding-top:15px;
  padding-left: 20px;
  padding-bottom:15px;
  line-height:20px;
  border-bottom:1px solid #e5e5e5;

`

export const BottomBar = styled.div`
position:fixed;
width:100%;
height:65px;
background-color: #383A3F;
bottom:0;
`


export const Button = styled.button`
width:70%;
  font-weight: bold;

font-size:17px;
height:45px;
background-color: #F17F42;
border:0;
border-radius:100px;
margin-left:7%;
margin-top:10px;
vertical-align: middle;
position:relative;
color:white;
h1{
padding-left:5px;
display:inherit;}
h2{
display:inherit;
padding-left:20px;
}
`



export const Like = styled(RiHeart2Line)`
  position:absolute;
  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;
  padding: 5px 0px 0px 5px;
  margin:10px 0px 0px 10px;
`;


export const Liked = styled(RiHeart2Fill)`
  position:absolute;
  width: 35px;
  height: 35px;
  color: white;
  cursor: pointer;
  padding: 5px 0px 0px 5px;
  margin:10px 0px 0px 10px;
`;

export const Image = styled.div
`
img{
width:100%;
height:240px;
object-fit: cover;
}

`
export const SwiperContainer = styled.div`
width:100%;
height:420px;
  
  @media (max-width: ${media.mobileL}px) {
      height: 100%;
      width:42vw;
  }

`


export const SwiperSlide = styled.div`
  img{
    margin:0 auto;
    height: 100%;
    width:100%;
    object-fit: cover;
  }
`