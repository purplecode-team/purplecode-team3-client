import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem 0 1rem;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  span {
    color: #ff8a00;
  }
`;

export const AuctionsContainer = styled.div`
  padding: 1.5rem 0 1rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
