import React from "react";
import css from "./index.css";
////el button recibe  el children desde el componente que lo invoca
const TitleCard = ({ children }) => {
  return <h2 className={css.title}>{children}</h2>;
};

export { TitleCard };
