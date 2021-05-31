import React from "react";

import Box from "@material-ui/core/Box";

import MessagesList from "./MessagesList";

function ChatArea({ loginId, scrollBottomRef, loading }) {
  return (
    <Box
      p="8rem 0 20rem"
      maxHeight="100vh"
      className="max-width"
      mt="-8rem"
      style={{
        overflowY: "scroll",
        flexWrap: "nowrap",
      }}
      visibility={loading ? "hidden" : "visible"}
    >
      <MessagesList loginId={loginId} scrollBottomRef={scrollBottomRef} />
    </Box>
  );
}

export default ChatArea;
