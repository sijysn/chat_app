import React from "react";

import Box from "@material-ui/core/Box";

import SelfMessage from "./SelfMessage";
import OthersMessage from "./OthersMessage";

function Message({ message, loginId }) {
  return (
    <Box mb={1}>
      {loginId === message.user_id ? (
        <SelfMessage text={message.text} />
      ) : (
        <OthersMessage username={message.user.username} text={message.text} />
      )}
    </Box>
  );
}

export default Message;
