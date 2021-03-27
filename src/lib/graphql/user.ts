import { gql } from "@apollo/client";

export interface User {
  email: string;
  nickname: string;
  password: string;
  bio: string;
  isAdmin: Boolean;
}

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $nickname: String!, $phoneNum: String! $password: String!, $bio: String, $isAdmin: Boolean){
    createAccount(email: $email, nickname: $nickname, phoneNum: $phoneNum, password: $password, bio: $bio, isAdmin: $isAdmin)
  }
`;
