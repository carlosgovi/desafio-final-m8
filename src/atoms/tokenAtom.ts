import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const tokenAtom = atom({
  key: "tokenAtom",
  default: localStorage.getItem("token") || "",
});
export const selecToken = selector({
  key: "selecToken",
  get: async ({ get }) => {
    const token = get(tokenAtom);

    return token ? token : "";
  },
});
