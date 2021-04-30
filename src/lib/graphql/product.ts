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


export const GET_SORTEDPRODUCTS = gql`
    query Products(
        $action: ACTIONS!
        $productIds: [Int]
    ) {
        sortProduct (
            action: $action
            productIds: $productIds
        ) {
            title
            id
            idCategory
            startDate
            startPrice
            images{
                id
                imagePath
            }
        }
    }
`;


export const GET_PRODUCT = gql`
    query Product($id: Int!) {
        seeDetailProduct(id: $id){
            id
            title
            description
            startPrice
            bidPrice
            productNum
            startDate
            usedDate
            idCategory
            user{
                nickname
            }
        }
    }
`;

