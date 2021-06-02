import React from "react";

import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";

function ErrorMessage({ children }) {
  return (
    <Alert severity="error">
      <Typography variant="body2" align="left">
        {children}
      </Typography>
    </Alert>
  );
}

export default ErrorMessage;
