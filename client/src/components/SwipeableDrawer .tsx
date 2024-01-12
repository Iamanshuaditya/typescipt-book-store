import * as React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";

import { CiSettings } from "react-icons/ci";

export default function SwipeableTemporaryDrawer() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });

  type Anchor = "left";

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState((prev) => ({ ...prev, [anchor]: open }));
    };

  function handleClick() {
    toggleDrawer("left", false);
    navigate("/");
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <ListCon text={"Home"} icon={<FaHome />} onClick={handleClick} />
      <ListCon text={"Search"} icon={<CiSearch />} onClick={""} />
      <ListCon
        text={"My Books"}
        icon={<ImBooks />}
        onClick={() => {
          navigate("/mybooks");
        }}
      />
      <ListCon text={"Setting"} icon={<CiSettings />} onClick={""} />
      <ListCon
        text={"Checkout"}
        icon={<IoBagCheckOutline />}
        onClick={() => navigate("/checkout")}
      />
      {!token ? (
        <ListCon
          text={"Login"}
          icon={<IoBagCheckOutline />}
          onClick={() => navigate("/signin")}
        />
      ) : null}
      <Divider />
      <List sx={{ marginTop: "15.5em", marginLeft: "3.5em" }}>
        {["About", "Support", "Tems and Conditions"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ style: { fontSize: "0.8em" } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  function ListCon({
    text,
    icon,
    onClick,
  }: {
    text: string;
    icon: React.ReactNode;
    onClick: string | (() => void);
  }) {
    return (
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={onClick as () => void}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    );
  }

  return (
    <>
      <div>
        <Button onClick={toggleDrawer("left", true)}>
          <RiMenu2Fill className="h-8 w-8" />
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state.left}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          component="div"
        >
          {list()}
        </SwipeableDrawer>
      </div>
    </>
  );
}
