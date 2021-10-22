import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import ContactForm from "./ContactForm";

const ContactFormContainer = () => {
  const contacts = useSelector((state) => contactsSelectors.getContacts(state));
  const dispatch = useDispatch();

  const addContact = (contact) => {
    dispatch(contactsOperations.addContact(contact));
  };


  return <ContactForm addContact={addContact} contacts={contacts}/>;
};

export default ContactFormContainer;
