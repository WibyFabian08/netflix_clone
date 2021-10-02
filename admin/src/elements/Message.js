import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Message = ({ messageText, error }) => {
  if (error) {
    return (
      <div className="mb-5">
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {messageText}
        </Alert>
      </div>
    );
  }
  return (
    <div className="mb-5">
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        {messageText}
      </Alert>
    </div>
  );
};

export default Message;
