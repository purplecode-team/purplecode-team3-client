import styled from "styled-components";

export const Wrapper = styled.div`
  width: 130px;
  padding-right: 0.5rem;
  padding-bottom: 1.5rem;
  h3 {
    padding-top: 1.5rem;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const PriceDescription = styled.p`
  font-weight: bold;
  padding: 0.5rem 0 1rem 0;
  display: flex;
  justify-content: space-between;
  span {
    color: #ff8a00;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 120px;
`;

export const StartTimeLabel = styled.div`
  position: relative;
  font-size: 12px;
  top: -3rem;
  background-color: #ff8a00;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 50px;
  padding: 0.5rem 0;
  width: 110px;
`;
