import { atom } from "recoil";
interface User {
  isLoading: boolean;
  name: string | null
}
export const userState = atom<User>({
  key: "userState",
  default: {
    isLoading: false,
    name: "",
  },
});
