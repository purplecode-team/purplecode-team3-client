import { gql } from "@apollo/client";

export interface User {
  email: string;
  nickname: string;
  password: string;
  bio: string;
}

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $nickname: String!, $password: String!, $bio: String){
    createAccount(email: $email, nickname: $nickname, password: $password, bio: $bio)
  }
`;
