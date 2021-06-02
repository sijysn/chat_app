import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function FormHeader({ title, titleColor }) {
  return (
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <Link to="/">
          <Typography component="span" variant="h6">
            戻る
          </Typography>
        </Link>
      </Grid>

      <Grid item xs={8}>
        <Typography component="h1" variant="h4" color={titleColor}>
          {title}
        </Typography>
      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default FormHeader;
