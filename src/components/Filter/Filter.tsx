import React from 'react';
import { Container } from './Filter.styled';
import { StyledSearchIcon } from './Filter.styled';
import { IFilterProps } from '../../interfaces';

export const Filter = ({ contactsFilter }: IFilterProps) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    contactsFilter(e.target.value);
  };

  return (
    <Container>
      <label htmlFor="search-input">Find contacts by name</label>
      <div>
        <input
          type="text"
          name=""
          id="search-input"
          onChange={searchHandler}
          placeholder="Type to find..."
        />
        <StyledSearchIcon />
      </div>
    </Container>
  );
};
