import { CiSearch } from "react-icons/ci";
import Button from "@mui/material/Button";
import SwipeableTemporaryDrawer from "./SwipeableDrawer ";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userNamestate } from "../store/selectors/name";
import { useNavigate } from "react-router-dom";
import { userState } from "../store/atoms/user";
import TemporaryDrawer from "./Basket";
import { useSetRecoilState, useRecoilValue } from "recoil";

export default function Nav() {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const name = useRecoilValue(userNamestate);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <nav className="navbar h-20 flex justify-between items-center pl-5 pr-3">
      <div className="nav-menu flex justify-between w-[23rem] items-center mob:justify-evenly">
        <SwipeableTemporaryDrawer />

        <div className="flex items-center bg-[#EAEAEA] h-10 p-5  rounded-lg  ">
          <input
            className="outline-none border-none px-2 bg-[#EAEAEA] text-[#0D0842]"
            type="text"
            placeholder="What are you looking for ? "
          />
          <CiSearch className="ml-2 bg-[#EAEAEA]" />
        </div>
      </div>
      <div className="nav-account flex items-center w-[24em] justify-between ">
        {name ? (
          <div className="flex items-center gap-4 ">
            <p className="font-bold mob:hidden">{name}</p>
            <div className="mob:hidden">
              <Button
                variant="contained"
                className="w-15 "
                onClick={() => {
                  localStorage.removeItem("token");
                  setUser({
                    isLoading: false,
                    name: "",
                  });
                }}
              >
                Log Out
              </Button>
            </div>
            <TemporaryDrawer />
          </div>
        ) : (
          <div className="flex w-[100%] justify-evenly">
            <Button
              variant="contained"
              className="w-15 h-1/2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              className="w-15 h-1/2"
              onClick={() => navigate("/signin")}
            >
              Login
            </Button>
            <TemporaryDrawer />
          </div>
        )}
      </div>
    </nav>
  );
}
