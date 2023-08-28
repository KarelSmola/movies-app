import React from "react";

import classes from "./ErrorMessage.modules.css";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p className={classes.error}>⛔️ {message}</p>
    </div>
  );
};

export default ErrorMessage;
