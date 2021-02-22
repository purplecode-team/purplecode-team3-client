import styled from "styled-components";
import media from "../../../util/media";

export const Container = styled.div`
  background-color: white;
  @media (max-width: ${media.mobileL}px) {
    width: 100vw;
  }
  width: 500px;
`;
