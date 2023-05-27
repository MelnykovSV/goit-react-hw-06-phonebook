import { Container } from './Contactslist.styled';
import { IContactsListProps } from '../../interfaces';
import { Contact } from '../Contact/Contact';

export const ContactsList = ({
  filteredContacts,
  contactDeleteHandler,
}: IContactsListProps) => {
  return (
    <Container>
      <ul>
        {filteredContacts.map(item => (
          <Contact
            name={item.name}
            number={item.phone}
            id={item.id}
            key={item.id}
            deleteHandler={contactDeleteHandler}
          />
        ))}
      </ul>
    </Container>
  );
};
