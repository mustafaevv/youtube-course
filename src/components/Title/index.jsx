import React from "react";
import classNames from 'classnames'

import classes from "./Title.module.scss";

const Title = ({ children,className }) => {
  return <div className={classNames(classes["title"],className)}>{children}</div>;
};

export default Title;
