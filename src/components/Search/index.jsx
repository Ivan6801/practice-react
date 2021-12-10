import React from 'react'
import { Input, Center } from './styles';

const Search = ({ input, setInput }) => {
  const onSearchValueChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Center>
      <Input
      placeholder="Search..."
      type="text"
      value={input}
      onChange={onSearchValueChange}
    />
    </Center>
  )
}

export { Search } 
