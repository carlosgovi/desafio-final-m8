import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { emailAtom, selecEmail } from "atoms/emailAtom";

import { useNavigate } from "react-router-dom";
import { signUp } from "lib/api";

export function useSingUp() {
  const email = useRecoilValue(selecEmail);

  const navigate = useNavigate();
  return (fullname: string, pass: string) => {
    console.log({ fullname }, { email }, { pass });
    signUp(fullname, pass, email)
      .then((response) => response.json())
      .then((data) => {
        console.log("respuesta del fetch a ::/auth::", data);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores;
  };
}
