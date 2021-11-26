import React from 'react';

export interface ISearchInput {
  searchInput: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchLeadInput = ({ searchInput, handleOnChange }: ISearchInput) => {
  return (
    <div className="ui tiny input">
      <input
        type="text"
        value={searchInput}
        placeholder="search lead..."
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchLeadInput;
