import { useEffect } from "react";
import { useDispatch } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";
import ContactFormContainer from "./contactForm/ContactFormContainer";
import ContactListContainer from "./contactList/ContactListContainer";
import FilterContainer from "./filter/FilterContainer";
import Header from "./header/Header";
import Main from "./main/Main";
import Section from "./section/Section";

// const contactsValue = JSON.parse(window.localStorage.getItem("contacts")) || [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const App = () => {
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(contactsOperations.fetchContacts());
  // }, [dispatch]);

  return (
    <>
    <Header/>
    <Main/>
    
      {/* <Section title="Phonebook">
        <ContactFormContainer />
      </Section>

      <Section title="Contacts">
        <FilterContainer/>
        <ContactListContainer/>
      </Section> */}
    </>
  );
};

export default App;
