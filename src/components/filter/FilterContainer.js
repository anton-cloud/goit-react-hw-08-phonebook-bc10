import React from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import Filter from "./Filter";

const FilterContainer = () => {
  const filter = useSelector((state) => contactsSelectors.getFilter(state));
  const dispatch = useDispatch();
  const onChangeFilter = (value) => {
    dispatch(contactsActions.changeFilter(value));
  };
  return <Filter filter={filter} onChangeFilter={onChangeFilter}/>;
};

export default FilterContainer;
