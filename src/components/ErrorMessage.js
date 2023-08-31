import React from "react";

import classes from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.error}>⛔️ {message} ⛔️</p>
    </div>
  );
};

export default ErrorMessage;
