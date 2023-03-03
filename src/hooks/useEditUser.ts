import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { selecToken } from "atoms/tokenAtom";
import { editUser } from "lib/api";
export function useEditUser() {
  const navigate = useNavigate();
  const token = useRecoilValue(selecToken);

  return async (newName: string, newPass: string) => {
    const res = await editUser(newName, newPass, token);
    const response = res.response;
    response.then(() => {
      navigate("/", { replace: true });
    });
  };
}
