import React from "react";
import css from "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { singOut } from "hooks/useSingOut";
import { selecToken } from "atoms/tokenAtom";
import { useRecoilValue } from "recoil";
import { fullNameAtom } from "atoms/fulnameAtom";
const MenuHamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useRecoilValue(selecToken);
  const fullname = useRecoilValue(fullNameAtom);

  const CerrarSesion = singOut();
  const navigate = useNavigate();
  function handlerClick() {
    setIsOpen(!isOpen);
  }
  const handlerIniciarSesion = () => {
    navigate("/ingresar", { replace: true });
    setIsOpen(!isOpen);
  };
  const handlerCerrarSesion = () => {
    CerrarSesion();
    setIsOpen(!isOpen);
  };
  const handlerRepPets = () => {
    if (token) {
      navigate("/reportar-mascota", { replace: true });
      setIsOpen(!isOpen);
    } else {
      navigate("/ingresar", { replace: true });
      setIsOpen(!isOpen);
    }
  };
  const handlerMascotasReportadas = () => {
    if (token) {
      navigate("/mascotas-reportadas", { replace: true });
      setIsOpen(!isOpen);
    } else {
      navigate("/ingresar", { replace: true });
      setIsOpen(!isOpen);
    }
  };
  const handlerMisDatos = () => {
    if (token) {
      navigate("/mis-datos", { replace: true });
      setIsOpen(!isOpen);
    } else {
      navigate("/ingresar", { replace: true });
      setIsOpen(!isOpen);
    }
  };
  return (
    <>
      <div className={`${css.menu_burguer} ${isOpen && css.menu_active}`}>
        <div className={css.div_ancla} id="el-mis-datos">
          <div onClick={handlerMisDatos}>Mis datos</div>
        </div>
        <div className={css.div_ancla} id="mis-rep-mascotas">
          <div onClick={handlerMascotasReportadas}>Mis Mascotas Reportadas</div>
        </div>
        <div className={css.div_ancla} id="rep-mascotas">
          <div onClick={handlerRepPets}>Reportar Mascota</div>
        </div>
        {token ? (
          ""
        ) : (
          <div className={css.div_ancla} id="iniciar">
            <div onClick={handlerIniciarSesion}>iniciar sesion</div>
          </div>
        )}

        <div className={css.div_ancla} id="user">
          <div className={css.fullname}>{fullname ? fullname : ""}</div>
        </div>

        {!token ? (
          ""
        ) : (
          <div className={css.div_ancla} id="cerrar">
            <div onClick={handlerCerrarSesion}>Cerrar Sesion</div>
          </div>
        )}
      </div>
      <header className={css.header}>
        <label htmlFor="burger" className={css.burger}>
          <div
            className={`${css.burger} ${isOpen && css.open}`}
            onClick={handlerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
      </header>
    </>
  );
};

export { MenuHamburguesa };
