import React from "react";
import { Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

function MessageLink({ to, children }) {
  return (
    <Link to={to}>
      <Typography variant="h6">{children}</Typography>
    </Link>
  );
}

export default MessageLink;
