import React from 'react';
import { Container } from './Contact.styled';
import { BsTrash3 } from 'react-icons/bs';
import { IContactProps } from '../../interfaces';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export const Contact = ({ name, number, id }: IContactProps) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Container>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button type="button" onClick={handleDeleteClick}>
        <BsTrash3 size="16px" color="white" />
      </button>
    </Container>
  );
};
