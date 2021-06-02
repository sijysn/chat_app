import { combineReducers } from "redux";

import { userLoginReducer, userRegisterReducer } from "./userReducers";
import { messageListReducer, messageSendReducer } from "./messageReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  messageList: messageListReducer,
  messageSend: messageSendReducer,
});

export default reducer;
