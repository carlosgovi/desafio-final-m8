import React, { useState, useEffect } from "react";

import css from "./index.css";
import { selecToken } from "atoms/tokenAtom";
import { locationAtom } from "atoms/locationAtom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { ModalEditAnimal } from "components/modal-edit-mascota";
import { getAnimalesDeUnUser } from "lib/api";

function MascotasReportadasComponent() {
  const [handleModal, setHandleModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const [list, setList] = useState([]);
  const [location, setLocation] = useRecoilState(locationAtom);
  const token = useRecoilValue(selecToken);

  async function auxGetPets() {
    const getAnimalesLost = await getAnimalesDeUnUser(token);
    const RequestResponse = getAnimalesLost.response;

    return RequestResponse;
  }

  function handleAuxModal(data) {
    setSelectedCardData(data);
    setHandleModal(true);
  }

  useEffect(() => {
    auxGetPets().then((data) => {
      const listAnimals: [] = data.hits;
      setList(listAnimals);
    });
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
            <ModalEditAnimal
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

export { MascotasReportadasComponent };
