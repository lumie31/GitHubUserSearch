import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

export default function SearchBar({ action }) {
  const [keyword, setKeyword] = useState('');

  const handleClick = () => {
    setKeyword('');
    return keyword.trim().length ? action(keyword) : '';
  };

  return (
    <Flex align="center">
      <Input
        size="sm"
        borderRadius={6}
        placeholder="Search Github"
        onChange={e => setKeyword(e.target.value)}
        value={keyword}
      />
      <Button
        colorScheme="gray"
        onClick={handleClick}
        size="sm"
        ml={2}
        variant="outline"
      >
        Search
      </Button>
    </Flex>
  );
}
