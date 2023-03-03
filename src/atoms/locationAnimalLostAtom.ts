import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
export const locationAnimalLostAtom = atom({
  key: "locationAnimalLostAtom",
  default: { lat: 0, lng: 0 },
});
export const selecLocationAnimalLostAtom = selector({
  key: "selecLocationAnimalLostAtom",
  get: async ({ get }) => {
    const location = get(locationAnimalLostAtom);

    return location;
  },
});
