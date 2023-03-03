import React, { useEffect, useState } from "react";
import css from "./index.css";

import { useEditPet } from "hooks/useEditPet";
////

import { Dropzone } from "components/dropzone";
import { MapboxComponent } from "components/mapbox";
import { selecLocationAnimalLostAtom } from "atoms/locationAnimalLostAtom";
import { useRecoilValue } from "recoil";
import { sendFormPetLost } from "lib/api";
import { selecToken } from "atoms/tokenAtom";

import { useNavigate } from "react-router-dom";
import { useEliminatePet } from "hooks/useEliminatePet";

function ModalEditAnimal({ data, cerrarModal }) {
  console.log({ data });

  const auxHookSendForm = sendFormPetLost;
  const petLostLocation = useRecoilValue(selecLocationAnimalLostAtom);
  const [file, setFile] = useState(null);
  const [img, setimg] = useState(null);
  const token = useRecoilValue(selecToken);

  const navigate = useNavigate();
  ////
  const { fullname, email, objectID } = data;
  const editPet = useEditPet();
  const deletPet = useEliminatePet();
  function handleSubmit(e) {
    e.preventDefault();
    const nombre = e.target.elements.nombre.value;

    editPet(objectID, nombre, img);
  }
  function handlerEliminar() {
    console.log("eliminando");
    deletPet(objectID);
  }
  return (
    <div className={css.modal_content}>
      <div className={css.card_modal}>
        <form className={css.form_modal} onSubmit={handleSubmit}>
          <span className={css.close} onClick={cerrarModal}>
            &times;
          </span>
          <div className={css.title_card_modal}>Editar Mascota Perdida</div>

          <div className={css.name_animal}>{fullname}</div>

          <div className={css.inputbox}>
            <input name="nombre" required={true} type="text" autoFocus={true} />
            <span>Nombre</span>
            <i></i>
          </div>

          <div className={css.cont_foto}>
            <div id="foto_input" className={css.foto_input}>
              <Dropzone setFile={setFile} imgurl={setimg} />

              {img ? (
                <div>
                  <img
                    src={img}
                    style={{ width: "100%" }}
                    alt="imagen subida"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className={css.mapa}>
            <div className={css.cont_map}>
              <div id="map" className={css.map}>
                <MapboxComponent></MapboxComponent>
              </div>
            </div>
          </div>

          <div className={css.text_geo}>
            Arrastra el icono de Mascotas, en la ubicación donde lo viste por
            última vez
          </div>
          <div>
            <div
              onClick={handlerEliminar}
              style={{ color: "red" }}
              className={css.button}
              id="eliminar"
            >
              Eliminar Registro
            </div>

            <button className={css.button} value="iniciar">
              Editar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export { ModalEditAnimal };
