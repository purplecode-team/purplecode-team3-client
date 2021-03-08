import { gql } from "@apollo/client";

export interface User {
  email: string;
  nickname: string;
  password: string;
  bio: string;
}

export const CREATE_ACCOUNT = gql``;
