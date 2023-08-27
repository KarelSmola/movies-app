import React from "react";

import classes from "./Loader.module.css";

const Loader = ({ loadingMessage }) => {
  return <p className={classes.loader}>{loadingMessage}</p>;
};

export default Loader;
