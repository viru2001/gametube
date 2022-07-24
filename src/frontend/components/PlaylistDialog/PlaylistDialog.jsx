import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { PlaylistList } from "../index";
import { useAuth, useUser } from "../../context";
import { addNewPlaylistService } from "../../services";

// const playlists = ["gaming", "valorant", "vlogs", "music"];

function PlaylistDialog({ onClose, open, video }) {
  const [isCreateBtnClicked, setIsCreateBtnClicked] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const {
    auth: { token },
  } = useAuth();

  const {
    userState: { playlists },
    userDispatch,
  } = useUser();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ backgroundColor: "primary.main" }}>
        Add to Playlist
      </DialogTitle>
      <List sx={{ pt: 0, backgroundColor: "primary.main" }}>
        <PlaylistList playlists={playlists} video={video} />

        {!isCreateBtnClicked && (
          <ListItem
            autoFocus
            button
          >
            <ListItemAvatar>
              <Avatar
                sx={{ color: "secondary.main", bgcolor: "primary.faint" }}
              >
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Create New Playlist"
              onClick={() => {
                setIsCreateBtnClicked(true);
              }}
            />
          </ListItem>
        )}
      </List>

      {isCreateBtnClicked && (
        <Box
          sx={{
            bgcolor: "primary.medium",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Enter Playlist Name"
            variant="filled"
            color="secondary"
            sx={{
              bgcolor: "primary.faint",
              m: 1,
            }}
            value={playlistName}
            onChange={e => setPlaylistName(e.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{ m: 1 }}
            onClick={() => {
              setIsCreateBtnClicked(false);
              addNewPlaylistService(playlistName, token, userDispatch);
            }}
          >
            Create
          </Button>
        </Box>
      )}
    </Dialog>
  );
}

export { PlaylistDialog };
