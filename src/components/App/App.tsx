import { Container } from './App.styled';
import { Form } from '../Form/Form';
import { ContactsList } from '../ContactsList/Contactslist';
import { Filter } from '../Filter/Filter';
import { IContact } from '../../interfaces';
import { ModernNormalize } from 'emotion-modern-normalize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector, useDispatch } from 'react-redux';
import { updateFilter, getFilter } from '../../redux/slices/filterSlice';
import {
  addContact,
  deleteContact,
  getContacts,
} from '../../redux/slices/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  ///Saves contact to contacts if there is no contact with such name
  const formSubmitHandler = (data: IContact): boolean => {
    const normalizedName = data.name.toLowerCase();
    if (
      !contacts.some(
        (item: IContact) => item.name.toLowerCase() === normalizedName
      )
    ) {
      dispatch(addContact(data.name, data.phone));
      return true;
    } else {
      toast(`${data.name} is already in contacts.`);

      return false;
    }
  };

  ///Deletes contact
  const contactDeleteHandler = (id: string): void => {
    dispatch(deleteContact(id));
  };

  /// Sets contacts filter
  const contactsFilter = (value: string): void => {
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
