import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
export const fullNameAtom = atom({
  key: "fullNameAtom",
  default: localStorage.getItem("fullname") || "",
});
export const selecFullname = selector({
  key: "selecFullname",
  get: async ({ get }) => {
    const fullname = get(fullNameAtom);

    return fullname ? fullname : "";
  },
});
