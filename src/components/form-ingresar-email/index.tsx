import React from "react";
import css from "./index.css";
import { authForMail } from "hooks/useAuthForMail";

function Email() {
  const saveEmail = authForMail(); // creamos la instancia del hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    saveEmail(email); // llamamos el hook con el email como argumento
  };

  return (
    <div className={css.contenedor}>
      <div className={css.card}>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.title_card}>Ingresar</div>
          <div className={css.inputbox}>
            <input name="email" type="text" required={true} autoFocus={true} />
            <span>Email</span>
            <i></i>
          </div>
          <div>
            <button className={css.button} value="ingresar">
              Iniciar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { Email };
