import React from "react";
import css from "./index.css";
import { useNavigate } from "react-router-dom";
const imgIcon = require("../../img/dog.png");

const IconInicio = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <img
        className={css.icon_inicio}
        src={imgIcon}
        alt="inicio"
        onClick={handleClick}
      />
    </>
  );
};

export { IconInicio };
