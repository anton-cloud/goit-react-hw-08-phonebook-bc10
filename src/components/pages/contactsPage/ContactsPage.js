import React from "react";
import ContactFormContainer from "../../contactForm/ContactFormContainer";
import ContactListContainer from "../../contactList/ContactListContainer";
import FilterContainer from "../../filter/FilterContainer";
import Section from "../../section/Section";

const ContactsPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactFormContainer />
      </Section>

      <Section title="Contacts">
        <FilterContainer />
        <ContactListContainer/>
      </Section>
    </>
  );
};

export default ContactsPage;
