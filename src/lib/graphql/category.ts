import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query Category {
        seeCategory {
            id
            categoryName
        }
    }
`;
