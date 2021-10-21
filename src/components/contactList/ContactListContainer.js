import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import ContactList from './ContactList';

const ContactListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector((state) =>
  contactsSelectors.getVisibleContacts(state)
);
const deleteContact = (value) =>
  dispatch(contactsOperations.deleteContact(value));

  return (
    <ContactList visibleContacts={visibleContacts} deleteContact={deleteContact}/>
  );
}

export default ContactListContainer;