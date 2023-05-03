import React from 'react';
import { Container, StyledSearchIcon } from './Contactslist.styled';

import { IContactsListProps } from '../../interfaces';
import shortid from 'shortid';

import { setFilter } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export const ContactsList = ({ children }: IContactsListProps) => {
  const formId = shortid.generate();

  const dispatch = useDispatch();

  const storeSearchHandler = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <h2>Contacts</h2>

      <label htmlFor={formId}>Find contacts by name</label>
      <div>
        <input
          type="text"
          name=""
          id={formId}
          onChange={storeSearchHandler}
          placeholder="Type to find..."
        />
        <StyledSearchIcon />
      </div>

      <ul>{children}</ul>
    </Container>
  );
};
