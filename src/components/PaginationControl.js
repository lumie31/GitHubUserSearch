import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
export default function PaginationControl({
  searchUsers,
  startCursor,
  endCursor,
  hasNext,
  hasPrevious,
}) {
  const handleLoadPrevious = () => {
    searchUsers({
      variables: {
        first: null,
        before: startCursor,
        after: null,
        last: 10,
      },
    });
  };

  const handleLoadNext = () => {
    searchUsers({
      variables: { first: 10, before: null, last: null, after: endCursor },
    });
  };
  return (
    <div>
      <Flex mt={4} mb={4} justify="space-between">
        <Button
          variant="outline"
          leftIcon={<ArrowBackIcon />}
          isDisabled={!hasPrevious}
          onClick={handleLoadPrevious}
        >
          Prev
        </Button>
        <Button
          variant="outline"
          isDisabled={!hasNext}
          onClick={handleLoadNext}
          rightIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>
      </Flex>
    </div>
  );
}
