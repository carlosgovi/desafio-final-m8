import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
//importo al atomo que almacena el email
import { emailAtom, selecEmail } from "atoms/emailAtom";

//importo de api la coneccion t logica de la db authMail
import { authMail } from "lib/api";
import { useNavigate } from "react-router-dom";

export function authForMail() {
  const [value, setValue] = useRecoilState(emailAtom);
  const emailDB = useRecoilValue(selecEmail);
  const navigate = useNavigate();
  useEffect(() => {}, [emailDB]);

  return (email) => {
    // ahora el hook retorna una función que toma el email como argumento
    setValue(email);
    authMail(email)
      .then((response) => {
        if (response.ok) {
          // si la respuesta es ok
          return response.json().then((data) => {
            //si el email existe voy a una page donde ingrese el pass

            navigate("/ingresar/pass", { replace: true });
          });
        } else if (response.status === 400) {
          // si se pasa un error 400
          return response.json().then((errorObj) => {
            //si el email no existe cargo  los datos en la siguiente page y creo el user
            navigate("/ingresar/mis-datos", { replace: true });
          });
        }
      })

      .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores;
  };
}
