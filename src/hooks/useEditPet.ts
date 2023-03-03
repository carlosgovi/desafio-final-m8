import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { selecLocationAnimalLostAtom } from "atoms/locationAnimalLostAtom";
import { selecEmail } from "atoms/emailAtom";
import { selecToken } from "atoms/tokenAtom";

import { editAnimal } from "lib/api";

export function useEditPet() {
  const navigate = useNavigate();
  const petLostLocation = useRecoilValue(selecLocationAnimalLostAtom);
  const email = useRecoilValue(selecEmail);
  const token = useRecoilValue(selecToken);

  return async (algoliaAnimalId, fullname, img) => {
    const res = await editAnimal(
      algoliaAnimalId,
      fullname,
      petLostLocation,
      img,
      token,
      email
    );
    const response = res.response;
    response.then(() => {
      navigate("/", { replace: true });
    });
  };
}
