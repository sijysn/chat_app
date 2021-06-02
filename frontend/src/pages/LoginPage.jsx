import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";

import FormHeader from "../components/FormHeader";
import LoginForm from "../pageComponents/LoginPage/LoginForm";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import MessageLink from "../components/MessageLink";

import { login } from "../actions/userActions";

import { USER_LOGIN_ERROR_RESET } from "../consts/userConsts";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loginHandler = () => dispatch(login(username, password));

  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) history.push("/");
  }, [history, userInfo]);

  useEffect(() => {
    return () => dispatch({ type: USER_LOGIN_ERROR_RESET });
  }, [dispatch]);

  return (
    <Box textAlign="center" maxWidth="320px" m="0 auto" px={3}>
      <Box pt={5} mb={5}>
        <FormHeader title="ログイン" color="primary" />
      </Box>

      {loading ? (
        <Loader />
      ) : (
        <Box>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <LoginForm
            loginHandler={loginHandler}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />

          <Box mt={5}>
            <MessageLink to="/register">
              アカウントがありませんか？ 登録する
            </MessageLink>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default LoginPage;
