import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
export const emailAtom = atom({
  key: "emailAtom",
  default: localStorage.getItem("email") || "",
});
export const selecEmail = selector({
  key: "selecEmail",
  get: async ({ get }) => {
    const email = get(emailAtom);
    return email ? email : "";
  },
});
