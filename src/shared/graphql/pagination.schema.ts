export const paginationTypeDefs = `#graphql

    type PageInfo {
        page: Int!
        pageSize: Int!
        totalCount: Int!
        totalPages: Int!

        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
    }

    input PaginationInput {
        page: Int! = 1
        pageSize: Int! = 20
    }
`;