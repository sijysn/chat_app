import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import MessageBubble from "./MessageBubble";

function SelfMessage({ text, date }) {
  return (
    <Box display="flex" flexDirection="column" ml={8} pr={2}>
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <MessageBubble bgColor="#46b3e6" color="#fff" text={text} />
      </Box>

      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Typography component="span" variant="body2" color="textSecondary">
          {date}
        </Typography>
      </Box>
    </Box>
  );
}

export default SelfMessage;
