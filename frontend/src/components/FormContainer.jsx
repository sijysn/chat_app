import React from "react";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function FormContainer({ onSubmit, buttonTitle, buttonColor, children }) {
  return (
    <form onSubmit={onSubmit}>
      {children}

      <Box mt={5}>
        <Button
          type="submit"
          variant="contained"
          color={buttonColor}
          style={{ width: "100%", padding: "1rem 3rem" }}
        >
          <Typography component="span" variant="h6">
            {buttonTitle}
          </Typography>
        </Button>
      </Box>
    </form>
  );
}

export default FormContainer;
