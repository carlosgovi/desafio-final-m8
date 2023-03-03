import React from "react";
import { Pass } from "components/form-ingresar-pass";
import css from "./Style-Pass.css";
function IngresarPass() {
  return (
    <div className={css.ingresar}>
      <Pass></Pass>
    </div>
  );
}

export { IngresarPass };
