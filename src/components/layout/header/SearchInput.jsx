import { Container, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Search } from 'lucide-react';
import React from 'react';

const SearchInput = () => {
  return (
    <div className="fixed top-12 left-0 right-0 bg-red-200 py-3 rounded-b-lg">
      <Container>
        <InputGroup>
          <Input placeholder="전시, 장소를 검색하세요." />
          <InputRightElement>
            <Search />
          </InputRightElement>
        </InputGroup>
      </Container>
    </div>
  );
};

export default SearchInput;
