import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
export const imgAtom = atom({
  key: "imgAtom",
  default: "",
});
export const selecImg = selector({
  key: "imgAtom",
  get: async ({ get }) => {
    const img = get(imgAtom);

    return img ? img : "";
  },
});
