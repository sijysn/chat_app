import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";

function FormHeader({ title, color }) {
  return (
    <Grid container alignItems="center">
      <Grid item xs={3}>
        <Link to="/">
          <IconButton color={color}>
            <ChatIcon fontSize="large" />
          </IconButton>
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Typography component="h1" variant="h4" color={color}>
          {title}
        </Typography>
      </Grid>

      <Grid item xs={3}></Grid>
    </Grid>
  );
}

export default FormHeader;
