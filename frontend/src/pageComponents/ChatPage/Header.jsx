import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { logout } from "../../actions/userActions";

function Header({ userInfo, setScrollBottom, setLoading }) {
  const [loggingOut, setLoggingOut] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    setLoading(true);
    setLoggingOut(true);
  };

  useEffect(() => {
    if (loggingOut) {
      dispatch(logout());
      setScrollBottom(true);
      setLoggingOut(false);
    }
  }, [dispatch, setScrollBottom, setLoggingOut, loggingOut]);

  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="8rem"
      bgcolor="#fff"
      borderBottom="1px solid #f6f6f6"
      p={3}
    >
      <Grid container className="max-width">
        <Grid item xs={false} sm={3}></Grid>

        <Grid item xs={userInfo ? 8 : true} sm={6}>
          <Typography
            component="h1"
            variant="h4"
            color="primary"
            align="center"
          >
            CHAT ROOM
          </Typography>
        </Grid>

        <Grid item xs={userInfo ? 4 : false} sm={3}>
          {userInfo && (
            <Box textAlign="right">
              <Button
                variant="outlined"
                color="primary"
                onClick={logoutHandler}
              >
                <Typography component="span" variant="body2">
                  ログアウト
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
