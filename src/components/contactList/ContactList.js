import React from "react";
import PropTypes from "prop-types";
import { ContactListStyled } from "./ContactListStyled";
import { Button } from "react-bootstrap";

const ContactList = ({ visibleContacts, deleteContact }) => {
  const onHandleDelete = (e) => deleteContact(e.target.id);

  return (
    <ContactListStyled>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id}>
          <div className="wrapper">
            <p className="text">
              {name} {number}
            </p>
            {/* <button type="button" id={id} onClick={onHandleDelete}>
              delete
            </button> */}

            <Button
              variant="danger"
              type="button"
              id={id}
              onClick={onHandleDelete}
            >
              delete
            </Button>
          </div>
        </li>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;
