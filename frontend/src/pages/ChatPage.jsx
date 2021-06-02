import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Box from "@material-ui/core/Box";

import Header from "../pageComponents/ChatPage/Header";
import ChatArea from "../pageComponents/ChatPage/ChatArea";
import MessageInputArea from "../pageComponents/ChatPage/MessageInputArea";
import LoginArea from "../pageComponents/ChatPage/LoginArea";

function ChatPage() {
  const [scrollBottom, setScrollBottom] = useState(true);
  const [loading, setLoading] = useState(true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const messageList = useSelector((state) => state.messageList);
  const { messages } = messageList;

  const scrollBottomRef = useRef(null);

  useEffect(() => {
    if (scrollBottomRef && scrollBottomRef.current && scrollBottom) {
      setScrollBottom(false);
      scrollBottomRef.current.scrollIntoView();
      setTimeout(() => setLoading(false), 300);
    }
  }, [messages, scrollBottom]);

  return (
    <Box>
      <Header
        userInfo={userInfo}
        setScrollBottom={setScrollBottom}
        setLoading={setLoading}
      />

      <ChatArea
        loginId={userInfo ? userInfo.id : null}
        scrollBottomRef={scrollBottomRef}
        loading={loading}
      />

      {userInfo ? (
        <MessageInputArea setScrollBottom={setScrollBottom} />
      ) : (
        <LoginArea />
      )}
    </Box>
  );
}

export default ChatPage;
