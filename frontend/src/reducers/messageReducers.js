import {
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_SEND_REQUEST,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_FAIL,
  MESSAGE_SEND_RESET,
} from "../consts/messageConsts";

export const messageListReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_LIST_REQUEST:
      return { loading: true, messages: state.messages };

    case MESSAGE_LIST_SUCCESS:
      return { loading: false, messages: action.payload };

    case MESSAGE_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const messageSendReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGE_SEND_REQUEST:
      return { loading: true };

    case MESSAGE_SEND_SUCCESS:
      return { loading: false, success: true, sentMessage: action.payload };

    case MESSAGE_SEND_FAIL:
      return { loading: false, error: action.payload };

    case MESSAGE_SEND_RESET:
      return {};

    default:
      return state;
  }
};
