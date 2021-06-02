import React from "react";

import TextField from "@material-ui/core/TextField";

import FormContainer from "../../components/FormContainer";

function LoginForm({
  loginHandler,
  username,
  setUsername,
  password,
  setPassword,
}) {
  const INPUT_LABEL_PROPS_STYLES = { fontSize: "1.5rem" };
  const INPUT_PROPS_STYLES = { fontSize: "1.5rem" };

  return (
    <FormContainer
      onSubmit={loginHandler}
      buttonTitle="ログイン"
      buttonColor="primary"
    >
      <TextField
        autoFocus
        autoComplete="username"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="ユーザーネーム"
        InputLabelProps={{
          style: INPUT_LABEL_PROPS_STYLES,
        }}
        InputProps={{
          style: INPUT_PROPS_STYLES,
        }}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        autoComplete="current-password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="パスワード"
        InputLabelProps={{
          style: INPUT_LABEL_PROPS_STYLES,
        }}
        InputProps={{
          style: INPUT_PROPS_STYLES,
        }}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </FormContainer>
  );
}

export default LoginForm;
