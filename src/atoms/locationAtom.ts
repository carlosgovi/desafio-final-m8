import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
export const locationAtom = atom({
  key: "locationAtom",
  default: { lat: 0, lng: 0, id: 0 },
});
export const selecLocation = selector({
  key: "selecLocation",
  get: async ({ get }) => {
    const location = get(locationAtom);

    return location;
  },
});
