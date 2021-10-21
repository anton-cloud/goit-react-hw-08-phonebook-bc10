import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import contactsReducer from "./contacts/contactsReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer} from  "redux-persist";


const authConfig = {
  key: "user",
  storage: storage,
  whitelist:['user', 'token'],
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth:  persistReducer(authConfig, authReducer)
});



export default rootReducer;
