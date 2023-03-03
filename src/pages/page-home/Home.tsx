import React from "react";
import css from "./style-home.css";
import { Section2 } from "components/section-2";
import { Section3 } from "components/section-3";
import { Section4 } from "components/section-4";
function Home() {
  return (
    <div className={css.conteiner}>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </div>
  );
}

export { Home };
