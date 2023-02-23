import { Wrapper, Input } from "./SearchBox.styled";

export const SearchBox = ({ onSubmit }) => {
  const handleSubmit=event=>{
    event.preventDefault()
    const form=event.currentTarget;
    const searchValue=form.elements.searchValue.value

    if(searchValue.trim()===''){
      alert('Please choose movie')
      return
    }
onSubmit(searchValue)
form.reset()
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        name="searchValue"
        // onChange={onChange}
      />
      <button type="submit">Search</button>
      </form>
    </Wrapper>
  );
};