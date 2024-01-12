import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CartItem from "./CartItem";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { bookDetails } from "../store/selectors/book";
import { useRecoilValue } from "recoil";
import { cartState } from "../store/atoms/cart";
export default function TemporaryDrawer() {
  const cartItems = useRecoilValue(cartState);
  const books = useRecoilValue(bookDetails);
  const token = localStorage.getItem("token");
  function Subtotal() {
    let totalPrice = 0;
    // eslint-disable-next-line no-unused-vars
    const subtotal = cartItems.map((book) => {
      totalPrice += book["price"];
      return totalPrice;
    });
    console.log(subtotal);

    return totalPrice;
  }

  Subtotal();

  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        (event.type === "keydown" &&
          (event as React.KeyboardEvent).key === "Tab") ||
        (event as React.KeyboardEvent).key === "Shift"
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: string) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <p className="font-semibold ml-5 mt-5">
          Shopping Bag <span>({books ? books.length : ""})</span>
        </p>
        <ListItem disablePadding>
          <CartItem />
        </ListItem>
      </List>
      <Divider />
      <List>
        <p className="font-semibold ml-5 mt-5 flex justify-between w-[95%]">
          Subtotal:<span className="mr-5">{Subtotal()}</span>
        </p>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <div className="p-4">
          <Button
            color="success"
            variant="contained"
            className="w-full"
            onClick={() => {
              toggleDrawer("right", false);

              if (token) {
                navigate("/checkout");
              } else {
                navigate("/signin");
              }
            }}
          >
            Go to checkout
          </Button>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        className="h-[2em] w-15 flex items-center justify-between box-border p-5 font-bold font-[nunito-sans] rounded-lg text-[#FFFFFF] bg-[#FFCE1A] border-none"
        onClick={toggleDrawer("right", true)}
      >
        <FaShoppingCart />
        Basket
      </Button>
      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
