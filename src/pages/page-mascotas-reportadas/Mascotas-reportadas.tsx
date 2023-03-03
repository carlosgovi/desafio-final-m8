import css from "./Style-Mascotas-Reportadas.css";
import React from "react";
import { MascotasReportadasComponent } from "components/mis-mascotas-reportadas";
function MascotasReportadas() {
  return (
    <div className={css.conteiner}>
      <MascotasReportadasComponent></MascotasReportadasComponent>
    </div>
  );
}

export { MascotasReportadas };
