import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Icon } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AppBar } from "../index";
import "./Drawer.css";
import { useDrawer } from "../../context/";

import { useLocation, useNavigate } from "react-router";

const drawerWidth = 200;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = theme => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const MyDrawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Drawer = ({ content }) => {
  const [isOpen, setIsOpen] = useDrawer();
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  const location = useLocation().pathname;
  console.log(location);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        open={isOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      />
      <MyDrawer variant="permanent" open={isOpen}>
        <Box sx={{ m: 4 }} />
        <List>
          {[
            { text: "Home", icon: "home", url: "/" },
            { text: "Watch Later", icon: "watch_later", url: "/watch_later" },
            { text: "Liked Videos", icon: "thumb_up", url: "/liked_videos" },
            { text: "History", icon: "history", url: "/history" },
            { text: "Playlists", icon: "playlist_play", url: "/playlist" },
          ].map(({ text, icon, url }, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => navigate(url)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    className={
                      location === url
                        ? "material-icons-filled"
                        : "material-icons-outlined"
                    }
                    sx={{
                      color:
                        location === url ? "text.secondary" : "text.primary",
                    }}
                  >
                    {icon}
                  </Icon>
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: isOpen ? 1 : 0,
                    fontSize: 32,
                    color: location === url ? "text.secondary" : "text.primary",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MyDrawer>

      {content}
    </Box>
  );
};

export { Drawer };
