import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Container,
  Text,
  Flex,
  Stack,
  Skeleton,
} from '@chakra-ui/react';
import { query } from './utils/query';
import Header from './components/Header';
import UserCard from './components/UserCard';
import { SearchIcon } from '@chakra-ui/icons';
import SearchBar from './components/SearchBar';
import { useLazyQuery, gql } from '@apollo/client';
import PaginationControl from './components/PaginationControl';

const USER_QUERY = gql(query);

function App() {
  const [searchUsers, { loading, error, data }] = useLazyQuery(USER_QUERY);

  let users = data?.search.edges.map(searchItem => searchItem.node);
  let totalUserCount = data?.search.userCount;
  let hasPrevious = data?.search.pageInfo.hasPreviousPage;
  let hasNext = data?.search.pageInfo.hasNextPage;
  let endCursor = data?.search.pageInfo.endCursor;
  let startCursor = data?.search.pageInfo.startCursor;

  const handleSearch = async keyword => {
    searchUsers({ variables: { query: keyword, first: 10 } });
  };

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.md" mt={2}>
        <Box className="searchContainer">
          <Flex align="center" mt={4} mb={1}>
            <SearchIcon mr={1} />
            <Text fontWeight="semibold" fontSize="lg">
              Search for Github Users
            </Text>
          </Flex>
          <SearchBar action={handleSearch} />
          <Text fontSize="sm" mt={1} lineHeight="tight">
            <strong>ProTip!</strong> Type a query in the input above and click
            on the search button to get a result 🙂
          </Text>
        </Box>
        <Box className="users">
          {loading ? (
            <Stack mt={4}>
              <Skeleton height="100px" rounded="lg" />
              <Skeleton height="100px" rounded="lg" />
              <Skeleton height="100px" rounded="lg" />
              <Skeleton height="100px" rounded="lg" />
            </Stack>
          ) : error ? (
            <Text
              align="center"
              color="red"
              my={4}
              fontSize="lg"
              fontWeight="bold"
            >
              Error fetching users! 😢
            </Text>
          ) : (
            totalUserCount && (
              <Text fontWeight="semibold" fontSize="lg" my={3}>
                Showing&nbsp;
                {totalUserCount.toLocaleString()}
                &nbsp;user results
              </Text>
            )
          )}
          {(users || []).map((user, i) => {
            return <UserCard user={user} key={user.id} />;
          })}
        </Box>
        <Box className="paginationControls">
          {totalUserCount && (
            <PaginationControl
              searchUsers={searchUsers}
              startCursor={startCursor}
              endCursor={endCursor}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
            />
          )}
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
