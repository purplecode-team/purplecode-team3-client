import styled from "styled-components";
import media from "../../../lib/util/media";

export const Container = styled.div`
  background-color: white;
  @media (max-width: ${media.mobileL}px) {
    width: 100%;
  }
  width: 500px;
`;
