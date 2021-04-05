import { gql } from "@apollo/client";

export interface Product {
  name: String;
  startDate: String;
  startPrice: number;
}

export const SEARCH_PRODUCT = gql`
  query searchProduct(
    $name: name
    $startDate: startDate
    $endDate: endDate
    $startPrice: startPrice
    $endPrice: endPrice
  ) {
    searchProduct(
      email: $email
      startDate: $startDate
      endDate: $endDate
      startPrice: $startPrice
      endPrice: $endPrice
    )
  }
`;
