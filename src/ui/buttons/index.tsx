import React from "react";
import css from "./index.css";
////el button recibe  el children desde el componente que lo invoca
const PrimaryButton = ({ children }) => {
  return <button className={css.button}>{children}</button>;
};

export { PrimaryButton };
