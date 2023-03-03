import React, { useEffect, useState } from "react";
import css from "./index.css";
import { Dropzone } from "components/dropzone";
import { MapboxComponent } from "components/mapbox";
import { selecLocationAnimalLostAtom } from "atoms/locationAnimalLostAtom";
import { useRecoilValue } from "recoil";
import { sendFormPetLost } from "lib/api";
import { selecToken } from "atoms/tokenAtom";
import { selecEmail } from "atoms/emailAtom";
import { useNavigate } from "react-router-dom";

function ReportarMascota() {
  const auxHookSendForm = sendFormPetLost;
  const petLostLocation = useRecoilValue(selecLocationAnimalLostAtom);
  const [file, setFile] = useState(null);
  const [img, setimg] = useState(null);
  const token = useRecoilValue(selecToken);
  const email = useRecoilValue(selecEmail);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //en img ya tengo la URL en base64
    const nombre = e.target.elements.nombre.value;

    auxHookSendForm(nombre, img, petLostLocation, token, email);
    navigate("/", { replace: true });
  };

  return (
    <div className={css.card}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.title_card}>Reportar Mascota Perdida</div>

        <div className={css.inputbox}>
          <input name="nombre" required={true} type="text" />
          <span>Nombre</span>

          <i></i>
        </div>

        <div className={css.cont_foto}>
          <div id="foto_input" className={css.foto_input}>
            <Dropzone setFile={setFile} imgurl={setimg} />

            {img ? (
              <div>
                <img src={img} style={{ width: "100%" }} alt="imagen subida" />
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
          <button className={css.button} value="iniciar">
            Repotar
          </button>
        </div>
      </form>
    </div>
  );
}

export { ReportarMascota };
