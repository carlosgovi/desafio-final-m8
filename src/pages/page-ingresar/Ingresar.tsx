import React from "react";
import { Email } from "components/form-ingresar-email";
import css from "./Style-Ingresar.css";
function Ingresar() {
  return (
    <div className={css.ingresar}>
      <Email></Email>
    </div>
  );
}

export { Ingresar };
