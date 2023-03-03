import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuHamburguesa } from "components/menu-hamburguesa";
import css from "./style-layout.css";
import { IconInicio } from "components/icon-inicio";
import { IconLupa } from "components/icon-lupa";

const Layout = () => {
  //el useRecoilState devuelve una tupla de valor y en setter e recive el atomo al que le vamos a moduficar los values
  // const [elatomo, setElatomo] = useRecoilState(atomoState);
  // hola soy :::{elatomo.id}
  return (
    <>
      <header className={css.header}>
        <MenuHamburguesa></MenuHamburguesa>
        <div className={css.content_icons}>
          <div>
            <IconInicio></IconInicio>
          </div>
          <div>
            <IconLupa></IconLupa>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export { Layout };
