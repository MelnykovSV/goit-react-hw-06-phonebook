import React from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { Contact } from '../Contact/Contact';
import { ModernNormalize } from 'emotion-modern-normalize';

import { Container } from './App.styled';
import { IContact } from '../../interfaces';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';

import { getContacts, getFilter } from '../../redux/selectors';

import { store } from '../../redux/store';

export const App = () => {
  const storedContacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const shownContacts = storedContacts.filter(item => {
    return item.name.includes(filter);
  });

  store.subscribe(() => {
    console.log(store.getState().contacts);
    localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
  });

  const storeContactDeletehandler = () => {};

  return (
    <Container>
      <ModernNormalize />
      <h2>Phonebook</h2>

      <Form></Form>
      <ContactsList>
        {shownContacts.map(({ name, number, id }: IContact) => (
          <Contact
            name={name}
            number={number}
            id={id}
            key={id}
            deleteHandler={storeContactDeletehandler}
          />
        ))}
      </ContactsList>
      <ToastContainer />
    </Container>
  );
};
