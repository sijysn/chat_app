import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { logout } from "../../actions/userActions";

function Header({ userInfo, setScroll, setLoading }) {
  const [loggingOut, setLoggingOut] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    setLoading(true);
    setLoggingOut(true);
  };

  useEffect(() => {
    if (loggingOut) {
      dispatch(logout());
      setScroll(true);
      setLoggingOut(false);
    }
  }, [dispatch, setScroll, setLoggingOut, loggingOut]);

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="8rem"
      textAlign="center"
      bgcolor="#fff"
      borderBottom="1px solid #f6f6f6"
      p={3}
    >
      <Grid container className="max-width">
        <Grid item xs={3}></Grid>

        <Grid item xs={6}>
          <Typography component="h1" variant="h4" color="primary">
            Chat Room
          </Typography>
        </Grid>

        <Grid item xs={3}>
          {userInfo && (
            <Box mr="1rem">
              <Button
                variant="outlined"
                color="primary"
                onClick={logoutHandler}
              >
                <Typography component="span" variant="body2">
                  Logout
                </Typography>
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
