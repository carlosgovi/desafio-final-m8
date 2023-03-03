import React from "react";
import css from "./index.css";
import { useSingUp } from "hooks/useSingUp";

const FormIngresarDatos = () => {
  const singUp = useSingUp();
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    const fullname = e.target.elements.nombre.value;
    console.log({ password }, { fullname });
    singUp(fullname, password);
  };

  return (
    <div>
      <div className={css.card}>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.title_card}>Ingresar</div>
          <div className={css.inputbox}>
            <input name="nombre" required={true} type="text" autoFocus={true} />
            <span>Nombre</span>
            <i></i>
          </div>

          <div className={css.inputbox}>
            <input name="password" required={true} type="password" />
            <span>Password</span>
            <i></i>
          </div>
          <div className={css.inputbox}>
            <input name="rep_password" required={true} type="password " />
            <span>Repetir Pass</span>
            <i></i>
          </div>
          <div>
            <button className={css.button} value="iniciar">
              Iniciar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { FormIngresarDatos };
