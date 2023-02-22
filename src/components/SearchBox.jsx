import { Wrapper, Input } from "./SearchBox.styled";

export const SearchBox = ({ onSubmit, onChange }) => {
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
      <Input
        type="text"
        
        onChange={onChange}
      />
      <button type="submit">Search</button>
      </form>
    </Wrapper>
  );
};