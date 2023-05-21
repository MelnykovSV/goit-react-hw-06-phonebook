import React from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { ModernNormalize } from 'emotion-modern-normalize';
import { Container } from './App.styled';
import { IContact } from '../../interfaces';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

import { getContacts } from '../../redux/slices/contactsSlice';
import { getFilter } from '../../redux/slices/filterSlice';

export const App = () => {
  const storedContacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const shownContacts = storedContacts.filter((item: IContact) => {
    return item.name.includes(filter);
  });

  return (
    <Container>
      <ModernNormalize />
      <h2>Phonebook</h2>
      <Form />
      <ContactsList contacts={shownContacts} />
      <ToastContainer />
    </Container>
  );
};
