import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "../auth/authAction";

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
  [authActions.logOutSuccess]:() => []
});

const contactErrorReducer = createReducer('',{
  [fetchContactsError]:(_, {payload}) => payload,
  [addContactError]:(_, {payload}) => payload,
  [deleteContactError]:(_, {payload}) => payload,
  [authActions.logOutSuccess]:() => ''
})

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
  [authActions.logOutSuccess]:() => ''
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
  [authActions.logOutSuccess]:() => false
});


const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: contactErrorReducer,
});

export default contactsReducer;
