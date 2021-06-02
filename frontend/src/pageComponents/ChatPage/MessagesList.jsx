import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";

import Message from "./Message";

import { getMessages } from "../../actions/messageActions";

function MessagesList({ loginId, scrollBottomRef }) {
  const messageList = useSelector((state) => state.messageList);
  const { messages } = messageList;

  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;

    const repeat = () => {
      dispatch(getMessages());
      if (isMounted) setTimeout(repeat, 1000);
    };

    repeat();

    return () => (isMounted = false);
  }, [dispatch]);

  return (
    <Box p="2rem 0">
      {messages &&
        messages.map((message, index) => (
          <Box key={message.id}>
            <Message message={message} loginId={loginId} />

            {index + 1 === messages.length && (
              <Box ref={scrollBottomRef} visibility="hidden">
                latest message
              </Box>
            )}
          </Box>
        ))}
    </Box>
  );
}

export default MessagesList;
