import { userState } from "../atoms/user";
import { selector } from "recoil";

export const userNamestate = selector({
  key: "usernameState",
  get: ({ get }) => {
    const state = get(userState);

    return state.name;
  },
});
