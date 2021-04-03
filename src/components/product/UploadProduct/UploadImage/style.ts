import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
`;
export const ImageUpload = styled.div`
  background: #c4c4c4;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  margin-top: 25px;
  margin-left: 25px;
`;
export const PlusIcon = styled.div`
  :hover {
    opacity: 0.6;
  }
  margin: auto;
`;
export const ImagesContainer = styled.div`
  margin-top: 25px;
  display: flex;
   #close-icon {
   position: relative;
    cursor: pointer;
    z-index: 10;
    left: 110px;
    top: -8px;
    opacity: .7;
    :hover {
    opacity: 1;
  }
`;
export const Images = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;
