import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";

import FormHeader from "../components/FormHeader";
import RegisterForm from "../pageComponents/RegisterPage/RegisterForm";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import MessageLink from "../components/MessageLink";

import { login, register } from "../actions/userActions";

import { USER_REGISTER_RESET } from "../consts/userConsts";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const registerHandler = () => dispatch(register(username, password));

  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading: loggingIn, userInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { loading: registering, success, error } = userRegister;

  useEffect(() => {
    if (userInfo) history.push("/");
  }, [history, userInfo]);

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_REGISTER_RESET });
      dispatch(login(username, password));
    }
  }, [dispatch, success, username, password]);

  useEffect(() => {
    return () => dispatch({ type: USER_REGISTER_RESET });
  }, [dispatch]);

  return (
    <Box textAlign="center" maxWidth="320px" m="0 auto" px={3}>
      <Box pt={5} mb={5}>
        <FormHeader title="ユーザー登録" color="secondary" />
      </Box>

      {loggingIn || registering ? (
        <Loader />
      ) : (
        <Box>
          {error && <ErrorMessage>{error}</ErrorMessage>}

          <RegisterForm
            registerHandler={registerHandler}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />

          <Box mt={5}>
            <MessageLink to="/login">
              既にアカウントがありますか？ ログインする
            </MessageLink>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default RegisterPage;
