import React from 'react';
import { Container } from './Form.styled';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/actions';
import { addContact } from '../../redux/slices/contactsSlice';
import { store } from '../../redux/store';
import { IContact, IFormData } from '../../interfaces';

export const Form = () => {
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(6, 'Minimum input length 6 symbols')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid format'
      )
      .required('This field is required')
      .trim(),
    number: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        'Invalid format'
      )
      .required('This field is required'),
  });

  const addContactToStore = (data: IFormData) => {
    if (
      store.getState().contacts.find((item: IContact) => {
        return item.name === data.name.trim();
      })
    ) {
      console.log('this contact already exists!');
      return;
    }
    console.log(addContact);
    dispatch(addContact(data.name.trim(), data.number));
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={addContactToStore}
        validationSchema={schema}
      >
        <FormikForm>
          <label>
            Name
            <Field type="text" name="name" placeholder="Name your contact" />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>

          <label>
            Number
            <Field
              type="tel"
              name="number"
              placeholder="Paste or type the number"
            />
            <span>
              <ErrorMessage name="number" />
            </span>
          </label>

          <button type="submit">Add contact</button>
        </FormikForm>
      </Formik>
    </Container>
  );
};
