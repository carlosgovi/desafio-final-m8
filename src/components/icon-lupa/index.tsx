import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
const imgIcon = require("../../img/buscador.png");
const IconLupa = () => {
  const navigate = useNavigate();
  function handleLupa() {
    navigate("/mascotas-cerca", { replace: true });
  }
  return (
    <>
      <img
        className={css.img_lupa}
        src={imgIcon}
        alt="buscador"
        onClick={handleLupa}
      />
    </>
  );
};

export { IconLupa };
