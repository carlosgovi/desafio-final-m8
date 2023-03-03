import React, { useState, useEffect } from "react";
import { getAnimalesCerca } from "lib/api";
import css from "./index.css";
import { locationAtom } from "atoms/locationAtom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { ModalReportar } from "components/modal-reportar-mascota";

function Section4() {
  const [handleModal, setHandleModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null); // nuevo estado
  const [list, setList] = useState([]);
  const [location, setLocation] = useRecoilState(locationAtom);

  function handleAuxModal(data) {
    setSelectedCardData(data);
    setHandleModal(true);
  }

  useEffect(() => {
    const onUbicacionConcedida = async (ubicacion) => {
      const getAnimal = await getAnimalesCerca({
        lat: ubicacion.coords.latitude,
        lng: ubicacion.coords.longitude,
      });
      setLocation({
        lat: ubicacion.coords.latitude,
        lng: ubicacion.coords.longitude,
        id: +1,
      });
      const Response = getAnimal.response;

      Response.then((data) => {
        const listAnimals: [] = data.hits;
        setList(listAnimals);
      });
    };

    const onErrorDeUbicacion = (err) => {
      console.log("Error obteniendo ubicación: ", err);
    };

    const opcionesDeSolicitud = {
      enableHighAccuracy: true, // Alta precisión
      maximumAge: 0, // No queremos caché
      timeout: 10000, // Esperar solo 10 segundos
    };
    // Solicitar
    navigator.geolocation.getCurrentPosition(
      onUbicacionConcedida,
      onErrorDeUbicacion,
      opcionesDeSolicitud
    );

    ////////////////
  }, [null]);

  return (
    <>
      <div className={css.conteiner} id={css.conteiner}>
        {list.map((animal: any, index: number) => {
          if (animal.userId > 0) {
            return (
              <div
                className={css.card}
                key={index}
                id={`card-${index}`}
                onClick={() => handleAuxModal(animal)} // pasamos los datos de la card
              >
                <div className={css.blob}></div>
                <span
                  className={css.img}
                  style={{ backgroundImage: `url(${animal.img})` }}
                ></span>
                <h2>
                  {animal.fullname}
                  <br />
                  <span></span>
                </h2>

                <div>
                  <p className={css.parrafo1}>
                    Seleccioname si me has visto en la calle y notifica a mi
                    dueño/a
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>

      {handleModal &&
        selectedCardData && ( // Mostrar el modal solo si handleModal y selectedCardData son verdaderos
          <div>
            <ModalReportar
              data={selectedCardData}
              cerrarModal={() => setHandleModal(false)}
            />
          </div>
        )}

      <div className={css.contimg}></div>
      <div className={css.footer}>
        <div className={css.parrafo}>¡Queremos ayudarte!</div>
        <div className={css.parrafo}>
          ¡Porque sabemos lo que se siente perder una mascota, hoy estamos
          juntos en tu búsqueda!
        </div>
      </div>
    </>
  );
}

export { Section4 };
