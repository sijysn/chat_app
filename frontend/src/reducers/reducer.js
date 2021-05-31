import { combineReducers } from "redux";

import { userLoginReducer } from "./userReducers";
import { messageListReducer, messageSendReducer } from "./messageReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  messageList: messageListReducer,
  messageSend: messageSendReducer,
});

export default reducer;
