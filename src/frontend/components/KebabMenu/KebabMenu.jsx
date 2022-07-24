import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Icon } from "@mui/material";
import { PlaylistDialog } from "../PlaylistDialog/PlaylistDialog";
import { useLocation } from "react-router";
import { performKebabMenuOperation } from "../../utils";
import { useAuth, useUser } from "../../context";

const ITEM_HEIGHT = 48;

function KebabMenu({ videoId }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsDialogOpen(true);
  };

  const handlePlaylistDialogClose = () => {
    setIsDialogOpen(false);
  };

  const {
    auth: { token },
  } = useAuth();

  const { userDispatch } = useUser();

  const handleKebabMenuOptionClicked = (
    action,
    userDispatch,
    token,
    videoId
  ) => {
    handleClose();
    performKebabMenuOperation(action, userDispatch, token, videoId);
  };

  const location = useLocation().pathname;

  const homePageMenuOptions = [
    {
      icon: "watch_later",
      text: "Save to Watch Later",
      action: "SaveToWatchLater",
    },
    {
      icon: "playlist_play",
      text: "Save to Playlist",
      action: "SaveToPlaylist",
    },
  ];

  const historyPageMenuOptions = [
    {
      icon: "delete",
      text: "Remove from History",
      action: "RemoveFromHistory",
    },
  ];

  let menuOptions;
  if (location === "/") {
    menuOptions = homePageMenuOptions;
  } else if (location === "/history") {
    menuOptions = historyPageMenuOptions;
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={isMenuOpen ? "long-menu" : undefined}
        aria-expanded={isMenuOpen ? "true" : undefined}
        aria-haspopup="true"
        // color="text.primary"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ color: "text.primary" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            backgroundColor: "#181919",
          },
        }}
      >
        {menuOptions.map(({ icon, text, action }, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() =>
                action === "SaveToPlaylist"
                  ? handleClickOpen()
                  : handleKebabMenuOptionClicked(
                      action,
                      userDispatch,
                      token,
                      videoId
                    )
              }
            >
              <Icon
                className="material-icons-outlined"
                sx={{ color: "text.primary", mr: 1 }}
              >
                {icon}
              </Icon>
              {text}
            </MenuItem>
          );
        })}
      </Menu>

      <PlaylistDialog open={isDialogOpen} onClose={handlePlaylistDialogClose} />
    </div>
  );
}

export { KebabMenu };
