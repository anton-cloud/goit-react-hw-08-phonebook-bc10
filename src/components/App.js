import { useEffect } from "react";
import { useSelector } from "react-redux";
import { token } from "../redux/auth/authOperation";
import Header from "./header/Header";
import Main from "./main/Main";

// const contactsValue = JSON.parse(window.localStorage.getItem("contacts")) || [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const App = () => {
  
  const tokenContact = useSelector((state) => state.auth.token)

  useEffect(() => {
    tokenContact ? token.set(tokenContact) : token.set("")
  }, [tokenContact]);

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
