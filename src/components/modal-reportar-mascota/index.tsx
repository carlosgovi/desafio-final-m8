import React from "react";
import css from "./index.css";
import { useSendEmail } from "hooks/useSendEmail";

function ModalReportar({ data, cerrarModal }) {
  const { fullname, email } = data;
  const sendEmail = useSendEmail();
  function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.elements.nombre.value;
    const telefono = e.target.elements.telefono.value;
    const dato = e.target.elements.dato.value;
    sendEmail(nombre, telefono, dato, email);
  }
  return (
    <div className={css.modal_content}>
      <div className={css.card_modal}>
        <form className={css.form_modal} onSubmit={handleSubmit}>
          <span className={css.close} onClick={cerrarModal}>
            &times;
          </span>
          <div className={css.title_card_modal}>Reportar Mascota Perdida</div>

          <div className={css.name_animal}>{fullname}</div>

          <div className={css.inputbox}>
            <input name="nombre" required={true} type="text" autoFocus={true} />
            <span>Tu Nombre</span>
            <i></i>
          </div>

          <div className={css.inputbox}>
            <input name="telefono" required={true} type="tel" />
            <span>Tu Telefono</span>
            <i></i>
          </div>

          <div className={css.inputbox}>
            <input name="dato" required={true} type="text" />
            <span>Donde lo viste</span>
            <i></i>
          </div>

          <div>
            <button className={css.button} value="iniciar">
              Reportar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { ModalReportar };
