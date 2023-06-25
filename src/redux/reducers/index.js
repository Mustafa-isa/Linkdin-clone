// compine to collect all redusers functions in one object
import { combineReducers } from "redux";
import UserReducer from "./userReducer";
const rootReducer =combineReducers({
  userState:UserReducer,
})
export default rootReducer
