import { useEditUser } from "hooks/useEditUser";
import React from "react";
import css from "./index.css";

function EditMisDatos() {
  // creamos la instancia del hook
  const editDatos = useEditUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.elements.nombre.value;
    const password = e.target.elements.password.value;
    const repPassword = e.target.elements.rep_password.value;
    if (password == repPassword) {
      console.log("que siga el code");
      editDatos(nombre, password);
      ////aqui va el hoook que va a cambiar los datos en la base de datos
    } else {
      alert("los password no coinciden");
    }
  };

  return (
    <div className={css.card}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.title_card}>Mis datos</div>

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
          <input name="rep_password" required={true} type="password" />
          <span>Repetir Password</span>
          <i></i>
        </div>

        <div>
          <button className={css.button} value="iniciar">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}

export { EditMisDatos };
