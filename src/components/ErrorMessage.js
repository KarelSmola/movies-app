import React from "react";

import classes from "./ErrorMessage.modules.css";

const ErrorMessage = ({ message }) => {
  return <p className={classes["error-message"]}>{message}</p>;
};

export default ErrorMessage;
