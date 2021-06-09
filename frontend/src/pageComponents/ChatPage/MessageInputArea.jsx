import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { getMessages, sendMessage } from "../../actions/messageActions";
import { MESSAGE_SEND_RESET } from "../../consts/messageConsts";

function MessageInputArea({ setScrollBottom }) {
  const [text, setText] = useState("");

  const messageSend = useSelector((state) => state.messageSend);
  const { success } = messageSend;

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(sendMessage(text));
    setText("");
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: MESSAGE_SEND_RESET });
      dispatch(getMessages());
      setScrollBottom(true);
    }
  }, [dispatch, success, setScrollBottom]);

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#fff"
    >
      <Box
        borderTop="1px solid #dddddd"
        borderBottom="1px solid #dddddd"
        p={2}
        width="100%"
      >
        <form onSubmit={submitHandler}>
          <Box
            display="flex"
            width="100%"
            maxHeight="10rem"
            className="max-width"
          >
            <Box
              display="flex"
              justifyContent="flex-start"
              width="100%"
              bgcolor="#fafafa"
            >
              <InputBase
                fullWidth
                multiline
                autoFocus
                rowsMax={6}
                value={text}
                placeholder="メッセージを入力してください"
                onChange={(e) => setText(e.target.value)}
                style={{
                  fontSize: "1.4rem",
                  border: "1rem solid #fafafa",
                }}
              />
            </Box>

            <Box display="flex" justifyContent="flex-end">
              <Button
                type="submit"
                color="primary"
                disabled={!text || !text.match(/\S/g) ? true : false}
              >
                <Typography component="span" variant="h5">
                  送信
                </Typography>
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default MessageInputArea;
