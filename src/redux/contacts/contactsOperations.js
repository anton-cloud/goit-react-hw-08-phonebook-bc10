import axios from "axios";
import { token } from "../auth/authOperation";
import actions from "./contactsActions";
const baseUrl = `https://connections-api.herokuapp.com`;



const fetchContacts = () => async (dispatch, getState) => {
  // const tokenContact = getState().auth.token
  dispatch(actions.fetchContactsRequest);
  try {
    
// token.set(tokenContact)
    const result = await axios.get(`${baseUrl}/contacts`);

    dispatch(actions.fetchContactsSuccess(result.data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error.message));
  }
};

const addContact = (contact) => async (dispatch) => {
  dispatch(actions.addContactRequest());
  try {
    const result = await axios.post(`${baseUrl}/contacts`, contact);
    dispatch(actions.addContactSuccess(result.data));
  } catch (error) {
    dispatch(actions.addContactError(error.message));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios.delete(`${baseUrl}/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error.message));
  }
};

export default { addContact, deleteContact, fetchContacts };
