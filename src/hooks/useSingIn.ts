import { emailAtom, selecEmail } from "atoms/emailAtom";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { singIng } from "lib/api";
import { tokenAtom } from "atoms/tokenAtom";
import { fullNameAtom } from "atoms/fulnameAtom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function singIn() {
  const email = useRecoilValue(selecEmail);
  const [token, setToken] = useRecoilState(tokenAtom);
  const [fullName, setfullName] = useRecoilState(fullNameAtom);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    localStorage.setItem("fullname", fullName);
  }, [token]);

  return (pass) => {
    // ahora el hook retorna una función que toma el email como argumento
    ///aqui iria la logica de enviar a la lib ((api)):los datos email y el dato pass
    singIng(pass, email)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          return alert(data.error);
        }

        setToken(data.token);

        setfullName(data.fullname);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores;
  };
}
