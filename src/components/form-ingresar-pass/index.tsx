import React from "react";
import css from "./index.css";

import { singIn } from "hooks/useSingIn";

function Pass() {
  const sendPass = singIn(); // creamos la instancia del hook

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    sendPass(password); // llamamos el hook con el email como argumento
  };

  return (
    <div className={css.card}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.title_card}>Ingresar</div>

        <div className={css.inputbox}>
          <input
            name="password"
            required={true}
            type="password"
            autoFocus={true}
          />
          <span>Password</span>
          <i></i>
        </div>

        <div>
          <button className={css.button} value="iniciar">
            Iniciar
          </button>
        </div>
      </form>
    </div>
  );
}

export { Pass };
