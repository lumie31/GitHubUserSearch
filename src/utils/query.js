export const query = `
  query Users(
    $query: String!
    $last: Int
    $first: Int
    $before: String
    $after: String
  ) {
    search(
      query: $query
      type: USER
      last: $last
      first: $first
      before: $before
      after: $after
    ) {
      userCount
      edges {
        node {
          ... on User {
            avatarUrl
            bio
            id
            login
            starredRepositories {
              totalCount
            }
            following {
              totalCount
            }
            followers {
              totalCount
            }
            location
            name
            url
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;
