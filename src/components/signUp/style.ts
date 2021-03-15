import styled from "styled-components";
import media from "../../util/media";

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  padding: 50px 0 30px 0;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 650px;
  padding-bottom: 50px;
  background: #ffffff;

  @media (max-width: ${media.mobileL}px) {
    width: 100vw;
  }
`;

export const Label = styled.label`
  margin-left: 5rem;
  font-size: 1rem;
  color: #858582;

  @media (max-width: ${media.mobileL}px) {
    margin-left: 2.5rem;
  }
`;

export const Input = styled.input`
  height: 30px;
  border: 1px solid #d6d6ce;
  outline: none;
  border-radius: 0px;
  font-size: 1rem;
  margin: 0.25rem 5rem 1rem 5rem;

  @media (max-width: ${media.mobileL}px) {
    margin: 0.25rem 2.5rem 1rem 2.5rem;
    height: 25px;
  }
`;

export const SignUpButton = styled.button`
  cursor: pointer;
  border: none;
  height: 40px;
  margin: 0.5rem 5rem 0 5rem;
  background: #ff8a00;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
  &:hover,
  &:active {
    background: #faa23c;
  }


  @media (max-width: ${media.mobileL}px) {
    margin: 0.5rem 2.5rem 0 2.5rem;
  }
`;

export const Message = styled.p`
    display: inline;
    color: #e76f51;
    font-size: 0.5rem;
    padding-left: 0.5rem;
`;
