import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/contacts/contactsSelectors';
// import { updateContact } from 'redux/contacts/contactsOperations';
import {
  Form,
  FormField,
  Field,
  ErrorMessage,
  UpdateContactBtn,
} from './UpdateForm.styled';
// import { useEffect } from 'react';

const UpdateContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const UpdateForm = () => {
  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();
  // const form = e.currentTarget;



  // dispatch(
  //   updateContact({
  //     name: form.elements.name.value,
  //     number: form.elements.number.value,
  //   })
  // );

  // const handleSubmit = newContact => {
  //   const normalizedContactName = newContact.name.toLowerCase();
  //   const existedContact = contacts.find(
  //     contact =>
  //       contact.name && contact.name.toLowerCase() === normalizedContactName
  //   );

  //   existedContact
  //     ? alert('This contact is already in contacts.')
  //     : dispatch(addContact(newContact));
  // };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={UpdateContactSchema}
      onSubmit={(values, actions) => {
        // handleSubmit(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="p" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="p" />
        </FormField>

        <UpdateContactBtn type="submit">Update contact</UpdateContactBtn>
      </Form>
    </Formik>
  );
};
