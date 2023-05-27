import React, { useEffect } from 'react';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';

import { ModernNormalize } from 'emotion-modern-normalize';
import { Filter } from '../Filter/Filter';

import { Container } from './App.styled';
import { IContact } from '../../interfaces';

import { ToastContainer, toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';

import { updateFilter, getFilter } from '../../redux/slices/filterSlice';
import {
  addContact,
  deleteContact,
  getContacts,
} from '../../redux/slices/contactsSlice';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  ///Gets initial contacts value from local storage
  // const [contacts, setContacts] = useState(
  //   localStorage.getItem('contacts')
  //     ? JSON.parse(localStorage.getItem('contacts')!)
  //     : []
  // );
  // const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  console.log(filter);

  /// Saves contacts to local storage on its change

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  ///Saves contact to contacts if there is no contact with such name
  const formSubmitHandler = (data: IContact): boolean => {
    const normalizedName = data.name.toLowerCase();
    if (
      !contacts.some(
        (item: IContact) => item.name.toLowerCase() === normalizedName
      )
    ) {
      // setContacts((prevContacts: IContact[]) => [data, ...prevContacts]);
      dispatch(addContact(data.name, data.phone));
      return true;
    } else {
      toast(`${data.name} is already in contacts.`);

      return false;
    }
  };

  ///Deletes contact
  const contactDeleteHandler = (id: string): void => {
    // setContacts((prevContacts: IContact[]) =>
    //   prevContacts.filter((item: IContact): boolean => item.id !== id)
    // );

    dispatch(deleteContact(id));
  };

  /// Sets contacts filter
  const contactsFilter = (value: string): void => {
    // setFilter(value.toLowerCase());

    dispatch(updateFilter(value.toLowerCase()));
  };

  const filteredContacts = contacts.filter((item: IContact): boolean =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <Container>
      <ModernNormalize />
      <h2>Phonebook</h2>

      <Form formSubmit={formSubmitHandler}></Form>
      <h2>Contacts</h2>
      <Filter contactsFilter={contactsFilter} />
      <ContactsList
        filteredContacts={filteredContacts}
        contactDeleteHandler={contactDeleteHandler}
      />

      <ToastContainer />
    </Container>
  );
};
