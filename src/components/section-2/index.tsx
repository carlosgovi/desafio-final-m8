import React from "react";
import css from "./index.css";

function Section2() {
  return (
    <div className={css.conteiner}>
      <div className={css.title}>PET'S LOVE</div>
      <div className={css.subtitle}>
        ¡Encontrá a tu mejor amigo en pocas horas!
      </div>
      <div className={css.contimg}></div>
      <div className={css.parrafo}>
        <p>
          Vamos a ayudarte a viralizar la imagen de tu mascota perdida. Logramos
          rastreos inteligentes a través de publicidad geolocalizada en redes
          sociales.
        </p>

        <p>
          Aseguramos llegar a tus vecinos y a miles de personas de la zona donde
          se extravió tu mejor amigo...
        </p>
      </div>
    </div>
  );
}

export { Section2 };
