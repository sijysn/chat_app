import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import MessageBubble from "./MessageBubble";

function SelfMessage({ text }) {
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      ml={8}
      pr={2}
    >
      <MessageBubble bgColor="#46b3e6" color="#fff" text={text} />
    </Box>
  );
}

export default SelfMessage;
