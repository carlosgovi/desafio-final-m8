import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRoutes } from "router";
import { BrowserRouter } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

///import de recoil
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <RecoilRoot>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </RecoilRoot>
  </React.Suspense>,
  document.querySelector(".indexhtml")
);

console.log("probando React con typescript");
