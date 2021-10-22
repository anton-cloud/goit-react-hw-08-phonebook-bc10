import { useState } from "react";
import { ContactFormStyled } from "./ContactFormStyled";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const ContactForm = ({ addContact, contacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onSubmit = (contact) => {
    contacts.some(
      (item) =>
        item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    )
      ? alert(`${contact.name} is already in contacts.`)
      : addContact(contact);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <ContactFormStyled onSubmit={onHandleSubmit} method="post">
      {/* <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={name}
        />
      </label>
      <label>
        Number
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={number}
        />
      </label> */}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contact's name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={name}
          placeholder="Enter contact's name ..."
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone number:</Form.Label>
        <Form.Control
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={number}
          placeholder="Enter phone number ..."
          autoComplete="on"
        />
      </Form.Group>
      {name && (
        <Button variant="warning" type="button" onClick={onHandleSubmit}>
          Add contact
        </Button>
      )}
    </ContactFormStyled>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};

export default ContactForm;
