import React from "react";
import { FormIngresarDatos } from "components/from-ingresar-datos";
import css from "./Style-Mis-Datos.css";
function MisDatos() {
  return (
    <div className={css.ingresar}>
      <FormIngresarDatos></FormIngresarDatos>
    </div>
  );
}

export { MisDatos };
