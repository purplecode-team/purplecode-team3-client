import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 50px 0 30px 0;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;
export const InputContainer = styled.div`
  display: flex;
  padding: 20px;
`;
export const Label = styled.label`
  width: 100px;
  font-weight: bold;
`;
export const Input = styled.input`
  border: none;
  border-bottom: black 1px solid;
  width: 90%;
  :: placeholder {
    color: gray;
  }
  :focus {
    outline: none;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 30px 20px;
`;
export const StyledLink = styled(Link)`
  color: gray;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: none;
`;
export const LoginButton = styled.button`
  background-color: gray;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border: none;
  &: disabled {
    background-color: rgb(238, 238, 238);
    color: rgb(210, 210, 210);
  }
`;
