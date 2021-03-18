import styled from "styled-components";
import media from "../../util/media";

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
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
  margin-top: 0.5rem;
  margin-left: 5rem;
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: ${media.mobileL}px) {
    margin-left: 2.5rem;
  }
`;

export const Input = styled.input`
  height: 40px;
  border: 1px solid #d6d6ce;
  outline: none;
  font-size: 0.8rem;
  margin: 0.5rem 5rem 1rem 5rem;

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
  background: #eeeeee;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  color: #d2d2d2;
  text-align: center;
  &:hover,
  &:active {
    color: #ffffff;
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

  @media (max-width: ${media.mobileL}px) {
    font-size: 0.2rem;
  }
`;
