import React from "react";
import css from "./Style-Modificar-Mis-Datos.css";
import { EditMisDatos } from "components/form-edit-datos";
const ModificarMisDatos = () => {
  return (
    <div className={css.conteiner}>
      <EditMisDatos></EditMisDatos>
    </div>
  );
};

export { ModificarMisDatos };
