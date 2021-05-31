import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { login } from "../actions/userActions";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const loginHandler = () => dispatch(login(username, password));

  useEffect(() => {
    if (userInfo) history.push("/");
  }, [history, userInfo]);

  return (
    <Box textAlign="center" maxWidth="320px" m="0 auto" p={3}>
      <Box pt={5}>
        <Typography component="h1" variant="h3" color="primary" gutterBottom>
          Login
        </Typography>
      </Box>

      <form onSubmit={loginHandler}>
        <TextField
          autoFocus
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="username"
          InputLabelProps={{
            style: { fontSize: "1.5rem" },
          }}
          InputProps={{
            style: { fontSize: "1.5rem" },
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="password"
          InputLabelProps={{
            style: { fontSize: "1.5rem" },
          }}
          InputProps={{
            style: { fontSize: "1.5rem" },
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Box mt={5}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "100%", padding: "1rem 3rem" }}
          >
            <Typography component="span" variant="h6">
              Login
            </Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default LoginPage;
