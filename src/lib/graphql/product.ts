import { gql } from "@apollo/client";

export const UPLOAD_PRODUCT = gql`
  mutation uploadProduct(
    $idCategory: Int!
    $title: String!
    $description: String
    $startPrice: Int!
    $bidPrice: Int!
    $StartDate: String!
    $usedDate: Int!
    $productNum: String
    $images: [String!]!
  ) {
    id
  }
`;
