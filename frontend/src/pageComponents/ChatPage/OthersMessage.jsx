import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import MessageBubble from "./MessageBubble";

function OthersMessage({ username, text }) {
  return (
    <Box display="flex" flexDirection="column" mr={8} pl={2}>
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <Typography component="span" variant="h6" color="textSecondary">
          {username}
        </Typography>
      </Box>

      <Box display="flex" justifyContent="flex-start" alignItems="center">
        <MessageBubble bgColor="#dddddd" color="#000" text={text} />
      </Box>
    </Box>
  );
}

export default OthersMessage;
