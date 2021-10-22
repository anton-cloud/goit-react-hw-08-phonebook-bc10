import React from "react";
import PropTypes from "prop-types";
import { FilterStyled } from "./FilterStyled";
import { Form, Button } from "react-bootstrap";

const Filter = ({ onChangeFilter, filter }) => {
  const onHandleChangeFilter = (e) => {
    const { value } = e.target;
    onChangeFilter(value);
  };

  return (
    <FilterStyled>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Find contacts by name: </Form.Label>
        <Form.Control
          value={filter}
          onChange={onHandleChangeFilter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="for example: Rose ..."
        />
        <Form.Text className="text-muted">
          Here you can enter data for search.
        </Form.Text>
      </Form.Group>
    </FilterStyled>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
