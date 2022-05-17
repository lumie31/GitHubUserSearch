import React from 'react';
import { Box, Flex, Link, Img } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export default function UserCard({ user }) {
  return (
    <Link key={user.id} href={user.url} isExternal>
      <Flex borderWidth="2px" overflow="hidden" p={2} my={2} rounded="xl">
        <Img src={user.avatarUrl} alt="user_image" width="100px" rounded="lg" />
        <Box>
          <Box
            mt="1"
            ml={2}
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {user.name} &bull; {user.login}
          </Box>
          <Box ml={2} as="p" noOfLines={1} fontSize="sm">
            {user.bio}
          </Box>
          <Box ml={2} as="p" noOfLines={1} fontSize="sm">
            {user.location}
          </Box>
          <Flex
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
            align="center"
          >
            <StarIcon /> &nbsp;
            {user?.starredRepositories?.totalCount} &bull;{' '}
            {user?.followers?.totalCount} followers &bull;{' '}
            {user?.following?.totalCount} following
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
}
