import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Icon } from "@mui/material";
import { PlaylistDialog } from "../PlaylistDialog/PlaylistDialog";

const ITEM_HEIGHT = 48;

function KebabMenu() {
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
        <MenuItem onClick={handleClose}>
          <Icon
            className="material-icons-outlined"
            sx={{ color: "text.primary", mr: 1 }}
          >
            {"watch_later"}
          </Icon>
          Save to Watch Later
        </MenuItem>
        <MenuItem onClick={handleClickOpen}>
          <Icon
            className="material-icons-outlined"
            sx={{ color: "text.primary", mr: 1 }}
          >
            {"playlist_play"}
          </Icon>
          Save to Playlist
        </MenuItem>
      </Menu>

      <PlaylistDialog open={isDialogOpen} onClose={handlePlaylistDialogClose} />
    </div>
  );
}

export { KebabMenu };
