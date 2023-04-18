// import { ContactFilter } from 'components/ContactFilter/ContactFilter';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { GlobalStyle } from '../GlobalStyle';
// import { ContactListTitle, FormTitle, ContactsLayout } from './App.styled';

import { ContactFilter } from "components/ContactFilter/ContactFilter";
import { ContactListTitle, ContactsLayout, FormTitle } from "./ContactsPage.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { GlobalStyle } from "components/GlobalStyle";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError, selectContacts } from "redux/contacts/contactsSelectors";
import { fetchContacts } from "redux/contacts/contactsOperations";


export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsLayout>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm/>
      <ContactListTitle>Contacts</ContactListTitle>
      <ContactFilter/>

      {isLoading && !error && <b>Loading...</b>}
      {contacts.length > 0 && <ContactList />}

      <GlobalStyle /> 
    </ContactsLayout>
  );
};