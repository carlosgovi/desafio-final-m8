import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { selecToken } from "atoms/tokenAtom";

import { deletAnimal } from "lib/api";

export function useEliminatePet() {
  const navigate = useNavigate();
  const token = useRecoilValue(selecToken);

  return async (algoliaAnimalId) => {
    const res = await deletAnimal(algoliaAnimalId, token);
    const response = res.response;
    response.then(() => {
      navigate("/", { replace: true });
    });
  };
}
