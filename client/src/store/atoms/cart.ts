import { atom } from "recoil";
import { Book } from "./book";

export const cartState = atom<Book[]>({
  key: "cartState",
  default: [],
});
