import React from 'react';
import { Container, StyledSearchIcon } from './Contactslist.styled';
import { IContactsListProps, IContact } from '../../interfaces';
import shortid from 'shortid';
import { setFilter } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';
import { Contact } from '../Contact/Contact';

export const ContactsList = ({ contacts }: IContactsListProps) => {
  const formId = shortid.generate();

  const dispatch = useDispatch();

  const storeSearchHandler = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      value: string;
    };

    dispatch(setFilter(target.value));
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

      <ul>
        {contacts.map(({ name, number, id }: IContact) => (
          <Contact name={name} number={number} id={id} key={id} />
        ))}
      </ul>
    </Container>
  );
};
