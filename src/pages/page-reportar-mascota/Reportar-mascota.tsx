import React from "react";
import { ReportarMascota } from "components/form-reportar-mascota";
import css from "./Style-Reportar-Mascota.css";
function ReportarMascotas() {
  return (
    <div className={css.conteiner}>
      <ReportarMascota></ReportarMascota>
    </div>
  );
}

export { ReportarMascotas };
