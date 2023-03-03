import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "pages/page-layout/Layout";

import { Home } from "pages/page-home/Home";
import { Ingresar } from "pages/page-ingresar/Ingresar";
import { IngresarPass } from "pages/page-ingresar-pass/ingresar-pass";
import { MisDatos } from "pages/page-mis-datos/Mis-Datos";
import { MascotasCerca } from "pages/page-mascotas-cerca/MascotasCerca";
import { ReportarMascotas } from "pages/page-reportar-mascota/Reportar-mascota";
import { MascotasReportadas } from "pages/page-mascotas-reportadas/Mascotas-reportadas";
import { ModificarMisDatos } from "pages/page-modificar-mis-datos/Modificar-Mis-Datos";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ingresar" element={<Ingresar />} />
          <Route path="ingresar/pass" element={<IngresarPass />} />
          <Route path="ingresar/mis-datos" element={<MisDatos />} />
          <Route path="mascotas-cerca" element={<MascotasCerca />} />
          <Route path="reportar-mascota" element={<ReportarMascotas />} />
          <Route path="mascotas-reportadas" element={<MascotasReportadas />} />
          <Route path="mis-datos" element={<ModificarMisDatos />} />
        </Route>
      </Routes>
    </>
  );
}
export { AppRoutes };
