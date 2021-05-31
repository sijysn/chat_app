import React from "react";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function LoginArea() {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      height="10rem"
      bgcolor="#fff"
      borderTop="1px solid #dddddd"
      borderBottom="1px solid #dddddd"
    >
      <Box
        padding="1rem"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Link to="/login">
          <Button color="primary">
            <Typography component="span" variant="h5">
              Login to send a message
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default LoginArea;
