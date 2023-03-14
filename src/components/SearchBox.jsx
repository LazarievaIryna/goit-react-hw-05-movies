import { useState } from "react";
import {GoSearch} from 'react-icons/go'
import { Wrapper, Input,Button } from "./SearchBox.styled";

export const SearchBox = ({ onSubmit }) => {
const [query, setQuery]=useState('')

const handleChange=event=>{
  setQuery(event.target.value)
  
}
const handleSubmit=event=>{
  event.preventDefault()
  onSubmit(query)
  setQuery('')
}

return (
  <Wrapper>
    <form onSubmit={handleSubmit}>
    <Input
      type="text"
      autoComplete="off"
      autoFocus
      value={query}
      // name="searchValue"
      placeholder='Search your movie'
      onChange={handleChange}
    />
    <Button type="submit"><GoSearch/></Button>
    </form>
  </Wrapper>
);
  
  }
  
