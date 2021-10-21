import React from "react";
import PropTypes from "prop-types";
import { FilterStyled } from "./FilterStyled";

const Filter = ({ onChangeFilter, filter }) => {

  const onHandleChangeFilter = (e) => {
    const { value } = e.target;
    onChangeFilter(value)
  };

  return (
    <FilterStyled>
      <label>
        Find contacts by name
        <br />
        <input
          value={filter}
          onChange={onHandleChangeFilter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </FilterStyled>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
