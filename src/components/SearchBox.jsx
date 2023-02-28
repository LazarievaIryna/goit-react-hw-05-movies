import { useState } from "react";
import { Wrapper, Input } from "./SearchBox.styled";

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
      onChange={handleChange}
    />
    <button type="submit">Search</button>
    </form>
  </Wrapper>
);
  
  }
  
