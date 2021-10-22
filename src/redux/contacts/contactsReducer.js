import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import actions from "./contactsActions";

const {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = actions;

const contactItemsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => 
  state.filter((contact) => contact.id !== payload),
});

const contactErrorReducer = createReducer('',{
  [fetchContactsError]:(_, {payload}) => payload,
  [addContactError]:(_, {payload}) => payload,
  [deleteContactError]:(_, {payload}) => payload,
})

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});


const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: contactErrorReducer,
});

export default contactsReducer;
