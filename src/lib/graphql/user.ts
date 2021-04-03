import { gql } from "@apollo/client";

export interface User {
  email: string;
  nickname: string;
  password: string;
  bio: string;
}

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password)
  }
`;
