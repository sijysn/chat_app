import axios from "axios";

import {
  MESSAGE_LIST_REQUEST,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  MESSAGE_SEND_REQUEST,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_FAIL,
} from "../consts/messageConsts";

export const getMessages = () => async (dispatch) => {
  try {
    dispatch({ type: MESSAGE_LIST_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get("/api/messages/", config);

    dispatch({ type: MESSAGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MESSAGE_LIST_FAIL, payload: error });
  }
};

export const sendMessage = (text) => async (dispatch, getState) => {
  try {
    dispatch({ type: MESSAGE_SEND_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/messages/send/",
      { text: text },
      config
    );

    dispatch({ type: MESSAGE_SEND_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MESSAGE_SEND_FAIL, payload: error });
  }
};
