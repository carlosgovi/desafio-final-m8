import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { emailAtom } from "atoms/emailAtom";
import { tokenAtom } from "atoms/tokenAtom";
import { fullNameAtom } from "atoms/fulnameAtom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function singOut() {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [fullname, setfullName] = useRecoilState(fullNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    localStorage.setItem("fullname", fullname);
  }, [token]);
  return () => {
    setEmail("");
    setToken("");
    setfullName("");
    navigate("/", { replace: true });
  };
}
