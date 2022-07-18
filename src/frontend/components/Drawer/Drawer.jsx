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
import { useDrawer } from "../../context/DrawerContext";

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
  // const [open, setOpen] = React.useState(true);

  const [isOpen, setIsOpen] = useDrawer();
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };
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
            { text: "Home", icon: "home" },
            { text: "Watch Later", icon: "watch_later" },
            { text: "Liked Videos", icon: "thumb_up" },
            { text: "History", icon: "history" },
            { text: "Playlists", icon: "playlist_play" },
          ].map(({ text, icon }, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
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
                  {index === 2 ? (
                    <Icon
                      className="material-icons-filled"
                      sx={{ color: "secondary.main" }}
                    >
                      {icon}
                    </Icon>
                  ) : (
                    <Icon
                      className="material-icons-outlined"
                      sx={{ color: "text.primary" }}
                    >
                      {icon}
                    </Icon>
                  )}
                </ListItemIcon>
                {index === 2 ? (
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: isOpen ? 1 : 0,
                      fontSize: 32,
                      color: "text.secondary",
                    }}
                  />
                ) : (
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: isOpen ? 1 : 0,
                      fontSize: 32,
                      color: "text.primary",
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MyDrawer>

      {content}
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8, backgroundColor: "primary.faint" }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          // columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(15)).map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <VideoCard />
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Box>
  );
};

export { Drawer };
