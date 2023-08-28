import React from "react";

import classes from "./MainWrapper.module.css";

const MainWrapper = ({ children }) => {
  return <div className={classes["main-wrapper"]}>{children}</div>;
};

export default MainWrapper;
