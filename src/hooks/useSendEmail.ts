import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { sendEmail } from "lib/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function useSendEmail() {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  return (nombre, telefono, dato, email) => {
    sendEmail(nombre, telefono, dato, email);
    navigate("/", { replace: true });
  };
}
