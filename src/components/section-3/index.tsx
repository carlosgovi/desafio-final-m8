import React from "react";
import css from "./index.css";

function Section3() {
  return (
    <div className={css.conteiner}>
      <div className={css.card1}>
        <div className={css.subtitle}>Pet Love</div>

        <div className={css.parrafo}>
          <p>
            Perder a tu perro o gato puede ser muy doloroso y el estrés del
            momento puede llegar a bloquearte, conta con nosotros...
          </p>
        </div>
      </div>
      <div className={css.card2}>
        <div className={css.doggi}></div>
      </div>
      <div className={css.title}>
        <p> WE ARE WAITING FOR YOU!</p>
      </div>
      <div className={css.card3}></div>
    </div>
  );
}

export { Section3 };
