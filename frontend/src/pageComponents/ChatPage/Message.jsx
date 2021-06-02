import React from "react";

import Box from "@material-ui/core/Box";

import SelfMessage from "./SelfMessage";
import OthersMessage from "./OthersMessage";

import calcDate from "../../repositories/calcDate";

function Message({ message, loginId }) {
  const date = calcDate(message.sent_at);

  return (
    <Box mb={1}>
      {loginId === message.user_id ? (
        <SelfMessage text={message.text} date={date} />
      ) : (
        <OthersMessage
          username={message.user.username}
          text={message.text}
          date={date}
        />
      )}
    </Box>
  );
}

export default Message;
